<template>
  <div class="flex flex-row items-center justify-center gap-4 p-10">
    <NuxtLink to="/">
      <ArrowLeftFromLine class="text-yellow-500 w-6 h-6" />
    </NuxtLink>
    <h1 class="text-xl">{{ props.title }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeftFromLine } from 'lucide-vue-next'
type Props = {
  title: string
}
const props = defineProps<Props>()
</script>
