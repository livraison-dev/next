import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schema',
  out: './server/database/migrations',
  dbCredentials: {
    url: import.meta.env.DATABASE_URL!,
  },
})
