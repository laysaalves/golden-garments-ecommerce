<template>
  <div class="flex items-center gap-2 border-2 rounded-md">
    <Button
      variant="link"
      class="size-12 p-0"
    >
      <Minus class="text-yellow-500 w-4 h-4" />
    </Button>
    <span>1</span>
    <Button
      variant="link"
      class="size-12 p-0"
    >
      <Plus class="text-yellow-500 w-4 h-4" />
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { Minus, Plus } from 'lucide-vue-next'
</script>