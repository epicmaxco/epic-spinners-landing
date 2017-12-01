<template>
  <div class="half-circle-spinner">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
  </div>
</template>

<script>
  export default {
    name: 'HalfCircleSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 3000
      },
      size: {
        type: Number,
        default: 70
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      spinnerPartStyle () {
        return {
          height: `${this.size / 2}px`,
          width: `${this.size}px`
        }
      },

      rotatorStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          borderRightColor: this.color,
          borderTopColor: this.color,
          borderWidth: `${this.size / 7}px`,
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.currentAnimationName
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .half-circle-spinner {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;

    .circle {
      content: "";
      position: absolute;
      top: -10px;
      left: -10px;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 10px solid transparent;

      &.circle-1 {
        border-top-color: #fff;
        animation: half-circle-spinner-animation 1s infinite;
      }

      &.circle-2 {
        animation: half-circle-spinner-animation 1s infinite alternate;
        border-bottom-color: #fff;
      }
    }
  }

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }


</style>
