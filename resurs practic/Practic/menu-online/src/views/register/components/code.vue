<template>
  <div class="register-code">
    <router-link to="/register/phone" class="register__arrow-back">
      <ArrowBackIcon/>
    </router-link>
    <h1 class="register__title">
      Введите код<br>подтверждения
    </h1>
    <p class="register__text">
      Мы отправили код сообщением
      на номер
      <the-mask v-model="PHONE" mask="+7 (7##) ### ## ##" class="register-code__phone" disabled></the-mask>
    </p>

    <form @submit.prevent="accept()" class="register-code__form">
      <label class="code" ref="code">
        <input autofocus inputmode="tel" class="register-code__input" @focus="onFocus(1)" size="1" maxlength="1" max="1" type="text">
        <input inputmode="tel" class="register-code__input" @focus="onFocus(2)" size="1" maxlength="1" max="1" type="text">
        <input inputmode="tel" class="register-code__input" @focus="onFocus(3)" size="1" maxlength="1" max="1" type="text">
        <input inputmode="tel" @input="accept()" class="register-code__input" @focus="onFocus(4)" size="1" maxlength="1" max="1" type="text">
      </label>
    </form>
    <p @click="repeat()" class="register-code__recode">
      Переотправить код <span v-show="sec>1">через {{ timer() }}</span>
    </p>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { mapGetters } from 'vuex'

import ArrowBackIcon from '@/assets/svg/arrow-back.svg?inline'
export default {
  data() {
    return {
      code: '',
      sec: 59,
      intervalTime: null,
      input: null,
      count: 0,
      apiLoader: false
    }
  },
  computed: {
    ...mapGetters([
      'PHONE',
      'BASKET'
    ])
  },
  methods: {
    onFocus(index) {
      this.count = index
    },
    timer() {
      if(this.sec > 0) {
        return `00:${this.sec > 9 ? this.sec : '0' + this.sec}`
      }
    },
    keyup(e) {
      let { key } = e
      if(parseInt(key) >= 0 && parseInt(key) <= 9) {
        this.input[this.count % 4].select()
      }
    },
    async accept() {
      if (this.apiLoader) {
        return
      }
      this.apiLoader = true
      this.code = ''
      this.input.forEach((input) => {
        this.code += input.value
      })
      let formData = new FormData()
      formData.append('phone', this.PHONE)
      formData.append('code', this.code)
      await this.$api.post('/order/confirm', formData)
        .then((response) => {
          localStorage.setItem('menu-phone', this.PHONE)
          this.$router.push('/register/table')
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
    repeat() {
      if (this.sec > 0) return
      this.sec = 59
    }
  },
  components: {
    TheMask,
    ArrowBackIcon,
  },
  mounted () {
    this.intervalTime = setInterval(() => {
      this.timer.bind(this)
      this.sec--
    }, 1000)
    this.input = this.$refs.code.children
    document.addEventListener('keyup', this.keyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.keyup)
  },
  created() {
    if (!this.PHONE) {
      this.$router.push('/register/phone')
    }
  }
}
</script>

<style scoped>
  .register-code__phone {
    color: #6F6F6F;
    background: none;
    width: 140px;
  }
  .register-code__form {
    margin-top: 55px;
    padding-left: 10px;
  }
  .code {
    display: flex;
    justify-content: center;
  }
  .register-code__input {
    width: 64px;
    height: 64px;
    border: 0.33px solid #E0E0E0;
    border-radius: 14px;
    background: #F4F4F4;
    margin-right: 24px;
    color: #000000;
    font-size: 28px;
    line-height: 136%;
    text-align: center;
    transition: all 0.1s ease;
  }
  .register-code__input:last-child {
    margin-right: 0;
  }
  .register-code__input:focus {
    background: #F6F2FF;
    border: 0.33px solid #6929C4;
  }
  .register-code__recode {
    color: #6F6F6F;
    font-size: 14px;
    line-height: 20px;
    margin-top: 78px;
    text-align: center;
  }
</style>
