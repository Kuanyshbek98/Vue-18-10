<template>
  <div>
    <h2>Yergesh KUAnyshbek</h2>
    <div class="post" v-for="post in volidPosts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["volidPosts"]),
  methods: mapActions(["fetchPosts"]),
  
  async mounted() {
    this.fetchPosts(8);
  },
};
</script>
