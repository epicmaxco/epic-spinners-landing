<template>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="show">
            <div class="modal-container" @click.stop>
              <Tabs>
                <div slot="1">Test 0 </div>
                <div slot="2">Test 1 </div>
              </Tabs>
            </div>
        </div>
    </transition>
</template>

<script>
  import Tabs from '../components/Tab'
  export default {
    name: 'modal',
    props: ['show'],
    methods: {
      close: function (event) {
        event.stopPropagation()
        this.$emit('close')
      }
    },
    components: {
      Tabs
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .modal-mask {
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
    /*padding: 20px 30px;*/
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 2px 20px 0 rgba(104, 37, 113, 0.5);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    /*position: center;*/
    align-items: center;
    justify-content: center;
  }

</style>
