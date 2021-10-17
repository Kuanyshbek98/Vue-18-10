import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    arr: [],
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      state.arr = payload;
    },
  },
  actions: {
    increment({ commit }, payload) {
      commit("increment", payload);
    },
  },
  getters: {
    COUNT: (state) => state.arr,
  },
});
