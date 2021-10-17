<template>
  <div id="app">
    <router-view/>
    <!-- <PostForm /> -->
    <router-link to="/">1</router-link> |
    <router-link to="/2">2</router-link>|
    <router-link to="/3">3</router-link>  
    <!-- <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in volidPosts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p> -->
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    PostForm,
  },
  // data() {
  //   return {
  //     posts: [],
  //   };
  // },

  // computed:{
  //   allPosts(){
  //     return this.$store.getters.allPosts;
  //     }
  // },
  computed: mapGetters(["volidPosts", "postsCount"]),
  methods: mapActions(["fetchPosts"]),

  async mounted() {
    // this.$store.dispatch("fetchPosts");
    this.fetchPosts(10);

    // const res = await fetch(
    //   "https://jsonplaceholder.typicode.com/posts?_limit=4"
    // );
    // const posts = await res.json();
    // this.posts = posts;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.post {
  background-color: #dbdbdb;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
