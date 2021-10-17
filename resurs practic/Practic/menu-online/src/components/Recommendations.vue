<template>
  <div class="recommendations" id="recommendations">
    <div class="recommendations__block">
      <img src="@/assets/images/profile-img.svg" alt="" />
      <h2 class="recommendations__title">
        Просто добавьте свои блюда на сайт Neppe. И он сразу же начнет работать.
      </h2>
      <p class="recommendations__text">— Махамбет Альмуханов, CEO Neppe</p>
      <div class="recommendations__box">
        <button class="recommendations__btn">
          <img src="@/assets/images/play.svg" alt="" />
        </button>
        <strong class="recommendations__strong">
          Посмотреть историю успеха
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.recommendations {
  box-shadow: inset 0em 2em rgb(246 242 255);
}
.recommendations__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: auto;
  background: #ffffff;
  padding: 30px 0px 40px 0px;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.04), 0px 12px 32px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #393939;
}
.recommendations__title {
  font-family: Akrobat;
  font-weight: bold;
  font-size: 24px;
  line-height: 144%;
  letter-spacing: 0.15px;
  color: #000000;
}
.recommendations__strong {
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  color: #6f6f6f;
}
.recommendations__box {
  display: flex;
  align-items: center;
}
.recommendations__btn {
  width: 72px;
  height: 72px;

  border: 0.5px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 100px;
  margin: 30px 24px;
}

@media (max-width: 768px) {
  .recommendations__block {
    padding: 30px 10px 10px 10px;
  }

  .recommendations__btn {
    margin: 10px 20px;
  }
}

@media (max-width: 576px) {
  .recommendations__block {
    padding: 30px 10px 20px 10px;
  }
  .recommendations__title {
    font-size: 18px;
  }
  .recommendations__block {
    font-size: 14px;
  }

  .recommendations__btn {
    margin: 0 10px 0 0;
    width: 60px;
    height: 60px;
  }
}
</style>
