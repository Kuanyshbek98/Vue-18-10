<template>
  <div class="detail-block">
    <div class="detail-block__praduct">
      <DetalPicture />
      <DetailSalesman class="selesman-block" />
    </div>
    <DetailInfo />
  </div>
</template>

<script>
import DetalPicture from "@/components/DetalPicture";
import DetailInfo from "@/components/DetailInfo";
import DetailSalesman from "@/components/DetailSalesman";
export default {
  components: {
    DetailSalesman,
    DetailInfo,
    DetalPicture,
  },
};
</script>

<style scoped>
.detail-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.detail-block__praduct {
  width: 50%;
}

@media (max-width: 768px) {
  .detail-block__praduct {
    width: 100%;
  }
  .selesman-block {
    display: none;
  }
}
</style>
