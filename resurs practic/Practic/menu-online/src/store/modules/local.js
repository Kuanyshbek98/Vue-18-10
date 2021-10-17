import api from '@/utils/api'
import Cookies from 'js-cookie'

let state = {
  openDescription: false,
  phone: null,
  tableNumber: null,
  socket: null,
  socketCatcher: null
}

let mutations = {
  setOpenDescription (state, payload) {
    state.openDescription = payload
  },
  setPhone (state, payload) {
    state.phone = payload
  },
  setTableNumber (state, payload) {
    state.tableNumber = payload
  },
  setSocket (state, payload) {
    state.socket = payload
  },
  setSocketCatcher (state, payload) {
    state.socketCatcher = payload
  }
}

let actions = {
  // setOpenDescription: async ({commit, dispatch}, payload, params) => {
  //   try {
  //     const { data } = await Promise.resolve(api.get(`/user/${payload}`, {
  //       params
  //     }));
  //     await commit('setUsers', data.data)
  //   } catch (err) {
  //     if(err.response) this.$toast.error(err.response.data.message)
  //     throw new Error('Внутреняя ошибка сервера, сообщите администратору')
  //   }
  // }
}


export default {
  state,
  mutations,
  actions
}
