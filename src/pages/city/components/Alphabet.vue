<template>
  <div class="alphabet">
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
    <div class="item">A</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .alphabet
    position: absolute
    right: 0
    bottom: 0
    top: 1.58rem
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      height: .34rem
      text-align: center
      color: $bgColor
</style>
