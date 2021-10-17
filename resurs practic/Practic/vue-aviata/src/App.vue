<template>
  <div id="app">
    <!-- <app-example :msg="message"  ></app-example> -->
    <headers />
    <search />
    <asides />
    <page />
  </div>
</template>

<script>
import headers from "./components/header.vue";
import search from "./components/search.vue";
import asides from "./components/aside.vue";
import page from "./components/page.vue";

export default {
  name: "App",
  components: {
    headers,
    search,
    asides,
    page,
  },
};
</script>
