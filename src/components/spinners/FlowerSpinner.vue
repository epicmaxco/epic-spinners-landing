<template>
  <div class="flower-spinner" :style="spinnerStyle">
    <div class="smaller-dot" :style="smallerDotStyle"></div>
    <div class="bigger-dot" :style="biggerDotStyle"></div>
  </div>
</template>

<script>
  import utils from './utils'

  export default {
    name: 'FlowerSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 25000
      },
      dotSize: {
        type: Number,
        default: 10
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        smallerDotAnimationBaseName: 'flower-spinner-smaller-dot-animation',
        biggerDotAnimationBaseName: 'flower-spinner-bigger-dot-animation',

        biggerDotStyle: {
          width: `${this.dotSize}px`,
          height: `${this.dotSize}px`,
          background: this.color
        },

        smallerDotStyle: {
          width: `${this.dotSize * 0.9}px`,
          height: `${this.dotSize * 0.9}px`,
          background: this.color
        },

        spinnerStyle: {
          width: `${this.dotSize}px`,
          height: `${this.dotSize}px`
        }
      }
    },

    mounted () {
      this.updateAnimation()
    },

    methods: {
      updateAnimation () {
        this.updateAnimationName()
        utils.appendKeyframes(this.smallerDotStyle.animationName, this.generateSmallerDotKeyframes())
        utils.appendKeyframes(this.biggerDotStyle.animationName, this.generateBiggerDotKeyframes())
      },

      updateAnimationName () {
        this.$set(this.smallerDotStyle, 'animationName', `${this.smallerDotAnimationBaseName}-${Date.now()}`)
        this.$set(this.biggerDotStyle, 'animationName', `${this.biggerDotAnimationBaseName}-${Date.now()}`)
      },

      generateSmallerDotKeyframes () {
        return `0%, 100% {
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }
                  50% {
                    transform: rotate(180deg);
                  }
                  25%, 75% {
                    box-shadow: ${this.dotSize * 1.4}px 0 0 ${this.color},
                                -${this.dotSize * 1.4}px 0 0 ${this.color},
                                0 ${this.dotSize * 1.4}px 0 ${this.color},
                                0 -${this.dotSize * 1.4}px 0 ${this.color},
                                ${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                                ${this.dotSize}px ${this.dotSize}px 0 ${this.color},
                                -${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                                -${this.dotSize}px ${this.dotSize}px 0 ${this.color};

                  }
                  100% {
                    transform: rotate(360deg);
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }`
      },

      generateBiggerDotKeyframes () {
        return `0%, 100% {
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }
                  50% {
                    transform: rotate(180deg);
                  }
                  25%, 75% {
                    box-shadow: ${this.dotSize * 2.6}px 0 0 ${this.color},
                                -${this.dotSize * 2.6}px 0 0 ${this.color},
                                0 ${this.dotSize * 2.6}px 0 ${this.color},
                                0 -${this.dotSize * 2.6}px 0 ${this.color},
                                ${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                                ${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color},
                                -${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                                -${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color};

                  }
                  100% {
                    transform: rotate(360deg);
                    box-shadow: 0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color},
                                0 0 0 ${this.color};
                  }`
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .flower-spinner{
    position: relative;
    .smaller-dot {
      position: absolute;
      border-radius: 50%;
      left: 1px;
      top: 1px;
      animation: flower-spinner-smaller-dot-animation 2.5s 0s infinite both;

    }
    .bigger-dot {
      position: absolute;
      border-radius: 50%;
      animation: flower-spinner-bigger-dot-animation 2.5s 0s infinite both;

    }
  }
</style>
