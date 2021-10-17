import Vue from "vue";
import App from "./App.vue";
import App2 from "./assets/css/style.css";
// import Example from "./assets/example.vue"

Vue.config.productionTip = false;
// Vue.component("app-example",Example )

new Vue({
  render: (c) => c(App2),
  render: (h) => h(App),
}).$mount("#app");
