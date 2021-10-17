<template>
  <div class="book-now">
    <div class="book-now__places"><b>31 мест свободны</b></div>
    <div class="book-now__block">
      <div class="book-now__title">
        <img
          class="book-now__img"
          src="@/assets/main2/club-avatar.png"
          alt=""
        />
        <div>
          <h2 class="margin-title">Seven CyberSport</h2>
          <div class="book-now__address">
            <img src="@/assets/main2/frame.png" alt="" />
            <p class="margin-title">Байтурсынова 183</p>
          </div>
        </div>
      </div>
      <div class="book-now__click">
        <p>цены от 400 ₸</p>
        <button class="button">Забронировать мета</button>
      </div>
    </div>
    <div>
      <p>
        SEVEN CYBER SPORT — это максимальное удовольствие от игры. Приходи один
        или приводи своих друзей!
      </p>
      <p>
        К вашим услугам 135 ПК с хорошими характеристиками(от 250тг/час),
        быстрые мониторы (144 Гц) ,высокоскоростной доступ в интернет,
        механические клавиатуры, PS4 pro с диагональю 75 дюймов (в отдельной
        комнате), большое разнообразие еды и напитков (по доступным ценам),
        дружелюбные администраторы (помогут с любым вопросом), комфортная
        температура (зимой и летом +23 градуса) и отличная компания.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.book-now {
  width: 60%;
  margin: 20px 0;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  letter-spacing: 0.16px;

  color: #1a202c;
}
.book-now__places {
  padding: 20px 0px;
  margin-bottom: 10px;
  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  padding: 7px 12px;
  width: 100px;
  color: #66cb9f;
  background-color: rgb(102 203 159 / 24%);
  border-radius: 4px;
}
.book-now__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.book-now__img {
  margin-right: 10px;
}
.book-now__title {
  display: flex;
  align-items: center;
}
.book-now__address {
  display: flex;
  align-items: center;
  color: #718096;
}
.book-now__click {
  display: flex;
  align-items: center;
}
</style>