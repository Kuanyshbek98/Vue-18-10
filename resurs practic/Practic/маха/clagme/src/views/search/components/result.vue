<template>
  <div class="search-result">
    <header class="search-result__header flex">
      <p class="search-result__left-block">
        Showing : <span class="search-result__result-count">98 filtered results</span>
      </p>
      <div class="search-result__right-block flex">
        Sort by :
        <select class="search-result__select">
          <option value="new">New posts</option>
        </select>
      </div>
    </header>
    <div class="search-result__list">
      <div v-for="item in 5" :key="item" class="search-result__item item">
        <div class="item__header flex">
          <h3 class="item__title">Lead product designer at Thousand</h3>
          <CvFile />
        </div>
        <div class="item__company item-company flex">
          <div class="item-company__about flex">
            <div class="item-company__logo avatar"></div>
            <h4 class="item-company__name">Rodolfo Goode</h4>
          </div>
          <button class="item-company__hire">Hire clagger</button>
        </div>
        <div class="item__text">
          Hired companies:
          <a class="item__companies-logo avatar"></a>
          <a class="item__companies-logo avatar"></a>
          <a class="item__companies-logo avatar"></a>
        </div>
        <div class="item__line"></div>
        <ul class="item__tags">
          <li class="item__tag">
            <router-link to="/" class="item__link">UX</router-link>
          </li>
          <li class="item__tag">
            <router-link to="/" class="item__link">UI</router-link>
          </li>
          <li class="item__tag">
            <router-link to="/" class="item__link">Sketch</router-link>
          </li>
          <li class="item__tag">
            <router-link to="/" class="item__link">Product Design</router-link>
          </li>
        </ul>
        <ul class="item__rating-list">
          <li class="item__rating">

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    CvFile: () => ({
      component: import('@/components/common/cv')
    }),
  },
}
</script>

<style scoped>
.search-result__header{
  padding-bottom: 16px;
  border-bottom: 0.5px solid #E0E0E0;
  margin-bottom: 24px;
}
.search-result__left-block {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #B6B4BA;
  margin: 0;
}
.search-result__result-count {
  color: var(--primary-color);
}
.search-result__right-block {
  white-space: nowrap;
  color: #B6B4BA;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
.item {
  background: #FFFFFF;
  border: 0.33px solid #E3E1E5;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px 16px;
  margin-bottom: 16px;
}
.item__title {
  font-size: 20px;
  line-height: 24px;
  margin: 0;
}
.item__header {
  margin-bottom: 16px;
}
.item__company {
  margin-bottom: 16px;
}
.item-company__logo {
  width: 44px;
  height: 44px;
  margin-right: 12px;
}
.item-company__name {
  font-size: 16px;
  line-height: 22px;
  margin: 0;
}
.item__text {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.item__companies-logo {
  width: 36px;
  height: 36px;
  margin: 0 4px 0 0;
}
.item__companies-logo:first-child {
  margin-left: 8px;
}
.item__line {
  width: calc(100% + 16px);
  background: #E3E1E5;
  height: 1px;
  margin-bottom: 16px;
}
.item__tags {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.item__tag:not(:last-child) {
  margin-right: 8px;
}
.item__tag {
  font-size: 14px;
  line-height: 20px;
  background: #FBFAFC;
  border: 0.5px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 24px;
}
.item__link {
  display: block;
  padding: 6px 20px;
}
</style>
