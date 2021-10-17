<template>
  <div id="advantages" class="advantages">
    <!-- <section id="advantages" class="advantages"> -->
    <div class="container">
      <h2 class="main-title">Наши преимущества</h2>
      <ul class="advantages__list">
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="http://back.neppe.kz/images/illustration-1.png"
            loading="lazy"
            alt="Только самые актуальные данные, neppe"
          />
          <h3 class="advantages__title">Только самые актуальные данные</h3>
          <p class="advantages__text">
            Вам теперь не придется менять весь меню, чтобы изменить одно блюдо.
            Не тратьте свои время и энергию для простых задач
          </p>
        </li>
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="http://back.neppe.kz/images/illustration-2.png"
            loading="lazy"
            alt="Красивый дизайн и удобство, neppe"
          />
          <h3 class="advantages__title">Красивый дизайн и удобство</h3>
          <p class="advantages__text">
            Мы сделали не только красивый дизайн, соответсвующий всем
            требованиям, но также понятное и удобное приложение. Используем
            только передовые технологию, легкость и автоматизацию
          </p>
        </li>
        <li class="advantages__item">
          <img
            class="advantages__image"
            src="http://back.neppe.kz/images/illustration-3.png"
            loading="lazy"
            alt="Все в ваших руках, neppe"
          />
          <h3 class="advantages__title">Все в ваших руках</h3>
          <p class="advantages__text">
            Управляйте сотрудниками, смотрите статистику
          </p>
        </li>
      </ul>
    </div>
    <!-- </section> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.advantages {
  background: #f6f2ff;
  padding: 120px 0;
}
.advantages__list {
  display: grid;
  grid-template-columns: repeat(3, calc(33.3% - 16px));
  grid-gap: 24px;
  margin: 39px 0 0;
  padding: 0;
}
.advantages__image {
  width: 100%;
}
.advantages__title {
  font-weight: bold;
  font-size: 24px;
  line-height: 144%;
  letter-spacing: 0.15px;
}
.advantages__text {
  font-size: 16px;
  line-height: 24px;
  color: #393939;
  margin: 0;
}

@media (max-width: 579px) {
  .advantages {
    padding: 50px 0;
  }
  .advantages__list {
    grid-template-columns: 1fr;
  }
  .advantages__title {
    font-size: 16px;
  }
  .advantages__text {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
