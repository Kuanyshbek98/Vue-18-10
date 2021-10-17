<template>
  <section class="resume">
    <div class="container flex resume__content">
      <MainBlock class="resume__main" />
      <InfoBlock class="resume__info" />
    </div>
  </section>
</template>

<script>
export default {
  components: {
    MainBlock: () => ({
      component: import('./components/main')
    }),
    InfoBlock: () => ({
      component: import('./components/info')
    }),
  },
}
</script>

<style scoped>
.resume {
  border-top: 0.33px solid rgba(46, 44, 52, 0.24);
  padding: 48px 0;
}
.resume__content {
  align-items: flex-start;
}
.resume__main {
  width: 500px;
}
.resume__info {
  width: calc(100% - 530px);
}
</style>
