<template>
  <div class="detail-info">
    <div class="detail-info__block">
      <strong class="detail-info__strong">
        В наличии {{ info.count }} шт.
      </strong>
      <strong class="detail-info__strong-red">Нет в наличии</strong>
      <h1 class="detail-info__title">
        {{ info.title }}
      </h1>
      <p class="detail-info__text">
        {{ info.description }}…<a href="">Читать дальше</a>
      </p>
      <div class="detail-info__btn detail-btn">
        <div class="detail-btn__shoise">
          <strike class="detail-btn__strike">{{ info.price_current }} ₸</strike>
          <strong>{{ info.price_discount }} ₸</strong>
        </div>
        <div class="detail-btn__block">
          <button
            id="detail-btn__button"
            class="detail-btn__button  default-btn"
          >
            Оформить сейчас
          </button>
          <button class="detail-btn__btn  main-btn ">
            {{ info.in_basket ? "В корзину" : "В корзине" }}
          </button>
        </div>
      </div>
    </div>
    <DetailCharacteristics />
    <DetailSalesman class="selesman-info" />
  </div>
</template>

<script>
import DetailCharacteristics from "@/components/DetailCharacteristics";
import DetailSalesman from "@/components/DetailSalesman";
export default {
  data() {
    return {
      info: [],
    };
  },
  components: {
    DetailCharacteristics,
    DetailSalesman,
  },
  async created() {
    await this.$api.get("/shop/show?id=1").then((response) => {
      this.info = response.data.data;
    });
    // .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.detail-info {
  width: 45%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
}
.detail-info__block {
  padding: 10px;

  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #718096;
}
.detail-info__strong-red {
  color: #f16063;
  margin-left: 10px;
}
.detail-info__text {
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.16px;
  color: #2d3748;
}
.detail-info__title {
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.326451px;
  color: #1a202c;
}
.detail-info__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.detail-btn__block {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.detail-btn__shoise {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  font-family: Exo 2;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.326451px;
  color: #1a202c;
}
.detail-btn__strike {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  text-decoration-line: line-through;
  color: #718096;
}
.detail-btn__button {
  width: 65%;
  padding: 0px 5px;
  margin: 0px 20px;
  font-size: 15px;
}
.detail-btn__btn {
  width: 45%;
}
.selesman-info {
  display: none;
}

@media (max-width: 992px) {
  .detail-info {
    min-width: 280px;
  }
  .detail-btn__block {
    width: 73%;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .detail-info__btn {
    margin-bottom: 24px;
  }
  .detail-btn__button {
    padding: 3px 10px;
    margin: 10px 0px;
    font-size: 14px;
  }
  .detail-btn__shoise {
    padding: 10px 0;
    font-size: 24px;
  }
}
@media (max-width: 768px) {
  .detail-info {
    width: 100%;
  }
  .detail-info__block {
    margin-top: 24px;
  }
  .selesman-info {
    display: block;
  }
  .detail-btn__strike {
    font-weight: 500;
    font-size: 16px;
  }
}
</style>
