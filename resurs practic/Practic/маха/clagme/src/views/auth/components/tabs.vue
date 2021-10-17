<template>
  <ul class="tabs">
    <li class="tabs__item">
      <router-link to="/auth/sign-in" class="tabs__link">Sign in</router-link>
    </li>
    <li class="tabs__item">
      <router-link to="/auth/join-us" class="tabs__link tabs__link_active">
        Join us
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.tabs {
  display: flex;
}
.tabs__link {
  display: block;
  padding: 8px 13px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 4px 0px 0px 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #84818a;
}
.tabs__link_active {
  color: var(--blue-color);
  background: #fbfafc;
}
.tabs__item:last-child .tabs__link-link {
  border-radius: 0px 4px 4px 0px;
  border-left: none;
}
</style>
