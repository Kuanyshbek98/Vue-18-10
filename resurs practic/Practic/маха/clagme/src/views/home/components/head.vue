<template>
  <div class="container home-page-head">
    <h1 class="home-page-head__title">
      Happier the Experts, Greater the Enterprise.
    </h1>
    <h2 class="home-page-head__subtitle">
      Whether you are employed full time, a consultant, an agency or hiring; we have a place for you in our network. Learn More
    </h2>
    <FormBlock class="home-page-head__form" />
  </div>
</template>

<script>
export default {
  components: {
    FormBlock: () => ({
      component: import('@/components/common/form')
    }),
  },
}
</script>

<style scoped>

.home-page-head__title {
  text-shadow: 0 0 0.33px rgba(0, 0, 0, 0.48);
  font-size: 40px;
  line-height: 52px;
  font-family: 'Inter', sans-serif;
  margin: 42px 0 24px;
}
.home-page-head__subtitle {
  text-shadow: 0 0 0.33px rgba(0, 0, 0, 0.48);
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  margin: 0 0 24px;
}
</style>
