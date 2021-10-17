<template>
  <div class="signin auth">
    <TabBlock />
    <h2 class="auth__title signin__title">Welcome Back!</h2>
    <p class="auth__text signin__text">
      New user?
      <router-link to="join-us" class="signin__link auth__link"
        >Create an acount
      </router-link>
    </p>
    <form class="signin__form signin-form auth-form">
      <div class="signin-form__input-block auth-form__input-block">
        <label class="signin-form__label auth-form__label">Email address</label>
        <input class="signin-form__input auth-form__input" />
      </div>
      <div class="signin-form__input-block auth-form__input-block">
        <label class="signin-form__label auth-form__label">Password</label>
        <input class="signin-form__input auth-form__input" />
      </div>
      <div class="signin-form__bottom auth-form__bottom flex">
        <router-link class="signin__link auth__link" to="/"
          >Forgot password?</router-link
        >
        <button class="signin-form__btn auth-form__btn">Sign In</button>
      </div>
    </form>
    <div class="auth__line signin__line">
      or
    </div>
    <a class="signin__integrate"> <GoogleIcon /> Sign in with Google </a>
    <a class="signin__integrate"> <FacebookIcon /> Sign in with Facebook </a>
    <p class="signin__policy">
      Protected by reCAPTCHA and subject to the Google
      <router-link class="signin__policy-link" to="/"
        >Privacy Policy</router-link
      >
      and
      <router-link class="signin__policy-link" to="/"
        >Terms of Service.</router-link
      >
    </p>
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
.signin__integrate {
  background: #ffffff;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signin__integrate {
  margin-bottom: 16px;
}
.signin__integrate svg {
  margin-right: 12px;
}
.signin__policy {
  margin-top: 28px;
}
.signin__policy-link {
  color: var(--blue-color);
}
</style>
