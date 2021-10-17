export default {
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();
      
      ctx.commit("updataPosts", posts);
    },
    // async fetchPosts(commit, getters, dispatch) {
    //   dispatch("satHello");
    //   commit("updataPosts", posts);
    // },
    // satHello() {},
  },
  mutations: {
    updataPosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    volidPosts(state) {
      return state.posts.filter((p) => {
        return p.title && p.body;
      });
    },
    allPosts(state) {
      return state.posts;
    },
    postsCount(state, getters) {
      //   return state.posts.length;
      return getters.volidPosts.length;
    },
    // createPostes(state) {
    //   return state.posts;
    // },
  },
};
