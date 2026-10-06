/* ==========================================================================
   content.js – ZENTRALE INHALTE
   --------------------------------------------------------------------------
   Alle dynamischen Inhalte der Website stehen hier. Neue Projekte, Videos,
   Bilder, Kanäle usw. fügst du einfach als weiteren Datensatz hinzu.

   ZWEISPRACHIGE TEXTE: Entweder ein normaler String ("Text") oder ein Objekt
   { de: "Deutscher Text", en: "English text" }.

   TIPP: Für neue Videos, Bilder und Projekte ist js/media.js am einfachsten
   (eine Zeile pro Eintrag). Beides funktioniert zusammen.

   Fehlende Angaben sind mit [HIER EINTRAGEN] markiert – bitte ersetzen.
   ========================================================================== */

/* Wiederverwendbarer Platzhalter-Text */
const PLACEHOLDER = { de: "[HIER EINTRAGEN]", en: "[ENTER HERE]" };

/* Platzhalterbild, solange du noch keine echten Bilder hast */
const PLACEHOLDER_IMAGE = "assets/projects/placeholder.svg";


/* ==========================================================================
   1. ZAHLEN (Startseite) – nur Angaben, die stimmen
   ========================================================================== */
const stats = [
  { value: "~9", label: { de: "Jahre YouTube-Erfahrung", en: "Years of YouTube experience" } },
  { value: "~9", label: { de: "Jahre Photoshop-Erfahrung", en: "Years of Photoshop experience" } },
  { value: "4",  label: { de: "YouTube-Kanäle", en: "YouTube channels" } }
];


/* ==========================================================================
   2. BIOGRAFIE (Über mich) – Absätze als Array
   ========================================================================== */
const bio = [
  {
    de: "Ich bin Yannik Schmitt, online bekannt als Mucci – Video Editor, Grafikdesigner und Motion Designer mit klarem Fokus auf visuelles Storytelling. Vor rund neun Jahren habe ich auf YouTube angefangen, und aus dem Hobby ist über die Jahre ein handwerklich fundiertes Skillset geworden.",
    en: "I'm Yannik Schmitt, known online as Mucci – a video editor, graphic designer and motion designer with a clear focus on visual storytelling. I started on YouTube around nine years ago, and over time that hobby has grown into a solid, craft-driven skill set."
  },
  {
    de: "Photoshop begleitet mich genauso lange. Dazu kommen langjährige Erfahrung mit Premiere Pro und After Effects sowie der Einstieg in 3D mit Cinema 4D. Ob Long-Form-Edit, Short-Form-Content, Thumbnail oder Motion Graphics: Ich denke Bild, Schnitt, Ton und Wirkung von Anfang an zusammen.",
    en: "Photoshop has been by my side just as long. Add to that many years of experience with Premiere Pro and After Effects, plus my move into 3D with Cinema 4D. Whether it's a long-form edit, short-form content, a thumbnail or motion graphics: I think about image, cut, sound and impact together from the very start."
  },
  {
    de: "Parallel mache ich mein Fachabitur im gestaltungstechnischen Bereich (aktuell 13. Klasse) mit Schwerpunkt auf Gestaltung und digitalen Medien. Neben Gaming- und Minecraft-Content interessieren mich Politik und Geschichte – daraus sind auch eigene, journalistisch aufbereitete Medienprojekte entstanden.",
    en: "Alongside that, I'm completing my Fachabitur (technical college entrance qualification) in design and technology, currently in grade 13, with a focus on design and digital media. Besides gaming and Minecraft content, I'm interested in politics and history – which has led to my own journalistically produced media projects."
  }
];

/* "Auf einen Blick" (Über-mich-Seite) */
const facts = [
  { label: { de: "Alter", en: "Age" },                 value: { de: "20 Jahre", en: "20 years" } },
  { label: { de: "Ausbildung", en: "Education" },      value: { de: "Fachabitur, gestaltungstechnischer Assistent (13. Klasse)", en: "Fachabitur, design & technology track (grade 13)" } },
  { label: { de: "Schwerpunkt", en: "Focus" },         value: { de: "Gestaltung und digitale Medien", en: "Design and digital media" } },
  { label: "YouTube",                                  value: { de: "ca. 9 Jahre Erfahrung", en: "approx. 9 years of experience" } },
  { label: "Photoshop",                                value: { de: "ca. 9 Jahre Erfahrung", en: "approx. 9 years of experience" } }
];

