<template>
  <form class="page__sidebar sidebar">
    <div class="sidebar__filter">
      <ul type="checkbox" class="tariff sidebar__tariff">
        <li class="sidebar tariff__text">Опции тарифа</li>
        <li v-for = "todo in Todo" :key = "todo">
          <label class="tariff__check">
            <input class="sidebar sidebar__tariff_checkbox" type="checkbox" />
            <span class="chek_box"></span>
            {{ todo }}
          </label>
        </li>
      </ul>
    </div>
    <div class="sidebar__filter">
      <ul type="checkbox" class="tariff sidebar__tariff">
        <li class="sidebar tariff__text">Авиакомпании</li>
        <li v-for = "todos in Todos" :key = "todos">
          <label class="tariff__check">
            <input class="sidebar sidebar__tariff_checkbox" type="checkbox" />
            <span class="chek_box"></span>
            {{ todos }}
          </label>
        </li>
      </ul>
    </div>
    <button type="reset" class="sidebar__button">
      Сбросить все фильтры
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      Todo: ["Только прямые", "Только с багажом", "Только возвратные"],
      Todos: [
        "Все",
        "Air Astana",
        "Bek Air",
        "Fly Arystan",
        "SCAT Airlines",
        "Lufthansa",
        "Turkish Airlines",
        "China Southern Air",
      ],
    };
  },
};
</script>

<style>
.page__sidebar {
  width: 21%;
  height: 500px;
}
.page__section {
  width: 77%;
}
.sidebar__filter {
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 12px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 30px;
  font-size: 12px;
  color: #202123;
}
.tariff__check {
  padding-left: 1.5em;
}
.sidebar__tariff_checkbox {
  width: 10%;
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.chek_box {
  position: absolute;
  margin-left: -1.5em;
  margin-top: 0.7em;
  width: 1em;
  height: 1em;
  background-image: url("../assets/img/rectangle.png");
}
.sidebar__tariff_checkbox:checked + .chek_box {
  background-image: url("../assets/img/checbox_active.png");
}
.tariff__text {
  font-weight: bold;
}
.sidebar__button {
  border: transparent;
  background-color: #d7d7d7;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #7284e4;
}
</style>
