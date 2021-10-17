<template>
  <div class="offer">
    <header class="offer__header flex">
      <h3 class="offer__title">Low fidelity wireframes, 21 h.</h3>
      <h4 class="offer__price">$1890.00 USD</h4>
    </header>
    <div class="offer__subheader offer-subheader flex">
      <div class="offer-subheader__left-block flex">
        <div class="offer-subheader__avatar avatar" :style="{backgroundImage: `url(https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80)`}"></div>
        <h5 class="offer-subheader">Health center</h5>
      </div>
      <div class="offer-subheader__right-block flex">
        <a class="offer-subheader__action"><StarIcon /></a>
        <a class="offer-subheader__action"><TrashIcon /></a>
        <a class="offer-subheader__action"><CheckIcon /></a>
      </div>
    </div>
    <div class="offer__info offer-info">
      <address class="offer-info__text">
        <GeoIcon /> Almaty, Kz
      </address>
      <a href="https://healthcenter.kz" class="offer-info__text">
        <WorldIcon /> healthcenter.kz
      </a>
    </div>
    <div class="offer__line"></div>
    <h6 class="offer__subtitle">Task Description</h6>
    <div class="offer__description">
      We are looking for a talented UX/UI expert to help both design and update the UI of our product.

      We are looking for a talent that has proven track history and is familiar with building UI's for web applications.

      You will need to have relevant expertise in CSS, jQuery, HTML5 and PHP.

      You will be joining our team and will need to be available on Slack, Zoom and have good internet access for VPN connection to our development environment.
    </div>
    <p class="offer__date">1 day</p>
  </div>
</template>

<script>
import StarIcon from '@/assets/svg/star.svg?inline'
import TrashIcon from '@/assets/svg/trash.svg?inline'
import CheckIcon from '@/assets/svg/check.svg?inline'
import GeoIcon from '@/assets/svg/geo.svg?inline'
import WorldIcon from '@/assets/svg/world.svg?inline'
export default {
  components: {
    StarIcon,
    TrashIcon,
    CheckIcon,
    GeoIcon,
    WorldIcon
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
.offer {
  width: 95%;
  max-width: 912px;
  border: 1px solid #E3E1E5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px 32px;
  margin-bottom: 16px;
}
.offer__title {
  font-size: 20px;
  line-height: 28px;
  margin: 0;
}
.offer__price {
  font-size: 24px;
  line-height: 32px;
  margin: 0;
}
.offer__header {
  margin-bottom: 14px;
}
.offer-subheader {
  margin-bottom: 16px;
}
.offer-subheader__avatar {
  width: 48px;
  height: 48px;
  margin: 0 16px 0 0;
}
.offer-subheader__action:not(:last-child) {
  margin-right: 31px;
}
.offer-info {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.offer-info__text {
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
.offer-info__text svg {
  margin-right: 8px;
}
.offer__line {
  margin-bottom: 16px;
  background: #E8E7E8;
  height: 1px;
  width: 100%;
}
.offer__subtitle {
  font-size: 14px;
  line-height: 19px;
  margin: 0 0 8px;
}
.offer__description {
  font-size: 14px;
  line-height: 24px;
  color: #3B3A40;
}
.offer__date {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #84818A;
  margin: 16px 0 0;
}
</style>
