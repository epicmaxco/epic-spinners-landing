<template>
  <div class="loaders-gallery-item">
    <div class="spinner"><slot></slot></div>
    <div class="tap-to-view-code">Tap to view code</div>
  </div>
</template>

<script>
  export default {
    name: 'LoadersGalleryItem'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
  @import "../sass/variables";


  .loaders-gallery-item {
    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 8px;
    border: solid 1px #1c1c1e;
    display: flex;
    flex-direction: column;
    align-items: center;
    $duration: .3s;
    transition : width ease $duration, height ease $duration;
    .spinner {
      align-self: center;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tap-to-view-code {
      position: absolute;
      bottom: 0;
      display: none;
      width: 100%;
      height: 20%;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      color: #ff1d5e;
    }
    &:hover {
      cursor: pointer;
      background-color: white;
      width: 190px;
      height: 190px;
      box-shadow: 0px 4px 12px 0px rgba(54, 193, 255, 0.1),   0px 2px 20px 0px rgba(104, 37, 113, 0.5);
      //transition : width ease $duration, height ease $duration;
      .tap-to-view-code {
        display: inline;
      }
    }
  }
</style>

