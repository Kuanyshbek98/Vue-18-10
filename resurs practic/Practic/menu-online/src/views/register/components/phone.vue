<template>
  <div class="register-phone">
    <router-link to="/basket" class="register__arrow-back">
      <ArrowBackIcon />
    </router-link>
    <h1 class="register__title">
      Напишите свой номер телефона
    </h1>
    <p class="register__text">
      Мы отправим вам код подтверждения. Нам нужен ваш номер для того, чтобы принять заказ.
    </p>
    <form @submit.prevent="send()">
      <the-mask autofocus @input="onInput()" inputmode="tel" v-model="phone" mask="+7 (7##) ### ## ##" class="register-phone__input"></the-mask>
      <button :disabled="!validate" class="register-phone__submit" :class="{'basic-btn': !validate, 'main-btn': validate}">
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'

import ArrowBackIcon from '@/assets/svg/arrow-back.svg?inline'
export default {
  data() {
    return {
      phone: '+77',
      validate: false,
      apiLoader: false
    }
  },
  methods: {
    async send () {
      if (this.apiLoader) {
        return
      }
      this.apiLoader = true
      // this.$store.commit('setPhone', '77' + this.phone)
      // this.$router.push('/register/code')
      await this.$api.get(`/order/create?phone=77${this.phone}`)
        .then(() => {
          this.$toast.success('Вам отправлено сообщение')
          this.$store.commit('setPhone', '77' + this.phone)
          this.$router.push('/register/code')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
        .finally(() => {
          this.apiLoader = false
        })
    },
    onInput () {
      if (this.phone.length === 9) {
        this.validate = true
      } else {
        this.validate = false
      }
    }
  },
  components: {
    TheMask,
    ArrowBackIcon,
  }
}
</script>

<style scoped>
  .register-phone {
    height: 95vh;
    padding: 1px 0;
  }
  .register-phone__input {
    color: #161616;
    font-size: 28px;
    line-height: 136%;
  }
  .register-phone__submit {
    height: 56px;
    color: #A8A8A8;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    border-radius: 100px;
    width: 95%;
    margin-top: 20px;
    position: fixed;
    bottom: 60px;
    left: 2.5%;
  }
  .register-phone__submit.main-btn {
    color: #FFFFFF;
  }
</style>
