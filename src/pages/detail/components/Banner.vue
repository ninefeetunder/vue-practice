<template>
  <div class="wrapper">
    <div class="iconfont back-icon" @click="goBack">&#xe667;</div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"
        alt=""
      >
      <div class="banner-info">
        <div class="banner-title">上海迪士尼乐园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          93
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
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1905/2a/2abf1aea5eecc2f6a3.img.jpg_r_800x800_52ca584c.jpg',
        'http://img1.qunarzz.com/sight/p0/1905/28/28622a6b07caa0faa3.img.jpg_r_800x800_d54721f6.jpg'
      ],
      showGallery: false
    }
  },
  methods: {
    goBack () {
      this.showGallery = false
      this.$router.go(-1)
    },
    handleGalleryClose () {
      this.showGallery = false
    },
    handleBannerClick () {
      this.showGallery = true
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    position: relative
    .back-icon
      position: absolute
      top: .1rem
      left: .1rem
      width: .72rem
      height: .72rem
      line-height: .72rem
      border-radius: 50%
      background: rgba(0,0,0,.7)
      color: #fff
      text-align: center
      font-size: .4rem
      z-index: 2
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
