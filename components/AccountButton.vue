<template>
  <div v-if="sidebarItemShow && user.UserAuth === null">
    <Button
      variant="outline"
      @click="$router.push('/login')"
      size="lg"
    >
      <UserCircle2 class="w-5 h-5 mr-2.5 text-yellow-500" /> Faça o login
    </Button>
  </div>
  <div
    v-if="user.UserAuth !== null"
    class="flex items-center gap-3 pr-4"
  >
    <Avatar>
      <AvatarImage :src="user.UserAuth.photoURL" />
      <AvatarFallback v-if="!user.UserAuth.photoURL">{{
        user.UserAuth.displayName.substring(0, 2).toUpperCase()
      }}</AvatarFallback>
    </Avatar>
    <h2 class="font-semibold text-yellow-500">Olá, {{ user.UserAuth.displayName }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { UserCircle2 } from 'lucide-vue-next'
import { useBreakpoint } from '@/composables/useBreakpoint'
const { sidebarItemShow } = useBreakpoint()
const user = useUserAuthStore()
</script>
