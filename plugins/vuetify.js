import '@mdi/font/css/materialdesignicons.css'
import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createVuetify({
      components,
      directives,
      icons: {
        defaultSet: 'mdi',
      },
    })
  )
})
