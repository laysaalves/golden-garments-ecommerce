<template>
  <Card class="rounded-none">
    <CardContent class="flex flex-row items-center justify-between p-6">
      <AppSidebar />
      <AppLogo />
      <Search v-if="topBarContentShow" />
      <div class="flex flex-row items-center gap-2">
        <AccountButton v-if="topBarContentShow" />
        <LogoutButton v-if="topBarContentShow && user.UserAuth !== null" />
        <Cart />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { useBreakpoint } from '@/composables/useBreakpoint'
const { topBarContentShow } = useBreakpoint()
const user = useUserAuthStore()
</script>
