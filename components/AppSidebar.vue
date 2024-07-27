<template>
  <div class="lg:hidden">
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
        
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { MenuIcon } from 'lucide-vue-next'
</script>
