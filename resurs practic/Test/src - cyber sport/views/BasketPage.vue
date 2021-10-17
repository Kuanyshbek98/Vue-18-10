<template>
  <div class="container">
    <div class="basket">
      <Benefit />
      <BasketOrders />
    </div> 
  </div>
</template>

<script>
import Benefit from "@/components/Benefit"; 
import BasketOrders from "@/components/BasketOrders";
export default {
  components: {
    Benefit,
    BasketOrders, 
  },
};
</script>

<style scoped>
.basket {
  display: flex;
  justify-content: space-between;
}
</style>
