<template>
  <div class="main" style="background-image: url('./main.png');">
    <!-- <main class="main"> -->
    <h1 class="main__title">Мы ценим ваших клиентов</h1>
    <p class="main__text">
      Обслуживание требует времени. Сделать это можно быстрее
    </p>
    <button class="main__btn">Начать работу</button>
    <!-- </main> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 760px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d7d7ff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 56px;
  color: #ffffff;
}
.main__title {
  font-weight: 800;
  font-size: 44px;
  line-height: 144%;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  font-family: Akrobat, sans-serif;
  margin: 0 0 16px;
}
.main__text {
  font-size: 16px;
  line-height: 24px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  margin: 0;
}
.main__btn {
  width: 241px;
  height: 40px;
  margin-top: 40px;
  border-radius: 100px;
  background: #ffffff;
  border: none;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

@media (max-width: 579px) {
  .main {
    margin-top: 50px;
    height: 400px;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
