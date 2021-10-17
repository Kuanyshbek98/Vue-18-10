<template>
  <div class="carousel">
    <div class="container">
      <div class="swiper">
        <swiper class="swiper-wrapper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="carousel__block">
            <div class="carousel__box">
              <h1 class="corousel__title">Лучшие выбирают нас! Почему?</h1>
              <div class="corousel__text-block">
                <strong class=Z"corousel__strong">
                  Приложение оптимизированное для мобильных устройств
                </strong>
                <p class="corousel__text">
                  Если у вас нет аккаунта, создайте его, чтобы получить доступ
                  ко всем преимуществам платформы
                </p>
              </div>
            </div>
            <div class="corousel__img">
              <img
                src="http://back.neppe.kz/images/illustration-2.png"
                alt=""
              />
            </div>
          </swiper-slide>
          <swiper-slide class="carousel__block">
            <div class="carousel__box">
              <h1 class="corousel__title">Лучшие выбирают нас! Почему?</h1>
              <div class="corousel__text-block">
                <strong class="corousel__strong">
                  Приложение оптимизированное для мобильных устройств
                </strong>
                <p class="corousel__text">
                  Если у вас нет аккаунта, создайте его, чтобы получить доступ
                  ко всем преимуществам платформы
                </p>
              </div>
            </div>
            <div class="corousel__img">
              <img
                src="http://back.neppe.kz/images/illustration-2.png"
                alt=""
              />
            </div>
          </swiper-slide>
          <swiper-slide class="carousel__block">
            <div class="carousel__box">
              <h1 class="corousel__title">Лучшие выбирают нас! Почему?</h1>
              <div class="corousel__text-block">
                <strong class="corousel__strong">
                  Приложение оптимизированное для мобильных устройств
                </strong>
                <p class="corousel__text">
                  Если у вас нет аккаунта, создайте его, чтобы получить доступ
                  ко всем преимуществам платформы
                </p>
              </div>
            </div>
            <div class="corousel__img">
              <img
                src="http://back.neppe.kz/images/illustration-2.png"
                alt=""
              />
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev carousel__btn">
          <img src="@/assets/images/ion_left.svg" alt="" />
        </div>
        <div class="swiper-button-next carousel__btn">
          <img src="@/assets/images/ion_right.svg" alt="" />
        </div>
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
      //   inputShowForm: true,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
.carousel {
  background-color: #ffffff;
  position: relative;
  box-shadow: inset 0em -2em rgb(246 242 255);
}
.swiper,
.swiper-wrapper,
.carousel__block {
  border-radius: 8px;
}
.swiper {
  margin-top: 80px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 12px 32px rgba(0, 0, 0, 0.1);
}
.carousel__block {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 48px;
  background: #ffffff;
  border: 0.33px solid #f4f4f4;
  box-sizing: border-box;
  /* box-shadow: 0px 2px 6px rgba(255, 0, 0, 0.04),
    0px 12px 32px rgba(255, 2, 2, 0.1);  */
}
.carousel__box {
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 80px 90px 0px;
}
.corousel__text-block {
  margin: 25px 0px 50px 0px;
  font-family: Akrobat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 144%;
  letter-spacing: 0.15px;
  color: #000000;
}
.corousel__title {
  margin: 15px 0px;
  font-family: Akrobat;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 144%;
  letter-spacing: 0.15px;
  color: #000000;
}
.corousel__text {
  font-family: Noto Sans;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #393939;
}
.corousel__img {
  width: 45%;
  height: 100%;
}
.corousel__img img {
  width: 100%;
  height: 100%;
}
.carousel__btn {
  position: absolute;
  top: 82%;
  background: #ffffff;
  width: 56px;
  height: 56px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04), 0px 12px 32px rgba(0, 0, 0, 0.08);
  border-radius: 50% 50%;
}
.swiper-button-next {
  left: 210px;
}
.swiper-button-prev {
  left: 50px;
}
.carousel__btn:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: " ";
}
.swiper-pagination {
  position: absolute;
  width: 100px;
  height: 28px;
  top: 81.3%;
  left: 110px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  color: #ffffff;
}

@media (max-width: 768px) {
  .carousel__block {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding: 0px;
    padding: 10px;
  }
  .carousel__box {
    width: 100%;
    padding: 0px;
  }
  .corousel__img {
    width: 100%;
  }
  .corousel__title {
    margin: 15px 0px 15px 15px;
    font-size: 24px;
  }
  .corousel__text-block {
    margin: 0px 24px 75px 24px;
    font-size: 20px;
  }
  .swiper-button-next {
    left: 190px;
    top: 92%;
  }
  .swiper-button-prev {
    left: 35px;
    top: 92%;
  }
  .swiper-pagination {
    top: 91.3%;
    left: 90px;
  }
}

@media (max-width: 576px) {
  .corousel__title {
    margin: 15px 0px 15px 24px;
    font-size: 20px;
  }
  .corousel__text-block {
    font-size: 18px;
    margin: 0px 0px 75px 24px;
  }
  .corousel__text {
    font-size: 15px;
  }
  .swiper-button-next {
    left: 190px;
    top: 91%;
  }
  .swiper-button-prev {
    left: 35px;
    top: 91%;
  }
  .swiper-pagination {
    top: 90.3%;
    left: 90px;
  }
}

@media (max-width: 480px) {
  .corousel__title {
    margin: 0px 0px 15px 5px;
  }

  .corousel__text-block {
    margin: 0px 0px 75px 5px;
  }
}
</style>
