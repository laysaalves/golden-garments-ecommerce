<template>
  <div class="flex items-center justify-center p-14">
    <div class="grid grid-cols-2 md:grid-cols-2 gap-8">
      <div
        v-for="category in categories"
        :key="category.id"
      >
        <Card class="min-w-[167px] max-w-[167px] rounded-md">
          <NuxtLink
            :to="{ path: `/category/productsByCategory`, query: { categoryId: category.id } }"
          >
            <CardContent class="p-1 mb-1">
              <div class="flex justify-center items-center h-[159px] w-full">
                <img
                  :src="category.imageUrl"
                  class="w-full"
                  :alt="`Imagem da categoria ${category.name}`"
                />
              </div>
            </CardContent>
          </NuxtLink>
          <Card class="bg-accent rounded-md rounded-t-none">
            <CardContent class="p-1 mb-1">
              <p class="font-semibold text-center text-yellow-500">{{ category.name }}</p>
            </CardContent>
          </Card>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: categories } = await useFetch('/api/categories')
</script>
