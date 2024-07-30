<template>
  <div v-if="isSidebarItemShow">
    <Button
      variant="outline"
      size="icon"
    >
      <LogOutIcon class="w-5 h-5 opacity-65" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { LogOutIcon } from 'lucide-vue-next'
import { useBreakpoint } from '@/composables/useBreakpoint'
const { isSidebarItemShow } = useBreakpoint()
</script>
