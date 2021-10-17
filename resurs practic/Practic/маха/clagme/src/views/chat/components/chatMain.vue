<template>
  <div class="chat-main">
    <ChatHeader />
    <div class="chat-main__content">
      <ChatMessage />
    </div>
    <ChatFooter />
  </div>
</template>

<script>
import ChatHeader from './chatHeader'
import ChatFooter from './chatFooter'
import ChatMessage from './chatMessage'
export default {
  components: {
    ChatHeader,
    ChatFooter,
    ChatMessage,
  },
}
</script>

<style scoped>
.chat-main {
  display: flex;
  flex-direction: column;
}
.chat-main__content {
  height: calc(100% - 112px);
  background: #FBFAFC;
  border-top: 1px solid #EBEAED;
  border-bottom: 1px solid #EBEAED;
  overflow-y: auto;
}
</style>
