/* ==========================================================================
   config.js – ZENTRALE KONFIGURATION
   --------------------------------------------------------------------------
   Hier änderst du globale Einstellungen (Name, E-Mail, Social Links,
   Farben, Impressum ...). Diese Datei wird in jeder HTML-Seite im <head>
   geladen. Texte der Oberfläche stehen in language.js, Projekte in content.js.
   ========================================================================== */

const siteConfig = {

  /* ---------- Identität ---------- */
  name: "Yannik Schmitt",
  creatorName: "Mucci",
  aliases: ["GrandeMucci", "GRANDEMUCCI"],

  /* ---------- Kontakt ---------- */
  email: "yannik.schmitt.application@gmail.com",

  /* Finale Domain eintragen, sobald bekannt (ohne Slash am Ende).
     Wird für canonical-URL, Open Graph und sitemap.xml verwendet. */
  website: "https://www.DEINE-DOMAIN.de",

  /* ---------- Logo & Bilder ---------- */
  logoText: "MUCCI",                 // Text-Logo (wird genutzt, wenn logoImage leer ist)
  logoImage: "",                     // z. B. "assets/logos/logo.svg"
  heroImage: "https://i.postimg.cc/VLVMyFWk/Spotify-Banner.png",   // Hero-Hintergrundbild (leer = nur Farbverlauf)

  /* ---------- Social Media (Footer + Kontaktseite) ---------- */
  social: [
    { platform: "YouTube", label: "@MucciYT",           url: "https://www.youtube.com/@MucciYT" },
    { platform: "YouTube", label: "@GrandeMucci",       url: "https://www.youtube.com/@GrandeMucci" },
    { platform: "YouTube", label: "@GrandeMucciMusic",  url: "https://www.youtube.com/@GrandeMucciMusic" },
    { platform: "YouTube", label: "@SMARAGDALLIANZMINECRAFT",         url: "https://www.youtube.com/@SMARAGDALLIANZMINECRAFT" },
    { platform: "TikTok", label: "@smaragd_allianz",    url: "https://www.tiktok.com/@smaragd_allianz" },
    { platform: "TikTok",  label: "@grandemucci",       url: "https://www.tiktok.com/@grandemucci" },
	{ platform: "TikTok",  label: "@grandosmuccos",       url: "https://www.tiktok.com/@grandossmuccos" }
  ],

  /* ---------- Copyright (Footer) ---------- */
  copyright: "© 2026 Mucci. All rights reserved.",

  /* ---------- Sprache & Theme ---------- */
  defaultLanguage: "de",             // "de" oder "en"
  defaultTheme: "dark",              // "dark" oder "light"
  storagePrefix: "mucci",            // Präfix für localStorage-Schlüssel

  /* ---------- YouTube-Vorschaubilder ----------
     false = Es wird KEINE Verbindung zu YouTube/Google aufgebaut, bevor jemand
             auf „Video laden“ klickt (datenschutzfreundlich, Standard).
             Vorschaubilder legst du dann selbst in /assets/thumbnails ab.
     true  = Fehlt ein Vorschaubild, wird es automatisch von YouTube geholt
             (praktisch, aber: beim Seitenaufruf wird dann YouTube kontaktiert).
             Die Datenschutzseite weist dann automatisch darauf hin. */
  youtubeThumbnails: false,

  /* ---------- Farben ----------
     Optional: CSS-Variablen aus style.css pro Theme überschreiben.
     Die Website nutzt vier Farbtöne: --c1 (Violett), --c2 (Pink), --c3 (Orange), --c4 (Cyan).
     Beispiel:  dark: { "--c1": "#4da3ff", "--c2": "#00e0a4" }, light: { "--c1": "#1559d6" }
     Leer lassen = Standardfarben aus style.css. */
  colors: {
    dark: {},
    light: {}
  },

  /* ---------- SEO ---------- */
  seo: {
    siteName: "Mucci Portfolio",
    ogImage: "Bilder/Spotify Banner.png",   // 1200x630 px empfohlen (Datei selbst ablegen)
    twitterHandle: ""                         // z. B. "@deinhandle"
  },

  /* ---------- IMPRESSUM (nichts erfinden – Platzhalter ersetzen!) ----------
     Leere Felder ("") werden auf der Impressum-Seite nicht angezeigt. */
  impressum: {
   
    name: "Yannik Schmitt",
    address: "Diese Portfolio-Website befindet sich derzeit noch im Aufbau. Die vollständige Anbieterkennzeichnung wird schnellstmöglich ergänzt.",
    email: "yannik.schmitt.appliaction@gmail.com",
    phone: "",
    vatId: "",
    responsible: "Yannik Schmitt",
    more: "Diese Website dient derzeit der Präsentation meiner Arbeiten, Referenzen und Qualifikationen im Bereich Videobearbeitung, Design und Mediengestaltung."
  }
  
};
