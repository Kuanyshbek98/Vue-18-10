<template>
  <div class="simon">
    <div class="simon__block">
      <button
        class="simon__button blue"
        :class="{ 'random-color': randomBlue }"
        @click="AllClick(1), (randomBlue = true)"
        :disabled="disabledButton"
      ></button>
      <button
        class="simon__button yellow"
        :class="{ 'random-color': randomYellow }"
        @click="AllClick(2), (randomYellow = true)"
        :disabled="disabledButton"
      ></button>
      <button
        class="simon__button green"
        :class="{ 'random-color': randomGreen }"
        @click="AllClick(3), (randomGreen = true)"
        :disabled="disabledButton"
      ></button>
      <button
        class="simon__button red"
        :class="{ 'random-color': randomRed }"
        @click="AllClick(4), (randomRed = true)"
        :disabled="disabledButton"
      ></button>
    </div>
    <div class="simon__text">
      <div class="simon__round">Round:{{ round }}</div>
      <button class="simon__start" @click="Start" :disabled="disabledStart">
        Start
      </button>
      <div>
        <input
          type="radio"
          name="radio"
          id="one"
          :value="1500"
          v-model="picked"
        />
        <label for="one">Легкий</label>
        <br />
        <input
          type="radio"
          name="radio"
          id="two"
          :value="1000"
          v-model="picked"
        />
        <label for="two">Средний</label>
        <br />
        <input
          type="radio"
          name="radio"
          id="three"
          :value="400"
          v-model="picked"
        />
        <label for="three">Сложный</label>
        <div>Picked: {{ picked }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: 1500,
      interval: 0,
      round: 1,

      arrRandom: [],
      arrClick: [],
      
      randomBlue: false,
      randomYellow: false,
      randomGreen: false,
      randomRed: false,
      disabledButton: true,
      disabledStart: false,
    };
  },
  methods: {
    Start() {
      this.disabledStart = true;
      this.disabledButton = false;
      this.arrClick = [];
      this.interval = Math.ceil((Math.random() * 10) / 2.5);
      this.arrRandom.push(this.interval);
      this.ShowArr();
    },
    ShowArr() {
      let i = 0;
      this.myInterval = setInterval(() => {
        switch (this.arrRandom[i]) {
          case 1:
            this.randomBlue = true;
            break;
          case 2:
            this.randomYellow = true;
            break;
          case 3:
            this.randomGreen = true;
            break;
          case 4:
            this.randomRed = true;
            break;
        }
        this.FalseColor();
        if (i === this.arrRandom.length - 1) {
          clearInterval(this.myInterval);
        }
        i++;
      }, this.picked);
    },
    AllClick(number) {
      this.arrClick.push(number);
      this.FalseColor();
      if (
        this.arrRandom[this.arrClick.length - 1] ===
        this.arrClick[this.arrClick.length - 1]
      ) {
        console.log("true");
      } else {
        console.log(alert(false));
        this.disabledButton = true;
        this.disabledStart = false;
        this.arrRandom = [];
        this.round = 1;
      }
      if (this.arrRandom.length === this.arrClick.length) {
        this.round++;
        this.disabledButton = true;
        this.Start();
      }
    },
    FalseColor() {
      setTimeout(() => {
        this.randomBlue = false;
        this.randomYellow = false;
        this.randomGreen = false;
        this.randomRed = false;
      }, 200);
    },
  },
};
</script>

<style scoped>
.simon {
  display: flex;
  justify-content: center;
  align-content: center;
}
.simon__block {
  width: 300px;
  height: 300px;
  border-radius: 50% 50%;
  background-color: #f7f7f7;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.simon__button {
  border: none;
  opacity: 0.5;
}
.simon__start {
  padding: 10px 30px;
  border-radius: 10px;
  background-color: rgb(158, 158, 248);
  color: #000;
  font-size: 22px;
  border: none;
  outline: none;
}
.blue {
  background-color: blue;
  border-top-left-radius: 150px;
}
.yellow {
  background: yellow;
  border-top-right-radius: 150px;
}
.green {
  background-color: green;
  border-bottom-left-radius: 150px;
}
.red {
  background-color: red;
  border-bottom-right-radius: 150px;
}
.blue:hover {
  border-left: 2px solid #000;
  border-top: 2px solid #000;
}
.yellow:hover {
  border-right: 2px solid #000;
  border-top: 2px solid #000;
}
.green:hover {
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
}
.red:hover {
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
}
.random-color {
  opacity: 1;
}
</style>
