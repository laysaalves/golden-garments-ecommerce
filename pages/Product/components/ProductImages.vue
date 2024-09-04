<template>
  <div
    v-for="product in products"
    :key="product.id"
  >
    <Carousel class="max-w-[600px] lg:flex lg:items-center lg:justify-center">
      <CarouselContent>
        <CarouselItem>
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <img
                  :src="product.imageUrls[0]"
                  :alt="`Imagem do produto ${product.name}`"
                  class="rounded-md w-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <img
                  :src="product.imageUrls[1]"
                  :alt="`Imagem do produto ${product.name}`"
                  class="rounded-md w-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <img
                  :src="product.imageUrls[2]"
                  :alt="`Imagem do produto ${product.name}`"
                  class="rounded-md w-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <img
                  :src="product.imageUrls[3]"
                  :alt="`Imagem do produto ${product.name}`"
                  class="rounded-md w-full"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const productId = route.query.productId
const { data: products } = await useFetch(`/api/products/productDetails`, { query: { productId } })
</script>
