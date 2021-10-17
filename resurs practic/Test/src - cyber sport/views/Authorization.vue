<template>
  <div class="authorization">
    <Benefit />
    <FormRegistration :isInputShowForm="inputShowForm" />
  </div>
</template>

<script>
import Benefit from "@/components/Benefit";
import FormRegistration from "@/components/FormRegistration";
export default {
  data() {
    return {
      inputShowForm: false,
    };
  },
  components: { Benefit, FormRegistration },
};
</script>

<style scoped>
.authorization {
  display: flex;
  width: 80%;
  margin: 1% auto 0px;
}
</style>
