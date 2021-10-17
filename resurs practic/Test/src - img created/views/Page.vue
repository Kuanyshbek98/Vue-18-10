<template>
  <div>
    <h1 id="ball">Page</h1>
    {{ fruits }}
    <button @click="funcMech(3)">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      retesd: "",
      fruits: [
        "Клубника0",
        "Банан1",
        "Манго2",
        "Банан3",
        "Манго4",
        "Банан5",
        "Манго6",
      ],
      arr: [],
    };
  },
  methods: {
    funcMech(i) {
      // let pos = fruits.indexOf("Банан");
      // let i = 3;

      // [].forEach()
      this.arr = [];
      this.arr = this.fruits.splice(i, 1);
      console.log(this.arr);
      console.log(this.fruits);
    },
  },
  created() { 
  },
};
</script>

<style scoped></style>
