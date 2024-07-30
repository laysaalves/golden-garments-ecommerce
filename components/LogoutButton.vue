<template>
  <div v-if="sidebarItemShow">
    <Button
      variant="outline"
      size="icon"
    >
      <LogOutIcon class="w-5 h-5 opacity-40" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { LogOutIcon } from 'lucide-vue-next'
import { useBreakpoint } from '@/composables/useBreakpoint'
const { sidebarItemShow } = useBreakpoint()
</script>
