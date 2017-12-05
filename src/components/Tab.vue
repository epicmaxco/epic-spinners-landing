<template>
  <div class="tabs">
    <div class="buttons">
      <div class="button"
           v-for="index in count"
           :class="{active : currentIndex === index }"
           @click="setCurrentIndex(index)">test
           <!--v-if="index === 0">test-->
      </div>
      <!--<div class="button"-->
           <!--v-for="index in count"-->
           <!--:class="{active : currentIndex === index }"-->
           <!--@click="setCurrentIndex(index)"-->
           <!--v-if="index === 1">test2-->
      <!--</div>-->
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
    /*display: flex;*/
  }

  .buttons{
    display: flex;
    flex-direction: row;
  }

  .button{
    /*display: flex;*/
    /*flex-direction: row;*/
    text-align: center;
    width: 50%;
    height: 48px;
    background-color: #f0f0f0;
  }

  .tab-content div{
    padding: 30px;
    /*border: 1px solid #ccc;*/
    width: 100%;
    height: 492px;
    /*margin: 0 auto;*/
  }
</style>
