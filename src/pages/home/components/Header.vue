<template>
    <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe667;</div>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe62b;</span>
          输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
          <div class="header-right">
            {{city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>

@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .header
    line-height: $headerHeight
    display: flex
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-right
      overflow: hidden
      min-width: 1.04rem
      padding: 0 .2rem
      box-sizing: border-box
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .2rem
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #fff
      border-radius: .1rem
      color: #ccc
</style>
