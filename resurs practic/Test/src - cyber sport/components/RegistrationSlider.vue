<template>
  <div class="registration__block">
    <swiper
      class="registration__slider"
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide v-for="(img, i) in 3" :key="i" class="registration__images">
        <img
          class="registration__image"
          src="@/assets/img/image 10.svg"
          alt=""
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="registration__text">
      <h2 class="registration__title">Подключи ULTRA от Казахтелеком</h2>
      <strong class="registration__strong"
        >Регистрируйся и подпишись на рассылку почты и получай бонусы на
        покупки</strong
      >
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      inputShowForm: true,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        },
        /* ?????????????????????????????????????????????? */
        slidesPerView: 1,
        spaceBetween: 1,
        autoplay: {
          delay: 1000,
        },
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
.registration__slider {
  /* width: 100%; */
  min-width: 360px;
}
.registration__image {
  width: 100%;
}
.registration .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border: 1px solid #ffffff;
}
.swiper-pagination {
  bottom: 35%;
  width: 20%;
  --swiper-theme-color: #fff;
  /* color: var(--swiper-theme-color); */
}
/* :root {
    --swiper-theme-color: #007aff;
} */
/* ?????????????????????????????????????????????? */
.registration__block {
  position: relative;
  width: 48%;
}
.registration__text {
  width: 80%;
  color: #fff;
  z-index: 1000;
  position: absolute;
  left: 4%;
  top: 65%;
}
.registration__title {
  line-height: 38px;
  margin: 10px 0;
  font-weight: bold;
  font-size: 24px;
}
.registration__strong {
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.16px;
  opacity: 0.6;
}
</style>
