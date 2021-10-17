<template>
  <div
    class="modal"
    name="auth-modal"
    classes="auth-modal"
    height="350px"
    width="500px"
    @before-close="close"
  >
    <form @submit.prevent="formSubmit">
      <h3>{{ isSignInForm ? "Войти" : "Зарегистрироваться" }}</h3>
      <label>
        Email
        <input
          type="text"
          class="form-control"
          placeholder="Ваша эл. почта"
          v-model="form.email"
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          class="form-control"
          placeholder="Ваш пароль"
          v-model="form.password"
        />
      </label>
      <div class="actions">
        <a href="#" @click.prevent="mode = isSignInForm ? 'signUp' : 'signIn'">
          {{ isSignInForm ? "Регистрация" : "Вход" }}
        </a>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="$emit('close')"
        >
          Отмена
        </button>
        <button type="submit" class="btn btn-dark">
          Подтвердить
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "auth-modal",
  data() {
    return {
      mode: "signIn",
      form: {
        email: "",
        password: "",
        login: "Yergesh98",
      },
      errors: [],
    };
  },
  computed: {
    isSignInForm() {
      return this.mode === "signIn";
    },
  },
  mounted() {
    // this.$modal.show("auth-modal");
  },
  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem("auth");
        this.$router.push({ name: "main" });
      } else {
        localStorage.setItem("auth", true);
        this.auth = true;
      }
    },
    close() {
      this.$emit("close");
    },
    formSubmit() {
      if (this.isSignInForm) {
        this.signIn();
      } else {
        this.signUp();
      }
    },

    // async signIn() {
      //-------------------4444444444-------axios-------------
      // try {
      //   const data = (
      //     await this.$api.auth.signIn({
      //       email: this.form.email,
      //       password: this.form.password,
      //           login: this.form.login,
      //     })
      //   ).data;
      //   localStorage.setItem("user", JSON.stringify(data));
      //   this.$store.dispatch("user/setUser", data);
      //   this.$emit("close");
      // } catch (error) {
      //   console.log(error.response.data);
      // }
      //--------------------3333333333333-------axios---------------
      // console.log(
      //   await this.$api.auth.signIn({
      //     email: this.form.email,
      //     password: this.form.password,
      //     login: this.form.login,
      //   })
      // );
      //------------------22222222------------fetch------------
      // try {
      //   const res = await fetch(
      //     "https://jsonplaceholder.typicode.com/posts?_limit=3",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       credentials: "include",
      //       body: JSON.stringify({
      //         email: this.form.email,
      //         password: this.form.password,
      //         login:1232,
      //       }),
      //     }
      //   );
      //   if (res.status === 200 || res.status === 201) {
      //       localStorage.setItem("user".JSON.stringify(data));
      //     const data = await res.json();
      //     console.log(data);
      //   } else {
      //       // this.errors = data;
      //   //   console.log("error");
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
      // ---------------------111111111-----------fetch---------------------
      // const res = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts?_limit=3",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     credentials: "include",
      //     body: JSON.stringify({
      //       email: this.form.email,
      //       password: this.form.password,
      //     }),
      //   }
      // );
      // console.log(res);
      // ----------55555555555--------axios--------error-----------
    signIn() {
    this.$load(async () => {
        const data = (
          await this.$api.auth.signIn({
            email: this.form.email,
            password: this.form.password,
          })
        ).data;
        localStorage.setItem("user", JSON.stringify(data));
        this.$store.dispatch("user/setUser", data);
        this.$emit("close");
      });
    },
    signUp() {
      this.$load(async () => {
        const data = (
          await this.$api.auth.signUp({
            email: this.form.email,
            password: this.form.password,
          })
        ).data;
        localStorage.setItem("user", JSON.stringify(data));
        this.$store.dispatch("user/setUser", data);
        this.$emit("close");
      });
    },
  },
};
</script>
<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #c2c0c0;
}
form {
  display: flex;
  flex-direction: column;
  height: 70%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
h3 {
  margin-bottom: 30px;
  margin-top: 0px;
}
.form-control {
  width: 100%;
  height: 25px;
  border-radius: 2px;
  margin: 10px 0px;
}
label {
  width: 100%;
  margin-bottom: 20px;
}
a {
  color: #eb5804;
  margin-right: 50px;
}
button {
  width: 130px;
  margin-left: 10px;
}
/* button:first-of-type {
  margin-left: auto;
}
.actions {
  margin-top: auto;
  display: flex;
  align-items: baseline;
}
.auth-modal {
  padding: 30px 40px;
} */
</style>
