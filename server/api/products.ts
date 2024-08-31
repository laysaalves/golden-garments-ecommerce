import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const url = new URL(event.node.req.url || '', `http://${event.node.req.headers.host}`)
  const categoryId = url.searchParams.get('categoryId')
  if (!categoryId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'categoryId is required',
    })
  }
  const productsByCategory = await prisma.product.findMany({
    where: {
      categoryId,
    },
  })
  return productsByCategory
})
