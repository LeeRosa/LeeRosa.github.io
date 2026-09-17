import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://leerosa.github.io',

  vite: {
    server: {
      watch: {
        ignored: ['**/.vs/**'],
      },
    },
  },
});