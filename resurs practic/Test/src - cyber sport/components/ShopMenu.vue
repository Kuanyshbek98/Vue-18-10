<template>
  <div class="product-menu">
    <swiper class="product-menu__items" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, i) in 12" :key="i" class="product-menu__item">
        <button
          :class="{ menu__active: i === 0 || i == 2 || i == 5 }"
          class="product-menu__btn default-btn"
        >
          Apple
        </button>
      </swiper-slide>
    </swiper>
    <select class="product-menu__select main-select" name="" id="">
      <option value="">Самые популярные</option>
      <option value="">Самые популярные</option>
      <option value="">Самые популярные</option>
    </select>
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
        spaceBetween: 15,
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
.product-menu {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.product-menu__items {
  display: flex;
}
.product-menu__btn {
  cursor: pointer;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
  border-radius: 12px;
  margin: 0 5px;
}
.menu__active {
  background: #1a202c;
  color: #ffffff;
}
.swiper-slide {
  width: auto;
}
.swiper-container {
  margin-right: 15%;
}
@media (max-width: 992px) {
  .swiper-container {
    margin-right: 8%;
  }
}
@media (max-width: 768px) {
  .product-menu__select {
    display: none;
  }
  .swiper-container {
    margin-right: auto;
  }
}
</style>
