<template>
  <div class="detail-picture__img">
    <img
      class="detail-picture__imgGlobal"
      src="@/assets/img/imageGloval.png"
      alt=""
    />
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(img, i) in 8"
        :key="i"
        class="detail-picture__images"
      >
        <img
          @click="functionImg()"
          class="detail-picture__imagesLocal"
          src="@/assets/img/images-local.png"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <div v-if="isBlockImg" :class="{ hiddenImg: isBlockImg }">
      <div class="visible">
        <img class="visible__img " src="@/assets/img/images-local.png" alt="" />
        <swiper
          class="visible__slaider"
          ref="mySwiper"
          :options="swiperOptions"
        >
          <swiper-slide
            v-for="(img, i) in 8"
            :key="i"
            class="detail-picture__images"
          >
            <img
              class="detail-picture__imagesLocal"
              src="@/assets/img/images-local.png"
              alt=""
            />
          </swiper-slide>
        </swiper>
        <button @click="functionImg()" class="visible__btn">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      isBlockImg: false,
      swiperOptions: {
        // slidesPerView: "auto",
        slidesPerView: 3,
        spaceBetween: 40,
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
  methods: {
    functionImg() {
      this.isBlockImg ? (this.isBlockImg = false) : (this.isBlockImg = true);
    },
  },
};
</script>

<style scoped>
.detail-picture__imgGlobal {
  width: 100%;
}
.detail-picture__imagesLocal {
  width: 80%;
}
.swiper-slide {
  margin-top: 30px;
  width: 25%;
}
.hiddenImg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.95;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
  transition: 5s;
}
.visible {
  background-color: #fff;
  width: 60%;
  height: 80%;
  min-height: 400px;
  display: flex;
  position: relative;
  padding: 30px;
  align-items: flex-start;
  justify-content: center;
}
.visible__img {
  width: 50%;
  margin: 0 2%;
}
.visible__slaider {
  width: 80%;
  position: absolute;
  bottom: 5%;
  margin: 0px 10%;
}
.visible__btn {
  position: absolute;
  top: 2%;
  right: 2%;
  /* transform: translate(860%, 11%); */
  width: 50px;
  height: 50px;
  border-radius: 50% 50%;
  font-size: 30px;
  color: rgb(255 255 255);
  cursor: pointer;
  background-color: #252525;
}

@media (max-width: 768px) {
  .visible__img {
    width: 70%;
    margin: 0 2%;
  }
}
</style>
