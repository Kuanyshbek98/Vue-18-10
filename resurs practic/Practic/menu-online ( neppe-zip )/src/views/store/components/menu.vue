<template>
  <div class="store-menu">
    <div class="container">
      <form @submit.prevent="search()" class="store-menu__search">
        <input @input="search()" v-model="searchModel" type="text" class="store-menu__input" placeholder="Поиск еды">
        <a v-show="!searchModel" class="store-menu__btn"><SearchIcon /></a>
      </form>
      <div class="store-menu__slider">
        <MenuSlider
            v-if="catsBlock"
            :cats="PRODUCTS.data"
            :catsBlock="catsBlock"
            :searchModel="searchModel"
            @clear="clear()"
        />
      </div>
      <div ref="catBlock">
        <div v-for="cat in PRODUCTS.data" :key="cat.id" class="store-menu__cats">
          <h3 v-if="cat.products.length" class="store-menu__cats-name">{{ cat.name }}</h3>
          <div v-if="cat.products.length" class="store-menu__products">
            <Product v-for="(product, index) in cat.products" :key="index" v-if="product" :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import SearchIcon from '@/assets/svg/search.svg?inline'
export default {
  data() {
    return {
      searchModel: '',
      catsBlock: null
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    async search () {
      await this.$store.dispatch('getProducts', {
        storeId: localStorage.getItem('store-id'),
        search: this.searchModel
      })
    },
    async clear () {
      this.searchModel = ''
      await this.$store.dispatch('getProducts', {
        storeId: localStorage.getItem('store-id')
      })
    }
  },
  components: {
    SearchIcon,
    MenuSlider: () => ({
      component: import('./slider')
    }),
    Product: () => ({
      component: import('@/components/common/product')
    })
  },
  mounted() {
    setTimeout(() => {
      this.catsBlock = this.$refs.catBlock.children
    }, 500)
  }
}
</script>

<style scoped>
  .store-menu {
    margin-bottom: 20px;
  }
  .store-menu__search {
    width: 100%;
    position: relative;
    display: block;
    margin-bottom: 28px;
  }
  .store-menu__input {
    width: 100%;
    background: var(--gray-color);
    border-radius: 30px;
    height: 40px;
    color: rgba(3, 4, 29, 0.6);
    font-size: 17px;
    text-align: center;
  }
  .store-menu__input::placeholder {
    color: rgba(3, 4, 29, 0.6);
  }
  .store-menu__btn {
    position: absolute;
    top: 10px;
    left: calc(50% - 70px);
  }
  .store-menu__products {
    margin-top: 28px;
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
  .store-menu__products > div {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .store-menu__cats-name {
    padding: 10px 0 10px 10px;
  }
</style>
