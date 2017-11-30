<template>
  <div class="looping-rhombuses-spinner">
    <div class="rhombus"></div>
    <div class="rhombus"></div>
    <div class="rhombus"></div>
  </div>
</template>

<script>
  export default {
    name: 'LoopingRhombusesSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1200
      },
      circleSize: {
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
      circleStyle () {
        return {
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`,
          height: `${this.circleSize}px`,
          width: `${this.circleSize}px`,
          marginLeft: `${this.circleSize * 1.125}px`
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

  $accent: #fff;
  $duration: 2500ms;
  $timing: linear;

  .looping-rhombuses-spinner {
    position: relative;
    height: 15px; width: 60px;
    .rhombus {
      position: absolute;
      left: 60px;
      margin: 0 auto;
      width: 15px;
      height: 15px;
      border-radius: 2px;
      background: $accent;
      transform: translateY(0) rotate(45deg) scale(0);
      animation: looping-rhombuses-spinner-animation $duration $timing infinite;
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation-delay: -($duration / 1.5) * $i;
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
