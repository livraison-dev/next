import { integer, pgTable, text } from 'drizzle-orm/pg-core'

export const User = pgTable('User', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
})
