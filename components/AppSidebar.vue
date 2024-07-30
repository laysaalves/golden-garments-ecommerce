<template>
  <div v-if="isSidebarShow">
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
        <div class="flex items-center gap-3">
          <div>
            <Search />
            <AccountButton v-if="isSidebarItemShow" />
            <LogoutButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { MenuIcon } from 'lucide-vue-next'
import { useBreakpoint } from '@/composables/useBreakpoint'
const { isSidebarShow, isSidebarItemShow } = useBreakpoint()
</script>
