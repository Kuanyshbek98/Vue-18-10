<template>
  <div class="check">
    <div class="check__block">
      <div class="check__btn btn-choice">
        <button
          class="btn-choice"
          :disabled="!isDelivery"
          :class="{ btnRev: !isDelivery }"
          @click="isDelivery = false"
        >
          Заберу с собой
        </button>
        <button
          class="btn-choice"
          :disabled="isDelivery"
          :class="{ btnRev: isDelivery }"
          @click="isDelivery = true"
        >
          Доставка до дома
        </button>
      </div>
      <div class="check__btn btn-choice">
        <button
          class="btn-choice"
          :disabled="!isPayment"
          :class="{ btnRev: !isPayment }"
          @click="isPayment = false"
        >
          Оплата Каспи
        </button>
        <button
          class="btn-choice"
          :disabled="isPayment"
          :class="{ btnRev: isPayment }"
          @click="isPayment = true"
        >
          Наличкой
        </button>
      </div>
    </div>
    <div class="check__sum">
      <div class="check__text">
        <span class="check__span">Доставка:</span><strong>3 000 ₸</strong>
      </div>
      <div class="check__text">
        <span class="check__span">Заказ:</span><strong>2 840 500 ₸</strong>
      </div>
      <div class="check__text">
        <span class="check__span">Сумма заказа:</span>
        <strong class="check__all">2 843 500 ₸</strong>
      </div>
    </div>
    <Policy />
  </div>
</template>

<script>
import Policy from "@/components/Policy";
export default {
  data() {
    return {
      isDelivery: true,
      isPayment: true,
    };
  },
  components: {
    Policy,
  },
};
</script>

<style scoped>
.check {
  margin: 16px 4px;
  /* background-color: #ffffff; */
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}
.check__block {
  margin: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.check__btn {
  width: auto;
  margin: 16px 16px 4px 16px;
  padding: 5px 4px;
  display: flex;
  justify-content: center;
  background-color: #edf2f7;
  border-radius: 12px;
  text-align: center;
}
.btn-choice {
  background-color: #edf2f7;
  padding: 8px 12px;
  border-radius: 12px;
  color: #718096;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}
.btnRev {
  background-color: #ffffff;
  color: #1a202c;
}
.check__sum {
  color: #4a5568;
  margin-top: 20px;
}
.check__text {
  display: flex;
  justify-content: space-between;
  margin: 16px;
}
.check__all {
  font-size: 20px;
  line-height: 24px;
}
</style>
