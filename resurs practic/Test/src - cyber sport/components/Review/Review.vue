<template>
  <div class="review">
    <div class="review__personal ">
      <h2 class=" review__title">Отзывы</h2>
      <div class="review__text">
        <p>для Sony Alpha Mirrorless 4K Video Camera</p>
        <div class="review__img">
          <img src="@/assets/img/iconspace_Sta.png" alt="" />
          <b>{{ info.data.rating.avarage.toFixed(1) }}</b>
          <b id="review__text">/5.0</b>
        </div>
        <p class="advise-text">(88%) Покупателей советуют этот продукт</p>
      </div>
      <div class="review__ratings">
        <div
          v-for="(item, index) in 5"
          :key="index"
          class="review__rating rating"
        >
          <img src="@/assets/img/rating.png" alt="" />{{ 5 - index }}
          <div class="rating__wrap ">
            <div
              class="rating__inner"
              :style="
                'width:' + functionRating(info.data.rating[5 - index]) + '%'
              "
            ></div>
          </div>
          <p>{{ info.data.rating[5 - index] }}</p>
        </div>
      </div>
    </div>
    <ReviewAll />
  </div>
</template>

<script>
import ReviewAll from "@/components/Review/ReviewAll";
export default {
  data() {
    return {
      info: [],
      styleRating: 0,
    };
  },
  async created() {
    await this.$api.get("/shop/show?id=1").then((response) => {
      this.info = response.data;
    });
  },
  methods: {
    functionRating(value) {
      return (value * 100) / this.info.data.rating.count;
    },
  },
  components: {
    ReviewAll,
  },
};
</script>

<style scoped>
.review {
  margin: 50px 0;
}
.review__personal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.review__title {
  width: 100%;
}
.review__text {
  display: flex;
  flex-direction: column;
  color: #718096;
  width: 30%;
  height: 100%;
}
#review__text {
  color: #4a5568;
  font-size: 2rem;
}
.review__img {
  height: 60%;
  color: #000;
  font-size: 3rem;
  margin: 50px 0;
}
.review__img img {
  margin: 0px 10px;
}
.review__ratings {
  width: 70%;
}
.review__rating {
  display: flex;
  align-items: center;
}
.review__ratings img {
  margin-right: 5px;
}
.rating__wrap {
  width: 100%;
  height: 10px;
  background-color: #edf2f7;
  margin: 0px 10px;
  border-radius: 10px;
}
.rating__inner {
  width: 60%;
  height: 100%;
  background-color: #1a202c;
  border-radius: 10px;
}
@media (max-width: 1200px) {
  .review__img {
    margin: 20px 0;
  }
}

@media (max-width: 992px) {
  .review__ratings {
    width: 65%;
    min-width: 380px;
  }
}
@media (max-width: 768px) {
  .review__title {
    margin: 0;
    font-size: 20px;
  }
  .advise-text {
    display: none;
  }
  .review__text {
    width: 100%;
  }
  .review__ratings {
    width: 100%;
  }
  .review__ratings {
    min-width: 280px;
  }
}
</style>
