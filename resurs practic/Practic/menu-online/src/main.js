import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'vue-toastification'
import api from './utils/api'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Scroll from 'vue-infinite-scroll'

import Spinner from './components/global/spinner'

import 'normalize.css'
import 'nprogress/nprogress.css'
import "vue-toastification/dist/index.css"
import 'swiper/css/swiper.css'
import './assets/css/main.css' 

// ---------VARIABLE----------------
const options = {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 3,
  newestOnTop: true,
  position: 'top-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
  toastClassName: 'my-custom-toast-class'
};

// ----------------------------------
Vue.config.productionTip = false
Vue.prototype.$api = api;
Vue.prototype.$url = 'http://back.neppe.kz/'

// ---------USE----------------------
Vue.use(Toast, options)
Vue.use(Scroll)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 2,
  error: require(`${'@/assets/svg/download.svg'}`),
  loading: require(`${'@/assets/svg/download.svg'}`),
  attempt: 2
})

// ---------COMPONENT----------------
Vue.component('v-spinner', Spinner)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
