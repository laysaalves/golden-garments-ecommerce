<template>
  <Card>
    <CardContent class="flex flex-row items-center justify-between p-6">
      <AppSidebar />
      <AppLogo />
      <Search v-if="HeaderContentShow" />
      <div class="flex flex-row items-center gap-2">
        <AccountButton v-if="HeaderContentShow" />
        <LogoutButton v-if="HeaderContentShow" />
        <Cart />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { useBreakpoint } from '@/composables/useBreakpoint'
const { HeaderContentShow } = useBreakpoint()
</script>
