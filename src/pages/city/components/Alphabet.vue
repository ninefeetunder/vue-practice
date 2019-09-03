<template>
  <div class="alphabet">
    <div class="item" v-for="(item, key) in cities" :key="key">
      {{ key }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object
  }
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
