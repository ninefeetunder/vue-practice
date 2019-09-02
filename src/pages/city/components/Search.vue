<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    line-height: .72rem
    .search-input
      height: .52rem
      width: 100%
      padding: 0 .1rem
      box-sizing: border-box
      border-radius: .06rem
      text-align: center
      color: #ccc
</style>
