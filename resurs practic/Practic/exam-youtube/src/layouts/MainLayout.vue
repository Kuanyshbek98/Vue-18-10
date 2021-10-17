<template>
  <div class="app-main-layout">
    <Navbar @click ="isOpen = !isOpen" />
    <Saidbar v-model="isOpen" /> 
    <main class="app-content" :class="{full:!isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/add/Navbar";
import Saidbar from "@/components/add/Saidbar";

export default {
  name: "main-layout",
  data(){
    return{
      isOpen:true,
    }
  },
  components: {
    Navbar,
    Saidbar,
  },
};
</script>
