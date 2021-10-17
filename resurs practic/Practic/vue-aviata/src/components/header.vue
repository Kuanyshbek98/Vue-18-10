<template>
  <div class="header">
    <img class="header__logo" src="../assets/img/header_logo.png" alt="" />
    <div class="header__menu menu">
      <h1 class="menu__title">Пойск и бронирование авиябилетов</h1>
      <div class="menu__blok">
        <a href="#"
          ><button class="link__choice link__choice_button">
            выбор вариянта
          </button></a
        >
        <img src="../assets/img/strelka.png" alt="" />
        <a href="#"
          ><button class="link__passengers link__choice_button">
            пассажиры
          </button></a
        >
        <img src="../assets/img/strelka.png" alt="" />
        <a href="#">
          <button class="link__payment link__choice_button">
            способ оплаты
          </button></a
        >
        <img src="../assets/img/strelka.png" alt="" />
        <a href="#">
          <button class="link__confirmation link__choice_button">
            подтверждение
          </button></a
        >
      </div>
    </div>
    <div class="header__info">
      <ul>
        <li>
          <a href="tel:+77272255055">
            +7(727)
            <b>22 55 055</b></a
          >
        </li>
        <li><a href="tel:+77010653333">+7(701) 065 33 33</a></li>
        <li><a href="mail:help@aviata.kz">help@aviata.kz</a></li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  display: grid;
  grid-template-columns: 293px 580px 270px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  /* justify-content: space-evenly; */
  background-color: #fff;
  padding-bottom: 5px;
}
.header-mobil {
  display: grid;
  grid-template-columns: 80% 20%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
}
.header__logo {
  width: 80%;
}
.container {
  width: 90%;
  margin-top: 20px;
}
.header__menu {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.menu__blok {
  display: flex;
  align-items: center;
}
.header__info {
  text-align: end;
  line-height: 25px;
  margin-top: 20px;
  font-size: 18px;
}
.link__choice_button {
  background-color: #d7d7d7;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  font-size: 15px;
  width: 127px;
  height: 30px;
  margin: 0px 2px 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link__choice_button:hover {
  background-color: #55bb06;
  color: #fff;
}
.mobil-data {
  display: none;
}
</style>
