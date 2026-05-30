import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

import icon from "astro-icon";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
});