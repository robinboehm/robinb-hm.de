# Robin Böhm - Personal Website

Eine moderne, statisch generierte Website mit interaktiver Timeline, parallax Scrolling-Effekten und Blog-Funktionalität.

## 🚀 Features

- ✨ **Moderne UI** mit Tailwind CSS und animierten Effekten
- 📱 **Responsive Design** für alle Gerätegrößen
- 🎨 **Interaktive Timeline** mit Magnify-Effekten
- 📝 **Blog-System** mit Markdown-Unterstützung
- 🌟 **Parallax Scrolling** und Hintergrund-Animationen
- ⚡ **Statisch generiert** mit Astro für beste Performance
- 🎯 **File-basiertes Content Management** - einfaches Hinzufügen neuer Inhalte

## 🛠 Technologie-Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown mit Frontmatter
- **Deployment**: Statische Website-Generation

## 🏁 Schnellstart

### Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Website wird verfügbar unter http://localhost:4321
```

### Build für Production

```bash
# Statische Website generieren
npm run build

# Preview der generierten Website
npm run preview
```

## 📝 Content Management

### Timeline-Einträge hinzufügen

Neue Timeline-Einträge werden als Markdown-Dateien im Verzeichnis `src/content/timeline/` erstellt:

```markdown
---
date: 2024-01-15
title: "Ihr Titel"
description: "Kurze Beschreibung für die Timeline-Ansicht"
type: "work" # work, project, education, achievement, personal
company: "Firmenname (optional)"
location: "Ort (optional)" 
url: "/blog/interner-link" # Optional: Link zu Blog-Artikel
externalUrl: "https://external-link.com" # Optional: Externer Link
featured: true # Optional: Als Featured markieren
tags: ["React", "TypeScript", "Leadership"]
---

# Detaillierte Beschreibung

Hier können Sie ausführlich über diesen Meilenstein schreiben.
Markdown wird vollständig unterstützt.

## Unterabschnitte

- Listen
- **Fetter Text**
- *Kursiver Text*
- [Links](https://example.com)

```code-blocks werden ebenfalls unterstützt```
```

**Timeline-Typen:**
- `work` - Berufliche Positionen (blau)
- `project` - Projekte (lila)
- `education` - Ausbildung/Studium (grün)
- `achievement` - Auszeichnungen/Erfolge (gelb)
- `personal` - Persönliche Meilensteine (pink)

### Blog-Artikel hinzufügen

Blog-Artikel werden im Verzeichnis `src/content/blog/` erstellt:

```markdown
---
title: "Ihr Blog-Titel"
description: "Meta-Beschreibung für SEO und Vorschau"
publishDate: 2024-01-15
updatedDate: 2024-01-16 # Optional
draft: false # true = nicht öffentlich
featured: true # Auf der Startseite anzeigen
tags: ["JavaScript", "Tutorial", "Web Development"]
---

# Ihr Blog-Artikel

Vollständiger Blog-Inhalt in Markdown...
```

## 🎨 Anpassungen

### Design anpassen

- **Farben**: Ändern Sie die Farbpalette in `src/styles/global.css`
- **Layout**: Anpassungen in `src/layouts/Layout.astro`
- **Komponenten**: Individuelle Komponenten in `src/components/`

### Persönliche Informationen

Aktualisieren Sie folgende Dateien:

1. **`src/pages/index.astro`**: Hauptseite mit persönlichen Informationen
2. **`src/layouts/Layout.astro`**: Meta-Informationen und SEO
3. **`src/components/Navigation.astro`**: Logo und Navigation

### Timeline-Animationen

Die Timeline unterstützt verschiedene Effekte:

- **Parallax Scrolling**: Hintergrund-Elemente bewegen sich beim Scrollen
- **Magnify Effect**: Timeline-Einträge vergrößern sich beim Hover
- **Scroll Animations**: Einträge werden beim Scrollen eingeblendet

## 📁 Projektstruktur

```
src/
├── components/          # Wiederverwendbare Komponenten
│   ├── Navigation.astro
│   ├── SimpleTimeline.astro
│   └── ParallaxTimeline.astro
├── content/            # Content Collections
│   ├── config.ts      # Schema-Definitionen
│   ├── timeline/      # Timeline-Einträge (.md)
│   └── blog/          # Blog-Artikel (.md)
├── layouts/           # Seitenlayouts
│   └── Layout.astro
├── pages/            # Website-Seiten
│   ├── index.astro   # Startseite
│   └── blog/
│       └── [...slug].astro  # Blog-Detail-Seite
└── styles/
    └── global.css    # Globale Styles
```

## 🌟 Timeline-Features

### Parallax Scrolling

Die Timeline nutzt CSS-Transformationen und JavaScript für:
- Bewegte Hintergrund-Elemente
- Smooth Scrolling zwischen Abschnitten
- Performance-optimierte Animationen

### Magnify Effect

```css
.timeline-card:hover {
  transform: scale(1.05);
  z-index: 20;
}
```

### Responsive Design

- **Desktop**: Alternating Layout (links/rechts)
- **Mobile**: Stacked Layout mit vereinfachter Timeline
- **Tablet**: Optimierte Abstände und Schriftgrößen

## 🚀 Deployment

### Statische Hosting-Optionen

1. **Netlify**: Automatisches Deployment aus Git-Repository
2. **Vercel**: Zero-Config Deployment
3. **GitHub Pages**: Kostenloser Hosting für öffentliche Repositories
4. **AWS S3 + CloudFront**: Enterprise-Lösung

### Build-Ausgabe

```bash
npm run build
# Generiert dist/ Ordner mit statischen Dateien
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 90+ in allen Kategorien
- 📦 **Bundle Size**: Optimiert durch Astro's Island Architecture
- 🖼️ **Bilder**: Automatische Optimierung (wenn gewünscht)
- 🚀 **Loading**: Progressive Enhancement für JavaScript

## 🤝 Beiträge

Feedback und Verbesserungsvorschläge sind willkommen!

1. Fork des Repositories
2. Feature-Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Änderungen committen (`git commit -m 'Add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Pull Request öffnen

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe `LICENSE` Datei für Details.

## 🆘 Support

Bei Fragen oder Problemen:

- 📧 E-Mail: contact@robinboehm.de
- 💼 LinkedIn: [robinboehm](https://linkedin.com/in/robinboehm)
- 🐙 GitHub: [robinboehm](https://github.com/robinboehm)

---

**Made with ❤️ using Astro and Tailwind CSS**
