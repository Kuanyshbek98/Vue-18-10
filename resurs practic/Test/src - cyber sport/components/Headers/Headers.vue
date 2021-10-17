<template>
  <div id="app">
    <div class="header-menu">
      <router-link to="/">
        <img class="header-menu__logo" src="@/assets/img/logo.png" alt="" />
      </router-link>
      <ul class="header-menu__list">
        <li><a href="#">Турниры</a></li>
        <li><a href="#">Бронировать комп. клубы</a></li>
        <li><a href="/shop">Интернет магазин</a></li>
      </ul>
      <ul class="header-menu__list">
        <li class="header-menu__item">
          <input
            class="header-menu__search"
            type="text"
            placeholder="Искать турниры"
          />
        </li>
        <li class="header-menu__item">
          <button v-if="buttonEntrance" class="header-menu__button">
            Вход
          </button>
        </li>
        <li class="header-menu__item basket">
          <a href="/basket">
            <img
              class="header-menu__img"
              src="@/assets/img/header-basket-page.png"
              alt=""
            />
          </a>
        </li>
        <li class="header-menu__item">
          <div class="profile-page">
            <img src="@/assets/img/header-profil-page.png" alt="" />
            <select class="select header-menu__select" name="" id="">
              <option value=""> Агадиль </option>
            </select>
          </div>
        </li>
        <li class="header-menu__item">
          <router-link to="/registration">
            <button v-if="buttonRegistration" class="header-menu__btn">
              Регистрация
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "headers",
  data() {
    return {
      buttonEntrance: false,
      buttonRegistration: true,
    };
  },
};
</script>
<style scoped>
.profile-page {
  display: flex;
}
.header-menu { 
  width: 100%;
  height: 80px;
  border: 0.5px solid rgba(26, 32, 44, 0.12);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  color: #4a5568;
  box-sizing: border-box;
}
.header-menu__list {
  display: flex;
  align-items: center;
}
li {
  margin: 0px 25px;
}
.header-menu__item {
  margin-left: 5px;
}
.header-menu__search {
  padding: 0px 12px;

  width: 244px;
  height: 44px;
  background: #edf2f7;
  border: 0.33px solid rgba(26, 32, 44, 0.2);
  border-radius: 12px;
  margin-bottom: 8px;
}
.header-menu__select {
  background-color: #f7fafc;
}
.header-menu__button {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;

  width: 66px;
  height: 34px;

  background: #ffffff;

  border: 0.5px solid rgba(26, 32, 44, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
}
.header-menu__btn {
  width: 119px;
  height: 34px;
  text-align: center;
  color: #ffffff;
  background: #4c6fff;
  border-radius: 12px;
  padding: 8px 16px;
}
</style>
