import Vue from "vue";
import App from "./App.vue";
import ApiPlugin from "./plugins/api"; // $api -> links,get,post
import LoadPlugin from "./plugins/load"; //try, catch-gloval

Vue.config.productionTip = false;
Vue.use(ApiPlugin);
Vue.use(LoadPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
