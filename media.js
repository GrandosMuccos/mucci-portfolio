/* ==========================================================================
   media.js – MEINE MEDIEN: VIDEOS, BILDER & PROJEKTE IN EINER ZEILE
   --------------------------------------------------------------------------
   Das ist die EINFACHSTE Stelle, um etwas Neues auf die Website zu bringen.
   Jede Zeile unten (Abschnitt "HIER EINTRAGEN") fügt etwas hinzu.
   Speichern, Browser aktualisieren – fertig.

   WICHTIG: Beginne eine Zeile NICHT mit // – das wäre ein Kommentar und
   wird ignoriert. Wer eine Zeile entfernen will, löscht sie oder setzt //
   davor.

   Für Fortgeschrittene gibt es weiterhin content.js (alle Felder frei
   editierbar). Beides funktioniert gleichzeitig.

   ---------------------------------------------------------------------
   SCHNELLÜBERSICHT
   ---------------------------------------------------------------------

   1) VIDEO (YouTube, Short, MP4 oder externer Link)
      addVideo("Link oder Dateiname", "Titel");
      addVideo("https://www.youtube.com/watch?v=XXXXXXXXXXX", "Mein Video");
      addVideo("https://www.youtube.com/shorts/XXXXXXXXXXX", "Mein Short");
      addVideo("mein-video.mp4", "Lokales Video");     // Datei liegt in assets/videos/

      Optional als dritter Wert (alles kann weggelassen werden):
      addVideo("https://youtu.be/XXXXXXXXXXX", "Mein Video", {
        thumbnail: "mein-video.jpg",           // Datei in assets/thumbnails/
        year: "2026",
        description: "Kurze Beschreibung",
        role: "Editor",
        software: ["Premiere Pro", "After Effects"],
        category: "video"                       // video | motion | design | 3d ...
      });

   2) BILD in der Galerie (Grafikseite)
      addImage("dateiname.jpg", "Titel", "kategorie");   // Datei liegt in assets/graphics/
      Kategorien: thumbnails | photoshop | posters | social | compositing | 3d | artwork

   3) MEHRERE BILDER auf einmal (Titel kommt automatisch aus dem Dateinamen)
      addImages("thumbnails", ["bild-1.jpg", "bild-2.jpg", "bild-3.jpg"]);

   4) PROJEKT (Portfolio-Seite, optional auch auf der Startseite)
      addProject("Projektname", "projekt-bild.jpg", "video");   // Bild liegt in assets/projects/
      Kategorien: video | design | motion | thumbnails | 3d  (oder Liste: ["video", "motion"])

      Mit allen Extras:
      addProject("Projektname", "projekt-bild.jpg", ["video", "motion"], {
        year: "2026",
        description: "Was war die Aufgabe? Was habe ich gemacht?",
        role: "Editor & Motion Designer",
        client: "Name des Kunden / Creators",
        software: ["Premiere Pro", "After Effects"],
        tags: ["Editing", "Motion"],
        images: ["bild-2.jpg", "bild-3.jpg"],   // weitere Bilder (assets/projects/)
        youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
        video: "mein-video.mp4",                 // lokale Datei (assets/videos/)
        url: "https://...",                      // externer Link
        caseStudy: "Längerer Text …",            // optional
        featured: true                           // true = auch auf der Startseite
      });

   ZWEISPRACHIGE TEXTE: Statt "Text" kannst du { de: "Text", en: "Text" } schreiben,
   z. B. addVideo("...", { de: "Mein Video", en: "My video" });
   ========================================================================== */


/* ==========================================================================
   >>> HIER EINTRAGEN – Beispiele stehen als Kommentar (//) darunter.
       Zum Aktivieren: die Zeile kopieren, // entfernen, Werte ändern.
   ========================================================================== */

// addVideo("https://www.youtube.com/watch?v=XXXXXXXXXXX", "Titel meines Videos", { year: "2026", role: "Editor", software: ["Premiere Pro"] });
// addVideo("https://www.youtube.com/shorts/XXXXXXXXXXX", "Titel meines Shorts");
// addVideo("mein-video.mp4", "Titel meines lokalen Videos", { thumbnail: "mein-video.jpg" });

// addImage("thumbnail-01.jpg", "Titel des Thumbnails", "thumbnails");
// addImages("photoshop", ["artwork-01.jpg", "artwork-02.jpg"]);

// addProject("Mein erstes Projekt", "projekt-01.jpg", "video", { year: "2026", role: "Editor", software: ["Premiere Pro"], featured: true });


/* ==========================================================================
   EINSTELLUNG
   true  = Die grauen Platzhalter-Einträge ([PROJEKTNAME 1], [BILDTITEL 1] …)
           verschwinden automatisch, sobald du in der jeweiligen Liste echte
           Einträge hinzugefügt hast.
   false = Platzhalter bleiben stehen (dann in content.js selbst löschen).
   ========================================================================== */
