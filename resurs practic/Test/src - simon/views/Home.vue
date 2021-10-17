<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Simon Game" />
    <SimonGame />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SimonGame from "@/components/SimonGame.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SimonGame,
  },
};
</script>
