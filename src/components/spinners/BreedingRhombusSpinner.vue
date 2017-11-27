<template>
  <div class="breeding-rhombus-spinner">
    <div class="rhombus one"></div>
    <div class="rhombus two"></div>
    <div class="rhombus three"></div>
    <div class="rhombus four"></div>
    <div class="rhombus five"></div>
    <div class="rhombus six"></div>
    <div class="rhombus seven"></div>
    <div class="rhombus eight"></div>
    <div class="rhombus big"></div>
  </div>
</template>

<script>
  import utils from './utils'

  export default {
    name: 'BreedingRhombusSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1500
      },
      pixelSize: {
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
        animationBaseName: 'pixel-spinner-animation',
        currentAnimationName: ''
      }
    },

    computed: {
      spinnerStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.currentAnimationName,
          width: `${this.pixelSize}px`,
          height: `${this.pixelSize}px`,
          backgroundColor: this.color,
          color: this.color,
          boxShadow: `
                        ${this.pixelSize * 1.5}px ${this.pixelSize * 1.5}px 0 0,
                        ${this.pixelSize * -1.5}px ${this.pixelSize * -1.5}px 0 0,
                        ${this.pixelSize * 1.5}px ${this.pixelSize * -1.5}px 0 0,
                        ${this.pixelSize * -1.5}px ${this.pixelSize * 1.5}px 0 0,
                        0 ${this.pixelSize * 1.5}px 0 0,
                        ${this.pixelSize * 1.5}px 0 0 0,
                        ${this.pixelSize * -1.5}px 0 0 0,
                        0 ${this.pixelSize * -1.5}px 0 0
                      `
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
    height: 150px;
    width: 150px;
    transform: rotate(45deg);
  }

  .rhombus {
    width: 20px;
    height: 20px;
    border-radius: 0;
    background-color: #FFF;
    position: absolute;
    left: 65px;
    top: 65px;

    &:nth-child(2n+0) {
      margin-right: 0;
    }

    &.one {
      animation: breeding-rhombus-spinner-child-1-animation 2s infinite;
      animation-delay: 0.2s;
    }

    &.two {
      animation: breeding-rhombus-spinner-child-2-animation 2s infinite;
      animation-delay: 0.3s;
    }

    &.three {
      animation: breeding-rhombus-spinner-child-3-animation 2s infinite;
      animation-delay: 0.4s;
    }

    &.four {
      animation: breeding-rhombus-spinner-child-4-animation 2s infinite;
      animation-delay: 0.5s;
    }

    &.five {
      animation: breeding-rhombus-spinner-child-5-animation 2s infinite;
      animation-delay: 0.6s;
    }

    &.six {
      animation: breeding-rhombus-spinner-child-6-animation 2s infinite;
      animation-delay: 0.7s;
    }

    &.seven {
      animation: breeding-rhombus-spinner-child-7-animation 2s infinite;
      animation-delay: 0.8s;
    }

    &.eight {
      animation: breeding-rhombus-spinner-child-8-animation 2s infinite;
      animation-delay: 0.9s;
    }

    &.big {
      position: absolute;
      width: 50px;
      height: 50px;
      left: 50px;
      top: 50px;
      animation: breeding-rhombus-spinner-child-big-animation 2s infinite;
      animation-delay: 0.5s;
    }
  }

  @keyframes breeding-rhombus-spinner-child-1-animation {
    50% {
      transform: translate(-65px,-65px);
    }
  }

  @keyframes breeding-rhombus-spinner-child-2-animation {
    50% {
      transform: translate(0,-65px);
    }
  }

  @keyframes breeding-rhombus-spinner-child-3-animation {
    50% {
      transform: translate(65px,-65px);
    }
  }

  @keyframes breeding-rhombus-spinner-child-4-animation {
    50% {
      transform: translate(65px,0);
    }
  }

  @keyframes breeding-rhombus-spinner-child-5-animation {
    50% {
      transform: translate(65px,65px);
    }
  }

  @keyframes breeding-rhombus-spinner-child-6-animation {
    50% {
      transform: translate(0,65px);
    }
  }

  @keyframes breeding-rhombus-spinner-child-7-animation {
    50% {
      transform: translate(-65px,65px);
    }
  }

  @keyframes breeding-rhombus-spinner-child-8-animation {
    50% {
      transform: translate(-65px,0);
    }
  }

  @keyframes breeding-rhombus-spinner-child-big-animation {
    50% {
      transform: scale(0.5);
    }
  }
</style>
