import { defineConfig } from 'astro/config';
import tigris from '@tigrisdata/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tigris({
      branch: 'main',
      projectName: 'YOUR_PROJECT_NAME',
      clientId: 'YOUR_TIGRIS_CLIENT_ID',
      clientSecret: 'YOUR_TIGRIS_CLIENT_SECRET',
    })],
});