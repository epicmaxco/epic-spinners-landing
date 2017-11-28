<template>
  <div class="fulfilling-bouncing-circle-spinner">
    <div class="circle"></div>
    <div class="orbit"></div>
  </div>
</template>

<script>
  export default {
    name: 'FulfillingBouncingCircleSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
      },
      size: {
        type: Number,
        default: 50
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

      orbitStyle () {
        return {
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .fulfilling-bouncing-circle-spinner {
    width: 60px;
    height: 60px;
    position: relative;
    animation: fulfilling-bouncing-circle-spinner-animation infinite 4000ms ease;
  }

  .orbit {
    position: absolute;
    height: 60px;
    width: 60px;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #ff1d5e;
    animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite 4000ms ease;
  }

  .circle {
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%;
    position: relative;
    border: 6px solid transparent;
    border-top-color: #ff1d5e;
    animation: fulfilling-bouncing-circle-spinner-circle-animation infinite 4000ms ease;
    transform: rotate(0deg) scale(1);
  }

  @keyframes fulfilling-bouncing-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
    0% {
      transform: scale(1);
    }
    50% {
      border-color: #ff1d5e;
      transform: scale(1);
    }
    62.5% {
      transform: scale(0.8);
    }
    75% {
      transform: scale(1);
    }
    87.5% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes fulfilling-bouncing-circle-spinner-circle-animation {
    0% {
      transform: scale(1);
      border-color: transparent;
      border-top-color: #ff1d5e;
    }
    16.7% {
      border-color: transparent;
      border-top-color: #ff1d5e;
      border-right-color: #ff1d5e;
    }
    33.4% {
      border-color: transparent;
      border-top-color: #ff1d5e;
      border-right-color: #ff1d5e;
      border-bottom-color: #ff1d5e;
    }
    50% {
      border-color: #ff1d5e;
      transform: scale(1);
    }
    62.5% {
      border-color: #ff1d5e;
      transform: scale(1.4);
    }
    75% {
      border-color: #ff1d5e;
      transform: scale(1);
      opacity: 1;
    }
    87.5% {
      border-color: #ff1d5e;
      transform: scale(1.4);
    }
    100% {
      border-color: transparent;
      border-top-color: #ff1d5e;
      transform: scale(1);
    }
  }
</style>
