<template>
    <div v-for="category in categories" :key="category.id">
      <h2>{{ category.name }}</h2>
    </div>
</template>

<script setup>
const { data: categories } = await useFetch('/api/categories');
</script>