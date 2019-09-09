<template>
  <div class="base-info border-bottom">
    <div class="wrapper border-bottom">
      <div class="left">
        <div class="title">
          <span class="card-score">5.0</span>分
          超赞
        </div>
        <div class="content">
          <span>262559条评论</span>
          <span>42条攻略</span>
          <span class="iconfont card-icon">&#xe617;</span>
        </div>
      </div>
      <div class="right">
        <div class="title">
          景点开放
        </div>
        <div class="content">
          <span>开放时间、贴士</span>
          <span class="iconfont card-icon">&#xe617;</span>
        </div>
      </div>
    </div>
    <div class="address">
      <span class="iconfont address-icon">&#xe70e;</span>
      上海市浦东新区川沙新镇上海迪士尼度假区内
      <span class="iconfont card-icon">&#xe617;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCard'
}
</script>

<style lang="stylus" scoped>
  .base-info
    position: relative
    top: -.1rem
    padding: .1rem .2rem 0 .2rem
    margin-bottom: .1rem
    background-color: #fff
    border-radius: .1rem .1rem 0 0
    .wrapper
      padding: .1rem 0 .2rem 0
      display: flex
      .left
        flex: 1
        border-right: 1px solid #eee
        .title
          color: #ff8300
          font-size: .3rem
          line-height: .6rem
          .card-score
            font-size: .4rem
        .content
          font-size: .24rem
          color: #9e9e9e;
          position: relative
          .card-icon
            position: absolute
            top: -.32rem
            right: .24rem
      .right
        flex: 1
        padding-left: .2rem
        .title
          font-size: .3rem
          line-height: .6rem
        .content
          font-size: .24rem
          color: #9e9e9e;
          position: relative
          .card-icon
            position: absolute
            top: -.32rem
            right: .24rem
    .address
      padding: .2rem 0
      line-height: .32rem
      position: relative
      text-align: center
      .address-icon
        position: absolute
        top: .2rem
        left: .1rem
      .card-icon
        position: absolute
        top: .2rem
        right: .1rem
</style>
