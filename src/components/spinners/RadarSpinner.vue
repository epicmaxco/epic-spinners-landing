<template>
  <div class="radar-spinner">
    <div class="object four"></div>
    <div class="object three"></div>
    <div class="object two"></div>
    <div class="object one"></div>
  </div>
</template>

<script>
  export default {
    name: 'RadarSpinner',

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
        rhombusesNum: 8
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
          animationDuration: `${this.animationDuration}ms`,
          top: `${this.size / 2.3077}px`,
          left: `${this.size / 2.3077}px`,
          backgroundColor: this.color
        }
      },

      rhombusesStyles () {
        const rhombusesStyles = []
        const delayModifier = this.animationDuration * 0.05

        for (let i = 1; i <= this.rhombusesNum; i++) {
          rhombusesStyles.push(Object.assign({
            animationDelay: `${delayModifier * (i + 1)}ms`
          }, this.rhombusStyle))
        }

        return rhombusesStyles
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
    }

  }
</script>

<style  lang="scss" scoped>
  .radar-spinner {
    height: 110px;
    width: 110px;
    position: relative;
  }

  .object {
    border-radius: 50%;
    position: absolute;
    border-left: 5px solid #FFF;
    border-right: 5px solid #FFF;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    animation: animate 2s infinite;

    &.four {
      left: 0;
      top: 0;
      width: 110px;
      height: 110px;
      animation-delay: 0.3s;
    }

    &.three {
      left: 10px;
      top: 10px;
      width: 90px;
      height: 90px;
      animation-delay: 0.3s;
    }

    &.two {
      left: 20px;
      top: 20px;
      width: 70px;
      height: 70px;
      animation-delay: 0.3s;
    }

    &.one {
      left: 30px;
      top: 30px;
      width: 50px;
      height: 50px;
    }
  }

  @keyframes animate {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
