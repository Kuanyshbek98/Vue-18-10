import Vue from "vue";
import Vuex from "vuex";
import post from "./modules/post";
import VueTheMask from "vue-the-mask";

Vue.use(VueTheMask);
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,
  },
});
