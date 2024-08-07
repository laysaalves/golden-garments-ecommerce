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
  <div v-if="user.UserAuth !== null">
    <Button variant="outline" size="lg">
      <Avatar class="flex items-center gap-3 px-5 py-6">
        <AvatarImage :src="user.UserAuth.photoURL"/>
      </Avatar>
      <h2 class="text-sm font-semibold text-yellow-500">{{ user.UserAuth.displayName }}</h2>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { UserCircle2 } from 'lucide-vue-next'
import { useBreakpoint } from '@/composables/useBreakpoint'
const { sidebarItemShow } = useBreakpoint()
import { useUserAuthStore } from '~/stores/userAuth'
const user = useUserAuthStore()
</script>
