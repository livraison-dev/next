import prisma from '~~/lib/prisma'

export default defineEventHandler(async (event) => {
  const id = Number.parseInt(event.context.params.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  const user = await prisma.user.findUnique({
    where: { id },
  })
  return {
    user,
  }
})
