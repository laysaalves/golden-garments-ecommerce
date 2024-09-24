<template>
  <div class="flex items-center justify-center p-14">
    <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
      >
        <Card class="w-[167px] h-[328px] rounded-lg">
          <NuxtLink :to="{ path: `/product/productsPreCart`, query: { productId: product.id } }">
            <CardContent class="p-1 mb-1">
              <div class="w-full h-[159px] relative cursor-pointer">
                <Badge
                  v-if="product.discountPercentage > 0"
                  variant="secondary"
                  class="absolute top-1.5 left-1.5 z-50 gap-1 text-yellow-500 font-bold"
                >
                  <ArrowDown class="text-yellow-500 w-4 h-4" />
                  {{ product.discountPercentage }}%
                </Badge>
                <img
                  :src="product.imageUrls[0]"
                  class="h-full w-full rounded-lg"
                  :alt="`Imagem do produto ${product.name}`"
                />
              </div>
            </CardContent>
          </NuxtLink>
          <h2 class="font-semibold text-center">{{ product.name }}</h2>
          <div class="flex flex-col justify-center items-center pt-4 mb-1.5">
            <div v-if="product.discountPercentage > 0">
              <p class="text-sm line-through opacity-25">R$ {{ product.price }}</p>
            </div>
            <p class="text-xl font-bold">
              R$ {{ discountedPrice(+product.price, product.discountPercentage) }}
            </p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from 'lucide-vue-next'

const route = useRoute()

const categoryId = route.query.categoryId
const { data: products } = await useFetch(`/api/products/productList`, { query: { categoryId } })

function discountedPrice(basePrice: number, discount: number): number {
  const discountPercentage = basePrice * (discount / 100)
  const newPrice = basePrice - discountPercentage
  return newPrice
}
</script>
