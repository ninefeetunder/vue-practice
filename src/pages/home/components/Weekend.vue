<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
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
  .title
    height: .8rem
    line-height: .8rem
    padding-left: .2rem
  .item
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 37%
      .item-img
        width: 100%
    .item-info
      padding: .2rem
      .item-title
        font-size: .28rem
        line-height: .48rem
        padding-right: 2rem
        ellipsis()
      .item-desc
        font-size: .24rem
        line-height: .42rem
        padding-right: 2rem
        ellipsis()
</style>
