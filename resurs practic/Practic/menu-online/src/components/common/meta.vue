<template>
  <div v-if="product" class="modal meta">
    <div class="modal-content meta__content" :class="{animate: animate}">
      <a @click="$emit('close')" class="modal-content__close-btn"><CloseIcon /></a>
      <h2 class="meta__title">{{ product.name }}</h2>
      <p class="meta__text">{{ text }}</p>
      <ul class="meta__list">
        <li v-for="item in list" :key="item" class="meta__item">
          <label class="meta__label">
            <input v-model="metaId" :value="item" type="radio" class="meta__input">
            <span>
              <svg width="15" height="12" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3.18182L4.5 7L10 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <a>{{ item }}</a>
          </label>
        </li>
      </ul>
      <button @click="addToBasket()" :disabled="!metaId" class="meta__button" :class="{'main-btn': metaId}">
        <span v-if="!choose">Добавить в корзину</span>
        <span v-if="choose">Изменить</span>
      </button>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/assets/svg/close.svg?inline'
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    choose: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      metaId: null,
      animate: true
    }
  },
  computed: {
    text () {
      return JSON.parse(this.product.meta)?.text || ''
    },
    list () {
      return JSON.parse(this.product.meta)?.data || []
    }
  },
  methods: {
    addToBasket () {
      if (this.choose) {
        this.product.metaText = this.metaId
        this.$store.dispatch('editBasket', this.product)
        console.log(this.product)
        this.$emit('close')
      } else {
        this.product.in_basket = !this.product.in_basket
        this.product.basket_price = +this.product.discount_price ? +this.product.discount_price : +this.product.price
        this.product.count = 1
        this.product.metaText = this.metaId
        this.$store.dispatch('addToBasket', this.product)
        this.$emit('close')
      }
    }
  },
  components: {
    CloseIcon
  },
  created() {
    if (this.choose) {
      this.metaId = this.choose
    }
    setTimeout(() => {
      this.animate = false
    }, 100)
  }
}
</script>

<style scoped>
  .meta__content {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: #FFFFFF;
    transform: none;
    top: auto;
    box-sizing: border-box;
    max-height: 100%;
    overflow-y: auto;
    padding: 40px 10px 60px;
    transition: transform 0.3s ease;
  }
  .animate {
    transform: translateY(100%);
  }
  .meta__title {
    font-weight: 500;
    margin: 0 0 20px;
    text-transform: uppercase;
    padding: 0 15px;
    font-size: 28px;
  }
  .meta__text {
    text-transform: uppercase;
    border-bottom: 1px solid #F2F2F2;
    padding: 0 15px 4px;
    font-size: 18px;
  }
  .meta__list {
    margin: 0;
    padding: 0;
  }
  .meta__item {
    margin-bottom: 15px;
    font-size: 16px;
  }
  .meta__label {
    display: flex;
    align-items: center;
  }
  .meta__input {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .meta__label span {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background: #FFFFFF;
    border: 1px solid #A8A8A8;
    text-align: center;
    /*background: #F4F4F4;*/
    transition: background 0.2s ease;
  }
  .meta__label span svg {
    transition: stroke 0.2s ease;
    stroke: #FFFFFF;
    margin-top: 3px;
  }
  .meta__input:checked ~ span {
    border: 1px solid var(--purple-color);
    background: var(--purple-color);
  }
  .meta__input:checked ~ span svg {
    stroke: #FFFFFF;
  }
  .meta__button {
    height: 56px;
    color: #A8A8A8;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    border-radius: 100px;
    width: 95%;
    margin-top: 20px;
    position: fixed;
    bottom: 60px;
    left: 2.5%;
  }
  .meta__button.main-btn {
    color: #FFFFFF;
  }
</style>
