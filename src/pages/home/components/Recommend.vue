<template>
  <div class="recommend">
    <div class="title">猜你喜欢</div>
    <ul class="items">
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-comment">{{item.comment}}条评论</div>
          <div class="item-price">
            <span class="price">￥{{item.price}}</span>起
            <span class="address">{{item.address}}</span>
          </div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend
    background-color: #fff
    margin-top: .3rem
    .title
      padding: .2rem 0
      font-size: .3rem
    .items
      margin-left: .24rem
      .item
        display: flex
        padding: .2rem 0
        .item-img
          width: 2rem
          height: 2rem
        .item-info
          flex: 1
          margin-left: .22rem
          margin-right: .2rem
          position: relative
          .item-title
            font-size: .32rem
            margin-top: .2rem
          .item-comment
            margin-top: .1rem
          .item-price
            margin-top: .2rem
            .price
              font-size: .4rem
              color: #ff910a
            .address
              float: right
              font-size: .24rem
          .item-desc
            position: absolute;
            bottom: 0
            padding: .04rem .1rem
            background: #fff9f9
            color: #f55
            font-size: .24rem
            ellipsis()
</style>
