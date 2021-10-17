<template>
  <div v-if="PolycyDisabled" class="policy">
    <div class="polycy__info">
      <p class="polycy__text">
        Я согласен с <a href="">Условиями Использования</a> и
        <a href="">Политикой Конфиденциальности</a>
      </p>
      <div class="round">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox"></label>
      </div>
    </div>
    <button @click="PolycyBtn" class="policy__button main-btn">
      Подтвердить заказ
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PolycyDisabled: true,
    };
  },
  methods: {
    PolycyBtn() {
      this.PolycyDisabled = false;
    },
  },
};
</script>

<style scoped>
.policy {
  margin: 32px 18px 0px 18px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.55px solid #cbd5e0;
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
.polycy__text a {
  color: #4c6fff;
}
.policy__button {
  margin-top: 14px;
}
</style>
