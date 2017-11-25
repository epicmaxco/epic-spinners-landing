<template>
  <div class="loaders-footer">
    <div class="top-line">
      <div class="container">
        <div class="left-part">
          <div class="vuestic-text">Awwwsome Spinners perfectly fit Vuestic Admin Theme.</div>
          <div class="links-wrapper">
            <a href="https://github.com" target="_blank" class="github-button flex">
              <i class="fa fa-github" aria-hidden="true"></i>Vuestic on GitHub
            </a>
            <a href="" class="main-link">About Vuestic</a>
          </div>
        </div>
        <div class="right-part">
          <img class="vuestic-login" src="../assets/img/vuestic-login.png" alt="">
          <img class="vuestic-main" src="../assets/img/vuestic-main.png" alt="">
        </div>
      </div>
    </div>
    <div class="sub-line">
      <div class="container">
        <div class="left-part">
          ©2017. Developed by <a href="" class="main-link">Epicmax. </a> Designed by <a href="" class="main-link">Vasili Savitski.</a>
        </div>
        <div class="right-part"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loaders-footer'
  }
</script>

<style  lang="scss">
@import "../sass/variables";

.loaders-footer {
  margin-top: 60px;
  .top-line {
    background-color: $brand-main-color-dark;
    height: $footer-main-height;
    .container {
      height: 100%;
      @include flexbox;
      .left-part {
        width: 50%;
        .vuestic-text {
          font-size: $font-size-xl;
          font-weight: bold;
          padding-right: 60px;
        }
        .links-wrapper {
          @include flexbox;
          @include align-items(center);
          .github-button {
            width: 174px;
            margin-right: 24px;
          }
        }
      }
      .right-part {
        width: 50%;
        position: relative;
        img {
          position: absolute;
          &.vuestic-login {
            z-index: 11;
            height: 245px;
            left: -110px;
            bottom: -75px;
          }
          &.vuestic-main {
            z-index: 10;
            top: -70px;
            height: 365px;
            right: -40px;
          }
        }
      }
    }
  }
  .sub-line {
    background-color: $text-color-main;
    color: $text-color-black;
    height: $footer-secondary-height;
    .container {
      height: 100%;
      @include flexbox;
      @include align-items(center);
      a.main-link {
        color: $link-pale;
        border-bottom: 1px solid $link-pale;
        &:hover {
          color: $brand-main-color;
          border-bottom: 1px solid $brand-main-color;
        }
      }
    }
  }
}
</style>
