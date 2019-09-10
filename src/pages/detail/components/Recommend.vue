<template>
  <div class="recommend-wrapper">
    <div class="recommend-title border-bottom">去哪儿推荐</div>
    <div class="recommend-item border-bottom">
      <div class="recommend-item-info">
        <div class="item-title">【门票】上海迪士尼乐园成人一日票</div>
        <div class="item-sub-title">
          <img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png" alt="">
          20:00前随买随用
        </div>
        <div class="ticket-labelcon">
          <span>
            <img class="ticket-labelcon-img" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">
            自营
          </span>
          <span>
            无需换票
          </span>
          <span>
            不可退
          </span>
        </div>
      </div>
      <div class="item-price-info">
        <div class="item-price">￥394</div>
        <div class="item-book">预定</div>
      </div>
    </div>
    <div class="recommend-item border-bottom">
      <div class="recommend-item-info">
        <div class="item-title">【不含门票】迪士尼8个快速通行+快速入园+园内导游陪玩12项</div>
        <div class="item-sub-title">
          <img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png" alt="">
          20:00前随买随用
        </div>
        <div class="ticket-labelcon">
          <span>
            <img class="ticket-labelcon-img" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">
            自营
          </span>
          <span>
            无需换票
          </span>
          <span>
            不可退
          </span>
        </div>
      </div>
      <div class="item-price-info">
        <div class="item-price">￥552.0</div>
        <div class="item-book">预定</div>
      </div>
    </div>
    <div class="recommend-item border-bottom">
      <div class="recommend-item-info">
        <div class="item-title">【夜场票】上海迪士尼活动票 大小老人同价</div>
        <div class="item-sub-title">
          <img src="https://img1.qunarzz.com/piao/fusion/1804/94/3537f6969acc0c02.png" alt="">
          20:00前随买随用
        </div>
        <div class="ticket-labelcon">
          <span>
            <img class="ticket-labelcon-img" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">
            自营
          </span>
          <span>
            无需换票
          </span>
          <span>
            不可退
          </span>
        </div>
      </div>
      <div class="item-price-info">
        <div class="item-price">￥332</div>
        <div class="item-book">预定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecommend'
}
</script>

<style lang="stylus" scoped>
  .recommend-wrapper
    padding-left: .2rem
    .recommend-title
      line-height: .8rem
      font-size: .32rem
      padding: 0 .4rem
    .recommend-item
      padding: .2rem .1rem .2rem 0
      display: flex
      .recommend-item-info
        flex: 3
        .item-title
          line-height: .4rem
          font-size: .32rem
        .item-sub-title
          font-size: .24rem
          line-height: .36rem
          img
            width: .2rem
        .ticket-labelcon
          font-size: .2rem
          color: #00afc7
          line-height: .3rem
          .ticket-labelcon-img
            width: .3rem
          span
            border: 1px solid #a5e4ec
            margin-right: .1rem
            border-radius: .02rem
      .item-price-info
        flex: 1
        .item-price
          font-size: .4rem
          color: #ff9800
          line-height: .4rem
          text-align: center
        .item-book
          line-height: .6rem
          color: #ffffff
          font-size: .28rem
          text-align: center
          background: #ff9800
          border-radius: .1rem
</style>
