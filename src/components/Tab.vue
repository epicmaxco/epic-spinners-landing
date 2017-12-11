<template>
  <div class="tabs">
    <div class="tabs-header">
      <div class="buttons-container">
        <div class="button"
             v-for="index in count"
             :class="{active : currentIndex === index}"
             @click="setCurrentIndex(index)">
          <span v-if="index === 1 && currentIndex === index">HTML & CSS</span>
          <span v-if="index === 1 && currentIndex !== index" id="html">HTML & CSS</span>
          <span v-if="index === 2 && currentIndex === index">VUE.JS</span>
          <span v-if="index === 2 && currentIndex !== index" id="npm" style="opacity: 0.6">VUE.JS</span>
          <div class="slider-mini"
          v-if="currentIndex !== index">
          </div>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider" :style="sliderLeft + '; width: 50%;'"></div>
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-panel" v-show="currentIndex === 1">
        <div class="copy-html">
          <div class="scroll-container" v-text="html" ref="htmlContent"></div>
          <button v-clipboard:copy="html" v-clipboard:success="callToasted" id="copy-html-button">Copy HTML</button>
        </div>
        <div class="paste-code">
          Paste the following code into style.css
        </div>
        <div class="copy-css">
          <div class="scroll-container" v-text="css"></div>
          <button v-clipboard:copy="css" v-clipboard:success="callToasted" id="copy-css-button">Copy CSS</button>
        </div>
      </div>
      <div class="tab-panel" v-show="currentIndex === 2">
        <div class="copy-npm">
          <div class="scroll-container" v-text="npm"></div>
          <button v-clipboard:copy="npm" v-clipboard:success="callToasted" id="copy-code-one">Copy code</button>
        </div>
        <div class="separator"></div>
        <div class="copy-vue-js">
          <div class="scroll-container" v-text="vue"></div>
          <button  v-clipboard:copy="vue" v-clipboard:success="callToasted" id="copy-code-two">Copy code</button>
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
      },
      html: null,
      css: null,
      npm: null,
      vue: null
    },
    data () {
      return {
        currentIndex: 1,
        sliderWidth: '50%'
      }
    },
    computed: {
      sliderLeft () {
        return `left: ${this.currentIndex === 1 ? '0%' : '50%'}`
      }
    },
    methods: {
      setCurrentIndex (index) {
        this.currentIndex = index
        this.animateSliderWidth()
      },
      callToasted (refName) {
        let myToast = this.$toasted.show('Copied!', {
          theme: 'primary',
          position: 'top-right'
        })
        myToast.goAway(1200)
      },
      animateSliderWidth () {
        setTimeout(() => {
          this.sliderWidth = '20%'
        })
        setTimeout(() => {
          this.sliderWidth = '50%'
        }, 300)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tabs{
    height: 100%;
    width: 100%;
  }

  .tabs-header{
    display: flex;
    flex-direction: column;
    width: 100%;
    .buttons-container {
      display: flex;
      .button{
        text-align: center;
        width: 50%;
        height: 48px;
        background-color: #f0f0f0;
        .slider-mini {
          width: 100%;
          height: 4px;
          position: relative;
          background-color: gainsboro;
          transition: background-color;
          transition-duration: 0.3s;
        }
        &:hover {
          cursor: pointer;
          .slider-mini {
            background-color: darkgrey;
          }
        }
      }
    }
    .slider-container {
      width: 100%;
      position: relative;
      .slider{
        position: absolute;
        top: 0;
        height: 4px;
        background-color: #da1e58;
        transition: left .3s ease-out;
      }
    }
  }

  .tab-content {
    width: 100%;
    height: 492px;
    text-align: center;
    position: relative;
  }

  .tab-panel {
    width: 100%;
    height: 492px;
    .scroll-container {
      white-space: pre-wrap;
      text-align: left;
      padding: 20px 24px;
      color: #858585;
      font-weight: 300;
    }
  }

  .copy-html{
    width: 100%;
    height: calc(50% - 34px);
    position: relative;
    overflow: hidden;
    overflow-y: auto;
  }

  button {
    position: absolute;
    right: 24px;
    top: 18px;
    width: 90px;
    height: 26px;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    background-color: #100f0f;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    opacity: 0.5;
  }

  button:hover {
    opacity: 1;
    transition: all .5s ease;
  }

  button:after {
    content: "";
    background: #ffffff;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }

  button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }

  button:active, button:focus {
    outline: none;
  }

  button::-moz-focus-inner {
    border: 0;
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
  }

  .separator{
    width: 540px;
    height: 2px;
    background-color: #f0f0f0;
  }

  .copy-css{
    position: relative;
    width: auto;
    height: calc(50% - 22px);
    overflow: hidden;
    overflow-y: auto;
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

  span#html {
    opacity: 0.6;
  }

  span#npm {
    opacity: 0.6;
  }

</style>
