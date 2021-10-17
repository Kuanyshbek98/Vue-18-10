<template>
  <div class="auth-layout">
    <HeaderBlock />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBlock from '@/components/header/authHeader'
export default {
  components: {
    HeaderBlock,
  }
}
</script>

<style scoped></style>
