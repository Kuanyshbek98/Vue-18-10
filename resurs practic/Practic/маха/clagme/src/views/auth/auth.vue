<template>
  <section class="auth">
    <div class="container auth__content flex">
      <div class="auth__left-block">
        <h1 class="auth__title">Clagging?</h1>
        <p class="auth__description">
          Whether you are employed full time, a consultant, an agency or hiring;
          we have a place for you in our network.
          <router-link to="/">Learn More</router-link>
        </p>
        <div class="auth__greetings">
          <Greetings />
        </div>
      </div>
      <div class="auth__right-block">
        <component :is="block" />
      </div>
    </div>
  </section>
</template>

<script>
import Greetings from "@/assets/svg/greetings.svg?inline";
export default {
  computed: {
    block() {
      return this.$route.params.name + "-block";
    },
  },
  components: {
    Greetings,
    SignInBlock: () => ({
      component: import("./components/signin.vue"),
    }),
    JoinUsBlock: () => ({
      component: import("./components/joinus.vue"),
    }),
    VerificationBlock: () => ({
      component: import("./components/verification.vue"),
    }),
    TabBlock: () => ({
      component: import("./components/tabs.vue"),
    }),
  },
};
</script>

<style scoped>
.auth__content {
  align-items: flex-start;
}
.auth__left-block {
  width: calc(100% - 500px);
}
.auth__right-block {
}
.auth__right-block {
  width: 462px;
  padding: 36px 32px;
  box-sizing: border-box;
}
</style>
