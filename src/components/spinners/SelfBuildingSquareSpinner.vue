<template>
  <div class="self-building-square-spinner" :style="spinnerStyle">
    <div class="square" :style="squareStyle"></div>
    <div class="square" :style="squareStyle"></div>
    <div class="square last" :style="squareStyle"></div>
    <div class="square clear" :style="squareStyle"></div>
    <div class="square" :style="squareStyle"></div>
    <div class="square last" :style="squareStyle"></div>
    <div class="square clear" :style="squareStyle"></div>
    <div class="square " :style="squareStyle"></div>
    <div class="square last" :style="squareStyle"></div>
  </div>
</template>

<script>
  export default {
    name: 'SelfBuildingSquareSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 6000
      },
      squareSize: {
        type: Number,
        default: 15
      },
      color: {
        type: String,
        default: '#fff'
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
      }
    }
  }
</script>

<style  lang="scss" scoped>
  $delayenter: 0.3s;

  @mixin transition($value) {
    -webkit-transition: $value ;
    -moz-transition: $value ;
    transition: $value ;
  }

  @mixin delay( $delay ) {
    -webkit-animation-delay: $delay;
    -moz-animation-delay: $delay;
    animation-delay: $delay;
  }

  @keyframes self-building-square-spinner {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      top: 0;
    }
    50.9% {
      opacity: 1;
      top: 0;
    }
    55.9% {
      opacity: 0;
      top: inherit;
    }
  }

  .square{
    background: white;
    float: left;
    position:relative;
    opacity: 0;
    -webkit-animation: enter 6s infinite;
    animation: enter 6s infinite;
  }

  .enter{
    top: 0px;
    opacity: 1;
  }
  .square:nth-child(1){
    @include delay(6 * $delayenter);
  }
  .square:nth-child(2){
    @include delay(7 * $delayenter);
  }
  .square:nth-child(3){
    @include delay(8 * $delayenter);
  }
  .square:nth-child(4){
    @include delay(3 * $delayenter);
  }
  .square:nth-child(5){
    @include delay(4 * $delayenter);
  }
  .square:nth-child(6){
    @include delay(5 * $delayenter);
  }
  .square:nth-child(7){
  }
  .square:nth-child(8){
    @include delay(1 * $delayenter);
  }
  .square:nth-child(9){
    @include delay(2 * $delayenter);
  }
  .clear{
    clear: both;
  }
  .last{
    margin-right:0;
  }
</style>
