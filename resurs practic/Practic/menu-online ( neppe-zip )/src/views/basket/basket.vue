<template>
  <section class="basket">
    <div class="container flex basket__content">
      <div class="basket__top">
<!--        <a @click="back()" class="basket__arrow-back">-->
<!--          <ArrowBackIcon/>-->
<!--        </a>-->
        <header class="basket-header flex">
          <h1 class="basket-header__left">
            {{ BASKET.length }} позиции в корзине на сумму<br>{{ total }} ₸
          </h1>
          <a @click="$store.dispatch('deleteAllBasket')" class="basket-header__right">
            Очистить
          </a>
        </header>
        <ul class="basket__products">
          <li v-for="basket in BASKET" :key="basket.id" class="basket-product flex">
            <div
              @click="showProduct(basket)"
              class="basket-product__image"
              :style="{
                backgroundImage: `url(${$url+basket.image})`,
                backgroundColor: !basket.image ? '#F2F2F2' : ''
              }"
            ></div>
            <div @click="showProduct(basket)" class="basket-product__text">
              <h2 class="basket-product__name">
                {{ basket.name }}
              </h2>
              <p v-if="basket.meta" class="basket-product__meta">
                Ваш выбор: {{ basket.metaText }}
              </p>
              <p class="basket-product__price">
                {{ basket.basket_price }} ₸
              </p>
            </div>
            <div class="basket-product__counts flex">
              <button @click="editProduct(basket, basket.count - 1)" class="basket-product__count-btn">
                <MinusIcon />
              </button>
              <a class="basket-product__count">{{ basket.count }}</a>
              <button @click="editProduct(basket, basket.count + 1)" class="basket-product__count-btn">
                <PlusIcon />
              </button>
            </div>
          </li>
          <li v-if="!BASKET.length" class="basket-product">
            <h2>Ваша корзина пуста</h2>
          </li>
        </ul>
      </div>
      <div class="basket__bottom">
        <button :disabled="!BASKET.length" @click="booking()" class="basket__btn" :class="{'main-btn': BASKET.length, 'basic-btn': !BASKET.length}">
          Заказать {{ total }} ₸
        </button>
      </div>
    </div>
    <MetaBlock v-if="metaData" :product="metaData" @close="metaData=null" :choose="metaData.metaText" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import MinusIcon from '@/assets/svg/minus.svg?inline'
import PlusIcon from '@/assets/svg/plus.svg?inline'
import ArrowBackIcon from '@/assets/svg/arrow-back.svg?inline'
export default {
  data() {
    return {
      metaData: null
    }
  },
  computed: {
    ...mapGetters([
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
    editProduct (product, count) {
      product.count = count
      if (product.count < 1) {
        this.$store.dispatch('deleteBasket', product)
      } else {
        this.$store.dispatch('editBasket', product)
      }
    },
    async booking () {
      // this.$router.push('/register/table')
      if (localStorage.getItem('menu-phone')) {
        // let formData = new FormData()
        // formData.append('phone', localStorage.getItem('menu-phone'))
        // formData.append('totalPrice', this.total)
        // formData.append('code', '963852')
        // formData.append('storeId', localStorage.getItem('store-id'))
        // this.BASKET.forEach((product, index) => {
        //   formData.append(`products[${index}][id]`, product.id)
        //   formData.append(`products[${index}][number]`, product.count)
        //   formData.append(`products[${index}][price]`, product.basket_price)
        // })
        // await this.$api.post('/order/confirm', formData)
        //   .then((response) => {
        //     this.$router.push(`/register/table?orderId=${response.data.data.orderId}`)
        //     // this.$router.push({ params: {name: 'table'}, query: {orderId: response.data.data.orderId} })
        //   })
        //   .catch((e) => {
        //     if (e.response) {
        //       this.$toast.error(e.response.data.message)
        //     }
        //   })
        await this.$router.push('/register/table')
      } else {
        await this.$router.push('/register/phone')
      }
    },
    back () {
      this.$router.push(`/${localStorage.getItem('store-name')}`)
    },
    showProduct (value) {
      if (!value.meta) return
      this.metaData = value
    }
  },
  components: {
    MinusIcon,
    PlusIcon,
    ArrowBackIcon,
    MetaBlock: () => ({
      component: import('@/components/common/meta')
    })
  },
  mounted() {
    window.scroll({top: 0})
  },
  created() {
    this.$store.dispatch('getBasket')
    if (!localStorage.getItem('store-id')) {
      this.$router.push('/store')
    }
  }
}
</script>

<style scoped>
  .basket {
  }
  .basket-header {
    align-items: flex-start;
    margin-bottom: 36px;
    padding-top: 20px;
  }
  .basket-header__left {
    width: 60%;
    max-width: calc(100% - 90px);
    font-weight: 600;
    font-size: 24px;
    margin: 0;
  }
  .basket-header__right {
    font-weight: 500;
    font-size: 14px;
    color: var(--purple-color);
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }
  .basket__products {
    padding-left: 0;
  }
  .basket-product__image {
    width: 75px;
    height: 64px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .basket-product__text {
    width: calc(100% - 200px);
  }
  .basket-product__name {
    font-size: 15px;
    line-height: 20px;
    margin: 0;
  }
  .basket-product__price, .basket-product__meta {
    font-size: 13px;
    line-height: 15px;
    color: rgba(3, 4, 29, 0.6);
    margin: 4px 0 0;
  }
  .basket-product__count-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
    background: #F5F5F5;
    padding: 0;
  }
  .basket-product__count {
    margin: 0 10px;
    font-weight: 600;
    font-size: 15px;
    color: #4E4B66;
  }
  .basket__content {
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 120px;
    min-height: calc(100vh - 70px);
    /*height: 95vh;*/
  }
  .basket__bottom {
    width: 95%;
    margin-top: 20px;
    position: fixed;
    bottom: 60px;
  }
  .basket__arrow-back {
    background: #FFFFFF;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.04), 0px 12px 32px rgba(0, 0, 0, 0.08);
    border-radius: 50% 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }
  .basket__btn {
    height: 56px;
  }
  .basket-product {
    margin-bottom: 10px;
  }
</style>
