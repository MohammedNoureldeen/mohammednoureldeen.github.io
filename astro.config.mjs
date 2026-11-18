import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mohammednoureldeen.github.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
