<template>
  <div class="info">
    <h2 class="info__title">Need something done?</h2>
    <div class="info__content flex">
      <div class="info__block">
        <FreelancerIcon class="info__image" />
        <h3 class="info__subtitle">Choose freelancers</h3>
        <p class="info__text">
          No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!
        </p>
      </div>
      <div class="info__block">
        <MoneyIcon class="info__image" />
        <h3 class="info__subtitle">Pay safely</h3>
        <p class="info__text">
          Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.
        </p>
      </div>
      <div class="info__block">
          <PhoneIcon class="info__image" />
        <h3 class="info__subtitle">We’re here to help</h3>
        <p class="info__text">
          Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import FreelancerIcon from '@/assets/svg/freelancer.svg?inline'
import MoneyIcon from '@/assets/svg/money.svg?inline'
import PhoneIcon from '@/assets/svg/phone.svg?inline'
export default {
  components: {
    FreelancerIcon,
    MoneyIcon,
    PhoneIcon
  },
}
</script>

<style scoped>
.info {
  padding: 64px 0 72px;
}
.info__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0 0 32px;
  text-align: center;
}
.info__block {
  width: 30%;
}
.info__subtitle {
  letter-spacing: 0.225px;
  font-size: 18px;
  line-height: 22px;
  margin: 16px 0 8px;
}
.info__text {
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.175px;
}
</style>
