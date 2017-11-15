<template>
  <div class="dots-voyage-spinner" :style="spinnerStyle">
    <div class="dot-container" :style="dotContainerStyle">
      <div class="dot" :style="dotStyle"></div>
      <div class="dot" :style="dotStyle"></div>
      <div class="dot" :style="dotStyle"></div>
    </div>
    <div class="dot-container" :style="dotContainerStyle">
      <div class="dot" :style="dotStyle"></div>
      <div class="dot" :style="dotStyle"></div>
      <div class="dot" :style="dotStyle"></div>
    </div>
    <div class="dot-container" :style="dotContainerStyle">
      <div class="dot" :style="dotStyle"></div>
      <div class="dot" :style="dotStyle"></div>
      <div class="dot" :style="dotStyle"></div>
    </div>
  </div>
</template>

<script>
  import utils from './utils'

  export default {
    name: 'dots-voyage-spinner',

    props: {
      animationDuration: {
        type: Number,
        default: 10000
      },
      size: {
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        animationBaseName: 'pixel-animation',
        spinnerStyle: {
          height: `${this.size}px`,
          width: `${this.size}px`,
          animationDuration: `${this.animationDuration}ms`
        },
        dotContainerStyle: {
          height: `${this.size}px`,
          width: `${this.size}px`
        },
        dotStyle: {
          height: `${this.size / 10}px`,
          width: `${this.size / 10}px`,
          background: this.color,
          animationDuration: `${this.animationDuration / 5}ms`
        }
      }
    },

    mounted () {

    },

    methods: {
      updateAnimation () {
        this.updateAnimationName()
        utils.appendKeyframes(this.spinnerStyle.animationName, this.generateKeyframes())
      },

      updateAnimationName () {
        this.$set(this.spinnerStyle, 'animationName', `${this.animationBaseName}-${Date.now()}`)
      },

      generateKeyframes () {
        return `0% {
          opacity: 0.5;
        }

        50% {
          opacity: 1;
          box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize * -1}px 0 0 0,
                       0 ${this.pixelSize * -1}px 0 0;
        }


        75% {
          box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                       ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize * -1}px 0 0 0,
                       0 ${this.pixelSize * -1}px 0 0;
        }

        100% {
          opacity: 0.5;
          transform: rotate(360deg);
        }`
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .dots-voyage-spinner {
    position: relative;
    transform-origin: center;
    animation: dots-voyage-spinner-anirotate-animation 10s linear infinite;
  }
  .dot-container {
    position: absolute;
    border-radius: 50%;
    &:nth-child(2) {
      transform: rotate(40deg);
      .dot {
        animation-delay: -0.5s;
      }
    }
    &:nth-child(3) {
      transform: rotate(80deg);
      .dot {
        animation-delay: -1s;
      }
    }
  }
  .dot {
    position: absolute;
    border-radius: 50%;
    transform: translate(0, 0);
    &:nth-child(1) {
      top: 0;
      left: calc(50% - 5px);
      animation: dots-voyage-spinner-ani1-animation 2s infinite;
    }
    &:nth-child(2) {
      bottom: calc(28% - 5px);
      left: calc(11% - 5px);
      animation: dots-voyage-spinner-ani2-animation 2s infinite;
    }
    &:nth-child(3) {
      bottom: calc(28% - 5px);
      right: calc(11% - 5px);
      animation: dots-voyage-spinner-ani3-animation 2s infinite;

    }
  }

  @keyframes dots-voyage-spinner-anirotate-animation {
    0% {
      transform: rotate(0deg);

    }
    100% {
      transform: rotate(-359deg);
    }
  }

  @keyframes dots-voyage-spinner-ani1-animation {
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(-40px, 67px);
    }
  }

  @keyframes dots-voyage-spinner-ani2-animation {
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(77px, 0);
    }
  }

  @keyframes dots-voyage-spinner-ani3-animation {
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(-39px, -67px);
    }
  }
</style>
