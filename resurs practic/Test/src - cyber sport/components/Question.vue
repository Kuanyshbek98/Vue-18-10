<template>
  <div class="question">
    <!-- <div class="container"> -->
    <div class="question__wrap">
      <h2>Вопросы и ответы</h2>
      <div class="question__inner">
        <ul type="main-btn">
          <li class="question_li">
            <button class="question_button">
              Я подал заявку. Что делать дальше?
            </button>
            <p class="question__text">
              Некоторые турниры требуют подтверждения. Чтобы подтвердить свое
              участие вам нужно дождаться закрытия регистрации на турнир и
              получить письмо с подтверждением.
            </p>
          </li>
          <li class="question_li">
            <button class="question_button">
              Мне отклонили заявку. Что делать дальше?
            </button>
            <p class="question__text">
              Некоторые турниры требуют подтверждения. Чтобы подтвердить свое
              участие вам нужно дождаться закрытия регистрации на турнир и
              получить письмо с подтверждением.
            </p>
          </li>
          <li class="question_li">
            <button class="question_button">
              Мою заявку на участие приняли. Но требуют какое то подтверждение.
              Что делать?
            </button>
            <p class="question__text">
              Некоторые турниры требуют подтверждения. Чтобы подтвердить свое
              участие вам нужно дождаться закрытия регистрации на турнир и
              получить письмо с подтверждением.
            </p>
          </li>
          <li class="question_li">
            <button class="question_button">
              Образцы документов / Получение призовых
            </button>
            <p class="question__text">
              Некоторые турниры требуют подтверждения. Чтобы подтвердить свое
              участие вам нужно дождаться закрытия регистрации на турнир и
              получить письмо с подтверждением.
            </p>
          </li>
          <li class="question_li">
            <button class="question_button">
              Я победил в конкурсе! Как получить приз?
            </button>
            <p class="question__text">
              Некоторые турниры требуют подтверждения. Чтобы подтвердить свое
              участие вам нужно дождаться закрытия регистрации на турнир и
              получить письмо с подтверждением.
            </p>
          </li>
          <li class="question_li">
            <button class="question_button">Получение NFT-наград</button>
            <p class="question__text">
              Некоторые турниры требуют подтверждения. Чтобы подтвердить свое
              участие вам нужно дождаться закрытия регистрации на турнир и
              получить письмо с подтверждением.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.question {
  margin-top: 40px;
}
.question__wrap {
  width: 100%;
}
.question__wrap h2 {
  padding: 30px 0px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  color: #1a202c;
}
.question__text {
  margin: 0px;
  background-color: #1a202c;
  color: #fff;
  width: 100%;
  height: 0px;
  padding-left: 20px;
}
.question_button {
  /* background-color: #a2a5aa; */
  padding: 30px 20px;
  text-align: start;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
}
.question_button:focus {
  background-color: #1a202c;
  color: #fff;
}

.question_button:focus + .question__text {
  height: auto;
  width: auto;
  padding: 0px 20px 30px 20px;
  transition: 0.7s;
}
.question__inner {
  background-color: #fff;
  width: 100%;
  height: 100%;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  box-sizing: border-box;
  border-radius: 12px;
}
.question__inner ul li {
  /* width: 100%; */
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1a202c;
}
</style>
