/* ==========================================================================
   script.js – FUNKTIONALITÄT
   --------------------------------------------------------------------------
   Reihenfolge der Skripte (am Ende jeder HTML-Seite):
     config.js (im <head>) → content.js → language.js → script.js

   Inhalt:
   1. Hilfsfunktionen
   2. Theme (Dark / Light)
   3. Header, Navigation, Footer
   4. Scroll-Reveal, Parallax, Seitenübergang
   5. Render-Funktionen je Seite (Inhalte kommen aus content.js)
   6. Overlay: Lightbox + Projekt-/Video-Details
   7. Start (init)
   ========================================================================== */

(function () {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const page = body.getAttribute('data-page') || 'home';
  const reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const FALLBACK_IMG = 'assets/projects/placeholder.svg';
  const PLAY = '▶︎';

  let instantReveal = false;   // true nach dem ersten Rendern (z. B. bei Sprachwechsel)
  let ovState = null;          // aktueller Overlay-Zustand


  /* ======================================================================
     1. HILFSFUNKTIONEN
     ====================================================================== */
  function $(sel, scope) { return (scope || document).querySelector(sel); }
  function $$(sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); }

  /* HTML-Sonderzeichen escapen */
  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* Inhalt (String oder {de,en}) → escaped Text der aktuellen Sprache */
  function tx(v) { return esc(tr(v)); }
  /* Absätze: Leerzeile = neuer <p> */
  function paragraphs(v) {
    return tr(v).split(/\n\s*\n/).filter(Boolean).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  }
  function safeUrl(u) { return /^\s*javascript:/i.test(u || '') ? '#' : (u || ''); }

  /* YouTube-ID aus URL (watch, youtu.be, embed, shorts, live) */
  function youtubeId(url) {
    if (!url) return '';
    const m = String(url).match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/))([\w-]{11})/);
    if (m) return m[1];
    return /^[\w-]{11}$/.test(url) ? url : '';
  }
  function isShort(item) { return item.type === 'short' || /\/shorts\//.test(item.youtube || ''); }
  function thumbSrc(item) {
    if (item.thumbnail) return item.thumbnail;
    /* Optional (config.js → youtubeThumbnails): Vorschaubild automatisch von YouTube holen */
    const id = youtubeId(item.youtube);
    if (id && siteConfig.youtubeThumbnails) return 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
    return FALLBACK_IMG;
  }
  function firstCat(item) { return [].concat(item.category || [])[0] || ''; }

  function catLabel(list, id) {
    const f = list.filter(function (c) { return String(c.id).toLowerCase() === String(id).toLowerCase(); })[0];
    return f ? tr(f.label) : id;
  }

  /* Filter-Logik: Kategorie, Tags oder Software */
  function matches(item, f) {
    if (!f || f.id === 'all') return true;
    const have = [].concat(item.category || []).concat(item.tags || []).map(function (x) { return String(x).toLowerCase(); });
    const names = [String(f.id).toLowerCase()];
    if (typeof f.label === 'string') names.push(f.label.toLowerCase());
    else if (f.label) Object.keys(f.label).forEach(function (k) { names.push(String(f.label[k]).toLowerCase()); });
    if (names.some(function (n) { return have.indexOf(n) > -1; })) return true;
    if (f.software && (item.software || []).some(function (s) { return String(s).toLowerCase().indexOf(f.software.toLowerCase()) > -1; })) return true;
    return false;
  }

  function setAttr(sel, attr, value) {
    const el = $(sel);
    if (el && value) el.setAttribute(attr, value);
  }

  /* Fehlende Bilder durch Platzhalter ersetzen (verhindert kaputtes Layout) */
  document.addEventListener('error', function (e) {
    const el = e.target;
    if (el && el.tagName === 'IMG' && !el.getAttribute('data-fallback')) {
      el.setAttribute('data-fallback', '1');
      el.src = FALLBACK_IMG;
    }
  }, true);


  /* ======================================================================
     2. THEME (DARK / LIGHT)
     ====================================================================== */
  let appliedVars = [];

  function currentTheme() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }

  /* Farb-Überschreibungen aus config.js anwenden */
  function applyColorOverrides(theme) {
    appliedVars.forEach(function (k) { root.style.removeProperty(k); });
    appliedVars = [];
    const set = (siteConfig.colors || {})[theme] || {};
    Object.keys(set).forEach(function (k) { root.style.setProperty(k, set[k]); appliedVars.push(k); });
  }

  function setTheme(theme, save) {
    root.setAttribute('data-theme', theme);
    applyColorOverrides(theme);
    if (save) {
      try { localStorage.setItem(storageKey('theme'), theme); } catch (e) { /* ignorieren */ }
    }
    updateThemeButton();
  }

  function updateThemeButton() {
    const btn = $('.theme-toggle');
    if (!btn) return;
    const icon = btn.querySelector('span');
    /* Zeigt das Symbol des Modus, zu dem gewechselt wird */
    if (icon) icon.textContent = currentTheme() === 'dark' ? '☀︎' : '☾︎';
    btn.setAttribute('title', t('themeToggle'));
  }


  /* ======================================================================
     3. HEADER, NAVIGATION, FOOTER
     ====================================================================== */
  const NAV = [
    { id: 'home',      href: 'index.html',     key: 'navHome' },
    { id: 'about',     href: 'about.html',     key: 'navAbout' },
    { id: 'portfolio', href: 'portfolio.html', key: 'navPortfolio' },
    { id: 'videos',    href: 'videos.html',    key: 'navVideos' },
    { id: 'graphics',  href: 'graphics.html',  key: 'navGraphics' },
    { id: 'channels',  href: 'channels.html',  key: 'navChannels' },
    { id: 'contact',   href: 'contact.html',   key: 'navContact' }
  ];

  function logoHTML() {
    if (siteConfig.logoImage) {
      return '<img class="logo-img" src="' + esc(siteConfig.logoImage) + '" alt="' + esc(siteConfig.creatorName) + '">';
    }
    return '<span>' + esc(siteConfig.logoText || siteConfig.creatorName) + '</span>';
  }

  function renderChrome() {
    const header = $('#site-header');
    const footer = $('#site-footer');

    const navItems = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : '') + ' data-i18n="' + n.key + '"></a></li>';
    }).join('');

    const langButtons = Object.keys(translations).map(function (l) {
      return '<button type="button" data-lang="' + l + '" lang="' + l + '" aria-pressed="false">' + l.toUpperCase() + '</button>';
    }).join('<span class="sep" aria-hidden="true">|</span>');

    if (header) {
      header.innerHTML =
        '<div class="site-header">' +
          '<a class="skip-link" href="#main" data-i18n="skipLink"></a>' +
          '<div class="container header-inner">' +
            '<a class="logo" href="index.html" aria-label="' + esc(siteConfig.creatorName) + '">' + logoHTML() + '</a>' +
            '<nav id="main-nav" class="main-nav" data-i18n-aria="mainNavLabel"><ul>' + navItems + '</ul></nav>' +
            '<div class="header-tools">' +
              '<div class="lang-switch" role="group" data-i18n-aria="languageLabel">' + langButtons + '</div>' +
              '<button type="button" class="icon-btn theme-toggle" data-i18n-aria="themeToggle"><span aria-hidden="true"></span></button>' +
              '<button type="button" class="icon-btn nav-toggle" aria-expanded="false" aria-controls="main-nav" data-i18n-aria="menuOpen"><span class="bars" aria-hidden="true"></span></button>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    if (footer) {
      const social = (siteConfig.social || []).map(function (s) {
        return '<li><a href="' + esc(safeUrl(s.url)) + '" target="_blank" rel="noopener noreferrer">' + esc(s.platform) + ' <span>' + esc(s.label) + '</span></a></li>';
      }).join('');
      footer.innerHTML =
        '<footer class="site-footer"><div class="container">' +
          '<div class="footer-top">' +
            '<div class="footer-brand"><a class="logo" href="index.html" aria-label="' + esc(siteConfig.creatorName) + '">' + logoHTML() + '</a><p data-i18n="footerTagline"></p></div>' +
            '<nav data-i18n-aria="footerNavLabel"><h2 class="footer-title" data-i18n="footerNavTitle"></h2><ul class="footer-list">' +
              '<li><a href="portfolio.html" data-i18n="navPortfolio"></a></li>' +
              '<li><a href="contact.html" data-i18n="navContact"></a></li>' +
            '</ul></nav>' +
            '<div><h2 class="footer-title" data-i18n="footerSocialTitle"></h2><ul class="footer-list">' + social + '</ul></div>' +
            '<div><h2 class="footer-title" data-i18n="footerLegalTitle"></h2><ul class="footer-list">' +
              '<li><a href="impressum.html" data-i18n="navImpressum"></a></li>' +
              '<li><a href="datenschutz.html" data-i18n="navPrivacy"></a></li>' +
            '</ul></div>' +
          '</div>' +
          '<p class="footer-copy">' + esc(siteConfig.copyright) + '</p>' +
        '</div></footer>';
    }
  }

  function setMenu(open) {
    const toggle = $('.nav-toggle');
    body.classList.toggle('nav-open', open);
    body.classList.toggle('no-scroll', open || !!ovState);
    if (toggle) {
      const key = open ? 'menuClose' : 'menuOpen';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('data-i18n-aria', key);
      toggle.setAttribute('aria-label', t(key));
    }
  }

  function updateLangButtons() {
    $$('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === currentLang));
    });
  }

  function bindChrome() {
    const themeBtn = $('.theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', function () { setTheme(currentTheme() === 'dark' ? 'light' : 'dark', true); });

    $$('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setLanguage(b.getAttribute('data-lang'), true); });
    });

    const toggle = $('.nav-toggle');
    if (toggle) toggle.addEventListener('click', function () { setMenu(!body.classList.contains('nav-open')); });
    $$('.main-nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    window.addEventListener('resize', function () { if (window.innerWidth > 960 && body.classList.contains('nav-open')) setMenu(false); });

    /* Header-Rahmen beim Scrollen */
    const bar = $('.site-header');
    function onScroll() { if (bar) bar.classList.toggle('is-scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Werte aus config.js in Elemente schreiben */
  function fillConfig() {
    $$('[data-config]').forEach(function (el) { el.textContent = siteConfig[el.getAttribute('data-config')] || ''; });
    $$('[data-mailto]').forEach(function (a) { a.setAttribute('href', 'mailto:' + siteConfig.email); });
    $$('[data-email-text]').forEach(function (el) { el.textContent = siteConfig.email; });
  }

  /* canonical / Open Graph aus config.js (ergänzt die statischen Meta-Tags) */
  function applySeoFromConfig() {
    const site = String(siteConfig.website || '').replace(/\/+$/, '');
    if (!site) return;
    const file = location.pathname.split('/').pop() || 'index.html';
    const pageUrl = site + (file === 'index.html' ? '/' : '/' + file);
    const seo = siteConfig.seo || {};
    const img = seo.ogImage ? site + '/' + String(seo.ogImage).replace(/^\/+/, '') : '';
    setAttr('link[rel="canonical"]', 'href', pageUrl);
    setAttr('meta[property="og:url"]', 'content', pageUrl);
    setAttr('meta[property="og:image"]', 'content', img);
    setAttr('meta[name="twitter:image"]', 'content', img);
    setAttr('meta[property="og:site_name"]', 'content', seo.siteName);
    setAttr('meta[name="twitter:site"]', 'content', seo.twitterHandle);
  }


  /* ======================================================================
     4. SCROLL-REVEAL, PARALLAX, SEITENÜBERGANG
     ====================================================================== */
  let io = null;

  function observeReveals(scope, instant) {
    const els = $$('.reveal:not(.is-visible)', scope || document);
    if (!els.length) return;
    const now = instant === undefined ? instantReveal : instant;
    if (now || reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    }
    els.forEach(function (el) { io.observe(el); });
  }

  function initParallax() {
    const bg = $('.hero-bg');
    if (!bg || reduceMotion) return;
    let ticking = false;
    function update() {
      if (window.scrollY < window.innerHeight * 1.2) bg.style.setProperty('--parallax', (window.scrollY * 0.18).toFixed(1) + 'px');
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
  }

  function initHero() {
    const bg = $('.hero-bg');
    if (bg && siteConfig.heroImage) bg.style.backgroundImage = 'url("' + encodeURI(siteConfig.heroImage) + '")';
  }

  /* Sanfter Seitenübergang beim Klick auf interne Links */
  function initPageTransitions() {
    window.addEventListener('pageshow', function () { body.classList.remove('page-leave'); });
    if (reduceMotion) return;
    document.addEventListener('click', function (e) {
      const a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(href) || /^(https?:)?\/\//i.test(href)) return;
      const samePage = a.pathname === location.pathname && a.hash;
      if (samePage) return;
      e.preventDefault();
      body.classList.add('page-leave');
      setTimeout(function () { location.href = a.href; }, 220);
    });
  }


  /* ======================================================================
     5. RENDER-FUNKTIONEN JE SEITE
     ====================================================================== */

  /* Karte für Projekt oder Video */
  function cardHTML(item, idx, kind, n, opts) {
    const meta = [catLabel(portfolioCategories, firstCat(item)), item.year].filter(Boolean).join(' · ');
    const playable = !!(item.youtube || item.video);
    const short = opts && opts.short;
    return '<article class="card reveal' + (short ? ' card-short' : '') + '" style="--d:' + ((n % 6) * 70) + 'ms">' +
      '<button type="button" class="card-btn" data-open="' + kind + '" data-index="' + idx + '" aria-haspopup="dialog">' +
        '<span class="card-media"><img src="' + esc(thumbSrc(item)) + '" alt="' + esc(tr(item.alt || item.title)) + '" loading="lazy" decoding="async">' +
        (playable ? '<span class="play-badge" aria-hidden="true">' + PLAY + '</span>' : '') + '</span>' +
        '<span class="card-body"><span class="card-meta">' + esc(meta) + '</span>' +
        '<span class="card-title">' + tx(item.title) + '</span>' +
        '<span class="card-desc">' + tx(item.description) + '</span></span>' +
      '</button></article>';
  }

  /* Filterleiste (Chips). onChange(true) wird beim Klick aufgerufen. */
  function filterBar(el, list, state, onChange) {
    if (!el) return;
    el.innerHTML = list.map(function (c) {
      return '<button type="button" class="chip" data-filter="' + esc(c.id) + '" aria-pressed="' + (c.id === state.active) + '">' + tx(c.label) + '</button>';
    }).join('');
    el.onclick = function (e) {
      const b = e.target.closest('[data-filter]');
      if (!b) return;
      state.active = b.getAttribute('data-filter');
      $$('[data-filter]', el).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      onChange(true);
    };
  }

  /* ----- Startseite ----- */
  function renderHome() {
    const st = $('#stats-list');
    if (st) {
      st.innerHTML = stats.map(function (s, i) {
        return '<div class="reveal" style="--d:' + (i * 70) + 'ms"><span class="stat-value">' + esc(s.value) + '</span><span class="stat-label">' + tx(s.label) + '</span></div>';
      }).join('');
      observeReveals(st);
    }
    const grid = $('#featured-grid');
    if (grid) {
      const featured = projects.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return o.p.featured; });
      grid.innerHTML = featured.length
        ? featured.map(function (o, n) { return cardHTML(o.p, o.i, 'project', n); }).join('')
        : '<p class="empty-note">' + esc(t('homeFeaturedEmpty')) + '</p>';
      observeReveals(grid);
    }
  }

  /* ----- Über mich ----- */
  function renderAbout() {
    const bioEl = $('#bio');
    if (bioEl) bioEl.innerHTML = bio.map(function (p) { return '<p>' + tx(p) + '</p>'; }).join('');

    const factsEl = $('#facts');
    if (factsEl) factsEl.innerHTML = facts.map(function (f) { return '<div><dt>' + tx(f.label) + '</dt><dd>' + tx(f.value) + '</dd></div>'; }).join('');

    const skills = $('#skills');
    if (skills) {
      skills.innerHTML = skillCategories.map(function (c, i) {
        return '<article class="skill-card reveal" style="--d:' + (i * 70) + 'ms"><h3>' + tx(c.title) + '</h3><ul>' +
          c.items.map(function (it) { return '<li>' + tx(it) + '</li>'; }).join('') + '</ul></article>';
      }).join('');
    }

    const sw = $('#software-list');
    if (sw) {
      sw.innerHTML = software.map(function (s, i) {
        const initials = String(s.name).replace(/^Adobe\s+/i, '').split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 3).toUpperCase();
        const icon = s.icon ? '<img src="' + esc(s.icon) + '" alt="" loading="lazy">' : esc(initials);
        const lvlName = tr(levels[Math.max(0, Math.min(4, (s.level || 1) - 1))]);
        const pips = [1, 2, 3, 4, 5].map(function (n) { return '<i class="' + (n <= s.level ? 'on' : '') + '"></i>'; }).join('');
        return '<article class="software-card reveal" style="--d:' + ((i % 4) * 70) + 'ms">' +
          '<div class="software-top"><span class="software-icon" aria-hidden="true">' + icon + '</span>' +
          '<div><div class="software-name">' + esc(s.name) + '</div><div class="software-cat">' + tx(s.category) + '</div></div></div>' +
          '<p class="software-desc">' + tx(s.description) + '</p>' +
          '<div class="level"><span class="pips" role="img" aria-label="' + esc(t('levelLabel') + ': ' + lvlName) + '">' + pips + '</span><span>' + esc(t('levelLabel')) + ': ' + esc(lvlName) + '</span></div>' +
          '</article>';
      }).join('');
    }

    const lang = $('#languages-list');
    if (lang) lang.innerHTML = languages.map(function (l) { return '<li><span>' + tx(l.name) + '</span><span>' + tx(l.level) + '</span></li>'; }).join('');

    const int = $('#interests-list');
    if (int) int.innerHTML = interests.map(function (x) { return '<li class="tag">' + tx(x) + '</li>'; }).join('');

    const tl = $('#timeline');
    if (tl) {
      tl.innerHTML = timeline.map(function (e, i) {
        return '<li class="tl-item reveal" style="--d:' + ((i % 3) * 60) + 'ms"><div class="tl-year">' + esc(e.year) + '</div><div class="tl-title">' + tx(e.title) + '</div><p class="tl-text">' + tx(e.text) + '</p></li>';
      }).join('');
    }
    observeReveals(document);
  }

  /* ----- Portfolio ----- */
  const pfState = { active: 'all' };

  function drawPortfolio(fromFilter) {
    const grid = $('#project-grid');
    if (!grid) return;
    const f = portfolioCategories.filter(function (c) { return c.id === pfState.active; })[0] || portfolioCategories[0];
    const list = projects.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) { return matches(o.p, f); });
    grid.innerHTML = list.length
      ? list.map(function (o, n) { return cardHTML(o.p, o.i, 'project', n); }).join('')
      : '<p class="empty-note">' + esc(t('portfolioEmpty')) + '</p>';
    observeReveals(grid, fromFilter ? false : undefined);
  }

  function renderPortfolio() {
    const hash = decodeURIComponent((location.hash || '').replace('#', ''));
    if (hash && pfState.active === 'all' && portfolioCategories.some(function (c) { return c.id === hash; })) pfState.active = hash;
    filterBar($('#filters'), portfolioCategories, pfState, drawPortfolio);
    drawPortfolio();
  }

  /* ----- Videos ----- */
  function renderVideos() {
    const lg = $('#video-grid');
    const sg = $('#shorts-grid');
    const longSec = $('#videos-section');
    const shortSec = $('#shorts-section');
    const long = [];
    const shorts = [];
    videos.forEach(function (v, i) { (isShort(v) ? shorts : long).push({ v: v, i: i }); });

    if (!videos.length) {
      if (lg) lg.innerHTML = '<p class="empty-note">' + esc(t('videosEmpty')) + '</p>';
      if (shortSec) shortSec.hidden = true;
      return;
    }
    if (longSec) longSec.hidden = !long.length;
    if (shortSec) shortSec.hidden = !shorts.length;
    if (lg) lg.innerHTML = long.map(function (o, n) { return cardHTML(o.v, o.i, 'video', n); }).join('');
    if (sg) sg.innerHTML = shorts.map(function (o, n) { return cardHTML(o.v, o.i, 'video', n, { short: true }); }).join('');
    observeReveals(document);
  }

  /* ----- Grafik-Galerie ----- */
  const gState = { active: 'all' };
  let galleryList = [];

  function drawGallery(fromFilter) {
    const grid = $('#gallery');
    if (!grid) return;
    const f = graphicCategories.filter(function (c) { return c.id === gState.active; })[0] || graphicCategories[0];
    galleryList = graphics.filter(function (g) { return matches(g, f); });
    grid.innerHTML = galleryList.length
      ? galleryList.map(function (g, i) {
          return '<figure class="gallery-item reveal" style="--d:' + ((i % 5) * 60) + 'ms"><button type="button" class="gallery-btn" data-lightbox="' + i + '" aria-haspopup="dialog">' +
            '<img src="' + esc(g.src) + '" alt="' + esc(tr(g.alt || g.title)) + '" loading="lazy" decoding="async">' +
            '<span class="gallery-caption">' + tx(g.title) + '</span></button></figure>';
        }).join('')
      : '<p class="empty-note">' + esc(t('graphicsEmpty')) + '</p>';
    observeReveals(grid, fromFilter ? false : undefined);
  }

  function renderGraphics() {
    filterBar($('#filters'), graphicCategories, gState, drawGallery);
    drawGallery();
  }

  /* ----- Kanäle ----- */
  function renderChannels() {
    const grid = $('#channel-grid');
    if (!grid) return;
    grid.innerHTML = channels.map(function (c, i) {
      return '<article class="channel reveal" style="--d:' + ((i % 4) * 70) + 'ms">' +
        '<span class="channel-platform">' + esc(c.platform) + '</span>' +
        '<h3>' + esc(c.username) + '</h3>' +
        '<p>' + tx(c.description) + '</p>' +
        (c.followers ? '<p class="channel-followers"><strong>' + esc(c.followers) + '</strong> ' + esc(t('channelFollowers')) + '</p>' : '') +
        '<a class="btn btn-ghost" href="' + esc(safeUrl(c.url)) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(t('channelVisit')) + '</span><span class="arrow" aria-hidden="true">↗</span></a>' +
        '</article>';
    }).join('');
    observeReveals(grid);
  }

  /* ----- Kontakt ----- */
  function renderContact() {
    const list = $('#social-list');
    if (list) {
      list.innerHTML = (siteConfig.social || []).map(function (s) {
        return '<li><a href="' + esc(safeUrl(s.url)) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(s.platform) + '</span><span>' + esc(s.label) + '</span></a></li>';
      }).join('');
    }
    const form = $('#contact-form');
    if (form && !form.getAttribute('data-bound')) {
      form.setAttribute('data-bound', '1');
      /* Kein Backend: Das Formular öffnet das E-Mail-Programm (mailto:) */
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const subject = String(data.get('subject') || '').trim() || t('formSubjectDefault');
        const text = String(data.get('message') || '') + '\n\n— ' + String(data.get('name') || '') + ' (' + String(data.get('email') || '') + ')';
        window.location.href = 'mailto:' + siteConfig.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text);
      });
    }
  }

  /* ----- Impressum ----- */
  function renderImpressum() {
    const el = $('#legal-list');
    if (!el) return;
    const d = siteConfig.impressum || {};
    const rows = [['impName', d.name], ['impAddress', d.address], ['impEmail', d.email], ['impPhone', d.phone],
                  ['impVat', d.vatId], ['impResponsible', d.responsible], ['impMore', d.more]].filter(function (r) { return r[1]; });
    el.innerHTML = rows.map(function (r) {
      return '<div><dt>' + esc(t(r[0])) + '</dt><dd>' + esc(r[1]).replace(/\n/g, '<br>') + '</dd></div>';
    }).join('');
  }

  /* ----- Datenschutz ----- */
  function renderPrivacy() {
    const el = $('#privacy-content');
    if (!el) return;
    let html = privacySections.map(function (s) { return '<h2>' + tx(s.title) + '</h2>' + paragraphs(s.text); }).join('');
    /* Hinweis nur, wenn config.js → youtubeThumbnails = true */
    if (siteConfig.youtubeThumbnails) html += '<h2>' + esc(t('privacyThumbTitle')) + '</h2><p>' + esc(t('privacyThumbText')) + '</p>';
    el.innerHTML = html;
  }

  const renderers = {
    home: renderHome, about: renderAbout, portfolio: renderPortfolio, videos: renderVideos,
    graphics: renderGraphics, channels: renderChannels, contact: renderContact,
    impressum: renderImpressum, datenschutz: renderPrivacy
  };


  /* ======================================================================
     6. OVERLAY: LIGHTBOX + DETAIL-ANSICHT
     ====================================================================== */
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'ov-title');
  overlay.innerHTML = '<div class="overlay-backdrop" data-close></div><div class="overlay-panel" tabindex="-1"></div><div class="ov-ui"></div>';
  body.appendChild(overlay);

  const panel = $('.overlay-panel', overlay);
  const ui = $('.ov-ui', overlay);
  let lastFocus = null;
  let closeTimer = null;

  function uiHTML() {
    let html = '<button type="button" class="ov-close" data-close data-i18n-aria="closeLabel" aria-label="' + esc(t('closeLabel')) + '">×</button>';
    if (ovState && ovState.mode === 'lightbox' && ovState.items.length > 1) {
      html += '<button type="button" class="ov-prev" data-nav="-1" data-i18n-aria="prevLabel" aria-label="' + esc(t('prevLabel')) + '">‹</button>' +
              '<button type="button" class="ov-next" data-nav="1" data-i18n-aria="nextLabel" aria-label="' + esc(t('nextLabel')) + '">›</button>';
    }
    return html;
  }

  function lightboxHTML() {
    const it = ovState.items[ovState.index];
    return '<figure class="lb-figure"><img src="' + esc(it.src) + '" alt="' + esc(tr(it.alt || it.title)) + '">' +
      '<figcaption><h3 id="ov-title">' + tx(it.title) + '</h3>' + (tr(it.description) ? '<p>' + tx(it.description) + '</p>' : '') +
      '<span class="lb-count">' + esc(t('lightboxImage')) + ' ' + (ovState.index + 1) + ' / ' + ovState.items.length + '</span></figcaption></figure>';
  }

  function detailHTML(item) {
    const yt = youtubeId(item.youtube);
    const short = isShort(item);
    const thumb = thumbSrc(item);
    const cats = [].concat(item.category || []).map(function (c) { return catLabel(portfolioCategories, c); }).join(', ');
    let media;

    if (yt) {
      media = '<div class="player' + (short ? ' ratio-short' : '') + '" data-yt="' + esc(yt) + '">' +
        '<button type="button" class="player-start" data-load-yt aria-label="' + esc(t('detailPlay')) + '"><img src="' + esc(thumb) + '" alt="">' +
        '<span class="play-badge play-badge-lg" aria-hidden="true">' + PLAY + '</span></button></div>' +
        '<p class="player-note">' + esc(t('detailPrivacy')) + '</p>';
    } else if (item.video) {
      media = '<div class="player"><video controls preload="metadata" poster="' + esc(thumb) + '" src="' + esc(item.video) + '"></video></div>';
    } else {
      media = '<div class="player"><img src="' + esc(thumb) + '" alt="' + esc(tr(item.alt || item.title)) + '"></div>';
    }

    const rows = [];
    if (cats) rows.push(['detailCategory', esc(cats)]);
    if (item.year) rows.push(['detailYear', esc(item.year)]);
    if (tr(item.role)) rows.push(['detailRole', tx(item.role)]);
    if (tr(item.client)) rows.push(['detailClient', tx(item.client)]);
    if (item.software && item.software.length) rows.push(['detailSoftware', esc(item.software.join(', '))]);
    if (item.tags && item.tags.length) rows.push(['detailTags', esc(item.tags.join(', '))]);
    const meta = rows.map(function (r) { return '<div><dt>' + esc(t(r[0])) + '</dt><dd>' + r[1] + '</dd></div>'; }).join('');

    const links = [];
    if (item.youtube) {
      const href = /^https?:/i.test(item.youtube) ? item.youtube : (yt ? 'https://www.youtube.com/watch?v=' + yt : '');
      if (href) links.push('<a class="btn btn-primary" href="' + esc(safeUrl(href)) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(t('detailWatch')) + '</span><span class="arrow" aria-hidden="true">↗</span></a>');
    }
    if (item.url) links.push('<a class="btn btn-ghost" href="' + esc(safeUrl(item.url)) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(t('detailExternal')) + '</span><span class="arrow" aria-hidden="true">↗</span></a>');

    const caseStudy = tr(item.caseStudy) ? '<h3>' + esc(t('detailCaseStudy')) + '</h3>' + paragraphs(item.caseStudy) : '';

    const imgs = (item.images || []).map(function (im) {
      const src = typeof im === 'string' ? im : im.src;
      const alt = typeof im === 'string' ? tr(item.title) : tr(im.alt || item.title);
      return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async">';
    }).join('');
    const gallery = imgs ? '<div class="detail-gallery"><h3>' + esc(t('detailGallery')) + '</h3>' + imgs + '</div>' : '';

    return '<article class="detail">' +
      '<div class="detail-media">' + media + '</div>' +
      '<div class="detail-info">' +
        '<p class="eyebrow">' + esc([cats, item.year].filter(Boolean).join(' · ')) + '</p>' +
        '<h2 id="ov-title">' + tx(item.title) + '</h2>' + paragraphs(item.description) +
        (meta ? '<dl class="meta">' + meta + '</dl>' : '') + caseStudy +
        (links.length ? '<div class="detail-links">' + links.join('') + '</div>' : '') +
      '</div>' + gallery + '</article>';
  }

  function renderPanel() {
    if (!ovState) return;
    panel.innerHTML = ovState.mode === 'lightbox' ? lightboxHTML() : detailHTML(ovState.item);
  }

  function openOverlay(state) {
    clearTimeout(closeTimer);
    ovState = state;
    lastFocus = document.activeElement;
    overlay.className = 'overlay mode-' + state.mode;
    ui.innerHTML = uiHTML();
    renderPanel();
    overlay.hidden = false;
    body.classList.add('no-scroll');
    window.requestAnimationFrame(function () {
      overlay.classList.add('is-open');
      const close = $('.ov-close', ui);
      if (close) close.focus();
    });
  }

  function closeOverlay() {
    if (!ovState) return;
    ovState = null;
    overlay.classList.remove('is-open');
    if (!body.classList.contains('nav-open')) body.classList.remove('no-scroll');
    function finish() { overlay.hidden = true; panel.innerHTML = ''; ui.innerHTML = ''; }
    if (reduceMotion) finish(); else closeTimer = setTimeout(finish, 240);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(dir) {
    if (!ovState || ovState.mode !== 'lightbox') return;
    const n = ovState.items.length;
    ovState.index = (ovState.index + dir + n) % n;
    renderPanel();
  }

  /* Klicks im Overlay: Schließen, Navigation, YouTube laden */
  overlay.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) { closeOverlay(); return; }
    const nav = e.target.closest('[data-nav]');
    if (nav) { step(parseInt(nav.getAttribute('data-nav'), 10)); return; }
    const load = e.target.closest('[data-load-yt]');
    if (load) {
      /* Datenschutz: YouTube wird erst jetzt (nach Klick) geladen */
      const player = load.closest('.player');
      const id = player.getAttribute('data-yt');
      player.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0" title="YouTube" ' +
        'allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      const note = $('.player-note', overlay);
      if (note) note.hidden = true;
    }
  });

  /* Klicks auf Karten / Galerie-Bilder */
  document.addEventListener('click', function (e) {
    const open = e.target.closest('[data-open]');
    if (open) {
      const kind = open.getAttribute('data-open');
      const item = (kind === 'video' ? videos : projects)[parseInt(open.getAttribute('data-index'), 10)];
      if (item) openOverlay({ mode: 'detail', item: item, kind: kind });
      return;
    }
    const lb = e.target.closest('[data-lightbox]');
    if (lb) openOverlay({ mode: 'lightbox', items: galleryList, index: parseInt(lb.getAttribute('data-lightbox'), 10) });
  });

  /* Tastatur: ESC, Pfeile, Fokus-Falle */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (ovState) { closeOverlay(); return; }
      if (body.classList.contains('nav-open')) { setMenu(false); const tg = $('.nav-toggle'); if (tg) tg.focus(); }
      return;
    }
    if (!ovState) return;
    if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'Tab') {
      const f = $$('button, a[href], video[controls], iframe', overlay).filter(function (el) { return !el.hidden && el.offsetParent !== null; });
      if (!f.length) { e.preventDefault(); return; }
      const first = f[0];
      const last = f[f.length - 1];
      if (!overlay.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Wischen auf Touch-Geräten */
  let touchX = null;
  overlay.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }, { passive: true });


  /* ======================================================================
     7. START
     ====================================================================== */
  function init() {
    applyColorOverrides(currentTheme());
    renderChrome();
    bindChrome();
    updateThemeButton();
    initHero();
    initPageTransitions();
    applySeoFromConfig();

    /* Bei jedem Sprachwechsel: Buttons, Inhalte und Overlay aktualisieren */
    languageListeners.push(updateLangButtons);
    languageListeners.push(function () {
      fillConfig();
      if (renderers[page]) renderers[page]();
      updateThemeButton();
      setMenu(body.classList.contains('nav-open'));
      if (ovState) {
        ui.innerHTML = uiHTML();
        if (ovState.mode === 'lightbox' || !$('iframe, video', panel)) renderPanel();
      }
    });

    initLanguage();            // rendert die Seite in der gewählten Sprache
    observeReveals(document);  // statische Elemente einblenden
    initParallax();
    instantReveal = true;      // ab jetzt (z. B. Sprachwechsel) ohne Verzögerung einblenden
  }

  init();
})();
