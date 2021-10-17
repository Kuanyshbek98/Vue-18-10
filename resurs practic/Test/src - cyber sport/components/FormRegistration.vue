<template>
  <div class="registration__form-block">
    <form class="registration__form" action="" @submit.prevent="formSubmit">
      <div class="registration__box ">
        <div class="registration__block">
          <router-link to="/authorization">
            <button
              class="registration__btn "
              :disabled="!isRegistration"
              :class="{ registration__show: !isRegistration }"
              @click="(isRegistration = false), (inputShowForm = false)"
            >
              Вход
            </button>
          </router-link>
          <router-link to="/registration">
            <button
              class="registration__btn "
              :disabled="isRegistration"
              :class="{ registration__show: isRegistration }"
              @click="(isRegistration = true), (inputShowForm = true)"
            >
              Регистрация
            </button>
          </router-link>
        </div>
      </div>
      <div class="registration__input" v-show="inputShowForm">
        <img src="@/assets/img/Vector.png" alt="" />
        <input
          class="main-input input_width"
          :class="{ inputErrror: form.name === '' && this.btnboolean }"
          type="text"
          placeholder="Имя Фамилия"
          v-model.trim="form.name"
        />
      </div>
      <div class="registration__input" v-show="inputShowForm">
        <img src="@/assets/img/VectorSelect.svg" alt="" />
        <select
          v-model="form.cityId"
          class="main-input input_width"
          name="select-registor"
        >
          <option disabled value="">Город</option>
          <option value="">Astana</option>
          <option value="">Almaty</option>
          <option value="">Shymkent</option>
        </select>
      </div>
      <div class="registration__input">
        <img src="@/assets/img/Vector2.png" alt="" />
        <input
          class="main-input input_width"
          :class="{ inputErrror: form.tel === '' && this.btnboolean }"
          type="text"
          placeholder="Телефон"
          v-model.trim="form.tel"
          v-mask="'+7 (###) ### ####'"
        />
      </div>
      <div class="registration__input">
        <img src="@/assets/img/VectorPassword.svg" alt="" />
        <input
          class="main-input input_width"
          :class="{ inputErrror: form.password === '' && this.btnboolean }"
          id="passwordInput"
          type="password"
          minlength="6"
          placeholder="Пароль"
          v-model.trim="form.password"
        />
        <img
          @click="passwordShow"
          id="img-left"
          src="@/assets/img/VectorPasword.svg"
          alt=""
        />
      </div>
      <div class="policy" v-if="inputShowForm">
        <div class="polycy__info">
          <p class="polycy__text">
            Я согласен на обработку моих данных а также принимаю
            <a class="  link" href="">Условиями Использования</a>
            и
            <a class=" link">Политикой Конфиденциальности</a>
          </p>
          <div class="round">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"></label>
          </div>
        </div>
        <button type="submit" class="policy__button main-btn">
          Создать аккаунт
        </button>
      </div>
      <div class="policy" v-if="!inputShowForm">
        <div class="polycy__info" style="display: initial;">
          <strong class="polycy__text">
            Забыл пароль.
            <a polycy__link polycy__link_color href="/confirmation">
              Восстановить</a
            >
          </strong>
        </div>
        <button type="submit" class="policy__button main-btn">
          Войти в кабинет
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["isInputShowForm"],
  data() {
    return {
      btnboolean: false,
      isRegistration: this.isInputShowForm,
      inputShowForm: this.isInputShowForm,
      isPassword: false,
      form: {
        name: "",
        tel: "",
        password: "",
        cityId: "",
      },
      isActiv: {
        name: false,
        email: false,
        massage: false,
      },
    };
  },
  methods: {
    formSubmit() {
      this.btnboolean = true;
    },
    passwordShow() {
      var x = document.getElementById("passwordInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
  },
};
</script>

<style scoped>
.registration__form-block {
  padding: 0px 10px 20px;
  margin: 0% 4% 8% 4%;
  background-color: #ffffff;
  width: 42%;
}
.registration__form {
  padding: 10px 24px 0px 10px;
}
.registration__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.registration__block {
  background-color: #edf2f7;
  padding: 8px 12px;
  border-radius: 12px;
}
.registration__btn {
  padding: 8px 12px;
  border-radius: 12px;
  color: #718096;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}
.registration__show {
  background-color: #ffffff;
  color: #1a202c;
}
.form-block p {
  margin: 10px 10px;
}
.registration__input {
  position: relative;
}
.registration__input img {
  position: absolute;
  left: 20px;
  top: 21px;
}
#img-left {
  position: absolute;
  left: 88%;
  top: 38%;
}
.inputErrror {
  border: 2px solid red;
}
.input_width {
  width: 100%;
  box-sizing: border-box;
}
.policy {
  margin: 0px 18px 0px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.polycy__info {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.polycy__text {
  width: 85%;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #1a202c;
}
.policy__button {
  margin-top: 14px;
}
</style>
