<template>
  <div id="start" class="start">
    <!-- <section id="start" class="start"> -->
    <div class="container">
      <h2 class="main-title">3 условия для работы с Neppe</h2>
      <ul class="start__infos">
        <li class="start-info">
          <img
            class="start-info__icon"
            src="http://back.neppe.kz/images/step-1.png"
            alt="шаг 1, neppe"
          />
          <h3 class="start-info__title">Аккаунт Neppe</h3>
          <p class="start-info__text">
            Если у вас нет аккаунта, создайте его, чтобы получить доступ ко всем
            преимуществам платформы
          </p>
        </li>
        <li class="start-info">
          <img
            class="start-info__icon"
            src="http://back.neppe.kz/images/step-2.png"
            alt="шаг 2, neppe"
          />
          <h3 class="start-info__title">Телефон или любое другое устройтсво</h3>
          <p class="start-info__text">
            Управляйте своими данными, сотрудниками через мобильные устройства
          </p>
        </li>
        <li class="start-info">
          <img
            class="start-info__icon"
            src="http://back.neppe.kz/images/step-3.png"
            alt="шаг 3, neppe"
          />
          <h3 class="start-info__title">Заведение или ресторан</h3>
          <p class="start-info__text">
            Добавьте наш QR-code в свое заведение и продолжайте заниматься
            любимыми делами, а мы сделаем все остальное
          </p>
        </li>
      </ul>
      <div class="start-get-contact">
        <p class="start-get-contact__text">
          Свяжитесь со специалистом Neppe, чтобы получить персональные
          рекомендации
        </p>
        <a href="tel:87029329156" class="start-get-contact__btn">
          <span>Связаться со специалистом</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.87601 6.9761L7.34201 4.3061C7.20201 3.6051 6.58601 3.1001 5.87101 3.1001H2.63801C1.77801 3.1001 1.06201 3.8271 1.10101 4.6861C1.56201 14.8471 6.60001 18.7111 15.516 19.0991C16.375 19.1361 17.1 18.4231 17.1 17.5641V14.3291C17.1 13.6141 16.595 12.9981 15.894 12.8581L13.224 12.3241C12.561 12.1911 11.891 12.5191 11.588 13.1241L11.1 14.0991C9.10001 14.0991 6.10001 11.0991 6.10001 9.0991L7.07501 8.6111C7.68101 8.3091 8.00901 7.6391 7.87601 6.9761Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
    <!-- </section> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.start {
  padding: 64px 0;
}
.start__infos {
  margin: 68px 0 40px;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.start-info {
  width: 25%;
  text-align: center;
}
.start-info__title {
  font-weight: bold;
  font-size: 24px;
  line-height: 144%;
  margin: 24px 0 8px;
}
.start-info__text {
  color: #393939;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}
.start-info__icon {
  width: 50%;
}
.start-get-contact {
  text-align: center;
}
.start-get-contact__text {
  color: #6f6f6f;
  font-size: 16px;
  line-height: 24px;
  font-family: "Noto Sans", sans-serif;
}
.start-get-contact__btn {
  display: flex;
  margin: 40px auto 0;
  padding: 8px 64px;
  background: linear-gradient(95.68deg, #6a3093 0%, #a044ff 100.94%);
  border-radius: 100px;
  width: 388px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}
.start-get-contact__btn span {
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-family: "Noto Sans", sans-serif;
}
.start-get-contact__btn svg {
  margin-left: 13px;
} 

@media (max-width: 579px) {
  .start {
    padding: 40px 0;
  }
  .start__infos {
    margin: 35px 0 40px;
    flex-direction: column;
  }
  .start-info {
    width: 100%;
    margin-bottom: 40px;
  }
  .start-info__title {
    font-size: 16px;
    margin: 10px 0;
  }
  .start-info__text {
    font-size: 12px;
    line-height: 16px;
  }
  .start-get-contact__btn {
    width: 70%;
    box-sizing: border-box;
    font-size: 12px;
    padding: 8px 20px;
  }
  .start-info__icon {
    width: 12%;
  }
}
@media (max-width: 480px) {
  .start-get-contact__btn {
    width: 100%;
  }
  .start-get-contact__btn span {
    font-size: 12px;
  }
}
</style>