/* Interessen & Content-Themen */
const interests = [
  { de: "Gaming Content", en: "Gaming content" },
  { de: "Minecraft Content", en: "Minecraft content" },
  { de: "Politik", en: "Politics" },
  { de: "Geschichte", en: "History" },
  { de: "Motorsport", en: "Motosport" },
  { de: "Social Media", en: "Social media" }
];


/* ==========================================================================
   3. SOFTWARE
   level: 1 = Grundkenntnisse … 5 = Experte (Selbsteinschätzung – bitte anpassen!)
   icon: optional, z. B. "assets/icons/photoshop.svg" (leer = Initialen)
   ========================================================================== */
const levels = [
  { de: "Grundkenntnisse", en: "Basic knowledge" },
  { de: "Gute Kenntnisse", en: "Good knowledge" },
  { de: "Fortgeschritten", en: "Advanced" },
  { de: "Sehr erfahren", en: "Very experienced" },
  { de: "Experte", en: "Expert" }
];

const software = [
  {
    name: "Adobe Photoshop",
    category: { de: "Grafikdesign", en: "Graphic Design" },
    description: { de: "Thumbnails, Compositing, Bildbearbeitung und Artwork – seit rund neun Jahren im Einsatz.", en: "Thumbnails, compositing, image editing and artwork – in use for around nine years." },
    level: 4, icon: ""
  },
  {
    name: "Adobe Premiere Pro",
    category: { de: "Video Editing", en: "Video Editing" },
    description: { de: "Schnitt von Long- und Short-Form-Content, Farbkorrektur und Sounddesign.", en: "Editing long- and short-form content, color correction and sound design." },
    level: 4, icon: ""
  },
  {
    name: "Adobe After Effects",
    category: { de: "Motion Design", en: "Motion Design" },
    description: { de: "Motion Graphics, Animation, visuelle Effekte und Übergänge.", en: "Motion graphics, animation, visual effects and transitions." },
    level: 4, icon: ""
  },
  {
    name: "Cinema 4D",
    category: { de: "3D", en: "3D" },
    description: { de: "3D-Modelling, Rendering und 3D-Motion-Design.", en: "3D modelling, rendering and 3D motion design." },
    level: 2, icon: ""
  },
  {
    name: "Adobe Creative Cloud",
    category: { de: "Workflow", en: "Workflow" },
    description: { de: "Das Zusammenspiel der Adobe-Anwendungen in einem durchgängigen Workflow.", en: "Using the Adobe apps together in one seamless workflow." },
    level: 3, icon: ""
  },
  {
    name: "OBS Studio",
    category: { de: "Aufnahme & Streaming", en: "Recording & Streaming" },
    description: { de: "Aufnahme und Streaming für Gaming- und Creator-Content.", en: "Recording and streaming for gaming and creator content." },
    level: 3, icon: ""
  },
  {
    name: "FL Studio",
    category: { de: "Audio", en: "Audio" },
    description: { de: "Musikproduktion und Sounddesign.", en: "Music production and sound design." },
    level: 2, icon: ""
  }
];


/* ==========================================================================
   4. SKILLS (Kategorien mit Einträgen; Einträge: String oder {de,en})
   ========================================================================== */
const skillCategories = [
  {
    title: "Video Editing",
    items: ["YouTube Editing", "Long-Form Editing", "Short-Form Editing", "Storytelling", "Sound Design", "Color Correction", "Color Grading", "Cinematic Editing"]
  },
  {
    title: "Graphic Design",
    items: ["Thumbnail Design", "Photoshop", "Compositing", "Social Media Design", "Typography", "Layout Design", "Image Manipulation"]
  },
  {
    title: "Motion Design",
    items: ["After Effects", "Motion Graphics", "Animation", "Visual Effects", "Transitions"]
  },
  {
    title: "3D",
    items: ["Cinema 4D", "3D Modelling", "3D Rendering", "3D Motion Design"]
  }
];


/* ==========================================================================
   5. SPRACHEN (einfach erweiterbar)
   ========================================================================== */
const languages = [
  { name: { de: "Deutsch", en: "German" },  level: { de: "Muttersprache", en: "Native language" } },
  { name: { de: "Englisch", en: "English" }, level: { de: "Gute bis sehr gute Kenntnisse", en: "Good to very good command" } },
  { name: { de: "Ungarisch", en: "Hungarian" }, level: { de: "Noch in der Lernphase (Anfänger Kenntnisse)", en: "Still in the learning phase (beginner-level knowledge)" } }
];


