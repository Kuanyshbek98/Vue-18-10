<template>
  <section class="registr">
    <div class="container">
      <component :is="block" />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    block () {
      return 'registr-' + this.$route.params.name
    }
  },
  components: {
    RegistrPhone: () => ({
      component: import('./components/phone')
    }),
    RegistrCode: () => ({
      component: import('./components/code')
    }),
    RegistrTable: () => ({
      component: import('./components/table')
    })
  }
}
</script>

<style scoped>

</style>
