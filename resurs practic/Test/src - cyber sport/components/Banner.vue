<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <!-- <div v-for="(img, i) in images" :key="img.id" v-show=" "> @slideChangeTransitionStart="slideChange()"
        :style="{
          backgroundImage: `url(http://37.46.133.192:8094/${img.image})`,
        }" 
        -->
      <swiper-slide v-for="(img, i) in images.data" :key="i">
        <img :src="'http://185.111.106.28/' + img.image" />
      </swiper-slide>

      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>

    <div class="slider-time">
      <div class="slider-time__inner" :style="{ width: `${slidernum}%` }"></div>
    </div>
    <button class="banner__btn">Узнать больше</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import axios from "axios";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },

  // =-----------------------------------------------
  data() {
    return {
      images: [],
      imag: [],
      slidernum: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // autoplay: {
        //   delay: 3000,
        // },
      },
      slideNumber: 2,
      email: "ertghgfdsf",
      password: "Франция",
      cat_id: 1,
      info: null,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  async created() {
    const res = await fetch("http://185.111.106.28/api/v1/user/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify({
        image: "@/assets/img/club.png",
      }),
    });
    this.images = await res.json();
    // console.log(this.imag);
    //---------------------------------------------------
    // let formData = new FormData();
    // formData.append("cat_id", 1);
    // axios
    //   .post("http://37.46.133.192:8094/api/v1/product/filter", formData)
    //   .then((response) => {
    //     this.info = response.data.bpi;
    //     console.log(response.data);
    //   })
    //   .catch((error) => console.log(error));
  },

  // methods: {
  // slideChange(e) {
  //   console.log(e);
  // },
  // },

  mounted() {
    // let formData = new FormData();
    // formData.append("countries[0]", "Франция");
    //--------------------
    // axios
    //   .post("http://185.111.106.28/api/v1/product/filter", formData)
    //   .then((response) => {
    //     this.info = response.data.bpi;
    //     // console.log(response);
    //   })
    //   .catch((error) => console.log(error));
    //-------------------------------------------------------
    // let formData = new FormData()
    //     for (let i = 0; i < 10; i++) {
    //       formData.append(countries[${i}], 'Франция')
    //     }
    //     this.$api.post('/product/filter', formData)
    //-------------------------------------------------------
    setInterval(() => {
      if (this.slidernum === 100) {
        this.slidernum = 0;
        this.swiper.slideNext(1000, false);
      } else {
        this.slidernum += 0.5;
      }
    }, 30);
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.banner {
  position: relative;
  /* background-color: #ffffff; */
}
.banner__btn {
  position: absolute;
  left: 22%;
  top: 75%;
  background: #ffffff;

  align-items: center;
  padding: 8px 24px;
  border: 0.5px solid rgba(26, 32, 44, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
  z-index: 1000;
}

.slider-time {
  height: 5px;
  background-color: rgba(76, 111, 255, 0.3);
}
.slider-time__inner {
  height: 5px;
  border: none;
  border-radius: 5px;
  background-color: #4c6fff;
}
</style>
