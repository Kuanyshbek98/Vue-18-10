<template>
  <div id="app">
    <router-view/>
    <AppFooter v-if="$route.name !== 'Error' && $route.name !== 'Home'" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Cookies from 'js-cookie'
  export default {
    computed: {
      ...mapGetters([
        'SOCKET_CATCHER',
        'SOCKET'
      ])
    },
    methods: {
      socket () {
        setTimeout(() => {
          if (this.SOCKET_CATCHER) {
            this.SOCKET_CATCHER.onmessage = event => {
              const data = JSON.parse(event.data)
              console.log(data)
              if (data.action && data.action === 'action') {
                if (data.status === 'admin-checked') {
                  this.$toast.success('Ваш заказ принят')
                } else if (data.status === 'rejected') {
                  this.$toast.error('Ваш заказ отклонен')
                } else if (data.status === 'rejected') {
                  this.$toast.error('Ваш заказ отклонен')
                }
              }
            }
          }
          console.log(this.SOCKET_CATCHER)
          console.log(this.SOCKET)
        }, 500)
      }
    },
    components: {
      AppFooter: () => ({
        component: import('@/components/footer/footer')
      })
    },
    // mounted() {
    //   this.socket()
    // },
    created() {
      if (Cookies.get('menu-ct')) {
        this.$store.commit('setSocketCatcher', new WebSocket(`ws://back.neppe.kz?chat_token=${Cookies.get('menu-ct')}`))
        this.$store.commit('setSocket', new WebSocket(`ws://back.neppe.kz?chat_token=${Cookies.get('menu-ct')}`))
      } else if (!Cookies.get('get-basket')) {
        Cookies.set('get-basket', true)
        this.$store.dispatch('deleteAllBasket')
      }
    },
    watch: {
      SOCKET () {
        this.socket()
      }
    }
  }
</script>

<style>

</style>
