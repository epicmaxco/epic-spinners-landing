<template>
  <div class="hollow-dots-spinner">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
  export default {
    name: 'HollowDotsSpinner'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
  $dot-size: 15px;
  $animation-duration: 1000ms;

  .dot {
    width: $dot-size;
    height: $dot-size;
    border: ($dot-size / 5) solid #ff1d5e;
    border-radius: 50%;
    float: left;
    margin: 0 ($dot-size / 2);
    transform: scale(0);
    animation: fx $animation-duration ease infinite 0ms;

    &:nth-child(2) {
      animation: fx $animation-duration ease infinite 1000ms * 0.3;
    }
    &:nth-child(3) {
      animation: fx $animation-duration ease infinite 1000ms * 0.6;
    }
  }

  @keyframes fx {
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
