<template>
  <div class="loaders-gallery">
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <hollow-dots-spinner :animationDuration="1000" :dotSize="15" :color="'#ff1d5e'"></hollow-dots-spinner>
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <pixel-spinner :animationDuration="2000" :pixelSize="10" :color="'#ff1d5e'"></pixel-spinner>
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <flower-spinner :animationDuration="2500" :dotSize="10" :color="'#ff1d5e'"></flower-spinner>
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <intersecting-circles-spinner :animationDuration="1200" :circleSize="35" :color="'#ff1d5e'"></intersecting-circles-spinner>
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <orbit-spinner :animationDuration="1200" :size="55" :color="'#ff1d5e'"></orbit-spinner>
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <polar-spinner :animationDuration="1500" :size="60" :color="'#ff1d5e'"></polar-spinner>
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
  </div>
</template>

<script>
  import LoadersGalleryItem from './LoadersGalleryItem.vue'
  import HollowDotsSpinner from './spinners/HollowDotsSpinner.vue'
  import PixelSpinner from './spinners/PixelSpinner.vue'
  import FlowerSpinner from './spinners/FlowerSpinner.vue'
  import IntersectingCirclesSpinner from './spinners/IntersectingCirclesSpinner.vue'
  import OrbitSpinner from './spinners/OrbitSpinner.vue'
  import PolarSpinner from './spinners/PolarSpinner.vue'

  export default {
    name: 'LoadersGallery',
    components: {
      LoadersGalleryItem,
      HollowDotsSpinner,
      PixelSpinner,
      FlowerSpinner,
      IntersectingCirclesSpinner,
      OrbitSpinner,
      PolarSpinner
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  .loaders-gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gallery-item-container {
    padding: 15px;
  }

</style>
