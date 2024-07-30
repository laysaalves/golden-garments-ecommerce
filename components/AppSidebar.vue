<template>
  <div v-if="SidebarShow">
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
            <AccountButton />
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
const { SidebarShow } = useBreakpoint()
</script>
