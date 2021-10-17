<template>
  <div class="main-layout">
    <HeaderBlock />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBlock from '@/components/header/mainHeader'
export default {
  components: {
    HeaderBlock,
  }
}
</script>

<style scoped></style>
