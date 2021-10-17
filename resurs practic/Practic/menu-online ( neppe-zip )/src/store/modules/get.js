import api from '@/utils/api'
import Cookies from 'js-cookie'
import Vue from 'vue'
import router from '../../router/index'

let state = {
  products: null,
  store: null,
  product: null,
  order: null
}

let mutations = {
  setProducts (state, payload) {
    state.products = payload
  },
  setStore (state, payload) {
    state.store = payload
  },
  setProduct (state, payload) {
    state.product = payload
  },
  setOrder (state, payload) {
    state.order = payload
  },
}

let actions = {
  getProducts: async ({commit}, payload) => {
    try {
      const { data } = await Promise.resolve(api.get('/category/list', {
        params: payload
      }));
      await commit('setProducts', data.data)
    } catch (err) {
      if(err.response) Vue.$toast.error(err.response.data.message)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getStore: async ({commit}, payload) => {
    try {
      const { data } = await Promise.resolve(api.get(`/storeInfo?article=${payload}`));
      await commit('setStore', data.data)
      localStorage.setItem('store-id', data.data.id)
      localStorage.setItem('store-name', data.data.article)
    } catch (err) {
      if(err.response) Vue.$toast.error(err.response.data.message)
      await router.push('/404')
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getProduct: async ({commit}, payload) => {
    try {
      const { data } = await Promise.resolve(api.get(`/category/product?productId=${payload}`));
      await commit('setProduct', data.data)
    } catch (err) {
      if(err.response) Vue.$toast.error(err.response.data.message)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  getOrder: async ({commit}, payload) => {
    try {
      const { data } = await Promise.resolve(api.get(`/order/get?phone=${payload}`));
      await commit('setOrder', data.data)
    } catch (err) {
      // if(err.response) Vue.$toast.error(err.response.data.message)
      // throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  }
}


export default {
  state,
  mutations,
  actions
}
