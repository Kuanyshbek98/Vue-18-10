<template>
  <div class="store-slider" :class="{absolute: changeClass}" ref="slider">
    <div class="store-slider__content" :class="{absolute: changeClass}">
      <div
        ref="slide"
        v-show="!searchModel"
        class="swiper"
        v-swiper:myDirectiveSwiper="swiperOptions"
      >
        <div class="swiper-wrapper">
          <div v-for="(item, index) in cats" :key="item.id" class="swiper-slide">
            <a v-if="item.products.length" @click="showSlide(item.id, index)" class="store-slider__items" :class="{'store-slider__items_active': index === activeId}">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
      <div v-if="searchModel" class="store-slider__search store-slider__content flex" :class="{absolute: changeClass}">
        <span>Вот что мы нашли "{{ searchModel }}"</span>
        <a @click="$emit('clear')" class="store-slider__clear">Очистить поиск</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  props: {
    catsBlock: {
      type: HTMLCollection,
      default: null
    },
    cats: {
      type: Array,
      default: () => []
    },
    searchModel: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 0,
        slidesPerView: 'auto',
        hashNavigation: true
      },
      activeId: 0,
      sliderBlock: null,
      changeClass: false,
      top: 0,
      height: 0,
      slide: null,
      catHeights: [],
      onAction: false
    }
  },
  computed: {
    ...mapGetters([
      'OPEN_DESCRIPTION'
    ])
  },
  methods: {
    onScroll () {
      if (this.onAction) {
        return
      }
      let scrollTop = window.scrollY
      if (!this.swiper.destroyed) {
        if (scrollTop > this.top + this.height) {
          this.catHeights.forEach((cat, index) => {
            if (scrollTop > cat) {
              this.activeId = index
              this.swiper.slideTo(index, 500, true)
            }
          })
          this.changeClass = true
        } else {
          this.changeClass = false
        }
      }
    },
    showSlide (id, index) {
      this.onAction = true
      this.activeId = index
      window.scroll({top: this.catHeights[index] + 10, behavior: 'smooth'})
      setTimeout(() => {
        this.onAction = false
      }, 600)
    },
    calculateHeight () {
      this.catHeights = []
      if (this.catsBlock) {
        for (let i = 0; i < this.catsBlock.length; i++) {
          this.catHeights.push(this.catsBlock[i].getBoundingClientRect().top + window.scrollY - 60)
        }
      }
    }
  },
  mounted() {
    this.sliderBlock = this.$refs.slider
    this.top = this.sliderBlock.getBoundingClientRect().top + window.scrollY
    this.height = this.sliderBlock.getBoundingClientRect().height
    this.swiper = this.$refs.slide.swiper
    setTimeout(() => {
      document.addEventListener('scroll', this.onScroll)
      this.calculateHeight()
    }, 100)
  },
  created() {
    this.$store.commit('setOpenDescription', false)
  },
  watch: {
    OPEN_DESCRIPTION () {
      this.calculateHeight()
    }
  }
}
</script>

<style scoped>
  .store-slider.absolute {
    height: 32px;
  }
  .store-slider__content {
    transition: position 0.2s ease, box-shadow 0.2s ease;
  }
  .store-slider__content.absolute {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #FFFFFF;
    z-index: 2;
    padding: 10px 0 10px 2.5%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
    box-sizing: border-box;
  }
  .swiper-slide {
    width: auto;
  }
  .store-slider__items {
    padding: 6px 16px;
    display: block;
    font-size: 14px;
    border-radius: 40px;
    color: rgba(3, 4, 29, 0.4);
    line-height: 20px;
  }
  .store-slider__items_active {
    background: var(--gray-color);
    color: rgba(3, 4, 29, 0.6);
  }
  .store-slider__search {
    font-size: 13px;
    background: #f6f6f6;
    padding: 15px;
    margin: 0 -15px 0 -15px;
  }
  .store-slider__search.absolute {
    background: #f6f6f6;
    margin: 0;
    padding-right: 10px;
  }
  .store-slider__search .store-slider__clear {
    color: var(--purple-color);
  }
</style>
