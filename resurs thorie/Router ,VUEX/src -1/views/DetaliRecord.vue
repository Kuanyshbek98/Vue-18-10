<template>
  <div>
    <h1>ToDO</h1>
    <div class="post" v-for="post in volidPosts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["volidPosts"]),
    },
  methods: {
    ... mapActions(["fetchPosts"]),
  },
  async mounted() {
    this.fetchPosts(3);
  },

};
</script>
