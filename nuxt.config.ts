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
    'nuxt-module-chrome-devtools',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  devtools: {
    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    db: {
      url: import.meta.env.DATABASE_URL,
      dir: './server/db',
    },
  },
})
