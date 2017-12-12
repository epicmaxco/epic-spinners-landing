<template>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="show">
            <div class="modal-container" @click.stop>
                <Tabs :html="html" :css="css" :npm="npm" :vue="vue">
                </Tabs>
            </div>
        </div>
    </transition>
</template>

<script>
  import Tabs from '../components/Tab'
  export default {
    name: 'modal',
    props: ['show', 'spinnerName'],
    data () {
      return {
        css: null,
        html: null,
        vue: null,
        npm: null
      }
    },
    methods: {
      close: function (event) {
        event.stopPropagation()
        this.$emit('close')
      }
    },
    components: {
      Tabs
    },
    mounted () {
      console.log(this.spinnerName)
      fetch('/static/examples/html/' + this.spinnerName + '.html')
        .then(r => r.text())
        .then(t => {
          const styleStartIndex = t.indexOf('<style>')
          const styleEndIndex = t.indexOf('</style>')
          this.css = t.substring(styleStartIndex + 7, styleEndIndex).trim()
          const htmlStartIndex = t.indexOf('<body>')
          const htmlEndIndex = t.indexOf('</body>')
          this.html = t.substring(htmlStartIndex + 6, htmlEndIndex).trim()
        })
      fetch('/static/examples/vue/' + this.spinnerName + '.vue')
        .then(r => r.text())
        .then(t => {
          const componentEndIndex = t.indexOf('import')
          this.vue = t.substring(0, componentEndIndex).trim()
          this.npm = t.substring(componentEndIndex, t.length).trim()
        })
    }
  }
</script>

<style scoped lang="scss">
  @import "../sass/variables";

  * {
    box-sizing: border-box;
  }

  .modal-mask {
    cursor: default;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 540px;
    height: 540px;
    color: #100f0f;
    margin: 40px auto 0;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2px 20px 0 rgba(104, 37, 113, 0.5);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: center;
    align-items: center;
    justify-content: center;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media (max-width: $screen-xs-max) {
    .modal-container {
      width: 365px;
    }
  }

</style>
