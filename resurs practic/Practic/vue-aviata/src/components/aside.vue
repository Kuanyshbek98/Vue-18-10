<template>
  <div class="aside">
    <div class="container">
      <div class="aside__wrapper">
        <div class="aside__price price">
          <img class="price_img" src="../assets/img/vector.png" alt="" />
          Отслеживать изменения цен
        </div>
        <div class="aside__price price">
          <img class="price_img" src="../assets/img/shape.png" alt="" />
          Посмотреть цены на соседние даты (+- 3дня)
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.aside__wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.aside__price {
  display: flex;
  align-items: center;
  background: #fff0cd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin-left: 2%;
  padding: 5px 10px 5px 5px;
}
.price_img {
  padding: 5px;
}
</style>
