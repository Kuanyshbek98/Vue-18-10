<template>
  <section class="order">
    <div class="container">
      <time class="order__time" v-if="ORDER">{{ ORDER.created_at.slice(0, 10).split('-').reverse().join('.') }} {{ ORDER.created_at.slice(11, 16) }}</time>
      <h1 v-if="STORE" class="order__title">{{ STORE.name }}</h1>
      <div v-if="ORDER">
        <h2 class="order__mini-title">Статус заказа</h2>
        <p class="order__text">
          <RecycledIcon /> {{ statusText(ORDER.status) || '' }}
        </p>
        <h2 class="order__mini-title">Вас обслуживал</h2>
        <p v-if="ORDER" class="order__text">
          <WaiterIcon />
          {{ ORDER.user_id ? ORDER.user_id.first_name : '' }} {{ ORDER.user_id ? ORDER.user_id.last_name : '' }}
        </p>
        <h2 class="order__mini-title">Столик</h2>
        <p class="order__text">
          <TableIcon /> {{ ORDER.table_number }}
        </p>
        <h2 class="order__mini-title">Всего</h2>
        <p class="order__text">
          <PriceIcon /> {{ ORDER.total_price }} ₸
        </p>
        <!--      <button class="order__edit-btn main-btn">-->
        <!--        Изменить заказ-->
        <!--      </button>-->
        <h3 class="order__subtitle">Ваш заказ</h3>
        <h4 class="order__mini-title flex">
          <span>Позиции в заказе</span>
          <span>{{ ORDER.products ? ORDER.products.length : 0 }}</span>
        </h4>
        <ul class="order__product-list">
          <li v-for="product in ORDER.products" :key="product.id" class="order__product-item flex">
            <a class="order__product-name">{{ product.name }}</a>
            <a class="order__product-price">{{ product.product_price }} ₸</a>
            <a class="order__product-count">х{{ product.number }}</a>
            <a class="order__product-total">{{ (+product.product_price || 1) * (+product.number || 1) }} ₸</a>
          </li>
        </ul>
        <h4 class="order__mini-title flex">
          <span>Итого</span>
          <span>{{ ORDER.total_price }} ₸</span>
        </h4>
        <h5 class="order__subtitle">Информация о заказе</h5>
        <p class="order__info">ID заказа: {{ ORDER.id }}</p>
        <p class="order__info">Время: {{ ORDER.created_at.slice(0, 10).split('-').reverse().join('.') }} {{ ORDER.created_at.slice(11, 16) }}</p>
        <p class="order__info">Поставщик услуг: Neppe, <a href="mailto:neppeinfomenu@gmail.com">neppeinfomenu@gmail.com</a></p>
      </div>
      <h2 v-else>У вас еще нет заказа</h2>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

import RecycledIcon from '@/assets/svg/recycled.svg?inline'
import PriceIcon from '@/assets/svg/money.svg?inline'
import WaiterIcon from '@/assets/svg/waiter.svg?inline'
import TableIcon from '@/assets/svg/table.svg?inline'
export default {
  data() {
    return {
      status: 'В обработке'
    }
  },
  computed: {
    ...mapGetters([
      'STORE',
      'SOCKET_CATCHER',
      'ORDER'
    ])
  },
  methods: {
    statusText (value) {
      if (value === 'rejected') return 'Отклонен'
      else if (value === 'confirmed') return 'Завершен'
      else if (value === 'admin-check') return 'Только что заказали'
      else if (value === 'admin-checked') return 'Принято'
    }
  },
  components: {
    RecycledIcon,
    PriceIcon,
    WaiterIcon,
    TableIcon
  },
  mounted() {
    window.scroll({top: 0})
    setTimeout(() => {
      if (this.SOCKET_CATCHER) {
        this.SOCKET_CATCHER.onmessage = event => {
          const data = JSON.parse(event.data)
          if (data.action && data.action === 'action') {
            this.status = data.status
            this.$toast.success('Ваш заказ принят')
          }
        }
      }
    }, 500)
  },
  async created() {
    if (!this.STORE) {
      if (!localStorage.getItem('store-name')) {
        await this.$router.push('/404')
      }
      await this.$store.dispatch('getStore', localStorage.getItem('store-name'))
      await this.$store.dispatch('getProducts', {
        storeId: localStorage.getItem('store-id')
      })
    }
    if (Cookies.get('get-basket') && localStorage.getItem('menu-phone')) {
      await this.$store.dispatch('getOrder', localStorage.getItem('menu-phone'))
    }
  }
}
</script>

<style scoped>
  .order {
    padding: 25px 0 60px;
  }
  .order__time {

  }
  .order__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 140%;
    color: #161616;
    margin: 10px 0 30px;
    text-transform: capitalize;
  }
  .order__mini-title {
    font-weight: 600;
    font-size: 15px;
    line-height: 140%;
    color: #161616;
    margin: 20px 0 10px;
  }
  .order__text {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #6F6F6F;
  }
  .order__text svg {
    margin-right: 20px;
    width: 25px;
    height: 20px;
  }
  .order__subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #161616;
    margin: 40px 0 10px;
  }
  .order__product-list {
    padding: 0 0 10px;
    margin: 0;
    font-size: 13px;
    border-bottom: 1px solid #F2F2F2;
  }
  .order__product-item {
    padding: 10px 0;
    color: #6F6F6F;
  }
  .order__product-name {
    width: calc(100% - 140px);
  }
  .order__product-price {
    width: 50px;
  }
  .order__product-count {
    width: 20px;
  }
  .order__product-total {
    width: 50px;
    text-align: right;
  }
  .order__info {
    margin: 4px 0;
    font-size: 11px;
  }
</style>
