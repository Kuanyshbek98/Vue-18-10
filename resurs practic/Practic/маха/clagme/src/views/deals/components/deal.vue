<template>
  <div class="deal">
    <header class="deal__header deal-header flex">
      <div class="deal-header__left-block flex">
        <div class="deal-header__avatar avatar" :style="{backgroundImage: `url(https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80)`}"></div>
        <h3 class="deal-header__name">Health center</h3>
      </div>
      <div class="deal-header__right-block">
        <MiddleDotIcon class="deal-header__middle-dot" />
      </div>
    </header>
    <div class="deal__info deal-info">
      <address class="deal-info__text">
        <GeoIcon /> Almaty, Kz
      </address>
      <a href="https://healthcenter.kz" class="deal-info__text">
        <WorldIcon /> healthcenter.kz
      </a>
    </div>
    <div class="offer__body flex">
      <ul class="offer__statistics flex">
        <li class="offer__statistic">
          <strong class="offer__statistic-bold">$ 180</strong>
          per hour
        </li>
        <li class="offer__statistic">
          <strong class="offer__statistic-bold">21</strong>
          Hours
        </li>
        <li class="offer__statistic">
          <strong class="offer__statistic-bold">$ 3780</strong>
          Approximate Total
        </li>
        <li class="offer__statistic">
          <strong class="offer__statistic-bold">11 August</strong>
          Started
        </li>
      </ul>
      <div class="offer__actions">
        <button class="offer__finished-btn">Task finished</button>
        <button class="offer__write-btn">Write message</button>
      </div>
    </div>
    <div class="offer__line"></div>
    <h4 class="deal__subtitle">Task Description</h4>
    <div class="deal__description">
      We are looking for a talented UX/UI expert to help both design and update the UI of our product.

      We are looking for a talent that has proven track history and is familiar with building UI's for web applications.

      You will need to have relevant expertise in CSS, jQuery, HTML5 and PHP.

      You will be joining our team and will need to be available on Slack, Zoom and have good internet access for VPN connection to our development environment.
    </div>
  </div>
</template>

<script>
import MiddleDotIcon from '@/assets/svg/middle-dot.svg?inline'
import GeoIcon from '@/assets/svg/geo.svg?inline'
import WorldIcon from '@/assets/svg/world.svg?inline'
export default {
  components: {
    MiddleDotIcon,
    GeoIcon,
    WorldIcon
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.deal {
  border: 1px solid #E3E1E5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 32px;
  max-width: 912px;
  margin-bottom: 16px;
}
.deal-header__avatar {
  width: 48px;
  height: 48px;
  margin: 0 16px 0 0;
}
.deal-header__name {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #3B3A40;
}
.deal-header__middle-dot {
  cursor: pointer;
}
.deal-info {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.deal-info__text {
  margin-right: 12px;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #64626A;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.deal-info__text svg {
  margin-right: 8px;
}
.offer__line {
  margin-bottom: 16px;
  background: #E8E7E8;
  height: 1px;
  width: 100%;
}
.deal__subtitle {
  font-size: 14px;
  line-height: 19px;
  margin: 0 0 8px;
}
.deal__description {
  font-size: 14px;
  line-height: 24px;
  color: #3B3A40;
}
.offer__body {
  margin-bottom: 16px;
}
.offer__statistic {
  color: #84818A;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.offer__statistic:not(:last-child) {
  margin-right: 32px;
}
.offer__statistic-bold {
  display: block;
  color: #000000;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 4px;
  border-radius: 4px;
}
.offer__finished-btn, .offer__write-btn {
  width: 112px;
  padding: 9px 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  margin-right: 8px;
}
.offer__finished-btn {
  border: 1px solid #E3E1E5;
  background-color: #FFFFFF;
  color: #504F54;
}
.offer__write-btn {
  background-color: var(--blue-color);
  color: #FFFFFF;
}
</style>
