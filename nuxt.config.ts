// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  pages: true,
  modules: [
    '@nuxtjs/i18n',
    'nuxt-primevue',
    '@nuxtjs/tailwindcss'
  ],
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ua', iso: 'uk-UA', file: 'ua.json', name: 'Українська' }
    ]
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css'],
})
