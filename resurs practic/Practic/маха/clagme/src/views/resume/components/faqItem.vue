<template>
  <div v-if="faq" class="faq-item">
    <h3 @click="openFaq=!openFaq" class="faq-item__title">{{ faq.title }}</h3>
    <a @click="openFaq=!openFaq" class="faq-item__toggle">
      <PlusIcon v-show="!openFaq" class="faq-item__plus-icon" />
      <MinusIcon v-show="openFaq" class="faq-item__minus-icon" />
    </a>
    <p v-show="openFaq" class="faq-item__description">{{ faq.description }}</p>
  </div>
</template>

<script>
import PlusIcon from '@/assets/svg/plus.svg?inline'
import MinusIcon from '@/assets/svg/minus.svg?inline'
export default {
  props: {
    faq: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      openFaq: false
    }
  },
  components: {
    PlusIcon,
    MinusIcon
  },
}
</script>

<style scoped>
.faq-item {
  background: #FBFAFC;
  padding: 24px 24px 32px;
  position: relative;
  margin-bottom: 16px;
}
.faq-item__plus-icon {
  fill: #84818A;
}
.faq-item__minus-icon {
  fill: var(--blue-color);
}
.faq-item__title {
  font-size: 18px;
  line-height: 25px;
  margin: 0 0 12px;
  font-weight: 700;
  cursor: pointer;
}
.faq-item__description {
  margin: 0;
  color: #84818A;
  font-size: 16px;
  line-height: 22px;
}
.faq-item__toggle {
  position: absolute;
  right: 24px;
  top: 20px;
  height: 31px;
  display: flex;
  align-items: center;
}
</style>
