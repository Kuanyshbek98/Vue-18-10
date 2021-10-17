<template>
  <section class="expert-page">
    <h1 class="statistics-page__title admin-title">Experts</h1>
    <ul class="expert-page__tabs">
      <li v-for="tab in tabs" :key="tab" class="expert-page__tab" :class="{'expert-page__tab_active': activeTab === tab}">
        <router-link to="/admin/experts">{{ tab }}</router-link>
      </li>
    </ul>
    <div class="expert-page__table">
      <div class="expert-page__thead">
        <div class="expert-page__tr">
          <div class="expert-page__td">ID</div>
          <div class="expert-page__td">Name</div>
          <div class="expert-page__td">Position</div>
          <div class="expert-page__td">Skills</div>
          <div class="expert-page__td">CV</div>
          <div class="expert-page__td">Hourly</div>
          <div class="expert-page__td">&nbsp;</div>
        </div>
      </div>
      <div class="expert-page__tbody">
        <div class="expert-page__tr">
          <div class="expert-page__td expert-page__id">ADM221-10</div>
          <div class="expert-page__td expert-page__expert"></div>
          <div class="expert-page__td expert-page__position"></div>
          <div class="expert-page__td">
            <ul class="expert-page__skills">
              <li class="expert-page__skill">Elasticsearch</li>
              <li class="expert-page__skill">Ruby</li>
              <li class="expert-page__skill">+3</li>
            </ul>
          </div>
          <div class="expert-page__td"></div>
          <div class="expert-page__td">180$</div>
          <div class="expert-page__td"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        'All Claggers', 'Developers', 'Design', 'HR Managers', 'QA engineers', 'Human Resource', 'IT Support', 'Marketing', 'Accounting'
      ],
      activeTab: 'All Claggers'
    }
  },
}
</script>

<style scoped>
.statistics-page__title {
  margin-bottom: 33px;
}
.expert-page__tabs {
  display: flex;
  align-items: center;
}
.expert-page__tab {
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
  margin-right: 16px;
  padding: 0 12px 12px;
  border-bottom: 2px solid #FBFAFC;
  transition: border-bottom-color 0.2s ease-in, color 0.2s ease-in;
}
.expert-page__tab_active, .expert-page__tab:hover {
  font-weight: 600;
  color: var(--primary-color);
  border-color: var(--blue-color);
}
</style>
