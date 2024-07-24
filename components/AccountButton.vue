<template>
  <div class="max-lg:hidden">
    <Button
      variant="outline"
      size="icon"
      @click="$router.push('/login')"
    >
      <UserRound />
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { UserRound } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
</script>
