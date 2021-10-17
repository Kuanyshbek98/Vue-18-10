<template>
  <div class="chat-list">
    <div v-for="item in 15" :key="item" class="chat-list__item flex">
      <div class="chat-list__avatar avatar"></div>
      <div class="chat-list__text">
        <p class="chat-list__author">
          Benedita Tavares
        </p>
        <p class="chat-list__message">
          Thanks you! I’ll give you a feedback in the..
        </p>
      </div>
      <div class="chat-list__other">
        <div class="chat-list__time">09:45 am</div>
        <div class="chat-list__count"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.chat-list__item {
  padding: 14px 12px;
}
.chat-list__item:not(:last-child) {
  border-bottom: 1px solid #EBEAED;
}
.chat-list__avatar {
  width: 42px;
  height: 42px;
  margin-right: 12px;
}
.chat-list__author {
  font-size: 16px;
  line-height: 22px;
  margin: 0;
}
.chat-list__message {
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1 ;
  -webkit-box-orient: vertical;
}
.chat-list__text {
  width: calc(100% - 109px);
}
.chat-list__time {
  color: #84818A;
  font-size: 12px;
  line-height: 18px;
}
.chat-list__other {
  width: 55px;
}
</style>
