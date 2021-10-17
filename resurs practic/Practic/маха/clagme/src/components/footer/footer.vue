<template>
  <footer class="footer">
    <div class="container footer__content flex">
      <div class="footer__left flex">
        <p class="footer__copy"><strong>Clagme</strong> @2013-2015 All rights Reserved</p>
        <div class="footer__language">
          <select class="footer__language-select">
            <option value="en">English</option>
          </select>
        </div>
        <ul class="footer__menu flex">
          <li class="footer__item">
            <router-link to="/">About</router-link>
          </li>
          <li class="footer__item">
            <router-link to="/">Contact</router-link>
          </li>
          <li class="footer__item">
            <router-link to="/">Privacy and Terms of Use</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/" class="footer__logo">
        <LogoIcon />
      </router-link>
    </div>
  </footer>
</template>

<script>
import LogoIcon from '@/assets/svg/logo-mini.svg?inline'
export default {
  components: {
    LogoIcon
  }
}
</script>

<style scoped>
.footer {
  background: #FFFFFF;
  border: 1px solid rgba(26, 32, 44, 0.12);
  box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.06);
  padding: 6px 0;
}
.footer__left {
  white-space: nowrap;
  font-size: 11px;
  line-height: 14px;
}
.footer__copy {
}
.footer__language {
  margin: 0 24px;
}
.footer__language::before, .footer__language::after {
  content: '|';
}
.footer__language::before {
  margin-right: 24px;
}
.footer__language::after {
  margin-left: 24px;
}
.footer__language-select {
  width: auto;
}
.footer__item:not(:last-child) {
  margin-right: 16px;
}
</style>
