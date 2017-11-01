<template>
  <div id="app">
    <loaders-header></loaders-header>
    <router-view/>
    <loaders-footer></loaders-footer>
  </div>
</template>


<script>
import LoadersHeader from '@/components/LoadersHeader'
import LoadersFooter from '@/components/LoadersFooter'
export default {
  name: 'app',
  components: {
    LoadersHeader,
    LoadersFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
