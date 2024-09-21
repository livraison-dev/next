export default defineNuxtConfig({
  compatibilityDate: '2024-09-21',
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
    '@nuxt/fonts',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  fonts: {
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin',
      ],
    },
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
