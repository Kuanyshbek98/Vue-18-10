<template>
  <header class="header">
    <div class="container flex header__content">
      <div class="header__left-block flex">
        <router-link to="/"><LogoIcon /></router-link>
      </div>
      <div class="header__right-block">
        <ul class="header__right-list right-list flex">
          <li class="right-list__item">
            <router-link to="/">Sign in</router-link>
          </li>
          <li class="right-list__item">
            <router-link to="/">Sign up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/assets/svg/logo.svg?inline'
export default {
  components: {
    LogoIcon,
  },
}
</script>

<style scoped>
.header {
  border-bottom: 0.33px solid rgba(46, 44, 52, 0.24);
}
.header__content {
  padding: 14px 0;
  color: #FFFFFF;
}
</style>
