import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    "charset": "utf-8",
    "viewport": "width=device-width, initial-scale=1",
    'link': [
      { rel: 'stylesheet', href: 'billboard.js/dist/billboard.css' },
      { rel: 'stylesheet', href: 'billboard.js/dist/theme/insight.css' },
      { rel: 'stylesheet', href: 'tui-grid/dist/tui-grid.css' },
    ],
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  target: 'static',
})
