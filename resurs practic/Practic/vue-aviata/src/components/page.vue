<template>
  <div class="page">
    <div class="container">
      <div class="page__wrapper">
        <PageSidebar />
        <PageSection />
      </div>
    </div>
  </div>
</template>

<script>
import PageSidebar from "../components/PageSidebar.vue";
import PageSection from "../components/PageSection.vue";

export default {
  components: {
    PageSidebar,
    PageSection,
  },
};
</script>

<style>
.page__wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 30px;
}
</style>
