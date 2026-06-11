import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build
export default defineConfig({
  site: 'https://jishnujayaraj.netlify.app',
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@react-three/fiber'],
    },
  },
});
