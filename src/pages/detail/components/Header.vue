<template>
  <div>
    <div class="header-abs" v-show="showAbs">
      <div class="iconfont back-icon" @click="goBack">&#xe667;</div>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="title">
        景点详情
        <div class="iconfont header-back" @click="goBack">&#xe667;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 42) {
        this.showAbs = false
        let opacity = top / 250
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
    document.documentElement.scrollTo(0, 0)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
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
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    .title
      position: relative
      height: $headerHeight
      line-height: $headerHeight
      color: #fff
      text-align: center
      font-size: .32rem
      background: $bgColor
      .header-back
        width: .64rem
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        font-size: .4rem
        position: absolute
        left: 0
        top: 0
</style>
