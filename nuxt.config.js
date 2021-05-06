export default {
  // Nuxt rendering mode - https://nuxtjs.org/api/configuration-mode
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)  // Nuxt target - https://nuxtjs.org/api/configuration-target
  target: 'server',

  // Server host - https://nuxtjs.org/faq/host-port/
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  head: {
    htmlAttrs: {
      lang: 'es-AR'
    },
    title: 'San Benito',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sistema Municipal Online de la ciudad de San Benito - Desarrollado por meltri.ar' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/img/logo.svg' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '@/assets/sass/general.scss', lang: 'scss' }
  ],

  styleResources: {
    scss: ['./assets/sass/*.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/fontawesome',
    "nuxt-compress",
    '@nuxtjs/vuetify'
  ],
  
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    //'nuxt-buefy'
    
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    host: 'localhost',
    prefix: '/api/v1/'
  },
  proxy: {
    '/api/v1/': 'http://localhost:3333/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/nuxt/',
    sass: {
      indentedSyntax: true
    }
  },

  watchOptions: {
    ignored: /node_modules/
  },
  
  // FontAwesome
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  pwa:{
    icon:{
      source: '@/static/icon.png',
    },
    meta:{
      charset: 'utf-8',
      name: 'San Benito',
      author: 'Gonzalo Villanueva',
      description: 'Ciudad de San Benito'
    },
    manifest: {
      name: 'Ciudad de San Benito',
      short_name: 'San Benito',
      description: 'Ciudad de San Benito',
      display: 'standalone',
      theme_color: '#7AA228',
      background_color: '#ffffff',
      lang: 'es-AR'
    },
    workbox: {
      cachingExtensions: '@/utils/Workbox.js'
    }
  },
}
