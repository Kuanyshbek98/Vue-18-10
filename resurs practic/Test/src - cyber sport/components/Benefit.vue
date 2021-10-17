<template>
  <div class="benefit-service">
    <div
      v-if="benefitShow"
      class="benefit-service__wrapper benefit-service__wrapper_block"
    >
      <h1 class="benefit-service__title">
        Все нужные киберспортивные товары по доступным ценам
      </h1>
      <div class="benefit-service__inner inner-service">
        <div
          v-for="(item, i) in 4"
          :key="i"
          class="inner-service__block benefit-service__wrapper_block"
        >
          <img
            class="inner-service__img"
            src="@/assets/img/service-badge.png"
            alt=""
          />
          <strong class="inner-service__desc">Лучшие цены</strong>
          <p class="inner-service__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
    <Success v-if="!benefitShow" />
  </div>
</template>

<script>
import Success from "@/components/Success";
export default {
  data() {
    return {
      benefitShow: true,
    };
  },
  components: {
    Success,
  },
};
</script>

<style scoped>
.benefit-service {
  font-family: Exo 2;
  font-style: normal;
  width: 55%;
}
.benefit-service__wrapper_block {
  background: #ffffff;
  border: 1px solid #edf2f7;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 16px 24px 16px 16px;
}
.benefit-service__title {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.326451px;
  color: #1a202c;
}
.benefit-service__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
.inner-service__block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.inner-service__img {
  margin-bottom: 20px;
}
.inner-service__text {
  font-size: 14px;
  line-height: 18px;
  color: #718096;
}
</style>
