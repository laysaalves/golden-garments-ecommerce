<template>
  <AppCategoryHeader title="Brasileirão A" />
  <div
    v-for="product in products"
    :key="product.id"
  >
    <Card>
      <NuxtLink :to="`/product/${product.slug}`">
        <CardContent>
          <div>
            <img
              :src="product.imageUrls[0]"
              class="w-28 object-cover"
              :alt="product.name"
            />
          </div>
        </CardContent>
      </NuxtLink>
    </Card>
  </div>
</template>

<script lang="ts" setup>
const { data: products } = await useFetch(`/api/products`)
</script>
