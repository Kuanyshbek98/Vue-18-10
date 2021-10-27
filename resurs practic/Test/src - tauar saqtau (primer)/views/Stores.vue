<template>
  <div id="app">
    <div class="block">
      <div v-for="(pos, i) in 10" :key="i" class="box">
        <div class="box__img"></div>
        <button class="box__btn" @click="Choice(i)" :class="classObject(i)">
          Click
        </button>
      </div>
    </div>
    <div class="collection">{{ number.length }}</div>
    <div @click="add()">CLICK</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isActive: true,
      error: true,
      arrayElement: false,
      number: [],
    };
  },
  computed: {
    ...mapGetters(["COUNT"]),
  },
  methods: {
    add() {
      this.$store.dispatch("increment", this.number);
      this.$router.push("/number");
      // this.$router.push("/number?kdkfkfkfcfdlckd");
      // this.$router.push({
      //   name: "detalirecord",
      //   query: { search: "asdasdasd" },
      // });
    },
    Choice(value) {
      if (this.CheckArray(value) === false) {
        this.number.push(value);
      }
    },
    classObject(value) {
      return {
        active: this.CheckArray(value),
      };
    },
    CheckArray(value) {
      // this.error = true;
      // this.arrayElement = false;
      // console.log(this.number.some((num) => num === value));
      return this.number.some((num) => num === value);

      // console.log(this.number.some(function(num) {
      //   return num === value
      // }));

      // console.log(this.number.includes((num) => num === value));

      // for (let i = 0; i < this.number.length; i++) {
      //   if (this.number[i] === value) {
      //     this.error = false;
      //     this.arrayElement = true;
      //   }
      // }
      // return this.error;
    },
  },
};
</script>
<style scoped>
.block {
  width: 70%;
  margin: 1% auto 0px;
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
.box {
  width: 100%;
}
.box__img {
  width: 100%;
  height: 100px;
  background-color: rgb(117, 255, 117);
}
.box__btn {
  width: 100%;
  height: 30px;
  border-radius: 20px;
  color: #fff;
  background-color: rgb(93, 163, 255);
}
.active {
  color: rgb(0, 0, 0);
  background-color: rgb(192, 218, 252);
}
.collection {
  width: 40px;
  height: 45px;
  padding: 15px;
  background-color: rgb(170, 252, 252);
  box-sizing: border-box;
  position: fixed;
  bottom: 20px;
  right: 30px;
}
</style>
