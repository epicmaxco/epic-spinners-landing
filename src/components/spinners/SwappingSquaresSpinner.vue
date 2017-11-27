<template>
  <div class="swapping-squares-spinner">
      <div class="square one"></div>
      <div class="square two"></div>
      <div class="square three"></div>
      <div class="square four"></div>
  </div>
</template>

<script>
  export default {
    name: 'SwappingSquaresSpinner',

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
  .swapping-squares-spinner {
    position: relative;
    height: 100px;
    width: 100px;
  }

  .square {
    width: 25px;
    height: 25px;
    background-color: rgba(255,255,255,0);
    margin-right: auto;
    margin-left: auto;
    border: 4px solid rgba(239,74,74,1);
    left: 37px;
    top: 37px;
    position: absolute;

    &.one {
      animation: swapping-squares-animation-child-1 1s infinite;
      animation-delay: 0.5s;
    }

    &.two {
      animation: swapping-squares-animation-child-2 1s infinite;
    }

    &.three {
      animation: swapping-squares-animation-child-3 1s infinite;
      animation-delay: 0.5s;
    }

    &.four {
      animation: swapping-squares-animation-child-4 1s infinite;
    }
  }

  @keyframes swapping-squares-animation-child-1 {
    50% {
      transform: translate(150%,150%) scale(2,2);
    }
  }

  @keyframes swapping-squares-animation-child-2 {
    50% {
      transform: translate(-150%,150%) scale(2,2);
    }
  }

  @keyframes swapping-squares-animation-child-3 {
    50% {
      transform: translate(-150%,-150%) scale(2,2);
    }
  }

  @keyframes swapping-squares-animation-child-4 {
    50% {
      transform: translate(150%,-150%) scale(2,2);
    }
  }
</style>
