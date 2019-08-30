<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b9/6b91b49794f46402.jpg_750x200_d7f254e2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active // >>> 实现穿透效果，无视scoped的效果
  background-color: #fff;
.wrapper
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  .swiper-img
    width: 100%;
</style>
