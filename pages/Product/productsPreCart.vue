<template>
  <div class="flex items-center justify-center p-14">
    <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
      >
        <Card class="min-w-[167px] max-w-[167px] rounded-lg">
          <CardContent class="p-1 mb-1">
            <img
              :src="product.imageUrls[0]"
              :alt="`Imagem do produto ${product.name}`"
              class="h-[159px] w-full rounded-lg"
            />
            <img
              :src="product.imageUrls[1]"
              :alt="`Imagem do produto ${product.name}`"
              class="h-[159px] w-full rounded-lg"
            />
            <img
              :src="product.imageUrls[2]"
              :alt="`Imagem do produto ${product.name}`"
              class="h-[159px] w-full rounded-lg"
            />
            <img
              :src="product.imageUrls[3]"
              :alt="`Imagem do produto ${product.name}`"
              class="h-[159px] w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const productId = route.query.productId
const { data: products } = await useFetch(`/api/products/productDetails`, { query: { productId } })
</script>
