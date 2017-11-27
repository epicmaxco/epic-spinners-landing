<template>
  <div class="breeding-rhombus-spinner" :style="spinnerStyle">
    <div class="rhombus one" :style="rhombusStyle"></div>
    <div class="rhombus two" :style="rhombusStyle"></div>
    <div class="rhombus three" :style="rhombusStyle"></div>
    <div class="rhombus four" :style="rhombusStyle"></div>
    <div class="rhombus five" :style="rhombusStyle"></div>
    <div class="rhombus six" :style="rhombusStyle"></div>
    <div class="rhombus seven" :style="rhombusStyle"></div>
    <div class="rhombus eight" :style="rhombusStyle"></div>
    <div class="rhombus big" :style="bigRhombusStyle"></div>
  </div>
</template>

<script>
  import utils from './utils'

  export default {
    name: 'BreedingRhombusSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2000
      },
      size: {
        type: Number,
        default: 150
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        animationBaseName: 'breeding-rhombus-spinner-animation-child',
        currentAnimationName: ''
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },
      rhombusStyle () {
        return {
          height: `${this.size / 7.5}px`,
          width: `${this.size / 7.5}px`,
          animationDuration: `${this.animationDuration}`,
          top: `${this.size / 2.3077}px`,
          left: `${this.size / 2.3077}px`,
          backgroundColor: this.color
        }
      },
      bigRhombusStyle () {
        return {
          height: `${this.size / 3}px`,
          width: `${this.size / 3}px`,
          animationDuration: `${this.animationDuration}`,
          top: `${this.size / 3}px`,
          left: `${this.size / 3}px`,
          backgroundColor: this.color
        }
      }
    },

    watch: {
      '$props': {
        handler () {
          this.updateAnimation()
        },
        deep: true
      }
    },

    mounted () {
      this.updateAnimation()
    },

    methods: {
      updateAnimation () {
        this.updateAnimationName()
        utils.appendKeyframes(this.currentAnimationName, this.generateKeyframes())
      },

      updateAnimationName () {
        this.currentAnimationName = `${this.animationBaseName}-${Date.now()}`
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
  .breeding-rhombus-spinner {
    position: relative;
    transform: rotate(45deg);
  }

  .rhombus {
    position: absolute;

    &:nth-child(2n+0) {
      margin-right: 0;
    }

    &.one {
      animation: breeding-rhombus-spinner-animation-child-1 2s infinite;
      animation-delay: 0.2s;
    }

    &.two {
      animation: breeding-rhombus-spinner-animation-child-2 2s infinite;
      animation-delay: 0.3s;
    }

    &.three {
      animation: breeding-rhombus-spinner-animation-child-3 2s infinite;
      animation-delay: 0.4s;
    }

    &.four {
      animation: breeding-rhombus-spinner-animation-child-4 2s infinite;
      animation-delay: 0.5s;
    }

    &.five {
      animation: breeding-rhombus-spinner-animation-child-5 2s infinite;
      animation-delay: 0.6s;
    }

    &.six {
      animation: breeding-rhombus-spinner-animation-child-6 2s infinite;
      animation-delay: 0.7s;
    }

    &.seven {
      animation: breeding-rhombus-spinner-animation-child-7 2s infinite;
      animation-delay: 0.8s;
    }

    &.eight {
      animation: breeding-rhombus-spinner-animation-child-8 2s infinite;
      animation-delay: 0.9s;
    }

    &.big {
      animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
      animation-delay: 0.5s;
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
      transform: translate(-65px,-65px);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
      transform: translate(0,-65px);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
      transform: translate(65px,-65px);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
      transform: translate(65px,0);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
      transform: translate(65px,65px);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
      transform: translate(0,65px);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
      transform: translate(-65px,65px);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
      transform: translate(-65px,0);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-big {
    50% {
      transform: scale(0.5);
    }
  }
</style>
