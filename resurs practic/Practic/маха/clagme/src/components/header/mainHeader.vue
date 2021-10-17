<template>
  <header class="header">
    <div class="container flex header__content">
      <div class="header__left-block flex">
        <router-link to="/"><LogoIcon /></router-link>
        <ul class="header__left-list left-list flex">
          <li class="left-list__item">
            <router-link to="/">For Claggers</router-link>
          </li>
          <li class="left-list__item">
            <router-link to="/">For Clagees</router-link>
          </li>
        </ul>
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
.header__content {
  padding: 14px 0;
  color: #FFFFFF;
}
</style>
