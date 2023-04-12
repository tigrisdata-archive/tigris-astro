import { Plugin } from 'vite'
import type { TigrisClientConfig } from '@tigrisdata/core'

export function vitePluginTigrisInit(config: TigrisClientConfig): Plugin {
  const virtualModuleId = 'virtual:tigris-init'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vite-plugin-tigris-init',
    async resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    async load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `
          import { Tigris } from "@tigrisdata/core";
          export const tigrisClient = new Tigris(${JSON.stringify(config)});
        `
      }
    }
  }
}
