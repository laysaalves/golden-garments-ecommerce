<template>
  <div class="lg:block hidden">
    <NuxtLink
      :to="{
        path: `/product/productsPreCart`,
        query: { productId: 'eff5abb4-14d3-41c0-b88e-6f92dd9765b4' },
      }"
    >
      <img
        src="/banner-web.png"
        class="w-full"
      />
    </NuxtLink>
  </div>
  <div class="lg:hidden">
    <NuxtLink
      :to="{
        path: `/product/productsPreCart`,
        query: { productId: 'eff5abb4-14d3-41c0-b88e-6f92dd9765b4' },
      }"
    >
      <img
        src="/banner-mobile.png"
        class="w-full"
      />
    </NuxtLink>
  </div>
  <div
    class="flex lg:justify-center lg:items-center gap-6 overflow-auto [&::-webkit-scrollbar]:hidden pt-8"
  >
    <CategorySection />
  </div>
</template>
