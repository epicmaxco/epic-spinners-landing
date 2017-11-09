<template>
  <div class="loaders-gallery">
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <hollow-dots-spinner :animationDuration="'1000ms'" :dotSize="'15px'" :color="'#ff1d5e'"></hollow-dots-spinner>
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

  export default {
    name: 'LoadersGallery',
    components: {
      LoadersGalleryItem,
      HollowDotsSpinner
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
