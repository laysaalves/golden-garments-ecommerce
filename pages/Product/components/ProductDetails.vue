<template>
  <div
    v-for="product in products"
    :key="product.id"
  >
  <div class="mt-1">
    <h1 class="text-2xl">{{ product.name }}</h1>
  </div>
    <div class="flex flex-row items-center justify-center gap-2 mt-4 mb-4">
      <p class="line-through opacity-20 text-lg">R$ {{ product.price }}</p>
      <p class="text-2xl font-bold">R$ {{ product.price }}</p>
      <Badge
        v-if="product.discountPercentage > 0"
        variant="secondary"
        class="gap-1 text-yellow-500 font-bold"
      >
        <ArrowDown class="text-yellow-500 w-4 h-4" />
        {{ product.discountPercentage }}%
      </Badge>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from 'lucide-vue-next'
const route = useRoute()
const productId = route.query.productId
const { data: products } = await useFetch(`/api/products/productDetails`, { query: { productId } })
</script>