/* ==========================================================================
   6. TIMELINE
   year: Jahreszahl oder "[JAHR]" als Platzhalter
   ========================================================================== */
const timeline = [
  {
    year: "2017",
    title: { de: "Beginn mit YouTube und Content Creation", en: "Starting out on YouTube and content creation" },
    text: { de: "Die ersten Videos – der Anfang von allem.", en: "The first videos – where it all began." }
  },
  {
    year: "2018",
    title: { de: "Erste richtige berührungen mit Photoshop", en: "First real hands-on experience with Photoshop" },
    text: { de: "Erste Thumbnails - andere Designs.", en: "Initial thumbnails – alternative designs." }
  },
  {
    year: "2021",
    title: { de: "Die ersten 1000 Abonnenten.", en: "The first 1,000 subscribers." },
    text: { de: "Der erste Meilenstein der Youtube Karriere.", en: "The first milestone of the YouTube career." }
  },
  {
    year: "2022",
    title: { de: "Premiere Pro / After Effects", en: "Premiere Pro / After Effects" },
    text: { de: "Der vollständige Wechsel auf Adobe Programme.", en: "The complete switch to Adobe programs." }
  },
  {
    year: "2022",
    title: { de: "Schulabschluss.", en: "School leaving qualification." },
    text: { de: "Mein Abschluss der 10 Klasse mit Realschulabschluss.", en: "My completion of 10th grade with a Realschule leaving certificate." }
  },
  {
    year: "2026",
    title: { de: "Fach-Abitur", en: "Specialized Abitur (specialized university entrance qualification)" },
    text: { de: "13. Klasse meiner Gestaltungstechnischen Ausbildung.", en: "13th year of my design technology training program." }
  }
];


/* ==========================================================================
   7. PORTFOLIO-KATEGORIEN (Filter auf portfolio.html)
   id:       wird im Projekt bei "category" (oder "tags") verwendet
   software: optional – Projekte mit dieser Software erscheinen ebenfalls im Filter
   ========================================================================== */
const portfolioCategories = [
  { id: "all",           label: { de: "Alle", en: "All" } },
  { id: "video",         label: "Video Editing" },
  { id: "design",        label: "Graphic Design" },
  { id: "thumbnails",    label: "Thumbnails" },
];


/* ==========================================================================
   8. PROJEKTE
   --------------------------------------------------------------------------
   VORLAGE (kopieren, einfügen, ändern):

   {
     title:       { de: "Titel", en: "Title" },
     category:    "video",                 // id aus portfolioCategories (oder Liste ["video","motion"])
     year:        "2026",
     thumbnail:   "assets/projects/mein-projekt.jpg",
     images:      ["assets/projects/bild-1.jpg", "assets/projects/bild-2.jpg"],  // optional
     description: { de: "Beschreibung", en: "Description" },
     role:        { de: "Editor", en: "Editor" },
     client:      "Kunde / Creator",       // optional
     software:    ["Premiere Pro", "After Effects"],
     tags:        ["Editing", "Motion"],
     youtube:     "https://www.youtube.com/watch?v=XXXXXXXXXXX",  // optional
     video:       "assets/videos/mein-video.mp4",                // optional (lokale Datei)
     url:         "https://...",           // optional (externe Seite)
     caseStudy:   { de: "Text …\n\nNeuer Absatz …", en: "Text …" },   // optional
     featured:    true                     // true = erscheint auf der Startseite
   }
   ========================================================================== */
