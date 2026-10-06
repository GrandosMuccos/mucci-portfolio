# Mucci Portfolio – Anleitung

Statische Portfolio-Website aus **HTML5, CSS3 und Vanilla JavaScript**.
Kein Framework, kein npm, kein Build. Einfach in Dreamweaver öffnen, bearbeiten, speichern, Browser aktualisieren.

## Website testen

`index.html` per Doppelklick im Browser öffnen. Fertig.

## Dateien im Überblick

| Datei | Wofür |
|---|---|
| `js/config.js` | Name, E-Mail, Social Links, Logo, Hero-Bild, Farben, Impressum-Daten, Standard-Sprache/-Theme |
| `js/media.js` | **Der einfachste Weg:** Videos, Bilder und Projekte mit je einer Zeile hinzufügen |
| `js/content.js` | Alle Inhalte im Detail: Projekte, Videos, Grafiken, Kanäle, Software, Skills, Timeline, Biografie, Datenschutz-Texte |
| `js/language.js` | Alle Oberflächen-Texte in Deutsch und Englisch |
| `js/script.js` | Funktionen (Filter, Lightbox, Theme, Navigation …) – normalerweise nichts zu ändern |
| `css/style.css` | Design (Farben als Variablen ganz oben) |
| `css/responsive.css` | Anpassungen für Tablet und Smartphone |

Platzhalter wie `[HIER EINTRAGEN]`, `[JAHR]` oder `[NAME]` stehen überall dort, wo Angaben fehlen. Bitte ersetzen.

## SCHNELLSTART: Videos und Bilder in einer Zeile hinzufügen (`js/media.js`)

Öffne `js/media.js`. Im Abschnitt **„HIER EINTRAGEN“** stehen Beispielzeilen mit `//` davor.
Kopiere eine Zeile, entferne das `//`, ändere die Werte, speichere, Browser aktualisieren. Fertig.

**YouTube-Video** (Link einfügen, Titel eintragen):

```js
addVideo("https://www.youtube.com/watch?v=XXXXXXXXXXX", "Mein Video");
```

**YouTube Short** (wird automatisch im Bereich „Shorts“ gezeigt):

```js
addVideo("https://www.youtube.com/shorts/XXXXXXXXXXX", "Mein Short");
```

**Eigene MP4-Datei** (Datei vorher in `assets/videos/` legen):

```js
addVideo("mein-video.mp4", "Mein Video", { thumbnail: "mein-video.jpg" });
```

**Ein Bild in der Galerie** (Datei vorher in `assets/graphics/` legen):

```js
addImage("bild-01.jpg", "Mein Thumbnail", "thumbnails");
```

**Viele Bilder auf einmal** (Titel entsteht automatisch aus dem Dateinamen):

```js
addImages("photoshop", ["bild-01.jpg", "bild-02.jpg", "bild-03.jpg"]);
```

**Projekt im Portfolio** (Titelbild vorher in `assets/projects/` legen):

```js
addProject("Mein Projekt", "projekt-01.jpg", "video", { year: "2026", role: "Editor", featured: true });
```

- Nur der Dateiname genügt, der Ordner wird automatisch ergänzt.
- Optionale Angaben (Jahr, Beschreibung, Rolle, Software, Tags, weitere Bilder …) stehen in `js/media.js` im Kommentar am Anfang.
- Sobald du echte Einträge hinzufügst, verschwinden die grauen Platzhalter (`[PROJEKTNAME 1]` usw.) automatisch. Das lässt sich in `media.js` über `REMOVE_PLACEHOLDERS` abschalten.
- Kategorien für Projekte: `video`, `design`, `motion`, `thumbnails`, `3d`. Für die Galerie: `thumbnails`, `photoshop`, `posters`, `social`, `compositing`, `3d`, `artwork`.

**Tipp zu YouTube-Vorschaubildern:** Standardmäßig legst du das Vorschaubild selbst in `assets/thumbnails/` ab (datenschutzfreundlich, es wird keine Verbindung zu YouTube aufgebaut, bevor jemand auf „Video laden“ klickt). Wenn du lieber automatische Vorschaubilder möchtest, setze in `js/config.js` → `youtubeThumbnails: true`. Dann lädt die Seite die Bilder von YouTube. Die Datenschutzseite weist darauf automatisch hin.

---

## Weitere Möglichkeit: Alles im Detail in `content.js`

## Neues Projekt hinzufügen

1. Bild in `/assets/projects` legen
2. `js/content.js` öffnen
3. Im Bereich `const projects = [ ... ]` einen vorhandenen Datensatz kopieren (inkl. `{ ... },`)
4. Titel, Beschreibung, Jahr usw. ändern
5. Bildpfad ändern, z. B. `thumbnail: "assets/projects/mein-projekt.jpg"`
6. Speichern und Browser aktualisieren