const REMOVE_PLACEHOLDERS = true;


/* ==========================================================================
   AB HIER: TECHNIK – normalerweise nichts ändern.
   (Funktionen werden von JavaScript automatisch nach oben "gezogen",
    darum funktionieren die Zeilen oben.)
   ========================================================================== */

/* Standard-Ordner für Dateinamen ohne Pfad.
   (Als Funktion geschrieben, damit sie schon vor dieser Stelle im Code nutzbar ist.) */
function mediaDir() {
  return {
    project:   "assets/projects/",
    thumbnail: "assets/thumbnails/",
    graphic:   "assets/graphics/",
    video:     "assets/videos/"
  };
}

/* Zählt, in welcher Liste echte Einträge hinzugefügt wurden */
function mediaCount(kind) {
  mediaCount.n = mediaCount.n || { projects: 0, videos: 0, graphics: 0 };
  if (kind) mediaCount.n[kind]++;
  return mediaCount.n;
}

/* Dateiname → Pfad. Ist schon ein Pfad (mit "/") oder eine URL angegeben, bleibt er unverändert. */
function mediaPath(file, folder) {
  if (!file) return "";
  file = String(file).trim();
  if (/^(https?:)?\/\//i.test(file) || file.indexOf("/") > -1) return file;
  return folder + file;
}

/* "mein_cooles-bild.jpg" → "Mein cooles bild" */
function titleFromFile(file) {
  const base = String(file).split("/").pop().replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ").trim();
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : String(file);
}

/* ----- Video ----- */
function addVideo(link, title, opts) {
  opts = opts || {};
  link = String(link || "").trim();
  const isYouTube = /(youtu\.be\/|youtube(-nocookie)?\.com\/)/i.test(link);
  const isFile = !isYouTube && /\.(mp4|webm|ogg|mov|m4v)$/i.test(link);
  const item = {
    title: title || "Video",
    category: opts.category || "video",
    year: opts.year || "",
    thumbnail: mediaPath(opts.thumbnail, mediaDir().thumbnail),
    description: opts.description || "",
    role: opts.role || "",
    software: opts.software || [],
    tags: opts.tags || [],
    youtube: isYouTube ? link : "",
    video: isFile ? mediaPath(link, mediaDir().video) : "",
    url: (!isYouTube && !isFile) ? link : (opts.url || "")
  };
  if (opts.short || /\/shorts\//i.test(link)) item.type = "short";
  videos.push(item);
  mediaCount("videos");
}

/* ----- Einzelnes Bild in der Galerie ----- */
function addImage(file, title, category, opts) {
  opts = opts || {};
  graphics.push({
    title: title || titleFromFile(file),
    description: opts.description || "",
    category: category || "artwork",
    year: opts.year || "",
    src: mediaPath(file, mediaDir().graphic),
    alt: opts.alt || title || titleFromFile(file)
  });
  mediaCount("graphics");
}

/* ----- Viele Bilder auf einmal ----- */
function addImages(category, files, opts) {
  (files || []).forEach(function (f) { addImage(f, titleFromFile(f), category, opts); });
}

/* ----- Projekt (Portfolio) ----- */
function addProject(title, image, category, opts) {
  opts = opts || {};
  projects.push({
    title: title || "Projekt",
    category: category || "video",
    year: opts.year || "",
    thumbnail: mediaPath(image, mediaDir().project),
    images: (opts.images || []).map(function (f) { return mediaPath(f, mediaDir().project); }),
    description: opts.description || "",
    role: opts.role || "",
    client: opts.client || "",
    software: opts.software || [],
    tags: opts.tags || [],
    youtube: opts.youtube || "",
    video: mediaPath(opts.video, mediaDir().video),
    url: opts.url || "",
    caseStudy: opts.caseStudy || "",
    featured: !!opts.featured
  });
  mediaCount("projects");
}

/* ----- Platzhalter entfernen, sobald echte Einträge existieren ----- */
function isPlaceholderItem(it) {
  const t = it && it.title;
  const s = (t && typeof t === "object") ? (t.de || t.en || "") : String(t || "");
  return /^\s*\[/.test(s);
}
function removePlaceholders(list) {
  for (let i = list.length - 1; i >= 0; i--) { if (isPlaceholderItem(list[i])) list.splice(i, 1); }
}
if (REMOVE_PLACEHOLDERS) {
  const added = mediaCount();
  if (added.projects) removePlaceholders(projects);
  if (added.videos)   removePlaceholders(videos);
  if (added.graphics) removePlaceholders(graphics);
}
