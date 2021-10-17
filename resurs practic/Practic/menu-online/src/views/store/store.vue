<template>
  <section class="store">
    <StoreHeader v-if="STORE" />
    <StoreMenu v-if="PRODUCTS" />
    <StoreCart />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

export default {
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'STORE'
    ])
  },
  components: {
    StoreHeader: () => ({
      component: import('./components/header')
    }),
    StoreMenu: () => ({
      component: import('./components/menu')
    }),
    StoreCart: () => ({
      component: import('@/components/common/cart')
    })
  },
  async created() {
    if (!this.STORE) {
      await this.$store.dispatch('getStore', this.$route.params.name)
      await this.$store.dispatch('getProducts', {
        storeId: localStorage.getItem('store-id')
      })
      if (this.$route.query.table) {
        Cookies.set('table-number', this.$route.query.table)
      }
      // if (!Cookies.get('table-number')) {
      //   this.$store.dispatch('deleteAllBasket')
      // }
    }
  }
}
</script>

<style scoped>
  .store {
    padding-bottom: 60px;
  }
</style>
