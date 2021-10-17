<template>
  <div>
    <Header />
    <Main />
    <Slider />
    <Advantages />
    <Recommendations />
    <Start />
    <Footer />
  </div>
</template>

<script>
import "@/assets/css/main2.css";
// import "./assets/css/style.css";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Main from "@/components/Main";
import Recommendations from "@/components/Recommendations";
import Advantages from "@/components/Advantages";
import Start from "@/components/Start";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Slider,
    Main,
    Recommendations,
    Advantages,
    Start,
    Footer,
  },
};
</script>

<style scoped></style>
