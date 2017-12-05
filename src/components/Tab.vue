<template>
  <div class="tabs">
    <!--<h2>Tabs Demo</h2>-->
    <div>
      <button v-for="index in count"
              :class="{active : currentIndex === index }"
              @click="setCurrentIndex(index)">test
      </button>
    </div>
    <div class="tab-content">
      <div :class="'slot' + index" v-show="index === currentIndex" v-for="index in count">
        <slot :name="index"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    props: {
      count: {
        default: 2
      }
    },
    data () {
      return {
        currentIndex: 1
      }
    },
    methods: {
      setCurrentIndex (index) {
        this.currentIndex = index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabs{
    height: 100%;
    width: 100%;
  }

  button{
    width: 50%;
    height: 48px;
    /*padding: 10px;*/
  }
  button.active{
    /*background-color: blue;*/
  }
  .tab-content div{
    padding: 30px;
    border: 1px solid #ccc;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /*margin: 0 auto;*/
  }
</style>
