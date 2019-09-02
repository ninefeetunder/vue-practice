<template>
  <div class="header">
    <div class="title">
      城市选择
      <div class="iconfont header-back" @click="goBack">&#xe667;</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
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
