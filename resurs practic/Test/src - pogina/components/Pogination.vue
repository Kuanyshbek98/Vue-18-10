<template>
  <div>
    <p
      v-for="post in EvenLink(this.num * 10, (this.num - 1) * 10)"
      :key="post.id"
    >
      {{ post.id + ")" }} {{ post.body }}
    </p>
    <ul>
      <li v-for="p in totalPages" :key="p">
        <button :class="{ active: currendPage === p }" @click="changePage(p)">
          {{ p }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "item", "posts"],
  data() {
    return {
      currendPage: 1,
      num: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.item / this.total);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currendPage = pageNumber;
      this.$emit("page-changed", pageNumber);
      this.num = pageNumber;
    },
    EvenLink(max, min) {
      return this.posts.filter(function(number) {
        return number.id <= max && number.id > min;
      });
    },
  },
};
</script>

<style scoped>
.active {
  background-color: rgb(151, 146, 146);
}
ul {
  display: flex;
  list-style: none;
}

li {
  margin: 0px 5px;
}
p {
  width: 70%;
  margin: 0;
  padding: 5px;
  margin-left: 60px;
  background-color: rgb(214, 213, 213);
  border: 1px solid rgb(0, 0, 0);
}
</style>
