<template>
  <section class="search">
    <div class="search__header search-header">
      <div class="container search-header__content">
        <FormBlock class="home-page-head__form" />
      </div>
    </div>
    <div class="container search__content flex">
      <FilterBlock class="search__filter" />
      <ResultBlock class="search__result" />
    </div>
  </section>
</template>

<script>
export default {
  components: {
    FormBlock: () => ({
      component: import('@/components/common/form')
    }),
    FilterBlock: () => ({
      component: import('./components/filter')
    }),
    ResultBlock: () => ({
      component: import('./components/result')
    }),
  }
}
</script>

<style scoped>
.search__header {
  height: 200px;
  display: flex;
  margin-top: -64px;
  padding-top: 64px;
  background: linear-gradient(0deg, #FFF3D7, #FFF3D7), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
.search-header__content {
  margin-bottom: 0;
  align-items: flex-start;
}
.search__content {
  padding: 64px 0;
  align-items: flex-start;
}
.search__filter {
  width: 288px;
}
.search__result {
  width: calc(100% - 312px);
}
</style>
