<template>
  <div id="app">
    <h1>Погинация</h1>
    <Pogination
      class="btn"
      :posts="posts"
      :total="total"
      :item="posts.length"
      @page-changed="loadReactions"
    />
  </div>
</template>

<script>
import Pogination from "@/components/Pogination";
export default {
  name: "App",
  data() {
    return {
      posts: [],
      page: 95,
      total: 10,
    };
  },
  components: { Pogination },

  created() {
    this.loadReactions(this.page);
  },
  methods: {
    async loadReactions(pageNumber) {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=" + this.page
        );
        this.posts = await res.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
