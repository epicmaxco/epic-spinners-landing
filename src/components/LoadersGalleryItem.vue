<template>
  <div class="loader-item-container">
    <div class="loaders-gallery-item" @click="this.open">
      <div class="spinner"><slot></slot></div>
      <modal v-show="showModal" @close="this.close"></modal>
      <span class="tap-to-view-code">Tap to view code</span>
    </div>
  </div>
</template>


<script>
  import Modal from './ModalVue'
  export default {
    name: 'LoadersGalleryItem',
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      close () {
        this.showModal = false
      },
      open () {
        this.showModal = true
      }
    },
    mounted: function () {
      document.addEventListener('keydown', (e) => {
        if (this.showModal && e.keyCode === 27) {
          this.close()
        }
      })
    },
    components: {
      Modal
    }
  }
</script>

<style  lang="scss" scoped>
  @import "../sass/variables";

  .loaders-gallery-item {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border: solid 0px #1c1c1e;
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
      /*bottom: 12px;*/
      bottom: 0;
      display: none;
      width: auto;
      height: 20%;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      color: #ff1d5e;
      /*transition : width ease .0s, height ease .0s;*/
    }

    &:hover {
      cursor: pointer;
      background-color: white;
      width: 160px;
      height: 160px;
      box-shadow: 0px 4px 12px 0px rgba(54, 193, 255, 0.1),   0px 2px 20px 0px rgba(104, 37, 113, 0.5);
      //transition : width ease .0s, height ease .0s;
      .tap-to-view-code {
        font-size: 16px;
        display: block;
      }
      }
  }
</style>
