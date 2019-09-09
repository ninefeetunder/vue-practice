<template>
  <div>
    <div class="item border-bottom"
      v-for="(item,index) in list"
      :key="index"
    >
      <span class="ticket-icon"></span>
      {{ item.title }}
      <div v-if="item.children" class="children-list">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item
    line-height: .8rem
    font-size: .32rem
    .ticket-icon
      position: relative
      top: .08rem
      left: .1rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
    .children-list
      padding: 0 .4rem
</style>
