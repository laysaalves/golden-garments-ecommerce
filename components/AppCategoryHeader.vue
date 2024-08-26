<template>
  <div class="flex flex-row items-center lg:justify-center p-10">
    <div class="border-b-2 border-yellow-500">
      <h1 class="text-xl uppercase">{{ props.title }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string
}
const props = defineProps<Props>()
</script>
