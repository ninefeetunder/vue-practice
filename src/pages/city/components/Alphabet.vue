<template>
  <div class="alphabet">
    <div class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterChange"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  methods: {
    handleLetterChange (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 减去header和search的高度
          const touchIndex = Math.floor((touchY - this.startY) / 20)
          // console.log(touchIndex)
          if (touchIndex >= 0 && touchIndex < this.letters.length) {
            this.$emit('change', this.letters[touchIndex]) // 同样抛出change事件
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
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
      height: .4rem
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
