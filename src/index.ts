import { TigrisClientConfig } from '@tigrisdata/core'
import { AstroIntegration } from 'astro'

export { useTigrisClient } from './useTigrisClient'
export { useTigrisCollection } from './useTigrisCollection'

import { vitePluginTigrisInit } from './vite-plugin-tigris-init'

export default function astroTigrisIntegration(
  options: TigrisClientConfig
): AstroIntegration {
  return {
    name: 'astro-tigris',
    hooks: {
      'astro:config:setup': ({ injectScript, updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [vitePluginTigrisInit(options)]
          }
        })
        injectScript(
          'page-ssr',
          `
          import { tigrisClient } from "virtual:tigris-init";
          globalThis.tigrisClient = tigrisClient;
          `
        )
      }
    }
  }
}
