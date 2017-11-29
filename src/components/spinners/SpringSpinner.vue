<template>
  <div class="spring-spinner">
    <div class="spring-spinner-part top">
      <div class="spring-spinner-rotator"></div>
    </div>
    <div class="spring-spinner-part bottom">
      <div class="spring-spinner-rotator"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpringSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 6000
      },
      squareSize: {
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
        squaresNum: 9
      }
    },

    computed: {
      initialTopPosition () {
        return -this.squareSize * 2 / 3
      },

      spinnerStyle () {
        return {
          top: `${-this.initialTopPosition}px`
        }
      },

      squareStyle () {
        return {
          height: `${this.squareSize}px`,
          width: `${this.squareSize}px`,
          top: `${this.initialTopPosition}px`,
          marginRight: `${this.squareSize / 3}px`,
          marginTop: `${this.squareSize / 3}px`,
          animationDuration: `${this.animationDuration}ms`,
          background: this.color
        }
      },

      squaresStyles () {
        const squaresStyles = []
        const delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2]
        const delayModifier = this.animationDuration * 0.05

        for (let i = 0; i < this.squaresNum; i++) {
          squaresStyles.push(Object.assign({
            animationDelay: `${delayModifier * delaysMultipliers[i]}ms`
          }, this.squareStyle))
        }

        return squaresStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .spring-spinner-part {
    width: 70px;
    height: 35px;
    overflow: hidden;

    &.bottom {
      transform: rotate(180deg) scale(-1, 1);
    }
  }

  .spring-spinner-rotator {
    width: 70px;
    height: 70px;
    border-style: solid;
    border-top-color: #FFF;
    border-right-color: #FFF;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-width: 10px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation 3s ease-in-out infinite;
    transform: rotate(-200deg);
  }

  @keyframes spring-spinner-animation {
    0% { border-width: 10px; }
    25% { border-width: 3px; }
    50% {
      transform: rotate(115deg);
      border-width: 10px;
    }
    75% { border-width: 3px;}
    100% { border-width: 10px;}
  }
</style>
