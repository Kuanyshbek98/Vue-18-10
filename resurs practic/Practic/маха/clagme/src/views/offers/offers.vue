<template>
  <section class="offers-page">
    <div class="container">
      <h1 class="offers-page__title">Offers</h1>
      <h2 class="offers-page__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
      </h2>
      <div class="offers-page__box">
        <OfferBlock v-for="offer in 5" :key="offer" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    OfferBlock: () => ({
      component: import('./components/offer')
    }),
  },
}
</script>

<style scoped>
.offers-page {
  padding: 40px 0;
}
.offers-page__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0 0 16px;
}
.offers-page__subtitle {
  color: #504F54;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 24px;
}
</style>
