module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my test project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mylogo.ico' }
    ]
  },
  css:['~assets/css/normailze.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
      looders:[{
          test:/\.(png|jge?g|gif|svg)$/,
          loader:'url-loarder',
          query:{
              limit:10000,
              name:'img/[name].[hash].[ext]'
          }
      }],
      
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
