<template>
  <div class="cart" @click="$router.push('/basket')" :class="{animate: ANIMATE_BASKET}">
    <CartIcon />
    <a class="cart__count">{{ BASKET.length }}</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartIcon from '@/assets/svg/cart.svg?inline'
export default {
  computed: {
    ...mapGetters([
      'BASKET',
      'ANIMATE_BASKET'
    ])
  },
  components: {
    CartIcon
  },
  created() {
    this.$store.dispatch('getBasket')
  }
}
</script>

<style scoped>
  .cart {
    position: fixed;
    right: 16px;
    bottom: 60px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.12);
    background: #FFFFFF;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50% 50%;
    transition: transform 0.2s ease;
    z-index: 2;
  }
  .cart__count {
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50% 50%;
    font-size: 16px;
    line-height: 24px;
    background: var(--gray-color);
    text-align: center;
    right: 0;
    bottom: -2px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
  .cart.animate {
    transform: scale(1.3);
  }

  /*@keyframes animate {*/
  /*  0% {*/
  /*    transform: scale(0);*/
  /*  }*/
  /*  50% {*/
  /*    transform: scale(1.5);*/
  /*  }*/
  /*  100% {*/
  /*    transform: scale(0);*/
  /*  }*/
  /*}*/
</style>
