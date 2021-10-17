<template>
  <div class="films-layout">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import { mapActions } from 'vuex'

export default {
  components: { MainHeader },
  methods: {
    ...mapActions({
      load: 'reactions/loadReactions'
    })
  },
  created() {
    this.load(1000)
  }
}
</script>