<template>
  <div class="atom-spinner">
    <div class="spinner-inner">
      <div class="spinner-line"></div>
      <div class="spinner-line"></div>
      <div class="spinner-line"></div>
      <!--Chrome renders little circles malformed :(-->
      <div class="spinner-circle">
        <div class="spinner-circle-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AtomSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 1000
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

    computed: {
      spinnerStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`
        }
      },

      orbitStyle () {
        return {
          borderColor: this.color,
          animationDuration: `${this.animationDuration}ms`
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  $size: 60px;


  .atom-spinner {
    .spinner-inner {
      height: $size;
      width: $size;
      position: relative;
      color: #ff1d5e;
      display: block;
    }

    .spinner-circle {
      display: block;
      width: 18%;
      height: 18%;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ff1d5e;
      -webkit-clip-path: circle(50% at 50% 50%);


      .spinner-circle-inner {
        height: 100%;
        width: 100%;
        background: #ff1d5e;
      }
    }

    .spinner-line {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-left: $size/25 solid #ff1d5e;
      border-top: $size/25 solid transparent;

      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation: anim-#{$i} 1s linear infinite;
          transform: rotateZ(360deg / 3 * $i) rotateX(66deg) rotateZ(0deg);
        }
      }
    }
  }

  @for $i from 1 through 3 {
    @keyframes anim-#{$i} {
      100% {
        transform: rotateZ(360deg / 3 * $i) rotateX(66deg) rotateZ(360deg);
      }
    }
  }


</style>
