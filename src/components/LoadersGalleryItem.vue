<template>
  <div class="loaders-gallery-item">
    <slot></slot>
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
</style>
