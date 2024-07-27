<template>
  <div class="max-lg:hidden">
    <Button
      variant="outline"
      @click="$router.push('/login')"
    >
      <UserRound class="w-5 h-5 mr-2.5" /> Olá, Laysa Alves
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { UserRound } from 'lucide-vue-next'
</script>
