<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-list" ref="searchlist" v-show="this.keyword">
      <ul>
        <li class="search-list-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li v-show="noRegion" class="search-list-item border-bottom">没有此地区</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchlist)
  },
  computed: {
    noRegion () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const list = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              list.push(item)
            }
          })
        }
        this.list = list
        if (!this.keyword) {
          this.list = []
        }
      }, 100)
    }
  }
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
  .search-list
    overflow: hidden
    position: absolute
    top: 1.58rem
    bottom: 0
    left: 0
    right: 0
    z-index: 1
    background-color: #fff
    .search-list-item
      line-height: .64rem
      padding-left: .2rem
      background-color: #eee
      color: #666
</style>
