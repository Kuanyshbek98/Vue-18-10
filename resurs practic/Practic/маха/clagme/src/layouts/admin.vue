<template>
  <div class="admin-layout">
    <HeaderBlock />
    <div class="admin-layout__content flex">
      <MenuBlock class="admin-layout__menu" />
      <router-view class="admin-layout__main"></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBlock from '../components/header/adminHeader'
import MenuBlock from '../components/menu/menu'
export default {
  components: {
    HeaderBlock,
    MenuBlock
  },
}
</script>

<style scoped>
.admin-layout__content {
  align-items: flex-start;
  height: calc(100vh - 114px);
}
.admin-layout__menu {
  width: 250px;
}
.admin-layout__main {
  width: calc(100% - 250px);
  background-color: #FBFAFC;
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
