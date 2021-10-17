<template>
  <header class="store-header">
    <div class="store-header__image" :style="{backgroundImage: `url(${$url+STORE.path})`}"></div>
    <div class="store-header__content">
      <div class="container">
        <div class="store-header__logo" :style="{backgroundImage: `url(${$url+STORE.logo})`}"></div>
        <h1 class="store-header__name">
          {{ STORE.name }}
        </h1>
        <div class="store-header__option">
          <a class="store-header__time">
            <TimeIcon />
            {{ STORE.hour }}
          </a>
        </div>
        <pre class="store-header__description" :class="{short: !showMore}">{{ STORE.description }}</pre>
        <a v-show="!showMore" class="store-header__more" @click="openDescription()">Читать далее</a>
      </div>
    </div>
  </header>
</template>

<script>
import TimeIcon from '@/assets/svg/time.svg?inline'
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      showMore: false
    }
  },
  computed: {
    ...mapGetters([
      'STORE'
    ])
  },
  methods: {
    openDescription () {
      this.$store.commit('setOpenDescription', true)
      this.showMore = !this.showMore
    }
  },
  components: {
    TimeIcon
  },
  created() {
  }
}
</script>

<style scoped>
  .store-header {
    margin-bottom: 20px;
  }
  .store-header__image, .store-header__logo {
    background-color: #F2F2F2;
    background-position: center center;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
  }
  .store-header__image {
    height: 130px;
    width: 100%;
    /*background-attachment: fixed;*/
  }
  .store-header__logo {
    width: 88px;
    height: 88px;
    border-radius: 50% 50%;
    background: #FFFFFF;
    background-size: contain;
    margin: -40px auto 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.02), 0px 16px 32px rgba(0, 0, 0, 0.07);
    position: absolute;
    top: -55px;
    left: 50%;
    transform: translateX(-50%);
  }
  .store-header__content {
    position: relative;
    margin-top: -30px;
    background: #FFFFFF;
    border-radius: 28px 28px 0px 0px;
    padding-top: 52px;
  }
  .store-header__name {
    margin: 0 0 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }
  .store-header__description {
    font-size: 14px;
    line-height: 20px;
    margin: 24px 0 0;
    display: flex;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .store-header__description.short {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .store-header__more {
    color: var(--purple-color);
    font-size: 14px;
    line-height: 20px;
    text-decoration: underline;
    width: 100%;
    display: block;
    /*padding-top: 20px;*/
    /*margin-top: -20px;*/
    /*background: #FFFFFF;*/
    position: relative;
    box-shadow: 0 -9px 0 11px rgba(255, 255, 255, .6);
  }
  .store-header__option {
    text-align: center;
  }
  .store-header__time {
    color: rgba(3, 4, 29, 0.6);
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .store-header__time svg {
    margin-right: 10px;
  }
</style>
