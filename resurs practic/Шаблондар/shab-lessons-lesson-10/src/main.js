import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'

import VModal from 'vue-js-modal'

import ApiPlugin from './plugins/api'
import LoadPlugin from './plugins/load'

Vue.use(VueRouter)
Vue.use(VModal)
Vue.use(ApiPlugin)
Vue.use(LoadPlugin)

import '@/assets/styles/main.scss';

export default new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})
