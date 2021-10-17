<template>
  <div class="page__section">
    <div v-for = "todo in Todo" :key = "todo" class = "section__row row">
      <div class="row__info info">
        <div class="info__wrapper">
          <div class="info__avatar">
            <img src="../assets/img/kc.png" alt="" />
            <label class="avatar__text"> AirAstana</label>
          </div>
          <div class="info__inner">
            <label>25 ноя, вс</label>
            <label class="inner__text">23:25</label>
          </div>
          <div class="info__way">
            <div class="way__wrapper">
              <label class="way__tagline">ALA</label>
              <label class="way__text">4 ч 20 м</label>
              <label class="way__tagline">TSE</label>
            </div>
            <img src="../assets/img/line.png" alt="" />
            <div class="way__wrap">
              <label>через Шымкент, 1 ч 50 м</label>
            </div>
          </div>
          <div class="info__inner">
            <label>26 ноя, вс</label>
            <label class="inner__text">03:45</label>
          </div>
        </div>
        <div class="info__wrap wrap">
          <a href="" class="wrap__link">Детали перелета</a>
          <a href="" class="wrap__link">Условия тарифа</a>
          <label class="wrap__label">
            <img src="../assets/img/no.png" alt="" />
            невозвратный</label
          >
        </div>
      </div>

      <div class="row__price price">
        <label class="price__snippet">590 240 ₸</label>
        <button class="price__btn">Выбрать</button>
        <label class="price__desc">Цена за всех пассажиров</label>
        <div class="">
          <label class="price__excerpt">Нет багажа</label>
          <button class="price__control">+ Добавить багаж</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Todo: ["", "", "", ""],
    };
  },
};
</script>

<style>
.section__row {
  width: 100%;
  height: 168px;
  background-color: #fff;
  margin-bottom: 12px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.row__info {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 15px;
}
.info__avatar {
  display: flex;
}
.avatar__text {
  margin-left: 5px;
}
.info__inner {
  width: 15%;
  text-align: center;
}
.inner__text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #202123;
}
.info__way {
  line-height: 22px;
  text-align: center;
}
.way__wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.way__tagline {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 0px;
  color: #b9b9b9;
}
.way__text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 3px;
  text-align: center;
  color: #202123;
}
.way__wrap {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #ff9900;
}

.info__wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
}
.wrap__link {
  margin-right: 6%;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;

  color: #7284e4;
}
.wrap__label {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: Arial;
  line-height: 14px;
  color: #707276;
}
/*-----------------------------------------------*/
.row__price {
  width: 27%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  background: #f5f5f5;
  border-radius: 0px 4px 4px 0px;
}
.price__snippet {
  font-family: Arial;
  font-size: 24px;
  line-height: 28px;
  color: #202123;
}
.price__btn {
  width: 90%;
  background: #55bb06;
  border-radius: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
.price__desc {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #707276;
}
.price__excerpt {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #202123;
}
.price__control {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #5763b3;
}
.search-filter {
  display: none;
}
</style>
