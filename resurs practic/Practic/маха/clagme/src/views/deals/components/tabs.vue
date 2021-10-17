<template>
  <ul class="deals-tabs">
    <li @click="active='active'" :class="{'deals-tabs__tab_active': active === 'active'}" class="deals-tabs__tab">Active</li>
    <li @click="active='done'" :class="{'deals-tabs__tab_active': active === 'done'}" class="deals-tabs__tab">Done</li>
    <li @click="active='canceled'" :class="{'deals-tabs__tab_active': active === 'canceled'}" class="deals-tabs__tab">Canceled</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      active: 'active'
    }
  },
}
</script>

<style scoped>
.deals-tabs {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.deals-tabs__tab {
  width: 96px;
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #EBEAED;
  padding: 8px 0;
  color: #84818A;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}
.deals-tabs__tab:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.deals-tabs__tab:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.deals-tabs__tab_active {
  color: #5542F6;
  background: #FBFAFC;
}
</style>
