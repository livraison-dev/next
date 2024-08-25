export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
    'nuxt-vitest',
    'nuxt-mongoose',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  mongoose: {
    options: {
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASS,
    },
    devtools: true,
  },
  devtools: {
    timeline: {
      enabled: true,
    },
  },
})
