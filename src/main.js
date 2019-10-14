// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'
import VueGtm from 'vue-gtm'
// import Vuetify from 'vuetify'
//
// Vue.use(Vuetify)
Vue.use(VueClipboard)
Vue.use(Toasted)
Vue.config.productionTip = false

Vue.use(VueGtm, {
  id: 'GTM-K7BSQHC',
  enabled: process.env.NODE_ENV === 'production',
  vueRouter: router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Toasted }
})
