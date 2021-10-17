<template>
  <div id="app">
    <!-- <Headers /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Headers from "@/components/Headers/Headers";
import Footer from "@/components/Footer/Footer";
export default {
  name: "App",
  components: {
    Headers,
    Footer,
  },
};
</script>

<style scoped></style>
