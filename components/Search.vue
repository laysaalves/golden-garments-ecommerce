<template>
  <div class="relative w-full max-w-xl items-center max-lg:hidden">
    <Input id="search" type="text" placeholder="Encontre o seu manto" class="pl-10" />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground text-yellow-500" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import Input from './ui/input/Input.vue';
import { Search } from 'lucide-vue-next';
</script>