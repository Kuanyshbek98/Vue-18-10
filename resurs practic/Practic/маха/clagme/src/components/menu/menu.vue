<template>
  <div class="menu">
    <ul class="menu__list">
      <li class="menu__item menu__item_active">
        <router-link to="/admin/statistics" class="menu__link">
          <StatisticsIcon />
          Statistics
        </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/admin/transactions" class="menu__link">
          <TransactionsIcon />
          Transactions
        </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/admin/experts" class="menu__link">
          <ExpertsIcon />
          Experts
        </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/admin/companies" class="menu__link">
          <CompaniesIcon />
          Companies
        </router-link>
      </li>
    </ul>
    <p class="menu__bottom">
      <router-link to="/" class="menu__link">
        <HelpIcon /> Help
      </router-link>
    </p>
  </div>
</template>

<script>
import StatisticsIcon from '@/assets/svg/statistic.svg?inline'
import TransactionsIcon from '@/assets/svg/card.svg?inline'
import ExpertsIcon from '@/assets/svg/users.svg?inline'
import CompaniesIcon from '@/assets/svg/buildings.svg?inline'
import HelpIcon from '@/assets/svg/help.svg?inline'
export default {
  components: {
    StatisticsIcon,
    TransactionsIcon,
    ExpertsIcon,
    CompaniesIcon,
    HelpIcon
  },
}
</script>

<style scoped>
.menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 12px;
  box-sizing: border-box;
  overflow-y: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
.menu__item {
  margin-bottom: 4px;

}
.menu__link {
  display: flex;
  padding: 13px 15px;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  transition: background-color .2s ease-in, color .2s ease-in;
}
.menu__link svg {
  margin-right: 17px;
  fill: #84818A;
}
.menu__item_active {
  background-color: rgba(85, 66, 246, 0.1);
  mix-blend-mode: normal;
  color: var(--blue-color);
}
.menu__item_active svg {
  fill: var(--blue-color);
}

@media (min-width: 768px) {
  .menu__link:hover {
    background-color: rgba(85, 66, 246, 0.1);
    mix-blend-mode: normal;
    color: var(--blue-color);
  }
  .menu__item:hover svg {
    fill: var(--blue-color);
  }
}
</style>
