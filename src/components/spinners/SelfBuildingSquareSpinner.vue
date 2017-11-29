<template>
  <div class="self-building-square-spinner">
    <div class="square" ></div>
    <div class="square"></div>
    <div class="square last"></div>
    <div class="square clear"></div>
    <div class="square"></div>
    <div class="square last"></div>
    <div class="square clear"></div>
    <div class="square "></div>
    <div class="square last"></div>
  </div>
</template>

<script>
  export default {
    name: 'SelfBuildingSquareSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 2000
      },
      size: {
        type: Number,
        default: 110
      },
      color: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        circlesNum: 4
      }
    },

    computed: {
      borderWidth () {
        return this.size * 5 / 110
      },

      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      circleStyle () {
        return {
          animationDuration: `${this.animationDuration}ms`
        }
      },

      circleInnerContainerStyle () {
        return {
          borderWidth: `${this.borderWidth}px`
        }
      },

      circleInnerStyle () {
        return {
          borderLeftColor: this.color,
          borderRightColor: this.color,
          borderWidth: `${this.borderWidth}px`
        }
      },

      circlesStyles () {
        const circlesStyles = []
        const delay = this.animationDuration * 0.15

        for (let i = 0; i < this.circlesNum; i++) {
          circlesStyles.push(Object.assign({
            padding: `${this.borderWidth * 2 * i}px`,
            animationDelay: `${i === this.circlesNum - 1 ? 0 : delay}ms`
          }, this.circleStyle))
        }

        return circlesStyles
      }
    }
  }
</script>

<style  lang="scss" scoped>
  $squarew: 15px;
  $squareh: 15px;
  $squaremargin: 5px;
  $loaderw: $squarew * 3 + $squaremargin *2;
  $loaderh: $squareh * 3 + $squaremargin *2;
  $delayenter: 0.3s;
  $topenter: -10px;

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

  @keyframes enter{
    0%   {
      opacity: 0;
      top: $topenter;
    }
    5%   {
      opacity: 1;
      top: 0px;
    }
    50.9% {
      opacity: 1;
      top: 0px;
    }
    55.9% {
      opacity: 0;
      top: - $topenter;
    }
  }

  .self-building-square-spinner{
    position: relative;
  }

  .square{
    background: white;
    width: $squarew;
    height: $squareh;
    float: left;
    top: $topenter;
    margin-right: $squaremargin;
    margin-top: $squaremargin;
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
    background: #fdc96f;
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
