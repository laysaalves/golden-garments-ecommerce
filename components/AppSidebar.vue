<template>
  <div v-if="sidebarShow">
    <Sheet>
      <SheetTrigger as-child>
        <Button
          variant="outline"
          size="icon"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <Separator class="mt-3" />
        </SheetHeader>
        <div class="relative w-full max-w-xl items-center mt-4">
          <Search />
          <div class="flex flex-col gap-2.5 mt-3.5">
            <Button
              variant="outline"
              class="w-full"
              @click="$router.push('/')"
            >
              <HomeIcon class="w-5 h-5 mr-2.5 text-yellow-500" /> Voltar ao início
            </Button>
            <Button
              variant="outline"
              class="w-full"
            >
              <ShoppingBasket class="w-5 h-5 mr-2.5 text-yellow-500" /> Categorias
            </Button>
          </div>
        </div>
        <div class="flex flex-row gap-2 mt-6 justify-center items-center">
          <AccountButton />
          <LogoutButton v-if="user.UserAuth !== null" />
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, MenuIcon, ShoppingBasket } from 'lucide-vue-next'
import { useBreakpoint } from '@/composables/useBreakpoint'
const { sidebarShow } = useBreakpoint()
const user = useUserAuthStore()
</script>
