<template>
  <div class="cv-file">
    <span class="cv-file__text">CV</span>
    <PdfIcon class="cv-file__icon"/>
  </div>
</template>

<script>
import PdfIcon from '@/assets/svg/pdf.svg?inline'

export default {
  components: {
    PdfIcon
  }
}
</script>

<style scoped>
.cv-file {
  background: rgba(227, 225, 229, 0.1);
  border: 0.33px solid #E3E1E5;
  box-sizing: border-box;
  border-radius: 100px;
  width: 87px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
}
.cv-file__icon {
  margin-left: 12px;
}
</style>
