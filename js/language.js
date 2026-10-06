/* ==========================================================================
   language.js – SPRACHSYSTEM (DE / EN)
   --------------------------------------------------------------------------
   - Alle Oberflächen-Texte stehen in "translations".
   - HTML-Elemente nutzen Attribute:
       data-i18n="schlüssel"              -> Text
       data-i18n-aria="schlüssel"         -> aria-label
       data-i18n-placeholder="schlüssel"  -> placeholder
   - Neue Sprache: Block "fr: { ... }" ergänzen und einen Button in script.js
     (LANGUAGES) hinzufügen.
   - Inhalte aus content.js können { de: "...", en: "..." } sein (Funktion tr()).
   ========================================================================== */

const translations = {

  /* =============================== DEUTSCH =============================== */
  de: {
    /* Allgemein / Navigation */
    skipLink: "Zum Inhalt springen",
    mainNavLabel: "Hauptnavigation",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    themeToggle: "Farbmodus wechseln",
    languageLabel: "Sprache wählen",
    closeLabel: "Schließen",
    privacyThumbTitle: "YouTube-Vorschaubilder",
    privacyThumbText: "Auf dieser Website werden Vorschaubilder von Videos direkt von YouTube (Google Ireland Limited) geladen. Dabei wird schon beim Aufruf der Seite eine Verbindung zu YouTube-Servern hergestellt und z. B. deine IP-Adresse übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden Darstellung). Mehr Informationen: https://policies.google.com/privacy",
    prevLabel: "Vorheriges Bild",
    nextLabel: "Nächstes Bild",
    navHome: "Startseite",
    navAbout: "Über mich",
    navPortfolio: "Portfolio",
    navVideos: "Videos",
    navGraphics: "Grafiken",
    navChannels: "Kanäle",
    navContact: "Kontakt",
    navImpressum: "Impressum",
    navPrivacy: "Datenschutz",
    noscriptText: "Für diese Website wird JavaScript benötigt. Bitte aktiviere JavaScript in deinem Browser.",

    /* Footer */
    footerTagline: "Video Editor · Graphic Designer · Motion Designer",
    footerNavLabel: "Footer-Navigation",
    footerNavTitle: "Navigation",
    footerSocialTitle: "Social Media",
    footerLegalTitle: "Rechtliches",

    /* Hero */
    heroRole1: "Video Editor",
    heroRole2: "Graphic Designer",
    heroRole3: "Motion Designer",
    heroTagline: "Kreativer Schnitt, Design und digitales Storytelling.",
    heroBtnWork: "Meine Arbeiten ansehen",
    heroBtnContact: "Kontakt aufnehmen",
    heroScroll: "Scrollen",

    /* Startseite */
    homeStatsLabel: "Zahlen und Fakten",
    homeFeaturedEyebrow: "Auswahl",
    homeFeaturedTitle: "Ausgewählte Projekte",
    homeFeaturedAll: "Alle Projekte",
    homeFeaturedEmpty: "Noch keine hervorgehobenen Projekte. Setze in content.js bei einem Projekt featured: true.",
    homeAboutEyebrow: "Über mich",
    homeAboutTitle: "Wer ist Mucci?",
    homeAboutText: "Video Editing, Grafikdesign und Motion Design – seit rund neun Jahren mit Leidenschaft für Details, Rhythmus und starke Bilder.",
    homeAboutLink: "Mehr über mich",
    homeCtaTitle: "Lass uns etwas Starkes bauen.",
    homeCtaText: "Für Freelance-Projekte, Kooperationen oder Bewerbungen: Schreib mir einfach eine E-Mail.",
    homeCtaBtn: "E-Mail schreiben",

    /* Über mich */
    aboutEyebrow: "Über mich",
    aboutTitle: "Hinter dem Namen Mucci",
    aboutFactsTitle: "Auf einen Blick",
    aboutSkillsTitle: "Skills",
    aboutSoftwareTitle: "Software",
    aboutLanguagesTitle: "Sprachen",
    aboutInterestsTitle: "Interessen",
    aboutTimelineTitle: "Werdegang",
    levelLabel: "Erfahrung",

    /* Portfolio */
    portfolioEyebrow: "Arbeiten",
    portfolioTitle: "Portfolio",
    portfolioIntro: "Eine Auswahl meiner Arbeiten aus Video Editing, Grafikdesign, Motion Design und 3D.",
    filterLabel: "Projekte filtern",
    portfolioEmpty: "In dieser Kategorie gibt es noch keine Projekte.",

    /* Videos */
    videosEyebrow: "Bewegtbild",
    videosTitle: "Videos",
    videosIntro: "YouTube-Videos, Shorts und weitere Schnittarbeiten.",
    videosSectionLong: "Videos",
    videosSectionShorts: "Shorts",
    videosEmpty: "Noch keine Videos vorhanden.",

    /* Grafiken */
    graphicsEyebrow: "Galerie",
    graphicsTitle: "Graphic Design",
    graphicsIntro: "Thumbnails, Photoshop-Arbeiten, Poster, Social-Media-Designs, Compositing, 3D und Artwork.",
    graphicsFilterLabel: "Galerie filtern",
    graphicsEmpty: "In dieser Kategorie gibt es noch keine Bilder.",
    lightboxImage: "Bild",

    /* Kanäle */
    channelsEyebrow: "Social",
    channelsTitle: "Kanäle",
    channelsIntro: "Hier findest du meine Kanäle und Social-Media-Profile.",
    channelVisit: "Kanal besuchen",
    channelFollowers: "Follower",

    /* Kontakt */
    contactEyebrow: "Kontakt",
    contactTitle: "Lass uns reden",
    contactIntro: "Für Freelance-Anfragen, Kooperationen und Bewerbungen erreichst du mich am schnellsten per E-Mail.",
    contactEmailTitle: "Business-E-Mail",
    contactEmailBtn: "E-Mail schreiben",
    contactSocialTitle: "Social Media",
    formTitle: "Nachricht vorbereiten",
    formNote: "Dieses Formular öffnet dein E-Mail-Programm mit einer vorbereiteten Nachricht. Es wird nichts automatisch gesendet – abgeschickt wird erst, wenn du in deinem E-Mail-Programm auf „Senden“ klickst.",
    formName: "Name",
    formEmail: "Deine E-Mail",
    formSubject: "Betreff",
    formMessage: "Nachricht",
    formSubmit: "E-Mail-Programm öffnen",
    formSubjectDefault: "Anfrage über die Portfolio-Website",

    /* Projekt-/Video-Details */
    detailCategory: "Kategorie",
    detailYear: "Jahr",
    detailRole: "Rolle",
    detailSoftware: "Software",
    detailClient: "Kunde / Creator",
    detailTags: "Tags",
    detailCaseStudy: "Case Study",
    detailWatch: "Auf YouTube ansehen",
    detailExternal: "Externe Seite öffnen",
    detailGallery: "Weitere Bilder",
    detailPlay: "Video laden und abspielen",
    detailPrivacy: "Beim Abspielen wird eine Verbindung zu YouTube (Google) hergestellt. Vorher werden keine Daten übertragen.",
    detailOpen: "Details ansehen",

    /* Impressum / Datenschutz */
    impTitle: "Impressum",
    impIntro: "Angaben gemäß § 5 DDG",
    impName: "Name",
    impAddress: "Anschrift",
    impEmail: "E-Mail",
    impPhone: "Telefon",
    impVat: "Umsatzsteuer-ID",
    impResponsible: "Verantwortlich für den Inhalt",
    impMore: "Weitere Angaben",
    privTitle: "Datenschutzerklärung",
    privIntro: "Informationen zum Umgang mit personenbezogenen Daten auf dieser Website.",

    /* SEO: Seitentitel & Beschreibung */
    seo_home_title: "Mucci – Video Editor, Graphic & Motion Designer",
    seo_home_desc: "Portfolio von Mucci (Yannik Schmitt): Video Editing, Grafikdesign, Motion Design und Content Creation.",
    seo_about_title: "Über mich – Mucci",
    seo_about_desc: "Über Mucci (Yannik Schmitt): Video Editor, Grafikdesigner und Motion Designer mit rund neun Jahren YouTube-Erfahrung.",
    seo_portfolio_title: "Portfolio – Mucci",
    seo_portfolio_desc: "Ausgewählte Projekte aus Video Editing, Grafikdesign, Motion Design und 3D.",
    seo_videos_title: "Videos – Mucci",
    seo_videos_desc: "YouTube-Videos, Shorts und Schnittarbeiten von Mucci.",
    seo_graphics_title: "Graphic Design – Mucci",
    seo_graphics_desc: "Galerie mit Thumbnails, Photoshop-Arbeiten, Postern, Compositing, 3D und Artwork.",
    seo_channels_title: "Kanäle – Mucci",
    seo_channels_desc: "Die YouTube- und TikTok-Kanäle von Mucci im Überblick.",
    seo_contact_title: "Kontakt – Mucci",
    seo_contact_desc: "Kontakt für Freelance-Anfragen, Kooperationen und Bewerbungen.",
    seo_impressum_title: "Impressum – Mucci",
    seo_impressum_desc: "Impressum der Website von Mucci.",
    seo_datenschutz_title: "Datenschutz – Mucci",
    seo_datenschutz_desc: "Datenschutzerklärung der Website von Mucci."
  },

  /* =============================== ENGLISH =============================== */
  en: {
    /* General / navigation */
    skipLink: "Skip to content",
    mainNavLabel: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeToggle: "Toggle color mode",
    languageLabel: "Choose language",
    closeLabel: "Close",
    privacyThumbTitle: "YouTube thumbnails",
    privacyThumbText: "This website loads video preview images directly from YouTube (Google Ireland Limited). A connection to YouTube's servers is therefore established as soon as the page loads, and e.g. your IP address is transmitted. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in an appealing presentation). More information: https://policies.google.com/privacy",
    prevLabel: "Previous image",
    nextLabel: "Next image",
    navHome: "Home",
    navAbout: "About Me",
    navPortfolio: "Portfolio",
    navVideos: "Videos",
    navGraphics: "Graphics",
    navChannels: "Channels",
    navContact: "Contact",
    navImpressum: "Legal Notice",
    navPrivacy: "Privacy",
    noscriptText: "This website requires JavaScript. Please enable JavaScript in your browser.",

    /* Footer */
    footerTagline: "Video Editor · Graphic Designer · Motion Designer",
    footerNavLabel: "Footer navigation",
    footerNavTitle: "Navigation",
    footerSocialTitle: "Social Media",
    footerLegalTitle: "Legal",

    /* Hero */
    heroRole1: "Video Editor",
    heroRole2: "Graphic Designer",
    heroRole3: "Motion Designer",
    heroTagline: "Creative editing, design and digital storytelling.",
    heroBtnWork: "View my work",
    heroBtnContact: "Contact me",
    heroScroll: "Scroll",

    /* Home */
    homeStatsLabel: "Facts and figures",
    homeFeaturedEyebrow: "Selected",
    homeFeaturedTitle: "Featured projects",
    homeFeaturedAll: "All projects",
    homeFeaturedEmpty: "No featured projects yet. Set featured: true on a project in content.js.",
    homeAboutEyebrow: "About me",
    homeAboutTitle: "Who is Mucci?",
    homeAboutText: "Video editing, graphic design and motion design – for around nine years with a passion for detail, rhythm and strong visuals.",
    homeAboutLink: "More about me",
    homeCtaTitle: "Let's make something great.",
    homeCtaText: "For freelance projects, collaborations or applications: just send me an email.",
    homeCtaBtn: "Send email",

    /* About */
    aboutEyebrow: "About me",
    aboutTitle: "Behind the name Mucci",
    aboutFactsTitle: "At a glance",
    aboutSkillsTitle: "Skills",
    aboutSoftwareTitle: "Software",
    aboutLanguagesTitle: "Languages",
    aboutInterestsTitle: "Interests",
    aboutTimelineTitle: "Journey",
    levelLabel: "Experience",

    /* Portfolio */
    portfolioEyebrow: "Work",
    portfolioTitle: "Portfolio",
    portfolioIntro: "A selection of my work in video editing, graphic design, motion design and 3D.",
    filterLabel: "Filter projects",
    portfolioEmpty: "There are no projects in this category yet.",

    /* Videos */
    videosEyebrow: "Motion",
    videosTitle: "Videos",
    videosIntro: "YouTube videos, shorts and other editing work.",
    videosSectionLong: "Videos",
    videosSectionShorts: "Shorts",
    videosEmpty: "No videos yet.",

    /* Graphics */
    graphicsEyebrow: "Gallery",
    graphicsTitle: "Graphic Design",
    graphicsIntro: "Thumbnails, Photoshop work, posters, social media designs, compositing, 3D and artwork.",
    graphicsFilterLabel: "Filter gallery",
    graphicsEmpty: "There are no images in this category yet.",
    lightboxImage: "Image",

    /* Channels */
    channelsEyebrow: "Social",
    channelsTitle: "Channels",
    channelsIntro: "Find my channels and social media profiles here.",
    channelVisit: "Visit channel",
    channelFollowers: "Followers",

    /* Contact */
    contactEyebrow: "Contact",
    contactTitle: "Let's talk",
    contactIntro: "For freelance inquiries, collaborations and applications, email is the fastest way to reach me.",
    contactEmailTitle: "Business email",
    contactEmailBtn: "Send email",
    contactSocialTitle: "Social Media",
    formTitle: "Prepare a message",
    formNote: "This form opens your email app with a prepared message. Nothing is sent automatically – it is only sent once you click “Send” in your email app.",
    formName: "Name",
    formEmail: "Your email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Open email app",
    formSubjectDefault: "Inquiry via portfolio website",

    /* Project / video details */
    detailCategory: "Category",
    detailYear: "Year",
    detailRole: "Role",
    detailSoftware: "Software",
    detailClient: "Client / Creator",
    detailTags: "Tags",
    detailCaseStudy: "Case study",
    detailWatch: "Watch on YouTube",
    detailExternal: "Open external page",
    detailGallery: "More images",
    detailPlay: "Load and play video",
    detailPrivacy: "Playing the video connects to YouTube (Google). No data is transmitted before that.",
    detailOpen: "View details",

    /* Legal notice / privacy */
    impTitle: "Legal Notice",
    impIntro: "Information pursuant to § 5 DDG (Germany)",
    impName: "Name",
    impAddress: "Address",
    impEmail: "Email",
    impPhone: "Phone",
    impVat: "VAT ID",
    impResponsible: "Responsible for content",
    impMore: "Additional information",
    privTitle: "Privacy Policy",
    privIntro: "Information on how personal data is handled on this website.",

    /* SEO */
    seo_home_title: "Mucci – Video Editor, Graphic & Motion Designer",
    seo_home_desc: "Portfolio of Mucci (Yannik Schmitt): video editing, graphic design, motion design and content creation.",
    seo_about_title: "About Me – Mucci",
    seo_about_desc: "About Mucci (Yannik Schmitt): video editor, graphic designer and motion designer with around nine years of YouTube experience.",
    seo_portfolio_title: "Portfolio – Mucci",
    seo_portfolio_desc: "Selected projects in video editing, graphic design, motion design and 3D.",
    seo_videos_title: "Videos – Mucci",
    seo_videos_desc: "YouTube videos, shorts and editing work by Mucci.",
    seo_graphics_title: "Graphic Design – Mucci",
    seo_graphics_desc: "Gallery of thumbnails, Photoshop work, posters, compositing, 3D and artwork.",
    seo_channels_title: "Channels – Mucci",
    seo_channels_desc: "An overview of Mucci's YouTube and TikTok channels.",
    seo_contact_title: "Contact – Mucci",
    seo_contact_desc: "Contact for freelance inquiries, collaborations and applications.",
    seo_impressum_title: "Legal Notice – Mucci",
    seo_impressum_desc: "Legal notice of Mucci's website.",
    seo_datenschutz_title: "Privacy – Mucci",
    seo_datenschutz_desc: "Privacy policy of Mucci's website."
  }
};


