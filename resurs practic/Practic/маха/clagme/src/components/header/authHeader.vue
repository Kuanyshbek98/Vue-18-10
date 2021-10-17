<template>
  <header class="header">
    <div class="container">
      <div class="header__block">
        <LogoIcon />
        <div class="header__text">Happier the experts Greater the enterprise</div>
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
.header__block {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 32px;
}
.header__text {
  margin-left: 24px;
}
</style>
