<template>
  <div class="loaders-header">
    <div class="top-line align-items-center">
      <div class="text-left ">
        <a href="https://github.com" target="_blank" class="github-button flex">
          <i class="fa fa-github" aria-hidden="true"></i>Fork on GitHub
        </a>
      </div>

      <div class="text-center title">Epic Spinners</div>
      <div class="text-right">
        <div class="links-wrapper">
          <router-link class="main-link" to="/">Gallery</router-link>
          <router-link class="main-link" to="get-started">Get Started</router-link>
        </div>
      </div>
    </div>
    <div class="text-center sub-line">
      Css only. Easy to use. VueJS integration.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loaders-header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style  lang="scss">
@import "../sass/variables";
.loaders-header {
  .title {
    font-size: $font-size-xxl;
  }
  .sub-line {
    color: $text-color-dark;
    font-size: $font-size-xl;
  }
  .top-line {
    @include flexbox;
    @include justify-content(space-between);
    .links-wrapper {
      @include flexbox;
      min-width: 140px;

      a:first-child {
        margin-right: 16px;
      }
    }
  }
}
</style>
