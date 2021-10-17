<template>
  <div class="img-created">
    <h1>Try it out!</h1>
    <div
      @dragover="FuncDragover($event)"
      @mouseover="FuncMouseover($event)"
      class="block"
    >
      <p v-show="isInputshow">
        Drop files here or click to upload.
      </p>
      <input
        type="file"
        @change="previewFileAll"
        :class="{ inputAdd: isInputAdd }"
        accept="image/png, image/gif, image/jpeg"
        multiple
      />
      <br />
      <div class="img-array">
        <div class="img-array__box" v-for="(image, i) in images" :key="i">
          <img :src="image" />
          <button @click="BtnReset(i)" class="img-array__btn">x</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      img: "",
      isInputshow: true,
      isInputAdd: false,
      images: [],
      arr: [],
    };
  },
  methods: {
    previewFile(e) {
      // this.isInputAdd = false;
      // var preview = this.$refs.name;
      // var preview = document.querySelector("img");
      // let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        this.images.push(reader.result);
      };
      e.target.files[0]
        ? (reader.readAsDataURL(e.target.files[0]), (this.isInputshow = false))
        : "";
    },
    previewFileAll(e) {
      const app = this;
      let arrfiles = [];
      for (let i = 0; i < e.target.files.length; i++) {
        arrfiles[i] = e.target.files[i];
        let reader = new FileReader();

        reader.onload = (e) => {
          app.images.push(e.target.result);
        };
        if (e.target.files[0].size < 300 * 1024) {
          console.log("true");
          e.target.files[i]
            ? (reader.readAsDataURL(e.target.files[i]),
              (this.isInputshow = false))
            : "";
        } else {
          console.log("error");
        }
        // reader.readAsDataURL(e.target.files[i]);
      }
      // app.files = app.files.concat(arrfiles);
    },
    FuncDragover() {
      this.isInputAdd = true;
    },
    FuncMouseover() {
      this.isInputAdd = false;
    },
    BtnReset(i) {
      this.arr = [];
      this.arr = this.images.splice(i, 1);
      this.images.length === 0
        ? (this.isInputshow = true)
        : (this.isInputshow = false);

      // console.log(this.arr);
      // console.log(this.fruits);
      // console.log(i);
    },
  },
};
</script>

<style scoped>
.img-created {
  text-align: center;
  background-color: #f7f7f7;
}
.block {
  height: auto;
  min-height: 300px;
  width: 70%;
  margin: 1% auto 0px;
  background-color: #fff;
  border: 2px dashed #0087f7;

  position: relative;
}
.block p {
  margin: 100px;
  font-size: 1.5rem;
}
.block input {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  opacity: 0;
}
.inputshow {
  opacity: 0;
}
.inputAdd {
  border: 4px dashed #4a504c;
  z-index: 1000;
}
.img-array {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  padding: 10px;
}
.img-array:hover {
  z-index: 2;
}
.img-array:hover + .block input {
  z-index: -1;
}
.img-array img {
  width: 150px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #606aff;
}
.img-array__box {
  position: relative;
}
.img-array__btn {
  padding: 4px 6px;
  border-radius: 10px;
  background-color: rgb(228, 227, 226);
  position: absolute;
  top: 0%;
  left: 85%;
}
</style>
