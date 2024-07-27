<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button
        variant="outline"
        size="icon"
      >
        <LucideShoppingCart />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Seu carrinho</SheetTitle>
        <Separator class="mt-3" />
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { LucideShoppingCart } from 'lucide-vue-next'
</script>
