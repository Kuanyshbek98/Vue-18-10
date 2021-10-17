<template>
  <div class="register-table">
    <a @click="back()" class="register__arrow-back">
      <ArrowBackIcon/>
    </a>
    <h1 class="register__title">
      Почти готово!
    </h1>
    <p class="register__text">
      Напишите номер вашего столика, на котором сидите
    </p>
    <form @submit.prevent="booking()">
      <input v-model="tableNumber" inputmode="tel" ref="input" type="text" class="register-table__input" placeholder="Номер столика" autofocus>
      <button :disabled="!tableNumber" class="register-table__btn" :class="{'basic-btn': !tableNumber, 'main-btn': tableNumber}">
        Закончить
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

import ArrowBackIcon from '@/assets/svg/arrow-back.svg?inline'

export default {
  data() {
    return {
      tableNumber: null
    }
  },
  computed: {
    ...mapGetters([
      'TABLE_NUMBER',
      'PHONE',
      'SOCKET',
      'BASKET'
    ]),
    total () {
      let price = 0
      this.BASKET.forEach((product) => {
        price += +product.basket_price
      })
      return price
    }
  },
  methods: {
    async booking () {
      let formData = new FormData()
      formData.append('phone', localStorage.getItem('menu-phone'))
      formData.append('totalPrice', this.total)
      formData.append('tableNumber', this.tableNumber)
      formData.append('storeId', localStorage.getItem('store-id'))
      this.BASKET.forEach((product, index) => {
        formData.append(`products[${index}][id]`, product.id)
        formData.append(`products[${index}][number]`, product.count)
        formData.append(`products[${index}][price]`, product.basket_price)
        formData.append(`products[${index}][meta]`, JSON.stringify(product.metaText || ''))
      })
      await this.$api.post('/order/takeTableNumber', formData)
        .then(async (response) => {
          Cookies.set('menu-ct', response.data.data.chat_token)
          await this.$store.commit('setSocket', new WebSocket(`ws://back.neppe.kz:6969?chat_token=${response.data.data.chat_token}`))
          await this.$store.commit('setSocketCatcher', new WebSocket(`ws://back.neppe.kz:6996?chat_token=${response.data.data.chat_token}`))
          await this.$store.dispatch('deleteAllBasket')
          this.$toast.success('Ваш заказ принят, спасибо за заказ!')
          await setTimeout(() => {
            this.$router.push('/order')
          }, 200)
          await setTimeout(() => {
            this.SOCKET.send(JSON.stringify({
              store_id: localStorage.getItem('store-id'),
              order_id: response.data.data.order_id,
            }))
          }, 100)
        })
        .catch(e => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    },
    back () {
      if (this.PHONE) {
        this.$router.push('/register/phone')
      } else {
        this.$router.push('/basket')
      }
    },
    // socket () {
    //   if (this.SOCKET) {
    //     this.SOCKET.onopen = async (event) => {
    //       console.log("Соединение установлено", event);
    //     }
    //     this.SOCKET.onmessage = async (event) => {
    //       console.log(JSON.parse(event.data))
    //     }
    //   }
    // }
  },
  components: {
    ArrowBackIcon,
  },
  mounted() {
    this.tableNumber = this.TABLE_NUMBER
    // this.socket()
  },
  created() {
    this.$store.commit('setTableNumber', Cookies.get('table-number') || '')
    this.$store.dispatch('getBasket')
    if (this.BASKET && !this.BASKET.length) {
      this.$router.push('/basket')
    }
  }
}
</script>

<style scoped>
  .register-table {
    height: 95vh;
    padding: 1px 0;
  }
  .register-table__input {
    color: #161616;
    font-size: 34px;
    line-height: 144%;
  }
  .register-table__input::placeholder {
    font-size: 14px;
  }
  .register-table__btn {
    margin-top: 111px;
    height: 56px;
    position: fixed;
    bottom: 60px;
    left: 2.5%;
    width: 95%;
  }
</style>
