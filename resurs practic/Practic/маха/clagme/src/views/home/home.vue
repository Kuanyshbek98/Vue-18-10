<template>
  <section class="home-page">
    <div class="home-page__top" :style="{backgroundImage: 'url(./home-back.png)'}">
      <HeaderBlock class="home-page__header" />
      <HeadBlock class="home-page__head" />
    </div>
    <div class="container">
      <CompaniesBlock />
      <div class="main-line"></div>
      <ExpertsBlock />
      <div class="main-line"></div>
      <InfoBlock />
      <div class="main-line"></div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    HeaderBlock: () => ({
      component: import('./components/header')
    }),
    HeadBlock: () => ({
      component: import('./components/head')
    }),
    CompaniesBlock: () => ({
      component: import('./components/companies')
    }),
    ExpertsBlock: () => ({
      component: import('./components/experts')
    }),
    InfoBlock: () => ({
      component: import('./components/info')
    }),
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.home-page__top {
  color: #FFFFFF;
  text-align: center;
  padding-bottom: 106px;
  background-color: #683C2B;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
