<template>
  <div class="partners-bLock">
    <h2 class="partners-bLock__title">Нам доверяют:</h2>
    <div class="partners-bLock__slider">
      <swiper
        class="partners-bLock__items container"
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          class="partners-bLock__item"
          v-for="(item, i) in 12"
          :key="i"
        >
          <img
            class="partners-bLock__img"
            src="@/assets/img/shape.png"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 24,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
.partners-bLock {
  margin-top: 50px;
  background: #f7fafc;
  text-align: center;
}
.partners-bLock__title {
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  color: #1a202c;
}
.partners-bLock__slider {
  background: #ffffff;
}
.partners-bLock__item {
  margin: 15px 0px;
  border-radius: 12px;
  max-width: 14%;
  min-width: 130px;
}
.partners-bLock__item:hover {
  background: rgb(247, 247, 247);
}
.partners-bLock__img {
  padding: 45px 0px;
}
</style>
