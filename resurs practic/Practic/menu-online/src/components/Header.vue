<template>
  <div class="header">
    <div
      itemscope
      itemtype="http://schema.org/Organization"
      class="container header__content flex"
    >
      <a href="/" class="header__logo">
        <img src="@/assets/images/logo.svg" alt="Логотип, neppe.kz" />
      </a>
      <ul class="header__list flex">
        <li class="header__item">
          <a href="#advantages" class="header__link">Преимуществаa</a>
        </li>
        <li class="header__item">
          <a href="#start" class="header__link">Начало работы</a>
        </li>
        <li class="header__item">
          <a href="#recommendations" class="header__link">Почему мы?</a>
        </li>
      </ul>
      <a itemprop="telephone" href="tel:+77029329156" class="header__phone"
        >+7 (702) 932-91-56</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  top: 0;
  z-index: 2;
}
.header__list {
  margin: 0;
  padding: 0;
}
.header__link {
  display: block;
  font-size: 14px;
  line-height: 56px;
}
.header__item:not(:last-child) {
  margin-right: 24px;
}
.header__phone {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  font-family: Akrobat, sans-serif;
}

@media (max-width: 768px) {
  .header__phone {
    font-size: 18px;
  }
  .header__link {
    font-size: 12px;
  }
}

@media (max-width: 579px) {
  .header {
    padding: 10px 0;
  }
  .header__list {
    display: none;
  }
}
</style>
