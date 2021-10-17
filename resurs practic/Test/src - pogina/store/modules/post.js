// import reactions from '../mocks/reactions'

// const loadReactions = () => {
//   new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(reactions)
//     },1000)
//   })
// }

export default {
  namespaced: true,
  getters: {
    getReaction(state) {
      return state.arr;
    },
  },
  state: {
    posts: [],
    arr: [],
    massage: "kuanyshbek",
  },
  mutations: {
    SET_REACTION(state, posts) {
      state.arr = posts;
      console.log(state.arr);
      state.arr.push(2000);
      console.log(state.arr);
    },
    SET_MESSAGE(state) {
      console.log(state.massage);
    },
  },
  actions: {
    async loadReactions({ commit }, payload) {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const posts = await res.json();

        commit("SET_REACTION", posts);
        commit("SET_MESSAGE");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
