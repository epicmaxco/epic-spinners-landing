<template>
  <div class="tabs">
    <div class="tabs-header">
      <div class="button"
           v-for="index in count"
           :class="{active : currentIndex === index }"
           @click="setCurrentIndex(index)">
        <span v-if="index === 1">HTML & CSS</span>
        <span v-if="index === 2" id="npm">NPM & VUE.JS</span>
        <div class="slider"
             v-if="currentIndex === index">
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div class="copy-html">
        <button v-if="currentIndex === 1" id="copy-html-button">Copy HTML</button>
        <button v-if="currentIndex === 2" id="copy-code-one">Copy code</button>
      </div>
      <div class="paste-code" v-if="currentIndex === 1"></div>
      <div class="separator" v-if="currentIndex === 2"></div>
      <div class="copy-css">
        <button v-if="currentIndex === 1" id="copy-css-button">Copy CSS</button>
        <button v-if="currentIndex === 2" id="copy-code-two">Copy code</button>
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
      },
      setOpacity (index) {
        if (index !== this.currentIndex) {
          console.log('penis')
        }
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

  .tabs-header{
    display: flex;
    flex-direction: row;
  }

  .button{
    /*display: flex;*/
    /*flex-direction: row;*/
    position: relative;
    text-align: center;
    width: 50%;
    height: 48px;
    background-color: #f0f0f0;
  }

  .slider{
    width: 270px;
    height: 4px;
    background-color: #da1e58;
    position: absolute;
    bottom: 0;
  }

  .tab-content {
    /*padding: 30px;*/
    /*border: 1px solid #ccc;*/
    width: 100%;
    height: 492px;
    text-align: center;
    position: relative;
    /*margin: 0 auto;*/
  }

  .copy-html{
    width: 100%;
    height: 59px;
    position: relative;
  }

  button {
    position: absolute;
    right: 24px;
    top: 16px;
    width: 90px;
    height: 26px;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    background-color: #100f0f;
    border-radius: 4px;
    border: none;
  }

  button#copy-css-button {
    position: absolute;
    width: 75px;
    height: 26px;
  }

  button#copy-code-one {
    position: absolute;
    width: 82px;
    height: 26px;
  }

  button#copy-code-two {
    position: absolute;
    width: 82px;
    height: 26px;
  }

  .paste-code{
    background-color: #f0f0f0;
    width: auto;
    height: 54px;
  }

  .separator{
    width: 540px;
    height: 2px;
    background-color: #f0f0f0;
  }

  .copy-css{
    position: relative;
    width: auto;
    height: 379px;
  }

  span {
    font-weight: bold;
    text-align: center;
    line-height: 48px;
    width: auto;
    height: auto;
    font-size: 14px;
    color: #505050;
  }

  /*span#npm{*/
    /*width: 100px;*/
    /*height: 21px;*/
    /*!*right: 91px;*!*/
  /*}*/

</style>
