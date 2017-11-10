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
        <flower-spinner :animationDuration="1000" :dotSize="10" :color="'#ff1d5e'"></flower-spinner>
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

  export default {
    name: 'LoadersGallery',
    components: {
      LoadersGalleryItem,
      HollowDotsSpinner,
      PixelSpinner,
      FlowerSpinner
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
