# DF Isolationen

Statische One-Pager-Website für **DF Isolationen GmbH** — Generalunternehmung in Zürich für Fassaden- und Bodenisolationen, Maler-, Gipser-, Umbau- und Neubauarbeiten.

🌐 **Live:** [dfgmbh.ch](https://www.dfgmbh.ch)

---

## Tech-Stack

| Layer | Choice |
| --- | --- |
| Framework | [Astro 5](https://astro.build) (static output, zero client-side JS) |
| Typografie | [Schibsted Grotesk](https://github.com/fontsource/font-files/tree/main/fonts/variable/schibsted-grotesk) + [Newsreader](https://github.com/fontsource/font-files/tree/main/fonts/variable/newsreader) (variable, self-hosted) |
| Bilder | [`sharp`](https://sharp.pixelplumbing.com/) (AVIF / WebP / JPEG) via `astro:assets` |
| SEO | [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) + JSON-LD im `BaseLayout` |
| Hosting | [Vercel](https://vercel.com) |

---

## Lokal entwickeln

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # statisches Output in ./dist
npm run preview      # Build lokal vorschauen
```

---

## Projektstruktur

```
src/
├── assets/images/     Fotos (durch astro:assets optimiert)
├── components/        Header, Hero, Services, About, Process, Contact, Footer, Logo
├── data/site.ts       Single source of truth für alle Texte und Kontaktdaten
├── layouts/           BaseLayout mit SEO-Meta + JSON-LD
├── pages/             index, impressum, datenschutz
└── styles/global.css  Design-Tokens, Reset, Typo
public/                statische Assets (favicon, og-image, robots.txt)
```

---

## Inhalte ändern

Alle Texte, Telefonnummern und Service-Beschreibungen liegen zentral in **`src/data/site.ts`** — Änderungen dort propagieren automatisch auf die Seite.

```ts
// src/data/site.ts
export const site = {
  contact: {
    email: 'kontakt@dfisolationen.ch',
    phones: [...],
  },
  services: [...],
  processSteps: [...],
};
```

## Bilder austauschen

Job-Fotos in `src/assets/images/` ersetzen — Dateinamen müssen den Slots entsprechen:

| Datei | Slot |
| --- | --- |
| `hero.jpg` | Hero-Section |
| `service-fassade.jpg` | Service-Karte Fassadenisolation |
| `service-boden.jpg` | Service-Karte Bodenisolation |
| `service-maler.jpg` | Service-Karte Malerarbeiten |
| `service-gipser.jpg` | Service-Karte Gipserarbeiten |
| `service-umbau.jpg` | Service-Karte Umbau |
| `service-neubau.jpg` | Service-Karte Neubau / GU |
| `about.jpg` | Über-uns-Section |

Initiale Platzhalter stammen von [Unsplash](https://unsplash.com) (kommerziell freie Nutzung).

## Logo

Das aktuelle Wordmark in `src/components/Logo.astro` ist ein Platzhalter. Für ein echtes Logo:

1. SVG-Datei in `public/logo.svg` ablegen
2. `Logo.astro` durch `<img src="/logo.svg" />` ersetzen oder den SVG-Inhalt inline einbetten

---

## Deployment

Auto-Deploy via Vercel — Push auf `main` triggert Production-Build:

- **Framework Preset:** Astro (Auto-Detect)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variables:** keine erforderlich

---

## Lizenz

Quellcode privat. Bildmaterial: Initiale Fotos von Unsplash (kommerziell nutzbar, keine Attribution Pflicht).
