import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios"; 
import "@/assets/main.css"; 

Vue.config.productionTip = false;
Vue.prototype.$api = axios;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
