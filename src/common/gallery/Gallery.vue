<template>
  <div class="container" @click="handleGalleryClose">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img"
          :src="item"
          alt=""
          >
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClose () {
      this.$emit('close')
    }
  },
  props: {
    imgs: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow: inherit
  .container
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    color: #fff
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallery-img
        width: 100%
      .swiper-pagination
        bottom: -1rem
</style>
