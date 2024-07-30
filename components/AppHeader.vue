<template>
  <Card>
    <CardContent class="flex flex-row items-center justify-between p-6">
      <AppSidebar />
      <AppLogo />
      <Search v-if="isHeaderContentShow" />
      <div class="flex flex-row items-center gap-2">
        <AccountButton v-if="isHeaderContentShow" />
        <LogoutButton v-if="isHeaderContentShow" />
        <Cart />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { useBreakpoint } from '@/composables/useBreakpoint'
const { isHeaderContentShow } = useBreakpoint()
</script>