/* ==========================================================================
   SPRACH-LOGIK (normalerweise nichts zu ändern)
   ========================================================================== */

let currentLang = "de";
const languageListeners = [];     // Funktionen, die nach Sprachwechsel neu rendern

function storageKey(name) {
  return (siteConfig.storagePrefix || "mucci") + "-" + name;
}

/* Übersetzt einen Schlüssel aus "translations" (Fallback: Deutsch, dann Schlüssel) */
function t(key) {
  const dict = translations[currentLang] || {};
  if (key in dict) return dict[key];
  const fallback = translations.de || {};
  return key in fallback ? fallback[key] : key;
}

/* Wählt aus einem Inhalt ({de,en} oder String) den Text der aktuellen Sprache */
function tr(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") {
    if (currentLang in value) return value[currentLang];
    if ("de" in value) return value.de;
    const first = Object.keys(value)[0];
    return first ? value[first] : "";
  }
  return String(value);
}

/* Wendet data-i18n-Attribute im Dokument (oder in einem Teilbaum) an */
function applyTranslations(root) {
  const scope = root || document;
  scope.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  scope.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
  scope.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
}

/* Seitentitel und Meta-Beschreibung je Sprache aktualisieren */
function applyPageMeta() {
  const page = document.body.getAttribute("data-page") || "home";
  const title = t("seo_" + page + "_title");
  const desc = t("seo_" + page + "_desc");
  if (title.indexOf("seo_") !== 0) {
    document.title = title;
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[name="twitter:title"]', title);
  }
  if (desc.indexOf("seo_") !== 0) {
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[name="twitter:description"]', desc);
  }
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", value);
}

/* Sprache setzen (save = true: in localStorage merken) */
function setLanguage(lang, save) {
  if (!translations[lang]) lang = "de";
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  if (save) {
    try { localStorage.setItem(storageKey("lang"), lang); } catch (e) { /* ignorieren */ }
  }
  applyPageMeta();
  languageListeners.forEach(function (fn) { fn(lang); });
  applyTranslations(document);
}

/* Beim Start: gespeicherte Sprache, sonst Standard aus config.js */
function initLanguage() {
  let lang = siteConfig.defaultLanguage || "de";
  try {
    const stored = localStorage.getItem(storageKey("lang"));
    if (stored && translations[stored]) lang = stored;
  } catch (e) { /* ignorieren */ }
  setLanguage(lang, false);
}
