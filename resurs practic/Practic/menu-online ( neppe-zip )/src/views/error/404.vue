<template>
  <div class="error">
    <div class="container">
      <div class="error__content">
        <h1>К сожелению мы не нашли контент который вы искали</h1>
        <p>Попробуйте отсканировать заново</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .error__content {
    width: 90%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
</style>
