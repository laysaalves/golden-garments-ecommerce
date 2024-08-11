<template>
    <div v-for="category in categories" :key="category.id">
      <Card class="min-w-[167px] rounded-full bg-yellow-200 border-zinc-900">
        <CardContent class="p-0 pt-1">
          <div class="flex justify-center items-center h-[159px] w-full">
            <img :src="category.imageUrl" class="w-28 object-cover" :alt="category.name" />
          </div>
        </CardContent>
      </Card>
    </div>
</template>

<script setup>
const { data: categories } = await useFetch('/api/categories');
</script>