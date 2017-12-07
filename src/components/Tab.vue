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
      <div class="tab-panel" v-show="currentIndex === 1">
        <div class="copy-html">
          html code
          <button v-on:click="callToasted()" id="copy-html-button">Copy HTML</button>
        </div>
        <div class="paste-code">
          Paste the following code into style.css</div>
        <div class="copy-css">
          css code
          <button v-on:click="callToasted()" id="copy-css-button">Copy CSS</button>
        </div>
      </div>
      <div class="tab-panel" v-show="currentIndex === 2">
        <div class="copy-npm">
          npm code
          <button v-on:click="callToasted()" id="copy-code-one">Copy code</button>
        </div>
        <div class="separator"></div>
        <div class="copy-vue-js">
          vue code
          <button v-on:click="callToasted()" id="copy-code-two">Copy code</button>
        </div>
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
      callToasted () {
        let myToast = this.$toasted.show('Copied!', {
          theme: 'primary',
          position: 'top-right'
        })
        myToast.goAway(1200)
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

  .button:hover {
    cursor: pointer;
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

  .tab-panel {
    width: 100%;
    height: 492px;
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

  button:hover {
    cursor: pointer;
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
    font-size: 14px;
    text-align: left;
    line-height: 54px;
    padding-left: 24px;
    /*position: absolute;*/
    /*left: 24px;*/
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

  .copy-npm {
    width: 100%;
    height: 80px;
    position: relative;
  }

  .copy-vue-js {
    position: relative;
    width: auto;
    height: 358px;
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
