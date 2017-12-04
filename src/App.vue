<template>
  <div id="app">
    <loaders-header class="container"></loaders-header>
    <router-view class="container"/>
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

<style lang="sass">
@import "sass/main.scss"
</style>
