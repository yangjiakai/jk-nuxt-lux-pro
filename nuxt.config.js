import config from './src/configs'

const { locale, availableLocales, fallbackLocale } = config.locales
const { gaId } = config.analytics

export default {
  // ssr: false,
  // target: 'static',
  srcDir: 'src/',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nuxt',
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' },
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/theme.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // plugins
    { src: '~/plugins/animate.js', mode: 'client' },
    { src: '~/plugins/apexcharts.js', mode: 'client' },
    { src: '~/plugins/clipboard.js', mode: 'client' },
    { src: '~/plugins/vue-shortkey.js', mode: 'client' },

    // // // filters
    { src: '~/filters/capitalize.js' },
    { src: '~/filters/lowercase.js' },
    { src: '~/filters/uppercase.js' },
    { src: '~/filters/formatCurrency.js' },
    { src: '~/filters/formatDate.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
      optionsPath: '~/configs/vuetify.js',
      treeShake: true,
      defaultAssets: {
        font: false
      }
    }],
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      locales: availableLocales,
      lazy: true,
      langDir: 'translations/',
      defaultLocale: locale,
      vueI18n: {
        fallbackLocale
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: gaId,
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
