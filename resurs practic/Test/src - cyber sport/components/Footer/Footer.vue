<template>
  <div class="footer">
    <div class="footer__left">
      <ul>
        <li id="select">
          <select class="select" name="" id="">
            <option value="">Разделы</option>
            <option value="">Разделы</option>
            <option value="">Разделы</option>
          </select>
        </li>
        <li id="select">
          <select class="select" name="" id="">
            <option value="">Русский</option>
            <option value="">Русский</option>
            <option value="">Русский</option>
          </select>
        </li>
        <li>Помощь</li>
        <li>Политика Конфиденциальности</li>
        <li>Документы</li>
      </ul>
    </div>

    <div class="footer__right">
      <ul>
        <li><img src="@/assets/img/instagram.png" alt="" /></li>
        <li><img src="@/assets/img/facebook.png" alt="" /></li>
        <li><img src="@/assets/img/twitter.png" alt="" /></li>
        <li><img src="@/assets/img/linkedin.png" alt="" /></li>
      </ul>
      <img src="@/assets/img/logo.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.footer {
  margin-top: 50px;
  padding: 10px 20px;
  background: #ffffff;
  border: 1px solid rgba(26, 32, 44, 0.12);
  box-shadow: inset 0px -3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  text-align: center;
  color: #718096;
}
.footer__left ul {
  display: flex;
  align-items: center;
}
#select {
  padding: 0 20px 0 0;
  border-right: 1px solid #718096;
}
.footer__left ul li {
  margin: 0px 20px 0 0;
}
.footer__right {
  display: flex;
}
.footer__right ul {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.footer__right ul li {
  margin: 0px 10px;
}
</style>
