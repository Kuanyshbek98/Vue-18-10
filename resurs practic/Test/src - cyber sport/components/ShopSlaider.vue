<template>
  <div class="product-types">
    <h1 class="product-types__title">Интернет магазин</h1>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        :class="{ slide__active: i === 1 || i == 6 }"
        class="product-types__items items-slide"
        v-for="(img, i) in 22"
        :key="i"
      >
        <div class="items-slide__item">
          <img class="items-slide__img" src="@/assets/img/image29.png" alt="" />
        </div>
        <div class="items-slide__text"><strong>Все товары</strong></div>
      </swiper-slide>
    </swiper>
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
        spaceBetween: 25,
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
.product-types {
  margin-top: 50px;
}
.swiper-slide {
  width: 56px;
} 
.product-types__items {
  width: 56px;
  height: auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 40px;
  background-color: #fff;
  color: #2d3748;
  cursor: pointer;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}
.product-types__items:hover {
  background-color: #1a202c;
  color: #fafafa;
}
.items-slide__item {
  width: 44px;
  height: 44px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 50% 50%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.items-slide__img {
  max-width: 90%;
}
.slide__active {
  background: #1a202c;
  color: #fafafa;
}
.items-slide__text {
  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin: 5px 0px 25px;
  word-break: break-word;
}
</style>
