module.exports = {
  plugins: [
    { src: '~/plugins/headroom', ssr: false },
    { src: '~/plugins/components', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/axios.js' }
  ],
  css: [
    '@/assets/sass/web.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vue-typer']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}