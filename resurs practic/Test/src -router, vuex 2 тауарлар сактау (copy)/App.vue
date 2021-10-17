<template>
  <div id="app">
    <router-link to="/"><h1>jhfdks;ld</h1></router-link>
    <router-view></router-view>
    <!-- <Stores /> -->
  </div>
</template>

<script>
import Stores from "@/views/Stores";
export default {
  components: {
    Stores,
  },
};
</script>
