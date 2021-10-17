<template>
  <section class="chat-page flex">
    <ChatListBlock class="chat-page__list" />
    <ChatMainBlock class="chat-page__main" />
  </section>
</template>

<script>
export default {
  components: {
    ChatListBlock: () => ({
      component: import('./components/chatList')
    }),
    ChatMainBlock: () => ({
      component: import('./components/chatMain')
    }),
  },
}
</script>

<style scoped>
.chat-page {
  border-top: 0.33px solid rgba(46, 44, 52, 0.24);
  height: calc(100vh - 113px);
}
.chat-page__list {
  width: 400px;
  height: 100%;
  overflow-y: auto;
}
.chat-page__main {
  width: calc(100% - 400px);
  height: 100%;
  overflow-y: auto;
}
</style>
