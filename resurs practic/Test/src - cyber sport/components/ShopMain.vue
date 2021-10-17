<template>
  <div class="product-main">
    <h2>{{ title }}</h2>
    <div class="product-main__wrapper">
      <div
        class="product-main__inner inner-product"
        v-for="(item, i) in number"
        :key="i"
      >
        <img
          class="inner-product__img"
          src="@/assets/img/shop-image.png"
          alt=""
        />
        <div class="inner-product__box">
          <h4 class="inner-product__title">
            <a href="shop/2"> HP PAVILION GAMING </a>
          </h4>
          <div class="inner-product__text product-text">
            <strong class="product-text__rating">4.9</strong>
            <img
              class="product-text__img"
              src="@/assets/img/rating.png"
              alt=""
            />
            <img
              class="product-text__img"
              src="@/assets/img/product-elipse.png"
              alt=""
            />
            <strong class="product-text__text"> AMD Ryzen 9 5900HX</strong>
          </div>
        </div>
        <button class="inner-product__button main-btn">470 500 ₸</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "number"],
  data() {
    return {
      arrnumber: this.number,
    };
  },
};
</script>
<style scoped>
.product-main {
  margin-top: 50px;
}
.product-main__wrapper {
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}
.product-main__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}
.inner-product__box {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #1a202c;
}
.inner-product__img {
  width: 80%;
}
.inner-product__title {
  margin: 2px 0;
}
.inner-product__text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
}
.product-text__img {
  margin: 0 5px;
}
.product-text__text {
  font-family: Jost;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #718096;
}
.inner-product__button {
  width: 90%;
  margin: 6px;
  border-radius: 14px;
  background: #edf2f7;
  color: #1a202c;
}

@media (max-width: 768px) {
  .product-main__wrapper {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
  .inner-product__text {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .product-main__wrapper {
    grid-template-columns: repeat(auto-fill, minmax(134px, 1fr));
  }
}
</style>
