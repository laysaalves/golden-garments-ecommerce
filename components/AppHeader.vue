<template>
  <Card>
    <CardContent class="flex flex-row items-center justify-between p-6">
      <AppSidebar />
      <AppLogo />
      <Search />
      <div class="flex flex-row items-center gap-2">
        <AccountButton />
        <Cart />
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>
import Card from './ui/card/Card.vue'
import CardContent from './ui/card/CardContent.vue'
import AppLogo from './AppLogo.vue'
import AppSidebar from './AppSidebar.vue'
import Cart from './Cart.vue'
import AccountButton from './AccountButton.vue'
import Search from './Search.vue'
</script>
