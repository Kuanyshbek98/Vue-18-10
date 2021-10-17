<template>
  <div class="form-block">
    <form action="" @submit.prevent="formSubmit">
      <h2 class="form-block__title">Написать отзыв</h2>
      <div class="form-block__items">
        <img src="@/assets/img/Vector.png" alt="" />
        <input
          class="main-input"
          :class="{ inputErrror: form.name === '' && this.btnboolean }"
          type="text"
          placeholder="Имя Фамилия"
          v-model.trim="form.name"
        />
      </div>
      <div class="form-block__items">
        <img src="@/assets/img/Vector2.png" alt="" />
        <input
          class="main-input"
          :class="{ inputErrror: form.email === '' && this.btnboolean }"
          type="email"
          placeholder="Почта"
          v-model.trim="form.email"
        />
      </div>
      <h4>Выберите оценку</h4>
      <div class="rating">
        <input
          name="stars"
          class="stars"
          id="e5"
          value="5"
          type="radio"
          v-model="checkedNames"
        />
        <label for="e5">★</label>
        <input
          name="stars"
          class="stars"
          id="e4"
          value="4"
          type="radio"
          v-model="checkedNames"
        />
        <label for="e4">★</label>
        <input
          name="stars"
          class="stars"
          id="e3"
          value="3"
          type="radio"
          v-model="checkedNames"
        />
        <label for="e3">★</label>
        <input
          name="stars"
          class="stars"
          id="e2"
          value="2"
          type="radio"
          v-model="checkedNames"
        />
        <label for="e2">★</label>
        <input
          name="stars"
          class="stars"
          id="e1"
          value="1"
          type="radio"
          v-model="checkedNames"
        />
        <label for="e1">★</label>
      </div>
      <div class="form-block__items">
        <img class="textarea__icon" src="@/assets/img/Vector3.png" alt="" />
        <textarea
          class="textarea main-input "
          :class="{ inputErrror: form.massage === '' && this.btnboolean }"
          cols="30"
          rows="5"
          maxlength="50"
          minlength="5"
          placeholder="Ваш отзыв"
          v-model.trim="form.massage"
        >
        </textarea>
      </div>
      <button type="submit" class="form-block__button main-btn">
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "formblock",
  data() {
    return {
      errorText: "",
      isActive: false,
      btnboolean: false,
      checkedNames: null,

      form: {
        name: "",
        email: "",
        massage: "",
      },
    };
  },
  methods: {
    formSubmit() {
      this.btnboolean = true;
    },
  },
};
</script>

<style scoped>
.form-block {
  padding: 15px 20px 30px;
  height: auto;
  background-color: #ffffff;
}
.form-block p {
  margin: 10px 10px;
}
.form-block__items {
  position: relative;
}
.form-block__items img {
  position: absolute;
  left: 20px;
  top: 21px;
}
.form-block__items .textarea__icon {
  top: 30px;
}
.inputErrror {
  border: 2px solid red;
}
form {
  position: relative;
}
.errrorForm {
  width: 200px;
  height: 50px;
  background-color: red;
  color: #ffffff;
  position: absolute;
  right: 10%;
  bottom: 80%;
  font-size: 1.5rem;
}
.textarea {
  padding: 10px 0 0 40px;
  margin-top: 20px;
  min-height: 80px;
}
.form-block__button {
  width: 50%;
  margin-left: 5px;
}

/* ----------------------- */
.detail {
  position: absolute;
  text-align: right;
  right: 5px;
  bottom: 5px;
  width: 50%;
}

a[href*="intent"] {
  display: inline-block;
  margin-top: 0.4em;
}

.rating {
  display: flex;
  justify-content: flex-end;
  line-height: 32px;
  font-size: 45px;
}
.rating .stars {
  float: right;
  opacity: 0;
  position: absolute;
  height: 0px;
}
.rating a,
.rating label {
  color: #aaa;
  text-decoration: none;
  -webkit-transition: color 0.4s;
  -moz-transition: color 0.4s;
  -o-transition: color 0.4s;
  transition: color 0.4s;
}
.rating label:hover ~ label,
.rating .stars:checked ~ label,
.rating label:hover,
.rating a:hover,
.rating a:hover ~ a,
.rating a:checked,
.rating a:checked ~ a {
  color: orange;
  cursor: pointer;
}
.rating {
  direction: rtl;
}

@media (max-width: 768px) {
  .form-block {
    width: 80%;
    border-radius: 12px;
  } 
}
</style>
