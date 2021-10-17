<template>
  <div class="confirmation__block ">
    <div class="confirmation__box">
      <img src="@/assets/img/confirmation__img.svg" alt="" />
      <h2 class="confirmation__title">
        Введите код
      </h2>
    </div>
    <p class="confirmation__text">
      Мы отправили код сообщением на номер +7(702) 517 11 98
    </p>
    <div ref="block" class="confirmation__message">
      <input
        class="confirmation__input"
        type="number"
        @keyup="FunctionInput(0)"
        required
        max="9"
      />
      <input
        class="confirmation__input"
        type="number"
        @keyup="FunctionInput(1)"
        required
        max="9"
      />
      <input
        class="confirmation__input"
        type="number"
        @keyup="FunctionInput(2)"
        required
        max="9"
      />
      <input
        class="confirmation__input"
        type="number"
        @keyup="FunctionInput(3)"
        required
        max="9"
      />
    </div>
    <div class="confirmation__warning warning">
      <p class="warning__text">
        Не пришел код?
        <a href="" class="link">Переотправить</a>
        код через 00:20.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isConfirmationShowInput: false,
      block: null,
      active: 0,
    };
  },
  methods: {
    FunctionInput(value) {
      this.block[(value + 1) % 4].select();
    },
  },
  mounted() {
    this.block = this.$refs.block.children;
  },
};
</script>

<style scoped>
.confirmation__block {
  width: 43%;
  height: auto;
  padding: 24px 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;

  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.16px;
  color: #4a5568;

  background: #ffffff;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  box-sizing: border-box;
}
.confirmation__box {
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: #1a202c;
}
.confirmation__title {
  margin-left: 30%;
}
.confirmation__text {
  width: 70%;
  height: 40px;
  margin: 35px 0px;
  padding: 0 15%;
}
.confirmation__message {
  width: 25%;
  margin: 1% auto 0px;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.326451px;
  color: #1a202c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
}
.confirmation__warning {
  margin-top: 35px;
  padding: 0 15%;
  font-style: normal;
  font-weight: normal;
}
.confirmation__input {
  position: relative;
  width: 10px;
  height: 10px;
  background: #cbd5e0;
  border-radius: 50% 50%;
  border: none;
  outline: none;
}
.confirmation__number {
  position: absolute;
}
.confirmation__input:focus {
  width: 14px;
  height: 14px;
  background: #4c6fff;
  border-radius: 50% 50%;
  color: #4c6fff;
}
.confirmation__input:valid {
  font-size: 24px;
  line-height: 28px;
  background: none;
  border: none;
  border-radius: 0;
  height: 28px;
  width: 15px;
  font-weight: 600;
}
.warning__text {
  margin: 0;
}
.confirmation__input::-webkit-outer-spin-button,
.confirmation__input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>
