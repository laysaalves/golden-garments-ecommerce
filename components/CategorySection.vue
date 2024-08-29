<template>
  <div
    v-for="category in categories"
    :key="category.id"
  >
    <Card class="min-w-[167px] rounded-full border-zinc-900">
      <NuxtLink :to="`/category/${category.slug}`">
        <CardContent class="p-0 pt-1">
          <div class="flex justify-center items-center h-[159px] w-full">
            <img
              :src="category.imageUrl"
              class="w-28 object-cover"
              :alt="category.name"
            />
          </div>
        </CardContent>
      </NuxtLink>
    </Card>
    <NuxtLink :to="`/category/${category.slug}`">
      <div class="flex justify-center items-center mt-4">
        <span class="text-xs font-bold text-yellow-500">{{ category.name }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { data: categories } = await useFetch('/api/categories')
</script>
