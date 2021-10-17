import Vue from 'vue'
import Vuex from 'vuex'
import reactions from './reactions'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { reactions, user }
})