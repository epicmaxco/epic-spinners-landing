<template>
  <div class="looping-rhombuses-spinner" :style="spinnerStyle">
    <div class="rhombus" :style="rhombusStyle"></div>
    <div class="rhombus" :style="rhombusStyle"></div>
    <div class="rhombus" :style="rhombusStyle"></div>
  </div>
</template>

<script>
  export default {
    name: 'LoopingRhombusesSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2500
      },
      rhombusSize: {
        type: Number,
        default: 15
      },
      color: {
        type: String,
        default: '#fff'
      },
      circlesNum: {
        type: Number,
        default: 3
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.rhombusSize}px`,
          width: `${this.rhombusSize * 4}px`
        }
      },
      rhombusStyle () {
        return {
          height: `${this.rhombusSize}px`,
          width: `${this.rhombusSize}px`,
          backgroundColor: this.color,
          animationDuration: `${this.animationDuration}ms`,
          left: `${this.rhombusSize * 4}px`
        }
      },

      circlesStyles () {
        const circlesStyles = []
        const delay = 150

        for (let i = 1; i <= this.circlesNum; i++) {
          const style = Object.assign({
            animationDelay: `${i * delay}ms`
          }, this.circleStyle)

          circlesStyles.push(style)
        }

        return circlesStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .looping-rhombuses-spinner {
    position: relative;
    .rhombus {
      position: absolute;
      margin: 0 auto;
      border-radius: 2px;
      transform: translateY(0) rotate(45deg) scale(0);
      animation: looping-rhombuses-spinner-animation 2500ms linear infinite;
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation-delay: -(2500ms / 1.5) * $i;
        }
      }
    }
  }
  @keyframes looping-rhombuses-spinner-animation {
    50% {
      transform: translateX(-233%) rotate(45deg) scale(1);
    }
    100% {
      transform: translateX(-466%) rotate(45deg) scale(0);
    }
  }


</style>
