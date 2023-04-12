import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tigris from '@tigrisdata/astro'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tigris({
    branch: 'main',
    projectName: 'YOUR_PROJECT_NAME',
    clientId: 'YOUR_TIGRIS_CLIENT_ID',
    clientSecret: 'YOUR_TIGRIS_CLIENT_SECRET',
  })],
});