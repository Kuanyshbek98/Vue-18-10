<template>
  <div class="confimation container">
    <Benefit />
    <ConfirmationBlock />
  </div>
</template>

<script>
import Benefit from "@/components/Benefit";
import ConfirmationBlock from "@/components/ConfirmationBlock";
export default {
  components: { Benefit, ConfirmationBlock },
};
</script>

<style scoped>
.confimation {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
