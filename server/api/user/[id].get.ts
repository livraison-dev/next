import { User } from '~~/server/database/schema/user'
import { useDb } from '~~/server/utils/db'
import { eq } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const id = Number.parseInt(event.context.params.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  const db = useDb()
  const user = await db.select().from(User).where(eq(User.id, id))
  return {
    user,
  }
})
