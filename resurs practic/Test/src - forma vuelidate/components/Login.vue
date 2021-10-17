<template>
  <div class="form">
    <form class="form__block block" @submit.prevent="submitHandler">
      <div class="block__attributes">
        <h2 class="block__title">Домашняя бухгалтерия</h2>
         
        <div class="block__input">
          <label for="lastName">Фамилия * </label>
          <input
            id="lastName"
            type="text"
            v-model.trim="lastName"
            placeholder="LastName"
            :class="{
              invalid: $v.lastName.$dirty && !$v.lastName.required,
            }"
          />
          <small
            v-if="$v.lastName.$dirty && !$v.lastName.required"
            :class="{
              'invalid-text': $v.lastName.$dirty && !$v.lastName.required,
            }"
          >
            Заполните это поля *
          </small>
        </div>
        <div class="block__input">
          <label for="firstName">Имя *</label>
          <input
            id="firstName"
            type="text"
            v-model.trim="firstName"
            placeholder="FirstName"
            :class="{
              invalid: $v.firstName.$dirty && !$v.firstName.required,
            }"
          />
          <small
            v-if="$v.firstName.$dirty && !$v.firstName.required"
            :class="{
              'invalid-text': $v.firstName.$dirty && !$v.firstName.required,
            }"
          >
            Заполните это поля *
          </small>
        </div>
        <div class="block__input">
          <label for="middleName">Отчество</label>
          <input
            id="middleName"
            type="text"
            v-model.trim="middleName"
            placeholder="MiddleName"
          />
        </div>
        <div class="block__input">
          <label for="dateBirth">Дата рождение *</label>
          <input
            id="dateBirth"
            type="date"
            v-model.trim="dateBirth"
            placeholder="Дата рождение"
            :class="{
              invalid: $v.dateBirth.$dirty && !$v.dateBirth.required,
            }"
          />
          <small
            v-if="$v.dateBirth.$dirty && !$v.dateBirth.required"
            :class="{
              'invalid-text': $v.dateBirth.$dirty && !$v.dateBirth.required,
            }"
          >
            Заполните это поля *
          </small>
        </div>
        <div class="block__input">
          <label for="tel"> Номер телефона*</label>
          <input
            maxlength="12"
            id="tel"
            type="text"
            v-model.trim="tel"
            @input="
              tel === '+' || tel === '' ? (tel = '+' + 7) : '',
                tel.length < 3 && tel != '+7' ? (tel = '+' + 7) : ''
            "
            :class="{
              invalid:
                ($v.tel.$dirty && (!$v.tel.required || tel === '+7')) ||
                ($v.tel.$dirty && !$v.tel.maxLength),
            }"
          />
          <small
            :class="{
              'invalid-text':
                ($v.tel.$dirty && (!$v.tel.required || tel === '+7')) ||
                ($v.tel.$dirty && !$v.tel.maxLength),
            }"
            v-if="
              ($v.tel.$dirty && (!$v.tel.required || tel === '+7')) ||
                ($v.tel.$dirty && !$v.tel.maxLength)
            "
          >
            Заполните это поля *
          </small>
        </div>
        <div class="block__input gender">
          <label for="gender"> Пол </label>
          <div class="gender__block">
            <input
              id="male"
              type="radio"
              name="male"
              value="male"
              v-model="gender"
            />
            <label for="male" class="label"></label>
            <label for="male">Мужской </label>
            <input
              id="female"
              type="radio"
              name="female"
              value="female"
              v-model="gender"
            />
            <label for="female" class="label"></label>
            <label for="female"> Женский </label>
          </div>
        </div>
        <div class="block__input multiselect">
          <div class="multiselect__block">
            <div
              class="multiselect__box multiselect__item"
              @click="multiselect = !multiselect"
              :class="{
                'invalid-select': $v.$dirty && !VIP && !problem && !ОМС,
              }"
            >
              Группа клиентов *
              <div
                class="multiselect__span"
                :class="{ 'span-active': multiselect }"
              >
                &#17;
              </div>
            </div>

            <div v-if="multiselect" class="multiselect__items">
              <input
                class="multiselect__input"
                id="VIP"
                type="checkbox"
                v-model="VIP"
              />
              <div class="multiselect__item">
                <label class="multiselect__label" for="VIP"> VIP</label>
              </div>
              <input
                class="multiselect__input"
                id="problem"
                type="checkbox"
                v-model="problem"
              />
              <div class="multiselect__item">
                <label class="multiselect__label" for="problem"
                  >Проблемные</label
                >
              </div>
              <input
                class="multiselect__input"
                id="ОМС"
                type="checkbox"
                v-model="ОМС"
              />
              <div class="multiselect__item">
                <label class="multiselect__label" for="ОМС">ОМС</label>
              </div>
            </div>

            <small
              :class="{
                'invalid-text': $v.$dirty && !VIP && !problem && !ОМС,
              }"
              v-if="$v.$dirty && !VIP && !problem && !ОМС"
            >
              Выберите один из них *
            </small>
          </div>

          <select class="select" v-model="select">
            <option disabled value="">Лечащий врач</option>
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
        </div>
        <div class="block__input  send-sms">
          <div class="send-sms__block">
            <div class="round">
              <input type="checkbox" id="checkbox" v-model="picked" />
              <label for="checkbox"></label>
            </div>
            <label for="checkbox" class="send-sms__strong">
              Не отправлять СМС
            </label>
          </div>
        </div>
      </div>

      <div class="block__additional">
        <h2 class="block__title">Адрес</h2>
        <div class="block__input">
          <label for="index">Индекс </label>
          <input
            maxlength="6"
            id="Index"
            type="text"
            placeholder="Index"
            v-model="index"
          />
        </div>
        <div class="block__input">
          <label for="country">Страна </label>
          <input
            id="country"
            type="text"
            placeholder="Country"
            v-model="country"
          />
        </div>
        <div class="block__input">
          <label for="region">Область </label>
          <input
            id="region"
            type="text"
            placeholder="Region"
            v-model="region"
          />
        </div>
        <div class="block__input">
          <label for="сity">Город* </label>
          <input
            id="сity"
            type="text"
            v-model.trim="city"
            placeholder="Город"
            :class="{
              invalid: $v.city.$dirty && !$v.city.required,
            }"
          />
          <small
            :class="{
              'invalid-text': $v.city.$dirty && !$v.city.required,
            }"
            v-if="$v.city.$dirty && !$v.city.required"
          >
            Заполните это поля *
          </small>
        </div>
        <div class="block__input">
          <label for="street">Улица </label>
          <input
            id="street"
            type="text"
            placeholder="Street"
            v-model="street"
          />
        </div>
        <div class="block__input">
          <label for="house">Дом </label>
          <input id="house" type="text" placeholder="House" v-model="house" />
        </div>
      </div>

      <div class="block__additional">
        <h2 class="block__title">Паспорт</h2>
        <div class="block__input">
          <label for="index">Тип документа * </label>
          <select
            class="select"
            v-model="selected"
            :class="{
              'invalid-select': $v.$dirty && selected === '',
            }"
          >
            <option disabled value="">Тип документа</option>
            <option>Паспорт</option>
            <option>Свидетельство о рождении</option>
            <option>Вод. удостоверение</option>
          </select>
          <small
            :class="{
              'invalid-text': $v.$dirty && selected === '',
            }"
            v-if="$v.$dirty && selected === ''"
          >
            Выберите один из них *
          </small>
        </div>
        <div class="block__input">
          <label for="series">Серия </label>
          <input
            id="series"
            type="text"
            placeholder="Series"
            maxlength="10"
            v-model="series"
          />
        </div>
        <div class="block__input">
          <label for="number">Номер </label>
          <input
            id="number"
            type="number"
            placeholder="Number"
            v-model="number"
          />
        </div>
        <div class="block__input">
          <label for="issued">Кем выдан </label>
          <input
            id="issued"
            type="text"
            placeholder="Issued"
            v-model="issued"
          />
        </div>
        <div class="block__input">
          <label for="date">Дата выдачи *</label>
          <input
            id="date"
            type="date"
            placeholder="Дата выдачи"
            v-model.trim="date"
            :class="{
              invalid: $v.date.$dirty && !$v.date.required,
            }"
          />
          <small
            v-if="$v.date.$dirty && !$v.date.required"
            :class="{
              'invalid-text': $v.date.$dirty && !$v.date.required,
            }"
          >
            Заполните это поля *
          </small>
        </div>
      </div>

      <div class="form__submit submit">
        <div class="submit__block">
          <button
            class="submit__btn"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
          >
            Войти
          </button>
        </div>
        <p class="submit__text" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="submit__text" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <p class="submit__text" v-if="submitStatus === 'PENDING'">Sending...</p>
        <div v-if="submitStatus === 'OK'">
          <p>lastName: {{ lastName }}</p>
          <p>firstName: {{ firstName }}</p>
        </div>
      </div>
    </form>

    <div
      v-if="multiselect"
      class="form__box"
      @click="multiselect = false"
    ></div>
  </div>
</template>

<script>
// import Input from "@/components/Input.vue";
import { required, maxLength } from "vuelidate/lib/validators";
import Ex from "@/components/ex";
export default {
  name: "login",
  data: () => ({
    
    lastName: "",
    firstName: "",
    middleName: "",
    dateBirth: "",
    tel: "+7",
    gender: "",
    VIP: false,
    problem: false,
    ОМС: false,
    select: "",
    picked: false,

    index: "",
    country: "",
    region: "",
    city: "",
    street: "",
    house: "",

    selected: "",
    series: "",
    number: "",
    issued: "",
    date: "",

    multiselect: false,
    submitStatus: null,
  }),
  validations: {
    lastName: { required },
    firstName: { required },
    date: { required },
    tel: { required, maxLength: maxLength(12) },

    city: { required },
    selected: { required },
    dateBirth: { required },
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
  components: {
    Ex,
    // Input,
  },
};
</script>

<style scoped lang="scss"></style>
