<template>
  <div class="registration">
    <RegistrationSlider />
    <FormRegistration :isInputShowForm="inputShowForm" />
  </div>
</template>

<script>
import FormRegistration from "@/components/FormRegistration";
import RegistrationSlider from "@/components/RegistrationSlider";
export default {
  data() {
    return {
      inputShowForm: true,
    };
  },
  components: {
    FormRegistration,
    RegistrationSlider,
  },
};
</script>

<style scoped>
.registration {
  width: 70%;
  margin: 1% auto 0;
  display: flex;
  justify-content: space-between;
}
</style>
