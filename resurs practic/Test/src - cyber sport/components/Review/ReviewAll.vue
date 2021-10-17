<template>
  <div class="review__all">
    <div class="review__list list">
      <h2 class="list__title text-margin">Все отзывы(203)</h2>
      <div class="list__sort">
        <p class="text-margin">Сортировать по :</p>
        <select class="main-select" name="" id="list__select">
          <option value="">Новым</option>
          <option value="">Новым</option>
          <option value="">Новым</option>
        </select>
      </div>

      <button @click="showForma" class="review__button main-btn">
        Написать отзыв
      </button>
      <div v-for="pos in 3" :key="pos.id" class="review__items items">
        <div class="review__item item">
          <img class="item__img" src="@/assets/img/Image.png" alt="" />
          <div class="item__title">
            <h3 class="  text-margin">Эмма Стоун</h3>
            <p class=" text-margin">20 Июля 2021</p>
          </div>
          <div class="item__rating-block">
            <img
              v-for="pos in 5"
              :key="pos.id"
              class="item__rating"
              src="@/assets/img/rating.png"
              alt=""
            />
          </div>
        </div>
        <p class="text-margin">
          Sony α, is a camera system introduced on 5 June 2006. It uses and
          expands upon Konica Minolta camera technologies, including the Minolta
          AF SLR
        </p>
        <div class="items__img">
          <img @click="functionImg()" src="@/assets/img/item-img.png" alt="" />
          <img @click="functionImg()" src="@/assets/img/item-img2.png" alt="" />
          <img @click="functionImg()" src="@/assets/img/item-img3.png" alt="" />
        </div>
      </div>
    </div>
    <div class="review__form" :class="{ 'show-form': showForm }">
      <FormBlock />
      <button
        @click="functionbtn()"
        class="visible__btn"
        :class="{ 'show-btn': !showForm }"
      >
        &times;
      </button>
    </div>

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
        <button @click="functionImg()" class="visible__btn2">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import FormBlock from "@/components/FormBlock";
export default {
  data() {
    return {
      showForm: false,
      isBlockImg: false,
      swiperOptions: {
        // slidesPerView: "auto",
        slidesPerView: 3,
        spaceBetween: 40,
      },
    };
  },
  components: {
    FormBlock,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  methods: {
    showForma() {
      console.log(this.showForm);
      this.showForm = !this.showForm; 
    },
    functionImg() {
      this.isBlockImg ? (this.isBlockImg = false) : (this.isBlockImg = true);
    },
    functionbtn() {
      this.showForm ? (this.showForm = false) : (this.showForm = true);
    },
  },
};
</script>

<style scoped>
.review__all {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.review__list {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
}
.review__items {
  width: 100%;
  color: #718096;
  margin: 10px 0;
}
.review__item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item__rating-block {
  width: 40%;
}
.item__rating {
  margin: 0px 5px;
}
.item__title {
  margin: 0 40px 0 10px;
  color: #000;
}
.review__form {
  width: 35%;
}
#list__select {
  background-color: #f7fafc;
  margin: 10px;
  /* margin-left: 10px; */
  color: #000;
}
.list__sort {
  display: flex;
  color: #959ead;
}
.review__button {
  display: none;
}
.items__img {
  width: 100%;
}
.detail-local {
  width: 90%;
}
/* -------------------------------------- */
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
.visible__btn2 {
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

/* -------------------------------------- */
.show-btn {
  display: none;
}
@media (max-width: 992px) {
  .review__form {
    width: 50%;
  }
  .review__list {
    width: 50%;
  }
  .text-margin {
    margin: 6px 0;
  }
  #list__select {
    margin: 0;
    margin-left: 10px;
  }
}

@media (max-width: 768px) {
  .review__list {
    width: 100%;
    padding: 0 5px;
  }
  .list__sort {
    display: none;
  }
  .list__title {
    font-size: 16px;
  }

  .item__rating-block {
    width: 50%;
    margin: 10px 0;
  }
  .review__form {
    display: none;
  }
  .review__button {
    display: block;
    width: 50%;
    font-size: 15px;
  }
  .review__button:focus + .review__form {
    display: fixed;
  }
  .show-form {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    margin: auto;
    top: 0;
    left: 0;

    background: rgba(160, 174, 192, 0.4);
    backdrop-filter: blur(16px);
  }
  .visible__btn {
    position: absolute;
    top: 6%;
    right: 9%;
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
    font-size: 30px;
    color: rgb(255 255 255);
    background-color: #4a5568;
    cursor: pointer;
  }
  /* -------------------------------------- */
  .visible__img {
    width: 70%;
    margin: 0 2%;
  }
  /* -------------------------------------- */
}
</style>
