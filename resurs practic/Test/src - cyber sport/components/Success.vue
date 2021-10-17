<template>
  <div class="success">
    <div class="success__block">
      <img src="@/assets/img/sacces__img.svg" alt="" />
      <div class="success__box">
        <h2 class="success__totle">Спасибо за заказ!</h2>
        <p class="success__text">
          В ближайшем времени магазин свяжется с вами для уточнения деталей
          доставки и способов оплаты
        </p>
      </div>
      <button class="success__button default-btn">Вернуться на главную</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disableSuccess: false,
      disableBenefit: true,
    };
  },
};
</script>

<style scoped>
.success {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.success__block {
  width: 384px;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 34px;
}
.success__box {
  text-align: center;
}
.success__text {
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.16px;
  color: #1a202c;
}
.success__button {
  padding: 10px 24px;
  background: #ffffff;
  border: 0.5px solid rgba(26, 32, 44, 0.33);
  box-sizing: border-box;
  border-radius: 12px;

  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.16px;
  color: #1a202c;
}
</style>
