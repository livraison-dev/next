// import {neon, neonConfig, NeonQueryFunction} from '@neondatabase/serverless'
// import { NeonHttpDatabase} from 'drizzle-orm/neon-http'
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { drizzle } from 'drizzle-orm/postgres-js'

import postgres from 'postgres'

// eslint-disable-next-line ts/no-empty-object-type
let sql: postgres.Sql<{}> | null
let db: PostgresJsDatabase<Record<string, never>> | null

export function useDb() {
  const config = useRuntimeConfig()
  if (sql && db)
    return db

  if (!config.db.url)
    throw new Error('Missing db.url in runtime config')

  sql = postgres(config.db.url, { max: 1 })
  db = drizzle(sql)

  return db
}
