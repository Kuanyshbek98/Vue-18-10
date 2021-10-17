<template>
  <div class="form">
    <Input :items="items" />
    <!-- <Ex :value="1"></Ex> -->
    <!-- <Ex v-bind:items="items" :ides="ides"></Ex> -->

    <!-- <Ex v-for="(item, index) in 1" :key="index" :level="index">Kuanysh</Ex> -->
    <!-- <Ex v-for="(item, index) in items" :key="index"  >{{ item.name }} </Ex> -->
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Ex from "@/components/ex";
export default {
  name: "login",
  data: () => ({
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
    ides: "id:'smial'",
  }),
  components: {
    Ex,
    Input,
  },
};
</script>
