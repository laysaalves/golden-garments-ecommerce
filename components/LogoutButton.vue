<template>
  <div v-if="SidebarItemShow">
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
const { SidebarItemShow } = useBreakpoint()
</script>
