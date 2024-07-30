<template>
  <Card>
    <CardContent class="flex flex-row items-center justify-between p-6">
      <AppSidebar />
      <AppLogo />
      <Search v-if="headerContentShow" />
      <div class="flex flex-row items-center gap-2">
        <AccountButton v-if="headerContentShow" />
        <Cart />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { useBreakpoint } from '@/composables/useBreakpoint'
const { headerContentShow } = useBreakpoint()
</script>
