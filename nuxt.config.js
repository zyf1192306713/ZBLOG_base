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
      { name: 'format-detection', content: 'telephone=no' },
      // 不加这个，访问图片会403
      { name: 'referrer', content: 'no-referrer' }
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
    { src: '~/plugins/common.js', ssr: false },
    { src: '~/plugins/vue-particles', ssr: false },
    // { src: '@vuepress/blog', ssr: false },
    // '@vuepress/blog'

    

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios','@nuxtjs/proxy'
  ],
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api/channel', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: 'http://47.94.142.215:8081', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    vendor: ['axios'] //为防止重复打包
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
      //博客详情
      {
        path: '/blogDetails',
        name: 'blogDetails',
        component: resolve(__dirname, 'pages/blog/blogDetails.vue')
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
