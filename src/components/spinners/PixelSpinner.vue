<template>
  <div class="pixel-spinner" :style="spinnerStyle"></div>
</template>

<script>
  import utils from './utils'

  export default {
    name: 'PixelSpinner',

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
        spinnerStyle: {
          animationDuration: `${this.animationDuration}ms`,
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

    mounted () {
      this.updateAnimation()
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
  .pixel-spinner {
    width: 10px;
    height: 10px;
    box-shadow: 15px 15px  0 0,
    -15px -15px  0 0,
    15px -15px  0 0,
    -15px 15px  0 0,
    0 15px  0 0,
    15px 0  0 0,
    -15px 0  0 0,
    0 -15px 0 0;
    animation: pixel-spinner-animation 1500ms linear infinite;
  }
</style>
