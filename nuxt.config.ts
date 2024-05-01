// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false } ,
  //  enable layout transitions to apply an automatic transition for all my layouts
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  plugins:[{src:'~/plugins/bootstrap',mode:'client'}],
    css : ["~/public/css/font.css" ,"~/public/css/main.css"],
   modules: ['@nuxt/ui','nuxt-icons']
})
  