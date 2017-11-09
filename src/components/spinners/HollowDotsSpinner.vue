<template>
  <div class="hollow-dots-spinner">
    <div class="dot" :style="dotStyle"></div>
    <div class="dot" :style="dotStyle"></div>
    <div class="dot" :style="dotStyle"></div>
  </div>
</template>

<script>
  export default {
    name: 'HollowDotsSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
      },
      dotSize: {
        type: Number,
        default: 15
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        dotStyle: {
          animationDuration: `${this.animationDuration}ms`,
          width: `${this.dotSize}px`,
          height: `${this.dotSize}px`,
          borderSize: `${this.dotSize / 5}px`,
          borderColor: this.color
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  $dot-size: 15px;
  $animation-duration: 1000ms;

  .dot {
    width: $dot-size;
    height: $dot-size;
    border: ($dot-size / 5) solid #fff;
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
