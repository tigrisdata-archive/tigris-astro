import { Collection, Tigris, TigrisCollectionType } from '@tigrisdata/core'

export async function useTigrisCollection<T extends TigrisCollectionType>(
  name: string
): Promise<Collection<T>> {
  if (!globalThis.tigrisClient) {
    console.error('Tigris has not been initialized correctly')
  }

  const db = (globalThis.tigrisClient as Tigris).getDatabase()
  return db.getCollection<T>(name)
}
