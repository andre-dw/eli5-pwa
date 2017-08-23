module.exports = {
  router: {
    linkActiveClass: 'active'
  },
  plugins: [
    { src: '~/plugins/headroom', ssr: false },
    { src: '~/plugins/components', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vanilla-tilt', ssr: false },
    { src: '~/plugins/axios.js'}
  ],
  loaders: [
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1KO
        name: 'img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1000, // 1 KO
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }
  ],
  css: [
    '@/assets/sass/web.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vue-typer', 'vue-events', 'vue-moment', 'vue-touch'],
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'Eli5.io - A design driven tech team that solves problems.',
    meta: [
      { name: 'application-name', content: 'Eli5' },
      { name: 'description', content: 'We create cutting edge digital experiences by combining strategy, technology and design.', id: 'desc' } // id to replace intead of create element
    ]
  },
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