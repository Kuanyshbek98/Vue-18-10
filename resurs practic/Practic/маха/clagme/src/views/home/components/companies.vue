<template>
  <div class="home-page-companies">
    <ul class="home-page-companies__list">
      <li class="home-page-companies__item">
        <img :src="'./microsoft.png'" alt="">
      </li>
      <li class="home-page-companies__item">
        <img :src="'./google.png'" alt="">
      </li>
      <li class="home-page-companies__item">
        <img :src="'./philips.png'" alt="">
      </li>
      <li class="home-page-companies__item">
        <img :src="'./intel.png'" alt="">
      </li>
    </ul>
    <p class="home-page-companies__text">
      Some of the best companies that rely on Clagme for hiring.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-page-companies {
  padding: 40px 0;
}
.home-page-companies__list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-page-companies__item:not(:last-child) {
  margin-right: 120px;
}
.home-page-companies__text {
  line-height: 20px;
  color: #504F54;
  text-align: center;
  margin-top: 16px;
}
</style>
