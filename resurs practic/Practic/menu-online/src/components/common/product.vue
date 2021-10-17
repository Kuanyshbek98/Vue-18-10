<template>
  <div class="product-mini" :class="{hidden: !product.in_stock}">
    <div
      @click="type === 'main' ? $router.push(`/product/${product.id}`) : ''"
      class="product-mini__image"
      :style="{
        backgroundImage: `url(${$url + product.image})`,
        backgroundColor: !product.image ? '#F2F2F2' : ''
      }"
    >
<!--      <img v-lazy="product.img" alt="">-->
    </div>
    <a v-if="+product.discount_price" class="product-mini__sale">{{ 100 - parseInt(+product.discount_price*100/+product.price) }}%</a>
    <h2 @click="$router.push(`/product/${product.id}`)" class="product-mini__name">
      {{ product.name }}
    </h2>
    <div v-if="+product.weight" class="product-mini__description">
      <small class="product-mini__weight">{{ product.weight }} г</small>
    </div>
    <button :disabled="!product.in_stock" @click="addProduct()" class="product-mini__btn" :class="{'main-btn main-btn-small': !product.in_basket, 'basic-btn': product.in_basket}">
      <a class="product-mini__prices">
        <span v-if="+product.discount_price" class="product-mini__discount-price" v-show="!product.in_basket">{{ product.discount_price }} ₸</span>
        <span class="product-mini__price" v-show="!product.in_basket">{{ product.price }} ₸</span>
      </a>
      <span v-show="product.in_basket"><CheckIcon /> </span>
    </button>
    <MetaBlock v-if="product.meta && showMeta && product.meta !== 'null'" :product="product" @close="showMeta=false" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckIcon from '@/assets/svg/check.svg?inline'
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: 'main'
    }
  },
  data() {
    return {
      showMeta: false
    }
  },
  computed: {
    ...mapGetters([
      'BASKET'
    ])
  },
  methods: {
    addProduct () {
      if (this.type === 'main') {
        if (this.product.meta && this.product.meta !== 'null' && !this.product.in_basket) {
          this.showMeta = true
          return
        }
        this.product.in_basket = !this.product.in_basket
        this.product.basket_price = +this.product.discount_price ? +this.product.discount_price : +this.product.price
        if (this.product.in_basket) {
          this.product.count = 1
          this.$store.dispatch('addToBasket', this.product)
        } else {
          this.$store.dispatch('deleteBasket', this.product)
        }
      } else {
        this.$emit('addToAdditional', this.product)
      }
    }
  },
  components: {
    CheckIcon,
    MetaBlock: () => ({
      component: import('./meta')
    })
  },
  async created() {
    await this.$store.dispatch('getBasket')
    if (this.type === 'main') {
      let index = this.BASKET.findIndex((product) => product.id === this.product.id)
      if (index > -1) {
        this.product.in_basket = true
        this.product.additional = this.BASKET[index].additional || []
      } else {
        this.product.in_basket = false
        this.product.additional = []
      }
    } else {
      this.product.in_basket = this.BASKET.some(product => product.additional.some((additional) => additional.id === this.product.id))
    }
  }
}
</script>

<style scoped>
  .product-mini {
    padding: 6px;
    box-shadow: 0 0 6px rgba(3, 4, 29, 0.02), 0 12px 64px rgba(3, 4, 29, 0.06);
    border-radius: 14px;
    background: #FFFFFF;
    margin-bottom: 16px;
    position: relative;
  }
  .hidden {
    opacity: 0.4;
  }
  .product-mini__image {
    width: 90%;
    height: 125px;
    margin: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /*background-color: #F2F2F2;*/
  }
  .product-mini__image img {
    width: 100%;
  }
  .product-mini__name {
    font-size: 16px;
    text-align: center;
  }
  .product-mini__description {
    text-align: center;
  }
  .product-mini__btn {
    margin-top: 12px;
  }
  .product-mini__prices {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-mini__discount-price {
    letter-spacing: 0.01em;
    text-decoration-line: line-through;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-right: 8px;
  }
  .product-mini__sale {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    top: 4px;
    right: 4px;
    background-image: url("http://neppe.kz/images/sale.png");
    background-size: cover;
    background-position: center center;
    font-weight: 600;
    font-size: 11px;
    font-style: italic;
    color: #FFFFFF;
    z-index: 1;
  }
</style>
