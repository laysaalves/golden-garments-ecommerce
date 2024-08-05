// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-22',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxtjs/tailwindcss", 
    "shadcn-nuxt",
    "nuxt-vuefire",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: `${process.env.VUEFIRE_API_KEY}`,
      authDomain: "ourodosmantos.firebaseapp.com",
      projectId: "ourodosmantos",
      storageBucket: "ourodosmantos.appspot.com",
      messagingSenderId: "741890818255",
      appId: "1:741890818255:web:8f5879101363506bccf7ba"
    }
  },
});