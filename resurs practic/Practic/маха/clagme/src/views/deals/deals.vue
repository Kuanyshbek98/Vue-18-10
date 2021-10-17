<template>
  <section class="deals-page">
    <div class="container">
      <h1 class="deals-page__title">Deals</h1>
      <h2 class="deals-page__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
      </h2>
      <TabsBlock class="deals-page__tabs" />
      <div class="deals-page__box">
        <DealBlock />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    TabsBlock: () => ({
      component: import('./components/tabs')
    }),
    DealBlock: () => ({
      component: import('./components/deal')
    }),
  },
}
</script>

<style scoped>
.deals-page__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0 0 16px;
}
.deals-page__subtitle {
  color: #504F54;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 32px;
}
</style>
