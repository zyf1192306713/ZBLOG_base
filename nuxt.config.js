export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zblog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/styles/index.less',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    { src: '~/plugins/common.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        name: 'index',
        component: resolve(__dirname, 'pages/index.vue')
      }, 
      {
        path: '/blog',
        name: 'blog',
        component: resolve(__dirname, 'pages/blog/index.vue')
      },
      {
        path: '/tag',
        name: 'tag',
        component: resolve(__dirname, 'pages/tag/index.vue')
      },
      //时间线
      {
        path: '/timeLine',
        name: 'timeLine',
        component: resolve(__dirname, 'pages/timeLine/index.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: resolve(__dirname, 'pages/contact/index.vue')
      }
      )
    }
  },
}
