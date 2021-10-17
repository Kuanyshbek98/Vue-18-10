<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="block__input">
      <label :for="item.name">{{ item.value }} </label>
      <input
        :id="item.name"
        type="text"
        :placeholder="item.placeholder"
        v-model.trim="item.name"
        :class="{
          invalid:
            item.name != middleName &&
            $v.firstName.$dirty &&
            !$v.firstName.required,
          invalid:
            item.name === tel &&
            (($v.tel.$dirty && (!$v.tel.required || tel === '+7')) ||
              ($v.tel.$dirty && !$v.tel.maxLength)),
        }"
        @input="
          item.name === tel &&
            (tel === '+' || tel === '' ? (tel = '+' + 7) : '',
            tel.length < 3 && tel != '+7' ? (tel = '+' + 7) : '')
        "
      />
      <small
        :class="{
          'invalid-text': $v.firstName.$dirty && !$v.firstName.required,
        }"
        v-if="$v.firstName.$dirty && !$v.firstName.required"
      >
        Заполните это поля *
      </small>
    </div>
    <!-- <div class="block__input">
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
        :class="{
          'invalid-text': $v.lastName.$dirty && !$v.lastName.required,
        }"
        v-if="$v.lastName.$dirty && !$v.lastName.required"
      >
        Заполните это поля *
      </small>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      //   items: this.items,
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
    };
  },
  mounted() {
    console.log(this.items);
  },
};
</script>