Mit `featured: true` erscheint das Projekt auch auf der Startseite.
Als `category` verwendest du die IDs aus `portfolioCategories` (`video`, `design`, `motion`, `thumbnails`, `3d` …). Mehrere gehen so: `category: ["video", "motion"]`.
Die Filter „Photoshop“ und „After Effects“ greifen automatisch über das Feld `software`.

## Neues Video hinzufügen

1. Thumbnail in `/assets/thumbnails` legen
2. `js/content.js` öffnen, im Bereich `const videos = [ ... ]` einen Datensatz kopieren
3. YouTube-URL bei `youtube:` eintragen (normale Videos und Shorts), oder `video: "assets/videos/datei.mp4"` für eine lokale Datei, oder `url:` für eine externe Seite
4. Shorts erscheinen automatisch im Bereich „Shorts“ (Link mit `/shorts/` oder `type: "short"`)

## Neues Bild hinzufügen (Grafik-Galerie)

1. Bild in `/assets/graphics` legen
2. In `js/content.js` im Bereich `const graphics = [ ... ]` einen Datensatz kopieren
3. `src`, `title`, `description` und `category` anpassen

## Social Media hinzufügen

- Kanäle-Seite: `js/content.js` → `const channels = [ ... ]` → Datensatz kopieren, Plattform und URL ändern
- Footer und Kontaktseite: `js/config.js` → `social: [ ... ]`

## E-Mail ändern

`js/config.js` öffnen → `email`. Gilt automatisch für die ganze Website (aktuell: yannik.schmitt.application@gmail.com).

## Impressum

`js/config.js` → `impressum`. Alle Platzhalter ersetzen. Leere Felder (`""`) werden nicht angezeigt.

## Design ändern

`css/style.css` öffnen.

## Farben ändern

Ganz oben in `css/style.css` stehen die CSS-Variablen (`--background`, `--text`, `--accent` …).
Die Farbstimmung der Website kommt von vier Farbtönen: `--c1` (Violett), `--c2` (Pink), `--c3` (Orange), `--c4` (Cyan).
Ändere diese vier Werte (jeweils für Dark und Light Mode), und die ganze Website färbt sich um.
Wer es ruhiger mag, löscht in `style.css` den Abschnitt „13. FARBEBENE“ ganz unten.
Der Light Mode steht direkt darunter bei `:root[data-theme="light"]`.
Alternativ ohne CSS: in `js/config.js` bei `colors` Werte eintragen, z. B. `dark: { "--c1": "#4da3ff", "--c2": "#00e0a4" }`.

## Sprache ändern

`js/language.js` bearbeiten. Neuer Text im HTML: `data-i18n="schlüssel"` setzen und den Schlüssel in `de` und `en` ergänzen.
Texte in `content.js` können als `{ de: "…", en: "…" }` geschrieben werden.
Eine weitere Sprache: Block (z. B. `fr: { … }`) in `translations` kopieren und übersetzen. Der Button erscheint automatisch.

## Hero-Bild und Logo

- Hero-Bild: Datei in `/assets/images` legen, in `config.js` bei `heroImage` eintragen
- Logo: Datei in `/assets/logos` legen, in `config.js` bei `logoImage` eintragen (leer = Text-Logo „MUCCI“)
- Vorschaubild für Social Sharing: `assets/images/og-image.jpg` (1200 × 630 px) ist als farbiges Beispiel schon vorhanden, ersetze es durch ein eigenes

## Vor der Veröffentlichung

1. `www.DEINE-DOMAIN.de` ersetzen in: `config.js` (`website`), allen HTML-Dateien (canonical, Open Graph), `sitemap.xml`, `robots.txt`
2. Impressum-Daten in `config.js` eintragen
3. Datenschutz-Texte in `content.js` prüfen (Hosting-Anbieter und Datum eintragen)
4. Platzhalterbilder durch echte Bilder ersetzen
5. Die Impressum-E-Mail in `config.js` (`impressum.email`) ist noch ein Platzhalter und muss von dir eingetragen werden

## Hinweise

- **Datenschutz/Impressum sind Vorlagen und keine Rechtsberatung.** Bitte vor Veröffentlichung prüfen (lassen).
- **YouTube:** Videos werden erst nach Klick geladen (youtube-nocookie.com). Beim lokalen Öffnen per Doppelklick (`file://`) verweigert YouTube den Player teilweise („Fehler 153“). Online funktioniert er. Der Button „Auf YouTube ansehen“ ist immer da.
- **Erfahrungslevel** in `software` (1–5) sind Startwerte. Bitte an deine Selbsteinschätzung anpassen.
- **Kontaktformular:** Ohne Backend öffnet es nur dein E-Mail-Programm (`mailto:`) und sendet nichts selbst.
- Es werden keine externen Schriften, Bibliotheken oder Tracker geladen.
