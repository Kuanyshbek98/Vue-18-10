<template>
  <div class="search-filter">
    <h2 class="search-filter__title">Filters</h2>
    <form>
      <label for="" class="search-filter__label">Hourly rate</label>
      <input type="text" class="search-filter__input">
      <label for="" class="search-filter__label">Skills</label>
      <input type="text" class="search-filter__input">
      <label for="" class="search-filter__label">Available date</label>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search-filter__title {
  margin: 0 0 24px;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
}
.search-filter__label {
  font-size: 14px;
  line-height: 20px;
  color: #504F54;
}
.search-filter__input {
  border-radius: 4px;
  border: 1px solid #EBEAED;
  margin: 8px 0 24px;
  height: 42px;
}
</style>
