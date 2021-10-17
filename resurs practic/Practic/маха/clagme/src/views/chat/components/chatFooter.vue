<template>
  <div class="chat-footer flex">
    <div class="chat-footer__emoji">
      <a><EmojiIcon /></a>
    </div>
    <textarea placeholder="Send your message…" class="chat-footer__input"></textarea>
    <label class="chat-footer__upload">
      <input type="file" hidden>
      <PlusIcon />
    </label>
    <button class="chat-footer__send-btn"><SendIcon /></button>
  </div>
</template>

<script>
import EmojiIcon from '@/assets/svg/emoji.svg?inline'
import PlusIcon from '@/assets/svg/plus.svg?inline'
import SendIcon from '@/assets/svg/send.svg?inline'
export default {
  components: {
    EmojiIcon,
    PlusIcon,
    SendIcon
  },
}
</script>

<style scoped>
.chat-footer {
  padding: 12px 12px 12px 14px;
}
.chat-footer__input {
  margin: 0 0 0 10px;
}
.chat-footer__upload svg {
  fill: #84818A;
}
.chat-footer__upload {
  margin: 0 21px;
  cursor: pointer;
}
.chat-footer__send-btn {
  border-radius: 4px;
  background-color: var(--blue-color);
  width: 32px;
  height: 32px;
}
</style>
