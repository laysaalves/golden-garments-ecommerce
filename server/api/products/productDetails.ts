import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const url = new URL(event.node.req.url || '', `http://${event.node.req.headers.host}`)
  const productId = url.searchParams.get('productId')
  if (!productId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'productId is required',
    })
  }
  const products = await prisma.product.findMany({
    where: {
      id: productId,
    },
  })
  return products
})
