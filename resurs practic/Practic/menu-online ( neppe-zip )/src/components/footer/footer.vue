<template>
  <footer class="footer">
    <ul class="footer__list flex">
      <li class="footer__item">
        <a @click="goHome()" class="footer__link" :class="{active: $route.name === 'Store'}">
          <HomeIcon />
        </a>
      </li>
<!--      <li class="footer__item">-->
<!--        <router-link to="/basket" class="footer__link">-->
<!--          <p class="footer__text">Корзина</p>-->
<!--        </router-link>-->
<!--      </li>-->
      <li class="footer__item">
        <router-link to="/order" class="footer__link" :class="{active: $route.name === 'Order'}">
          <OrderIcon />
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import HomeIcon from '@/assets/svg/home.svg?inline'
import OrderIcon from '@/assets/svg/order.svg?inline'
export default {
  methods: {
    goHome () {
      if (this.$route.name !== 'Store') {
        this.$router.push(`/${localStorage.getItem('store-name')}`)
      }
    }
  },
  components: {
    HomeIcon,
    OrderIcon
  }
}
</script>

<style scoped>
  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
    box-shadow: 0 -4px 5px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  .footer__list {
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }
  .footer__item {
    width: 50%;
  }
  .footer__link {
    display: block;
    text-align: center;
    padding: 10px 0;
  }
  .footer__text {
    margin: 0;
  }
  .footer__link svg {
    fill: #D2D2D2;
  }
  .footer__link.active svg {
    fill: var(--purple-color)
  }

</style>
