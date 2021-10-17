<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/login">Login</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <router-link to="/detalirecord">DR </router-link> |
      <router-link to="/histori">History </router-link>|
      <router-link to="/planning">Planning </router-link>|
      <router-link to="/profile">Profile </router-link>|
      <router-link to="/record">Record </router-link>|
      <router-link to="/register">Register </router-link> -->
    <companent :is="layout"><router-view /> </companent>
    </div> 
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
      // console.log(this.$route.meta);
      // return 'main-layout'
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
