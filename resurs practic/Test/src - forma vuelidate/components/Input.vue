<template>
  <div>
    <label :for="item.name">{{ item.value }} </label>
    <input
      :id="item.name"
      type="text"
      :placeholder="item.placeholder"
      v-model.trim="item.name"
      :class="{
        invalid:
          item.name != middleName &&
          $v.item.name.$dirty &&
          !$v.item.name.required,
        invalid:
          item.name === tel &&
          (($v.item.name.$dirty &&
            (!$v.item.name.required || item.name === '+7')) ||
            ($v.item.name.$dirty && !$v.item.name.maxLength)),
      }"
      @input="
        item.name === tel &&
          (item.name === '+' || item.name === '' ? (item.name = '+' + 7) : '',
          item.name.length < 3 && item.name != '+7'
            ? (item.name = '+' + 7)
            : '')
      "
    />
    <small
      :class="{
        'invalid-text': $v.item.name.$dirty && !$v.item.name.required,
      }"
      v-if="$v.item.name.$dirty && !$v.item.name.required"
    >
      Заполните это поля *
    </small>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      items: [
        {
          name: "lastName",
          type: "text",
          value: "Фамилия *",
          placeholder: "LastName",
        },
        {
          name: "firstName",
          type: "text",
          value: "Имя *",
          placeholder: "FirstName",
        },
        {
          name: "middleName",
          type: "text",
          value: "Отчество",
          placeholder: "MiddleName",
        },
        {
          name: "dateBirth",
          type: "date",
          value: "Дата рождение *",
          placeholder: "Дата рождение",
        },
        {
          name: "tel",
          type: "text",
          value: "Номер телефона*",
          placeholder: "",
        },
      ],
      itemvar: "item.name",
    };
  },
  mounted() {
    // console.log(this.items);
  },
};
</script>
