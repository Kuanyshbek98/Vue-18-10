<template>
  <div id="app">
    <component v-if="component" :is="component"/>
    <FooterBlock />
  </div>
</template>

<script>
import MainBlock from './layouts/main'
import AuthBlock from './layouts/auth'
import DefaultBlock from './layouts/default'
import AdminBlock from './layouts/admin'
import FooterBlock from './components/footer/footer'

export default {
  computed: {
    component () {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout + '-block'
      } else {
        return ''
      }
    }
  },
  components: {
    MainBlock,
    AuthBlock,
    DefaultBlock,
    AdminBlock,
    FooterBlock
  },
  created() {
  }
}
</script>
