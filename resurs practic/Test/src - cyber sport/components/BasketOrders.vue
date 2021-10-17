<template>
  <div class="orders">
    <h2 class="order__title">Ваш заказ</h2>
    <div class="order__wrapper">
      <div v-for="(item, i) in 3" :key="i" class="order__wrap">
        <div class="order__inner  ">
          <img class="order__img" src="@/assets/img/order__text.png/" alt="" />
          <div class="order__text">
            <h4 class="order__slogan margin-text">ACER NITRO 5</h4>
            <p class="order__caption margin-text">Intel ® Core™ i5-10300H</p>
            <strong class="order__strong margin-text">1 674 500 ₸ </strong>
            <strong class="order__desc margin-text">x1</strong>
          </div>
        </div>
        <div class="order__btns">
          <button class="oreder__btn">+</button>
          <button class="oreder__btn minus-btn">-</button>
        </div>
      </div>
    </div>
    <Check />
  </div>
</template>

<script>
import Check from "@/components/Check";
export default {
  components: {
    Check,
  },
};
</script>

<style scoped>
.orders {
  width: 40%;
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1a202c;
  padding: 16px 4px;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  box-sizing: border-box;
  border-radius: 12px;
}
.order__wrapper {
  border-bottom: 0.55px solid #cbd5e0;
  margin: 8px 14px;
}
.order__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
}
.order__img {
  margin: 4px 8px;
}
.order__title {
  margin: 2px 14px;
  padding: 16px 0px;
  border-bottom: 0.55px solid #cbd5e0;
}
.order__text {
  margin: 14px 4px;
}
.margin-text {
  margin: 2px 5px;
}
.order__caption {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #718096;
}
.order__desc {
  font-weight: 500;
  color: #4c6fff;
}
.order__btns {
  display: flex;
  flex-direction: column;
}
.oreder__btn {
  width: 44px;
  height: 44px;
  font-size: 25px;
  background: #edf2f7;
  border-radius: 50% 50%;
}
.minus-btn {
  background-color: #fff;
}
</style>
