<template>
  <div class="rotating-squares-spinner">
    <div class="segment-holder">
      <div class="segment one"></div>
    </div>
    <div class="segment-holder">
      <div class="segment two"></div>
    </div>
    <div class="segment-holder">
      <div class="segment three"></div>
    </div>
    <div class="segment-holder">
      <div class="segment four"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RotatingSquaresSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1250
      },
      size: {
        type: Number,
        default: 50
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        squaresNum: 4
      }
    },

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          animationDuration: `${this.animationDuration}ms`
        }
      },

      squareStyle () {
        return {
          height: `${this.size * 0.25}px`,
          width: `${this.size * 0.25}px`,
          animationDuration: `${this.animationDuration}ms`,
          top: `${this.size * 0.37}px`,
          left: `${this.size * 0.37}px`,
          borderWidth: `${this.size * 0.04}px`,
          borderColor: this.color
        }
      },

      squaresStyles () {
        const squaresStyles = []

        for (let i = 1; i <= this.squaresNum; i++) {
          squaresStyles.push(Object.assign({
          }, this.squareStyle))
        }

        return squaresStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .rotating-squares-spinner {
    height: 60px;
    width: 60px;
    transform: rotate(-45deg);
    font-size: 0;
    line-height: 0;
    animation: rotating-squares-spinner-animation 5s infinite;
    padding: 10px;
    border: 1px solid #ff1d5e;
  }

  .segment-holder {
    position: relative;
    display: inline-block;
    width: 50%;
    height: 50%;
  }

  .segment {
    position: absolute;
    background: #ff1d5e;
  }

  .one {
    bottom: 0;
    height: 0;
    width: 100%;
    animation: rotating-squares-spinner-animation-slide-one 1s infinite;
  }

  .two {
    left: 0;
    height: 100%;
    width: 0;
    animation: slide-two 1s infinite;
    animation-delay: 0.25s;
  }

  .three {
    right: 0;
    height: 100%;
    width: 0;
    animation: slide-two 1s infinite;
    animation-delay: 0.75s;
  }

  .four {
    top: 0;
    height: 0;
    width: 100%;
    animation: rotating-squares-spinner-animation-slide-one 1s infinite;
    animation-delay: 0.5s;
  }

  @keyframes rotating-squares-spinner-animation-slide-one {
    0%    { height: 0;    opacity: 1; }
    12.5% { height: 100%; opacity: 1; }
    50%   { opacity: 1; }
    100%  { height: 100%; opacity: 0;}
  }

  @keyframes slide-two {
    0%    { width: 0;    opacity: 1; }
    12.5% { width: 100%; opacity: 1; }
    50%   { opacity: 1; }
    100%  { width: 100%; opacity: 0;}
  }

  @keyframes rotating-squares-spinner-animation {
    0%   { transform: rotate(-45deg); }
    20%  { transform: rotate(-45deg); }
    25%  { transform: rotate(-135deg); }
    45%  { transform: rotate(-135deg); }
    50%  { transform: rotate(-225deg); }
    70%  { transform: rotate(-225deg); }
    75%  { transform: rotate(-315deg); }
    95%  { transform: rotate(-315deg); }
    100% { transform: rotate(-405deg); }
  }
</style>
