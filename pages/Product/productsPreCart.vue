<template>
  <div class="flex items-center justify-center p-12">
    <div
      v-for="product in products"
      :key="product.id"
    >
      <div class="md:hidden">
        <ProductImages />
        <div class="flex flex-col items-center justify-center mt-2">
          <ProductDetails />
        </div>
        <div class="flex flex-col justify-center items-center gap-6 mt-4">
          <QuantitySelect />
          <SizeSelect />
        </div>
        <div class="mt-4">
          <Button class="font-bold w-full uppercase">Adicionar ao carrinho</Button>
        </div>
        <div class="mt-6">
          <Separator
            label="Mais sobre o produto"
            class="my-4"
          />
          <h2 class="text-justify">{{ product.description }}</h2>
        </div>
      </div>

      <div class="hidden md:block">
        <div class="lg:flex lg:items-center lg:justify-between lg:gap-6">
          <ProductImages />
          <Card class="max-w-[600px]">
            <CardContent>
              <div class="flex flex-col items-center justify-center mt-2">
                <ProductDetails />
              </div>
              <div class="flex flex-col justify-center items-center gap-6 mt-4">
                <QuantitySelect />
                <SizeSelect />
              </div>
              <div class="mt-4">
                <Button class="font-bold w-full uppercase">Adicionar ao carrinho</Button>
              </div>
              <div class="mt-6">
                <Separator
                  label="Mais sobre o produto"
                  class="my-4"
                />
              </div>
              <h2 class="text-justify">{{ product.description }}</h2>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import QuantitySelect from './components/QuantitySelect.vue'
import SizeSelect from './components/SizeSelect.vue'
import ProductImages from './components/ProductImages.vue'
import ProductDetails from './components/ProductDetails.vue'
const route = useRoute()

const productId = route.query.productId
const { data: products } = await useFetch(`/api/products/productDetails`, { query: { productId } })
</script>
