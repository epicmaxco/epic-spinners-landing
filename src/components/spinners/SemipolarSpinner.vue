<template>
  <div class="semipolar-spinner" :style="spinnerStyle">
    <div class="ring" v-for="rs in ringsStyles" :style="rs"></div>
  </div>
</template>

<script>
  export default {
    name: 'SemipolarSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2000
      },
      size: {
        type: Number,
        default: 100
      },
      ringWidth: {
        type: Number,
        default: 5
      },
      color: {
        type: String,
        default: '#fff'
      },
      ringsNum: {
        type: Number,
        default: 4
      }
    },

    data () {
      return {
        spinnerStyle: {
          height: `${this.size}px`,
          width: `${this.size}px`
        },
        ringStyle: {
          animationDuration: `${this.animationDuration}ms`,
          borderWidth: `${this.ringWidth}px`,
          borderTopColor: this.color,
          borderLeftColor: this.color
        }
      }
    },

    computed: {
      ringsStyles () {
        const ringsStyles = []
        const delayModifier = 0.1
        const positionIncrement = this.ringWidth * 2
        const sizeDecrement = this.size * 0.2

        for (let i = 0; i < this.ringsNum; i++) {
          const computedSize = `${this.size - sizeDecrement * i}px`
          const computedPosition = `${positionIncrement * i}px`
          const style = Object.assign({
            animationDelay: `${this.animationDuration * delayModifier * i}ms`,
            height: computedSize,
            width: computedSize,
            left: computedPosition,
            top: computedPosition
          }, this.ringStyle)
          ringsStyles.push(style)
        }

        return ringsStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .semipolar-spinner {
    position: relative;
  }

  .ring {
    border-radius: 50%;
    position: absolute;
    border-top: 5px solid #FFF;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #FFF;
    border-right: 5px solid transparent;
    animation: semipolar-spinner-animation 2s infinite;
  }

  @keyframes semipolar-spinner-animation {
    50% {
      transform: rotate(360deg) scale(0.8);
    }
  }
</style>
