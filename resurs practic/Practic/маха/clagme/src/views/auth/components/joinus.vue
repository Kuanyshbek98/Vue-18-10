<template>
  <div class="join-us auth">
    <TabBlock />
    <h2 class="auth__title join-us-title">Welcome!</h2>
    <p class="auth__text join-us__text">Complete the form below to register.</p>
    <form class="join-us__form join-us-form auth-form">
      <div class="join-us-form__input-block auth-form__input-block">
        <label class="join-us-form__label auth-form__label"
          >Email address</label
        >
        <input class="join-us-form__input auth-form__input" />
      </div>
      <div class="join-us__content flex">
        <div
          class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block"
        >
          <label class="join-us-form__label auth-form__label">Last name</label>
          <input class="join-us-form__input auth-form__input" />
        </div>
        <div
          class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block"
        >
          <label class="join-us-form__label auth-form__label">First name</label>
          <input class="join-us-form__input auth-form__input" />
        </div>
      </div>
      <div class="join-us-form__input-block auth-form__input-block">
        <label class="join-us-form__label auth-form__label">Password</label>
        <input class="join-us-form__input auth-form__input" />
      </div>
      <div class="join-us-form__bottom auth-form__bottom flex">
        <button class="join-us-form__btn auth-form__btn">Register</button>
      </div>
      <div class="auth__line join-us__line">
        or Sign in with:
      </div>
      <div class="flex">
        <a class="join-us__integrate"> <GoogleIcon /> Sign in with Google </a>
        <a class="join-us__integrate">
          <FacebookIcon /> Sign in with Facebook
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import GoogleIcon from "@/assets/svg/google.svg?inline";
import FacebookIcon from "@/assets/svg/facebook.svg?inline";
export default {
  components: {
    GoogleIcon,
    FacebookIcon,
    TabBlock: () => ({
      component: import("./tabs.vue"),
    }),
  },
};
</script>

<style scoped src="@/assets/css/auth.css"></style>

<style scoped>
.join-us-form__input-block_mini {
  width: calc(50% - 12px);
}
.join-us__integrate {
  background: #ffffff;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;
  width: calc(50% - 4px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.join-us__integrate svg {
  margin-right: 12px;
}
</style>
