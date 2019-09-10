<template>
  <div class="wrapper">
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="img"
        alt=""
      >
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          {{this.imgs.length}}
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" @close="handleGalleryClose" v-show="showGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
export default {
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleGalleryClose () {
      this.showGallery = false
    },
    handleBannerClick () {
      this.showGallery = true
    }
  },
  components: {
    CommonGallery
  },
  props: {
    sightName: String,
    img: String,
    imgs: Array
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    height: 0
    padding-bottom: 55%
    overflow: hidden
    position: relative
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .6rem
      color: #fff
      background: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        height: .4rem
        font-size: .36rem
        flex: 1
      .banner-number
        padding: 0 .3rem
        height: .4rem
        line-height: .4rem
        font-size: .24rem
        background: rgba(0,0,0,.5)
        border-radius: .2rem
        .banner-icon
          font-size: .3rem
</style>
