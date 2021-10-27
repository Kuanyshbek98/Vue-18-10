<template>
  <div>
    {{ COUNT  }}
    <h2>Kuanysh</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["number"],
  mounted() {
    //  console.log(number)
  },
  computed: {
    ...mapGetters(["COUNT"]),
  },
};
</script>

<style scoped></style>
