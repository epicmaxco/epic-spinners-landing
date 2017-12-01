<template>
  <div class="half-circle-spinner">

  </div>
</template>

<script>
  export default {
    name: 'HalfCircleSpinner',

    props: {
      animationDuration: {
        type: Number,
        default: 3000
      },
      size: {
        type: Number,
        default: 70
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

      spinnerPartStyle () {
        return {
          height: `${this.size / 2}px`,
          width: `${this.size}px`
        }
      },

      rotatorStyle () {
        return {
          height: `${this.size}px`,
          width: `${this.size}px`,
          borderRightColor: this.color,
          borderTopColor: this.color,
          borderWidth: `${this.size / 7}px`,
          animationDuration: `${this.animationDuration}ms`,
          animationName: this.currentAnimationName
        }
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .half-circle-spinner {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 auto;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: -10px;
      left: -10px;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 10px solid transparent;
    }

    &:before {
      border-top-color: #fff;
      animation: spin 1s infinite;
    }

    &:after {
      animation: spin 1s infinite alternate;
      border-bottom-color: #fff;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);

    }
    100%{
      transform: rotate(360deg);
    }
  }


</style>
