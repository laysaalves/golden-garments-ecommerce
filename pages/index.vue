<template>
  <div class="lg:block hidden">
    <img src="/banner-web.png" class="w-full" />
  </div>
  <div class="lg:hidden">
    <img src="/banner-mobile.png" class="w-full" />
  </div>
  <div class="flex lg:justify-center lg:items-center gap-6 overflow-auto [&::-webkit-scrollbar]:hidden pt-8">
    <CategorySection />
  </div>
</template>

