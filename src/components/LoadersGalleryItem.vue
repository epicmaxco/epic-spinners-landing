<template>
  <div class="loaders-gallery-item">
    <div class="spinner">
      <div class="spinner-container">
        <div class="dot-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="dot-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="dot-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoadersGalleryItem'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  .loaders-gallery-item {
    width: 160px;
    height: 160px;
    border-radius: 8px;
    border: solid 1px #1c1c1e;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .spinner-container,
  .dot-container {
    position: relative;
    width: 100px;
    height: 100px;

  }
  .spinner-container {
    transform-origin: center;
    animation: anirotate 10s linear infinite;
  }
  .dot-container {
    position: absolute;
    border: 0px solid #fff;
    border-radius: 50px;
    &:nth-child(2) {
      transform: rotate(40deg);
      .dot {
        //animation-delay: -0.35s;
        animation-delay: -0.5s;
      }
    }
    &:nth-child(3) {
      transform: rotate(80deg);
      .dot {
        //animation-delay: -0.35s;
        animation-delay: -1s;
      }
    }
  }
  .dot {
    position: absolute;
    height: 10px;
    width: 10px;
    background: #fff;
    border-radius: 5px;
    transform: translate(0, 0);
    &:nth-child(1) {
      top: 0;
      left: calc(50% - 5px);
      animation: ani1 2s infinite;
    }
    &:nth-child(2) {
      bottom: calc(28% - 5px);
      left: calc(11% - 5px);
      animation: ani2 2s infinite;
    }
    &:nth-child(3) {
      bottom: calc(28% - 5px);
      right: calc(11% - 5px);
      animation: ani3 2s infinite;

    }
  }
  [hidden] {
    display: none;
  }

  @keyframes anirotate {
    0% {
      transform: rotate(0deg);

    }
    100% {
      transform: rotate(-359deg);
    }
  }

  @keyframes ani1 {
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(-40px, 67px);
    }
  }

  @keyframes ani2 {
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(77px, 0);
    }
  }

  @keyframes ani3 {
    0% {
      transform: translate(0, 0);

    }
    100% {
      transform: translate(-39px, -67px);
    }
  }
</style>
