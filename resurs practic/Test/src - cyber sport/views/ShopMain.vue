<template>
  <div class="shop-page">
    <div class="container">
      <ShopSlaider />
      <ShopMenu />
      <ShopMain :title="title" :number="number" />
    </div>
    <ShopPartner />
    <div class="container">
      <Question />
    </div>
  </div>
</template>

<script>
import ShopSlaider from "@/components/ShopSlaider";
import ShopMenu from "@/components/ShopMenu";
import ShopMain from "@/components/ShopMain";
import ShopPartner from "@/components/ShopPartner.vue";
import Question from "@/components/Question";
export default {
  data() {
    return {
      number: 8,
      title: " ",
    };
  },
  components: {
    ShopSlaider,
    ShopMenu,
    ShopMain,
    ShopPartner,
    Question,
  },
};
</script>

<style scoped></style>
