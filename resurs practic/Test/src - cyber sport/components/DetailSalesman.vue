<template>
  <div class="detail-salesman">
    <h2 class="detail-salesman__title">Продавец</h2>
    <div class="detail-salesman__wrapper">
      <ul class="detail-salesman__inner inner-info">
        <li class="inner-info__item item-slogan">
          <div class="item-slogan__box">
            <img
              class="item-slogan__icon"
              src="@/assets/img/slogan__img.png"
              alt=""
            />
            <strong class="item-slogan__text">
              {{ info.name }}
            </strong>
          </div>
          <img
            class="item-slogan__logo"
            src="@/assets/img/slogan__avatar.png"
            alt=""
          />
        </li>
        <li class="inner-info__item item-tel">
          <img
            class="item-tel__img"
            src="@/assets/img/inner-info__tel.png"
            alt=""
          />
          <div class="item-tel__tel tel-info">
            <a href="tel:+7777389-93-90">{{ info.phone.sale }}</a>
            <strong class="tel-info__text">Отдел продаж</strong>
            <a href="tel:+7777389-93-90">
              {{ info.phone.courier }}
            </a>
            <strong class="tel-info__text">Служба доставки</strong>
            <a href="tel:+7777389-93-90">
              {{ info.phone.office }}
            </a>
            <strong class="tel-info__text">Главный офис</strong>
          </div>
        </li>
        <li class="inner-info__item">
          <img src="@/assets/img/inner-info__map.png" alt="" />
          <strong class="item-slogan__text">
            {{ info.address }}
          </strong>
        </li>
        <li class="inner-info__item">
          <img src="@/assets/img/inner-info__sait.png" alt="" />
          <a href="" class="item-slogan__text"> {{ info.site }}</a>
        </li>
        <li class="inner-info__item">
          <img src="@/assets/img/inner-info__massege.png" alt="" />
          <strong class="item-slogan__text">
            {{ info.email }}
          </strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [],
    };
  },
  async created() {
    await this.$api.get("/shop/show?id=1").then((response) => {
      this.info = response.data.data.company;
    });
  },
};
</script>
<style scoped>
.detail-salesman {
  margin-top: 100px;
}
.detail-salesman__wrapper {
  background: #fff;

  padding: 10px 0px;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  border-radius: 12px;
}
.item-slogan__box {
  display: flex;
  align-items: center;
}
.item-slogan__text {
  margin: 0 10px;
}
.inner-info__item {
  padding: 15px;
  display: flex;
  align-items: center;
  border-top: 0.1px solid rgb(235, 235, 235);
}
.item-slogan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 2px 10px 10px 10px;
}
.item-tel {
  display: flex;
  align-items: flex-start;
}
.item-tel__tel {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
.tel-info__text {
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #718096;
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .detail-salesman {
    margin-top: 24px;
  }
}
</style>
