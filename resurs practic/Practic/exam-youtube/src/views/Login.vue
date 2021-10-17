<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" class="validate" v-model="email" />
        :class="{
            invalid:
              ($v.email.$dirty && !$v.email.reqiured) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        <label for="email">Email</label>
        <small>Email </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model.trim="password"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
// import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  // valiedations: {
  //   email: { email, required },
  //   password: { required, minLength: minLength(6) },
  // },
  methods: {
    submitHandler() {
      // if (this.$v.$invalid) {
      //   this.$v.$touch();
      //   return;
      // }

      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      if (formData.email === "Kuanysh") {
        this.$router.push("/");
      }

      // console.log("router")
    },
  },
};
</script>