const projects = [
  {
    title: { de: "ICH BIN VOM LETZTEN PLATZ GESTARTET UND VERSUCHE ZU GEWINNEN!🔥", en: "I started from last place and am trying to win!" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/SNs8tP8V/LMU-Last-To-First-Thumbnail.png",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=qQbdFrRJgX8",
    video: "",
    url: "https://www.youtube.com/watch?v=qQbdFrRJgX8",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "GRANDEMUCCI - B3SSA ALLEIN (MUSIK VIDEO) PROD. A3", en: "GRANDEMUCCI - B3SSA ALLEIN (MUSIC VIDEO) PROD. A3.mp4" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/rFPW69Nc/Thumb-Idee3.png",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Content Creator & Editor", "Motion"],
    youtube: "https://www.youtube.com/watch?v=D_3jx-mkdOE",
    video: "",
    url: "https://www.youtube.com/watch?v=D_3jx-mkdOE",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "GRANDEMUCCI - HITORI (prod. Enchpannt) 🔥", en: "GRANDEMUCCI - HITORI (prod. Enchpannt) 🔥" },
    category: "video",
    year: "2025",
    thumbnail: "https://i.postimg.cc/wMWNj5Kr/Hitori-Thumb.png",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=rjX82No6KHY",
    video: "",
    url: "https://www.youtube.com/watch?v=rjX82No6KHY",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "BEST OF GRANDEMUCCI 2024!", en: "BEST OF GRANDEMUCCI 2024!" },
    category: "video",
    year: "2024",
    thumbnail: "https://i.postimg.cc/Y02g7nP6/Best-Of2024.jpg",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=_gWGK7ySLx8&t=2s",
    video: "",
    url: "https://www.youtube.com/watch?v=_gWGK7ySLx8&t=2s",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "ICH TESTE das Ferrari SF1000 F1 Lenkrad – REVIEW", en: "I TESTED the Ferrari SF1000 F1 steering wheel – REVIEW" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/rFmWYHxp/SF1000.jpg",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=OiOG-_VeABs&t=301s",
    video: "",
    url: "https://www.youtube.com/watch?v=OiOG-_VeABs&t=301s",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "The Day Kimi Räikkönen Lost His First World Championship", en: "The Day Kimi Räikkönen Lost His First World Championship" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/GtMDmP0N/Kimi2005.webp",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=gpHYkS7qF8M",
    video: "",
    url: "https://www.youtube.com/watch?v=gpHYkS7qF8M",
    caseStudy: "",
    featured: true
  },
	
	
	
	
	
  {
    title: { de: "F1 LEAUGE RACING STREAM THUMBNAIL", en: "F1 LEAUGE RACING STREAM THUMBNAIL" },
    category: "thumbnails",
    year: "2026",
    thumbnail: "https://i.postimg.cc/T2Qg0xys/F1-IRC-STREAM-THUMBNAIL.png",
    images: [],
    role: { de: "Content Creator & Graphic Designer", en: "Content Creator & Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "LE MANS ULTIMATE RACING STREAM THUMBNAIL", en: "LE MANS ULTIMATE RACING STREAM THUMBNAIL" },
    category: "thumbnails",
    year: "2026",
    thumbnail: "https://i.postimg.cc/MKTRrLRF/LMU-Thumbnail.png",
    images: [],
    role: { de: "Content Creator & Graphic Designer", en: "Content Creator & Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "AMONG US STREAM HIGHLIGHTS THUMBNAIL", en: "AMONG US STREAM HIGHLIGHTS THUMBNAIL" },
    category: "thumbnails",
    year: "2023",
    thumbnail: "https://i.postimg.cc/8P5WnYM1/Mucci-Stream-Highlights-Thumbnail.png",
    images: [],
    role: { de: "Content Creator & Graphic Designer", en: "Content Creator & Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "MINECRAFT MODDED CHALLENGE THUMBNAIL", en: "MINECRAFT MODDED CHALLENGE THUMBNAIL" },
    category: "thumbnails",
    year: "2025",
    thumbnail: "https://i.postimg.cc/4NdtF0tF/Loxxler-Thumb-Nwm.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "Loxxler",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "MINECRAFT WOULD YOU RATHER CHALLENGE THUMBNAIL", en: "MINECRAFT WOULD YOU RATHER CHALLENGE THUMBNAIL" },
    category: "thumbnails",
    year: "2026",
    thumbnail: "https://i.postimg.cc/PrxZF7Y5/Loxxler-Would-You-Rather-Thumb-nwm.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "Loxxler",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "MINECRAFT MARIO KART CHALLENGE THUMBNAIL", en: "MINECRAFT MARIO KART CHALLENGE THUMBNAIL" },
    category: "thumbnails",
    year: "2026",
    thumbnail: "https://i.postimg.cc/rFmWYHxk/Loxxler-Thumbnail-Mario-Kart-yay.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "Loxxler",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "READY OR NOT GAMING THUMBNAIL", en: "READY OR NOT GAMING THUMBNAIL" },
    category: "thumbnails",
    year: "2025",
    thumbnail: "https://i.postimg.cc/90x9QP31/Dhl-Swatting-Thumbnail.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "Passi",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
    {
    title: { de: "ROCKET LEAUGE GAMING THUMBNAIL", en: "ROCKET LEAUGE GAMING THUMBNAIL" },
    category: "thumbnails",
    year: "2025",
    thumbnail: "https://i.postimg.cc/Hsx5PNXx/Rocket-Leauge-Thumbnail.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "Passi",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
	
	
	
	
  {
    title: { de: "TECHNICOLOR EFFECT WALLPAPER 1", en: "TECHNICOLOR EFFECT WALLPAPER 1" },
    category: "design",
    year: "2026",
    thumbnail: "https://i.postimg.cc/90XT28kT/1-Technicolor.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "TECHNICOLOR EFFECT WALLPAPER 2", en: "TECHNICOLOR EFFECT WALLPAPER 2" },
    category: "design",
    year: "2026",
    thumbnail: "https://i.postimg.cc/x8sm1GrF/2-Technicolor.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "MINECRAFT PHONK WALLPAPER", en: "MINECRAFT PHONK WALLPAPER" },
    category: "design",
    year: "2024",
    thumbnail: "https://i.postimg.cc/NFNXj8h7/Desktop-Wallpaper-Phonk.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "MINECRAFT END DIMENSION WALLPAPER", en: "MINECRAFT END DIMENSION WALLPAPER" },
    category: "design",
    year: "2024",
    thumbnail: "https://i.postimg.cc/gjMh2y9M/End-Wallpaper-omg.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "F1 AUDI YOUTUBE BANNER", en: "F1 AUDI YOUTUBE BANNER" },
    category: "design",
    year: "2026",
    thumbnail: "https://i.postimg.cc/wxFL2ztv/F1-Audi-Bannerr.png",
    images: [],
    role: { de: "Graphic Designer", en: "Graphic Designer" },
    client: "",
    software: ["Photoshop"],
    tags: ["Editing", "Thumbnail"],
    youtube: "",
    video: "",
    url: "",
    caseStudy: "",
    featured: true
  },
	
	
];


/* ==========================================================================
   9. VIDEOS (videos.html)
   --------------------------------------------------------------------------
   Unterstützt:
   - YouTube-Videos:  youtube: "https://www.youtube.com/watch?v=..."  (oder youtu.be-Link)
   - YouTube Shorts:  youtube: "https://www.youtube.com/shorts/..."   (erscheint im Shorts-Bereich)
   - Lokale MP4:      video: "assets/videos/datei.mp4"
   - Externe URL:     url: "https://..."  (wird als Link angeboten)
   Felder wie bei Projekten (title, thumbnail, description, category, year, role, software).
   ========================================================================== */
const videos = [
  {
    title: { de: "ICH BIN VOM LETZTEN PLATZ GESTARTET UND VERSUCHE ZU GEWINNEN!🔥", en: "I started from last place and am trying to win!" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/SNs8tP8V/LMU-Last-To-First-Thumbnail.png",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=qQbdFrRJgX8",
    video: "",
    url: "https://www.youtube.com/watch?v=qQbdFrRJgX8",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "GRANDEMUCCI - B3SSA ALLEIN (MUSIK VIDEO) PROD. A3", en: "GRANDEMUCCI - B3SSA ALLEIN (MUSIC VIDEO) PROD. A3.mp4" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/rFPW69Nc/Thumb-Idee3.png",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Content Creator & Editor", "Motion"],
    youtube: "https://www.youtube.com/watch?v=D_3jx-mkdOE",
    video: "",
    url: "https://www.youtube.com/watch?v=D_3jx-mkdOE",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "GRANDEMUCCI - HITORI (prod. Enchpannt) 🔥", en: "GRANDEMUCCI - HITORI (prod. Enchpannt) 🔥" },
    category: "video",
    year: "2025",
    thumbnail: "https://i.postimg.cc/wMWNj5Kr/Hitori-Thumb.png",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=rjX82No6KHY",
    video: "",
    url: "https://www.youtube.com/watch?v=rjX82No6KHY",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "BEST OF GRANDEMUCCI 2024!", en: "BEST OF GRANDEMUCCI 2024!" },
    category: "video",
    year: "2024",
    thumbnail: "https://i.postimg.cc/Y02g7nP6/Best-Of2024.jpg",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=_gWGK7ySLx8&t=2s",
    video: "",
    url: "https://www.youtube.com/watch?v=_gWGK7ySLx8&t=2s",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "ICH TESTE das Ferrari SF1000 F1 Lenkrad – REVIEW", en: "I TESTED the Ferrari SF1000 F1 steering wheel – REVIEW" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/rFmWYHxp/SF1000.jpg",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=OiOG-_VeABs&t=301s",
    video: "",
    url: "https://www.youtube.com/watch?v=OiOG-_VeABs&t=301s",
    caseStudy: "",
    featured: true
  },
  {
    title: { de: "The Day Kimi Räikkönen Lost His First World Championship", en: "The Day Kimi Räikkönen Lost His First World Championship" },
    category: "video",
    year: "2026",
    thumbnail: "https://i.postimg.cc/GtMDmP0N/Kimi2005.webp",
    images: [],
    role: { de: "Content Creator & Editor", en: "Content Creator & Editor" },
    client: "",
    software: ["Premiere Pro", "After Effects"],
    tags: ["Editing", "Motion"],
    youtube: "https://www.youtube.com/watch?v=gpHYkS7qF8M",
    video: "",
    url: "https://www.youtube.com/watch?v=gpHYkS7qF8M",
    caseStudy: "",
    featured: true
  },
	
];


/* ==========================================================================
   10. GRAFIK-GALERIE (graphics.html) + Kategorien
   Datensatz: { title, description, category, year, src, alt }
   category = id aus graphicCategories
   ========================================================================== */
const graphicCategories = [
  { id: "all",         label: { de: "Alle", en: "All" } },
  { id: "thumbnails",  label: "Thumbnails" },
  { id: "design",      label: "Graphic Design" },
];

const graphics = [
  { title: { de: "F1 AUDI YOUTUBE BANNER", en: "F1 AUDI YOUTUBE BANNER" },category: "design",  year: "2026", src: "https://i.postimg.cc/wxFL2ztv/F1-Audi-Bannerr.png", alt: "Platzhalter" },
  { title: { de: "F1 LEAUGE RACE STREAM THUMBNAIL", en: "F1 LEAUGE RACE STREAM THUMBNAIL" }, category: "thumbnails",   year: "2026", src: "https://i.postimg.cc/T2Qg0xys/F1-IRC-STREAM-THUMBNAIL.png", alt: "Platzhalter" },
  { title: { de: "TECHNICOLOR EFFECT WALLPAPER 1", en: "TECHNICOLOR EFFECT WALLPAPER 1" }, category: "design",     year: "2026", src: "https://i.postimg.cc/90XT28kT/1-Technicolor.png", alt: "Platzhalter" },
  { title: { de: "TECHNICOLOR EFFECT WALLPAPER 2", en: "TECHNICOLOR EFFECT WALLPAPER 2" }, category: "design",      year: "2026", src: "https://i.postimg.cc/x8sm1GrF/2-Technicolor.png", alt: "Platzhalter" },
  { title: { de: "LE MANS ULTIMATE STREAM THUMBNAIL", en: "LE MANS ULTIMATE STREAM THUMBNAIL" }, category: "thumbnails", year: "2026", src: "https://i.postimg.cc/MKTRrLRF/LMU-Thumbnail.png", alt: "Platzhalter" },
  { title: { de: "MINECRAFT MARIO KART THUMBNAIL", en: "MINECRAFT MARIO KART THUMBNAIL" }, category: "thumbnails",    year: "2026", src: "https://i.postimg.cc/rFmWYHxk/Loxxler-Thumbnail-Mario-Kart-yay.png", alt: "Platzhalter" },
  { title: { de: "MINECRAFT WOULD YOU RATHER THUMBNAIL", en: "MINECRAFT WOULD YOU RATHER THUMBNAIL" }, category: "thumbnails",     year: "2026", src: "https://i.postimg.cc/PrxZF7Y5/Loxxler-Would-You-Rather-Thumb-nwm.png", alt: "Platzhalter" },
  { title: { de: "MINECRAFT MODDING CHALLENGE THUMBNAIL", en: "MINECRAFT MODDING CHALLENGE THUMBNAIL" }, category: "thumbnails",     year: "2025", src: "https://i.postimg.cc/4NdtF0tF/Loxxler-Thumb-Nwm.png", alt: "Platzhalter" },
  { title: { de: "READY OR NOT GAMING THUMBNAIL", en: "READY OR NOT GAMING THUMBNAIL" },category: "thumbnails",     year: "2025", src: "https://i.postimg.cc/90x9QP31/Dhl-Swatting-Thumbnail.png", alt: "Platzhalter" },
  { title: { de: "ROCKET LEAUGE GAMING THUMBNAIL", en: "ROCKET LEAUGE GAMING THUMBNAIL" }, category: "thumbnails",     year: "2025", src: "https://i.postimg.cc/Hsx5PNXx/Rocket-Leauge-Thumbnail.png", alt: "Platzhalter" },
  { title: { de: "MINECRAFT END DIMENSION WALLPAPER", en: "MINECRAFT END DIMENSION WALLPAPER" }, category: "design",     year: "2024", src: "https://i.postimg.cc/gjMh2y9M/End-Wallpaper-omg.png", alt: "Platzhalter" },
  { title: { de: "MINECRAFT PHONK WALLPAPER", en: "MINECRAFT PHONK WALLPAPER" }, category: "design",     year: "2024", src: "https://i.postimg.cc/NFNXj8h7/Desktop-Wallpaper-Phonk.png", alt: "Platzhalter" },
  { title: { de: "AMONG US HIGHLIGHT THUMBNAIL", en: "AMONG US HIGHLIGHT THUMBNAIL" }, category: "thumbnails",     year: "2023", src: "https://i.postimg.cc/8P5WnYM1/Mucci-Stream-Highlights-Thumbnail.png", alt: "Platzhalter" }
];


/* ==========================================================================
   11. KANÄLE (channels.html)
   followers: leer lassen ("") = wird nicht angezeigt. Keine Zahlen erfinden!
   ========================================================================== */
const channels = [
  { platform: "YouTube", username: "@MucciYT",          url: "https://www.youtube.com/@MucciYT",          description: { de: "Allgemeiner Kanal", en: "General channel" }, followers: "3.050" },
  { platform: "YouTube", username: "@GrandeMucci",      url: "https://www.youtube.com/@GrandeMucci",      description: { de: "Minecraft Kanal", en: "Minecraft channel" }, followers: "278" },
  { platform: "YouTube", username: "@GrandeMucciMusic", url: "https://www.youtube.com/@GrandeMucciMusic", description: { de: "Musik Kanal", en: "Music channel" }, followers: "120" },
  { platform: "YouTube", username: "@SMARAGDALLIANZMINECRAFT",  url: "https://www.youtube.com/channel/UCQNrdH5PAbCQOMs7f3xRF3g",     description: { de: "Politik Kanal", en: "Politics channel" }, followers: "13.600" },
  { platform: "TikTok", username: "@smaragd_allianz",  url: "https://www.tiktok.com/@smaragd_allianz",     description: { de: "Politik TikTok-Kanal", en: "Politics tiktok-channel" }, followers: "31.400" },
  { platform: "TikTok",  username: "@grandemucci",      url: "https://www.tiktok.com/@grandemucci",       description: { de: "Allgemeiner TikTok-Kanal", en: "General tiktok-channel" }, followers: "310" },
  { platform: "TikTok",  username: "@grandossmuccos",      url: "https://www.tiktok.com/@grandossmuccos",       description: { de: "Allgemeiner TikTok-Kanal", en: "General tiktok-channel" }, followers: "166" },
];


/* ==========================================================================
   12. DATENSCHUTZ-ABSCHNITTE (datenschutz.html)
   Vorlage – bitte prüfen und an dein tatsächliches Hosting anpassen.
   Das ist keine Rechtsberatung.
   ========================================================================== */
const privacySections = [
  {
    title: { de: "1. Verantwortlicher", en: "1. Controller" },
    text: {
      de: "Verantwortlich für die Datenverarbeitung auf dieser Website ist die im Impressum genannte Person. Die Kontaktdaten findest du im Impressum.",
      en: "The person named in the legal notice (Impressum) is responsible for data processing on this website. Contact details can be found there."
    }
  },
  {
    title: { de: "2. Hosting und Server-Logfiles", en: "2. Hosting and server log files" },
    text: {
      de: "Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp) in Server-Logfiles. Hosting-Anbieter: [HIER EINTRAGEN]. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb).",
      en: "When you visit this website, the hosting provider processes technically necessary data (e.g. IP address, date and time, requested page, browser type) in server log files. Hosting provider: [ENTER HERE]. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and stable operation)."
    }
  },
  {
    title: { de: "3. Lokale Speicherung im Browser", en: "3. Local storage in your browser" },
    text: {
      de: "Diese Website speichert deine Auswahl für Farbmodus (Dark/Light) und Sprache (DE/EN) im localStorage deines Browsers, damit sie beim nächsten Besuch erhalten bleibt. Diese Einstellungen verbleiben ausschließlich auf deinem Gerät und werden nicht an einen Server übertragen.",
      en: "This website stores your choice of color mode (dark/light) and language (DE/EN) in your browser's localStorage so it is remembered on your next visit. These settings stay on your device only and are not sent to any server."
    }
  },
  {
    title: { de: "4. Cookies, Analyse und Tracking", en: "4. Cookies, analytics and tracking" },
    text: {
      de: "Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Sollte sich das später ändern, wird diese Erklärung entsprechend aktualisiert.",
      en: "This website does not set cookies and does not use any analytics or tracking services. If this changes in the future, this policy will be updated accordingly."
    }
  },
  {
    title: { de: "5. Schriftarten und externe Bibliotheken", en: "5. Fonts and external libraries" },
    text: {
      de: "Es werden keine Google Fonts und keine externen JavaScript-Bibliotheken eingebunden. Die Website nutzt Systemschriften bzw. lokal gespeicherte Dateien. Beim Aufruf werden dadurch keine Daten an Dritte übertragen.",
      en: "No Google Fonts and no external JavaScript libraries are loaded. The website uses system fonts or locally stored files. No data is transmitted to third parties when you open a page."
    }
  },
  {
    title: { de: "6. YouTube-Videos", en: "6. YouTube videos" },
    text: {
      de: "Videos von YouTube werden erst nach einem Klick auf „Video laden“ eingebunden (über youtube-nocookie.com). Vorher findet keine Verbindung zu YouTube statt. Mit dem Klick wird eine Verbindung zu den Servern von YouTube (Google Ireland Limited) hergestellt; dabei können z. B. deine IP-Adresse und Geräteinformationen übertragen werden. Rechtsgrundlage ist deine Einwilligung durch den Klick (Art. 6 Abs. 1 lit. a DSGVO). Mehr Informationen: https://policies.google.com/privacy",
      en: "YouTube videos are only loaded after you click “Load video” (via youtube-nocookie.com). Before that, no connection to YouTube is made. By clicking, a connection to YouTube's servers (Google Ireland Limited) is established; this may transmit, for example, your IP address and device information. The legal basis is your consent by clicking (Art. 6(1)(a) GDPR). More information: https://policies.google.com/privacy"
    }
  },
  {
    title: { de: "7. Externe Links und Social Media", en: "7. External links and social media" },
    text: {
      de: "Diese Website enthält Links zu externen Plattformen (z. B. YouTube, TikTok). Daten werden erst übertragen, wenn du einen Link anklickst. Für die Datenverarbeitung auf diesen Plattformen gelten deren eigene Datenschutzbestimmungen.",
      en: "This website contains links to external platforms (e.g. YouTube, TikTok). Data is only transmitted once you click a link. The privacy policies of those platforms apply to data processing there."
    }
  },
  {
    title: { de: "8. Kontaktaufnahme", en: "8. Contacting me" },
    text: {
      de: "Das Kontaktformular sendet selbst keine Daten, sondern öffnet dein E-Mail-Programm mit einer vorbereiteten Nachricht. Wenn du mir per E-Mail schreibst, werden deine Angaben zur Bearbeitung der Anfrage gespeichert (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und nach Erledigung gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten bestehen.",
      en: "The contact form does not send any data itself; it opens your email app with a prepared message. If you email me, your details are stored to process your request (Art. 6(1)(b) or (f) GDPR) and deleted afterwards unless legal retention duties apply."
    }
  },
  {
    title: { de: "9. Deine Rechte", en: "9. Your rights" },
    text: {
      de: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, dich bei einer zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.",
      en: "You have the right to access, rectification, erasure, restriction of processing, data portability and objection, as well as the right to lodge a complaint with a competent data protection supervisory authority."
    }
  },
  {
    title: { de: "10. Stand", en: "10. Last updated" },
    text: { de: "Stand: [DATUM EINTRAGEN]", en: "Last updated: [ENTER DATE]" }
  }
];
