<template>
  <div class="flex items-center gap-2 border rounded-md">
    <Button
      variant="link"
      class="size-8 p-0"
      @click="decrement"
      :disabled="count === 1"
    >
      <Minus class="text-yellow-500 w-4 h-4" />
    </Button>
    <span>{{ count }}</span>
    <Button
      variant="link"
      class="size-8 p-0"
      @click="increment"
      :disabled="count === 3"
    >
      <Plus class="text-yellow-500 w-4 h-4" />
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'

const count = ref(1)

const increment = () => {
  if (count.value < 3) {
    count.value++
  }
}

const decrement = () => {
  if (count.value > 1) {
    count.value--
  }
}
</script>
