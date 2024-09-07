<template>
  <footer
    class="px-5 py-6 bg-accent text-sm"
    aria-label="Rodapé da página"
  >
  Copyright © {{ currentYear }} <span class="font-bold">Layseiras</span>
  </footer>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>
