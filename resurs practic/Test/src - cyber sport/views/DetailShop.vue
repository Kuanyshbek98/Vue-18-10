<template>
  <div class="detail-shop">
    <div class="container">
      <DetailBlock />
      <Review />
      <ShopMain :title="title" :number="number" />
    </div>
  </div>
</template>
<script>
import DetailBlock from "@/components/DetailBlock.vue";
import Review from "@/components/Review/Review";
import ShopMain from "@/components/ShopMain";
export default {
  data() {
    return {
      number: 4,
      title: "Вместе с этим товаром покупают:",
    };
  },
  components: {
    DetailBlock,
    Review,
    ShopMain,
  },
};
</script>

<style scoped>
.detail-shop {
  margin-top: 34px;
}
</style>
