import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        name: {
          in: ['Brasileirão A'],
        },
      },
    },
  })
  return products
})
