// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-22',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});