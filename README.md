# Mohamed Ali Rafat — Personal Engineering Portfolio (*The Sync Room*)

Fast, static-first software engineering portfolio built with **Astro + TypeScript + Markdown**.

## Architecture & Highlights
- **Static HTML First:** Core biography, career chronology, all three engineering case studies, and the downloadable PDF CV work with zero JavaScript enabled.
- **2D Cartoon Guide + Silent Schematics:** Features three normalized WebP poses (`Welcoming`, `Focused`, `Explaining`) and progressive-enhancement interactive schematics explaining FFmpeg flash-and-beep synchronization testing, timestamp-locked OpenAI glossary correction, and sequential story approvals.
- **Self-hosted assets:** Instrument Sans, IBM Plex Mono, and the character artwork load from the site itself. The layout reserves space for images while they load.

## Local Development

```bash
npm install
npm run dev
```

## Production Static Build & Preview

```bash
npm run build
npm run preview
```

## Updating Case Studies or CV
- **Case Studies:** Edit Markdown files in `src/content/work/*.md`.
- **Experience, Skills & Open Source:** Edit typed data in `src/data/portfolio.ts`.
- **CV PDF:** Replace `public/cv/Mohamed_Ali_Rafat_CV.pdf`.
- **Public site:** https://mohammednoureldeen.github.io/. Internal links and assets use the domain root.
- **Publish an update:** Build locally with `npm run build`. Publish the contents of `dist/` to the root of the `gh-pages` branch with a `.nojekyll` file. GitHub Pages serves that branch. Keep application source on `main`.
- **Optional Actions configuration:** `.github/deploy-pages.example.yml` contains the build-and-deploy workflow for a future switch to Actions.
