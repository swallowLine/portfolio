import pkg from './package'
const webpack = require('webpack')

export default {
  generate: {
    fallback: true
  },

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | ポートフォリオ',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ポートフォリオ' },
      { name: 'keywords', content: 'ポートフォリオ,実績' },
      { name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  // ここから
  build: {
    vendor: [
      'gsap'
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/mixin'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: '/static/',
    extend(config, ctx) {
    }
  },
  router: {
    base: '/portfolio/'
  }
}
