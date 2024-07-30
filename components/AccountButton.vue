<template>
  <div v-if="sidebarItemShow">
    <Button
      variant="outline"
      @click="$router.push('/login')"
      size="lg"
    >
      <UserCircle2 class="w-5 h-5 mr-2.5 text-yellow-500" /> Faça o login
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { UserCircle2 } from 'lucide-vue-next'
import { useBreakpoint } from '@/composables/useBreakpoint'
const { sidebarItemShow } = useBreakpoint()
</script>
