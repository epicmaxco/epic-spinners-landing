<template>
  <div class="loaders-gallery">
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <hollow-dots-spinner
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <pixel-spinner
          :animation-duration="2000"
          :pixel-size="10"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <flower-spinner
          :animation-duration="2500"
          :dot-size="10"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <intersecting-circles-spinner
          :animation-duration="1200"
          :circle-size="35"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <orbit-spinner
          :animation-duration="1200"
          :size="55"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <polar-spinner
          :animation-duration="1500"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <trinity-rings-spinner
          :animation-duration="1500"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <fulfilling-square-spinner
          :animation-duration="4000"
          :size="50"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <circles-to-rhombuses-spinner
          :animation-duration="1200"
          :circles-num="3"
          :circle-size="15"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <semipolar-spinner
          :animation-duration="2000"
          :size="65"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <breeding-rhombus-spinner
          :animation-duration="2000"
          :size="65"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <swapping-squares-spinner
          :animation-duration="1000"
          :size="50"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <rotating-squares-spinner
          :animation-duration="1250"
          :size="50"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <fulfilling-bouncing-circle-spinner
          :animation-duration="4000"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <radar-spinner
          :animation-duration="2000"
          :size="60"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item></loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <spring-spinner/>
      </loaders-gallery-item>
    </div>
    <div class="gallery-item-container">
      <loaders-gallery-item>
        <self-building-square-spinner
          :animation-duration="6000"
          :square-size="10"
          :color="spinnerColor"
        />
      </loaders-gallery-item>
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
  import TrinityRingsSpinner from './spinners/TrinityRingsSpinner.vue'
  import FulfillingSquareSpinner from './spinners/FulfillingSquareSpinner.vue'
  import CirclesToRhombusesSpinner from './spinners/CirclesToRhombusesSpinner.vue'
  import SemipolarSpinner from './spinners/SemipolarSpinner.vue'
  import DiamondSpinner from './spinners/DiamondSpinner.vue'
  import BreedingRhombusSpinner from './spinners/BreedingRhombusSpinner.vue'
  import SwappingSquaresSpinner from './spinners/SwappingSquaresSpinner.vue'
  import RotatingSquaresSpinner from './spinners/RotatingSquaresSpinner.vue'
  import FulfillingBouncingCircleSpinner from './spinners/FulfillingBouncingCircleSpinner.vue'
  import RadarSpinner from './spinners/RadarSpinner.vue'
  import SelfBuildingSquareSpinner from './spinners/SelfBuildingSquareSpinner.vue'
  import SpringSpinner from './spinners/SpringSpinner.vue'

  export default {
    name: 'LoadersGallery',
    components: {
      LoadersGalleryItem,
      HollowDotsSpinner,
      PixelSpinner,
      FlowerSpinner,
      IntersectingCirclesSpinner,
      OrbitSpinner,
      PolarSpinner,
      TrinityRingsSpinner,
      FulfillingSquareSpinner,
      CirclesToRhombusesSpinner,
      SemipolarSpinner,
      DiamondSpinner,
      BreedingRhombusSpinner,
      SwappingSquaresSpinner,
      RotatingSquaresSpinner,
      FulfillingBouncingCircleSpinner,
      RadarSpinner,
      SelfBuildingSquareSpinner,
      SpringSpinner
    },

    data () {
      return {
        spinnerColor: '#ff1d5e'
      }
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
    width: 190px;
    height: 190px;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
