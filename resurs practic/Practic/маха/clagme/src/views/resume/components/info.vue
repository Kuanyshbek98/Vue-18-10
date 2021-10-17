<template>
  <div class="resume-info">
    <div class="resume-info__content">
      <ResumePicture class="resume-info__picture" />
      <div class="resume-info__faq">
        <FaqItemBlock
          v-for="(item, index) in faqs"
          :key="index"
          :faq="item"
          class="resume-info__faq-item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResumePicture from '@/assets/svg/resume-picture.svg?inline'
export default {
  data() {
    return {
      faqs: [
        {
          title: 'Where am I?',
          description: 'You are at the Part I of your Profile creation. By now, your email is confirmed, your legal and required information is verified. Please let us know, if you need to change your details.'
        },
        {
          title: 'What do I do now?',
          description: 'You are at the Part I of your Profile creation. By now, your email is confirmed, your legal and required information is verified. Please let us know, if you need to change your details.'
        },
        {
          title: 'Next Steps?',
          description: 'You are at the Part I of your Profile creation. By now, your email is confirmed, your legal and required information is verified. Please let us know, if you need to change your details.'
        },
      ]
    }
  },
  components: {
    ResumePicture,
    FaqItemBlock: () => ({
      component: import('./faqItem')
    })
  },
}
</script>

<style scoped>
.resume-info__picture {
  margin-bottom: 40px;
}
</style>
