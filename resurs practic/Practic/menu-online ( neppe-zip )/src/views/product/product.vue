<template>
  <section v-if="PRODUCT && PRODUCT.product" class="product">
    <div class="container">
      <div class="product__picture" :style="{backgroundImage: `url(${$url+PRODUCT.product.image})`}">
        <div class="product__counts">
          <button :disabled="count<2" @click="count--" class="product__count-btn">
            <MinusIcon />
          </button>
          <a class="product__count">{{ count }}</a>
          <button @click="count++" class="product__count-btn">
            <PlusIcon />
          </button>
        </div>
      </div>
      <ul class="product__mini-infos flex-only">
        <li v-if="PRODUCT.product.weight" class="product__mini-info product__mini-info_weight flex-only">
          <WeightIcon />
          {{ PRODUCT.product.weight || 0 }} г.
        </li>
        <li v-if="PRODUCT.product.kal" class="product__mini-info product__mini-info_fire flex-only">
          <FireIcon />
          {{ PRODUCT.product.kal || 0 }} ккал
        </li>
      </ul>
      <h1 class="product__name">
        {{ PRODUCT.product.name }}
      </h1>
      <div class="product__prices">
        <span v-if="+PRODUCT.product.discount_price" class="product__discount-price">{{ PRODUCT.product.discount_price }} ₸</span>
        <span class="product__price">{{ PRODUCT.product.price }} ₸</span>
      </div>
      <div class="product__description" v-html="PRODUCT.product.description"></div>
      <div v-if="PRODUCT.product.meta" class="product__text">
        {{ text }}
      </div>
      <ul v-if="PRODUCT.product.meta" class="product-meta">
        <li v-for="(meta, index) in data" class="product-meta__item">
          <label>
            <input required v-model="metaId" :value="meta" name="meta" type="radio" class="product-meta__checkbox">
            <a class="product-meta__text">{{ meta }}</a>
          </label>
        </li>
      </ul>
      <button @click="addProduct()" class="product__btn main-btn">
        Добавить в корзину за {{ +PRODUCT.product.discount_price ? PRODUCT.product.discount_price : PRODUCT.product.price  }} ₸
      </button>
<!--      <div v-if="PRODUCT.additions && PRODUCT.additions.length" class="product__text">-->
<!--        Дополнительно:-->
<!--      </div>-->
<!--      <div class="product__products">-->
<!--        <Product-->
<!--          v-for="(product, index) in PRODUCT.additions"-->
<!--          :key="index"-->
<!--          :product="product"-->
<!--          :type="'addition'"-->
<!--          @addToAdditional="addToAdditional"-->
<!--        />-->
<!--      </div>-->
    </div>
    <ProductCart />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import WeightIcon from '@/assets/svg/weight.svg?inline'
import FireIcon from '@/assets/svg/fire.svg?inline'
import MinusIcon from '@/assets/svg/minus.svg?inline'
import PlusIcon from '@/assets/svg/plus.svg?inline'
export default {
  data() {
    return {
      count: 1,
      metaId: null
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCT',
      'BASKET'
    ]),
    data () {
      let data = []
      data = JSON.parse(this.PRODUCT.product.meta)?.data
      this.metaId = data?.length ? data[0] : null
      return data
    },
    text () {
      let result = ''
      result = JSON.parse(this.PRODUCT.product.meta)?.text
      return result
    }
  },
  methods: {
    addProduct () {
      this.PRODUCT.product.count = this.count
      if (this.metaId) {
        this.PRODUCT.product.metaText = this.metaId
      }
      this.PRODUCT.product.basket_price = +this.PRODUCT.product.discount_price ? +this.PRODUCT.product.discount_price : +this.PRODUCT.product.price
      this.$store.dispatch('addToBasket', this.PRODUCT.product)
      // this.$toast.success('Успешно добавлено')
    },
    addToAdditional (additional) {
      let index = this.PRODUCT.product.additional.findIndex(item => item.id === additional.id)
      if (index > -1) {
        this.PRODUCT.product.additional.splice(index, 1)
      } else {
        this.PRODUCT.product.additional.push(additional)
      }
      if (this.metaId) {
        this.PRODUCT.product.metaText = this.metaId
      }
      this.PRODUCT.product.count = this.PRODUCT.product.count ? this.PRODUCT.product.count : 1
      this.$store.dispatch('editBasket', this.PRODUCT.product)
    }
  },
  components: {
    WeightIcon,
    FireIcon,
    MinusIcon,
    PlusIcon,
    Product: () => ({
      component: import('@/components/common/product')
    }),
    ProductCart: () => ({
      component: import('@/components/common/cart')
    })
  },
  mounted() {
    window.scroll({top: 0})
  },
  async created() {
    await this.$store.dispatch('getProduct', this.$route.params.id)
    let index = this.BASKET.findIndex((product) => product.id === this.PRODUCT.product.id)
    if (index > -1) {
      this.PRODUCT.product.additional = this.BASKET[index].additional || []
    } else {
      this.PRODUCT.product.additional = []
    }
  }
}
</script>

<style scoped>
  .product {
    margin-bottom: 60px;
  }
  .product__picture {
    width: 100%;
    height: 280px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    position: relative;
  }
  .product__counts {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: 48px;
    width: 117px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 16px 32px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .product__count-btn, .product__count {
    width: 40%;
    font-weight: 600;
    font-size: 15px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product__mini-infos {
    padding-left: 0;
    margin: 0;
  }
  .product__mini-info {
    padding: 6px 12px;
    border-radius: 30px;
  }
  .product__mini-info svg {
    margin-right: 7px;
  }
  .product__mini-info_weight {
    background: rgba(39, 174, 96, 0.08);
    color: var(--success-color);
    margin-right: 8px;
  }
  .product__mini-info_fire {
    background: rgba(114, 52, 142, 0.08);
    color: var(--purple-color);
  }
  .product__name {
    margin: 12px 0 4px;
  }
  .product__prices {
    margin-bottom: 8px;
  }
  .product__price {
    color: var(--purple-color);
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
  .product__discount-price {
    color: #A8A8A8;
    font-size: 16px;
    line-height: 144%;
    text-decoration-line: line-through;
    margin-right: 8px;
  }
  .product__description {
    margin: 0 0 28px;
    color: rgba(3, 4, 29, 0.6);
    font-size: 14px;
    line-height: 20px;
  }
  .product__btn {
    margin-bottom: 28px;
  }
  .product__products {
    margin-top: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-gap: 16px;
    -moz-column-gap: 16px;
    column-gap: 16px;
    position: relative;
  }
  .product__products > div {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .product-meta {
    margin: 25px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.0287096);
    border-radius: 40px;
    padding: 4px;
    box-sizing: border-box;
  }
  .product-meta__item {
    font-size: 12px;
    line-height: 20px;
    color: #262626;
    height: 100%;
  }
  .product-meta__checkbox {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 0;
  }
  .product-meta__text {
    height: 40px;
    display: block;
    line-height: 40px;
    text-align: center;
    transition: background 0.2s;
    overflow: hidden;
  }
  .product-meta__checkbox:checked ~ .product-meta__text {
    background: #FFFFFF;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    padding: 0 20px;
  }
</style>
