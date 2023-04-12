import {Tigris} from '@tigrisdata/core'

export function useTigrisClient(): Tigris {
  if (!globalThis.tigrisClient) {
    console.error('Tigris has not been initialized correctly')
  }

  return globalThis.tigrisClient
}
