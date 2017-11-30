<template>
  <div class="spring-spinner" :style="spinnerStyle">
    <div class="spring-spinner-part top" :style="spinnerPartStyle">
      <div class="spring-spinner-rotator" :style="rotatorStyle"></div>
    </div>
    <div class="spring-spinner-part bottom" :style="spinnerPartStyle">
      <div class="spring-spinner-rotator" :style="rotatorStyle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpringSpinner',

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
          animationDuration: `${this.animationDuration}ms`
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .spring-spinner-part {
    overflow: hidden;

    &.bottom {
      transform: rotate(180deg) scale(-1, 1);
    }
  }

  .spring-spinner-rotator {
    width: 70px;
    height: 70px;
    border-style: solid;
    border-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation 3s ease-in-out infinite;
    transform: rotate(-200deg);
  }

  @keyframes spring-spinner-animation {
    0% { border-width: 10px; }
    25% { border-width: 3px; }
    50% {
      transform: rotate(115deg);
      border-width: 10px;
    }
    75% { border-width: 3px;}
    100% { border-width: 10px;}
  }
</style>
