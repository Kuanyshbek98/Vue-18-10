<template>
  <div class="characteristics">
    <h2 class="characteristics__title">Характеристики</h2>
    <div class="characteristics__info">
      <input type="checkbox" class="read-more-state" id="post-1" />
      <div class="read-more-target-show" style="padding: 0 20px;">
        <ul class="inner">
          <li v-for="(item, index) in infoName" :key="index">
            <a href="#">{{ infoName[index] }}</a>
            <span> {{ infoValue[index] }}</span>
          </li>
        </ul>
      </div>
      <div class="read-more-target-hide" style="padding: 0 20px;">
        <ul class="inner">
          <li v-for="(item, index) in info.characteristic_name" :key="index">
            <a href="#">
              {{ info.characteristic_name[index] }}
            </a>
            <span> {{ info.characteristic_value[index] }}</span>
          </li>
        </ul>
      </div>
      <div class="characteristics__shadow"></div>
      <label for="post-1" class="read-more-trigger"></label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [],
      infoName: [],
      infoValue: [],
    };
  },
  async created() {
    await this.$api.get("/shop/show?id=1").then((response) => {
      this.info = response.data.data;
      this.infoName = response.data.data.characteristic_name.splice(0, 2);
      this.infoValue = response.data.data.characteristic_value.splice(0, 2);
    });
  },
};
</script>

<style scoped>
.inner {
  overflow-x: hidden;
}
li:not(.nested):before {
  float: left;
  width: 0;
  white-space: nowrap;
  content: ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . ";
}
li a:first-child {
  padding-right: 0.33em;
  background: white;
}
a + span {
  float: right;
  padding-left: 0.33em;
  background: white;
}
/* ------------------- */
.characteristics {
  padding: 16px 0px 8px 0px;
  background: #ffffff;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  box-sizing: border-box;
  border-radius: 12px;
  font-size: 16px;
  line-height: 20px;
}
.characteristics__title {
  padding: 0px 20px 0px 20px;
  font-size: 16px;
}
.characteristics__info {
  display: flex;
  flex-direction: column;
  font-family: Jost;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.16px;
}
.read-more-trigger {
  padding-top: 8px;
  cursor: pointer;
  color: #0032f8;
  border-top: 1px solid #f5f5f5;
  text-align: center;
}
.characteristics__shadow {
  box-shadow: 0px -15px 30px 20px rgb(255 255 255);
  padding-top: 8px;
  border-bottom: 0.5px solid #cbd5e0;
}
/* ---------------------- */
.read-more-state,
.read-more-target-hide {
  display: none;
}
.read-more-target {
  transition: 0.25s ease;
}
.read-more-state:checked ~ .read-more-target-hide {
  display: block;
}
.read-more-state ~ .read-more-trigger:before {
  content: "Больше характеристик";
}
.read-more-state:checked ~ .read-more-trigger:before {
  content: "Свернут характеристик";
}
.read-more-state:checked ~ .characteristics__shadow,
.read-more-target-show {
  box-shadow: none;
}
/* ------------------------ */
.hr-dotted {
  width: 60px;
  margin: 12px 0 0 0;
  padding: 0;
  height: 0;
  border: none;
  border-top: 2px dotted #ddd;
}

@media (max-width: 768px) {
  .characteristics {
    padding: 0px;
    background: none;
    border: none;
  }
  .read-more-trigger {
    display: none;
  }
  .read-more-target-show {
    box-shadow: none;
  }
  .read-more-target-hide {
    display: block;
  }
  .characteristics__shadow {
    display: none;
  }

  li a:first-child {
    background: #f7fafc;
  }
  a + span {
    background: #f7fafc;
  }
}
</style>
