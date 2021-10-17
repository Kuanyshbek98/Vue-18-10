import db from '@/db/idb'

let state = {
  basket: [],
  animateBasket: false
}

let mutations = {
  setBasket (state, payload) {
    state.basket = payload
  },
  setAnimateBasket (state, payload) {
    state.animateBasket = payload
    setTimeout(() => {
      state.animateBasket = false
    }, 200)
  }
}

let actions = {
  async getBasket ({ commit }) {
    try {
      const data = await Promise.resolve(JSON.parse(localStorage.getItem('menu-basket'))) || []
      await commit('setBasket', data)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async addToBasket ({ commit }, payload) {
    try {
      let data = JSON.parse(localStorage.getItem('menu-basket')) || []
      if(data.length === 0) {
        payload.amount = 1
        data.push(payload)
      }
      else {
        for (let i = 0; i < data.length; i++) {
          if(+data[i].id === +payload.id) {
            data[i].amount += +payload.amount || 1;
            break;
          } else if(i === +data.length - 1) {
            payload.amount = 1
            data.unshift(payload)
            break;
          }
        }
      }
      localStorage.setItem('menu-basket', JSON.stringify(data))
      await commit('setBasket', data)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async editBasket ({ commit }, payload) {
    try {
      let data = JSON.parse(localStorage.getItem('menu-basket')) || []
      data[payload.index][payload.params] = payload.value
      localStorage.setItem('menu-basket', JSON.stringify(data))
      await commit('setBasket', data)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async deleteBasket ({ commit }, payload) {
    try {
      let data = JSON.parse(localStorage.getItem('menu-basket')) || []
      data.splice(payload, 1)
      localStorage.setItem('menu-basket', JSON.stringify(data))
      await commit('setBasket', data)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async deleteAllBasket ({ commit }) {
    try {
      localStorage.removeItem('menu-basket')
      await commit('setBasket', [])
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  }
}


export default {
  state,
  mutations,
  actions
}
