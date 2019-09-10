<template>
  <div>
    <detail-banner :sight-name="sightName" :img="img" :imgs="imgs"></detail-banner>
    <detail-header></detail-header>
    <detail-card></detail-card>
    <detail-recommend></detail-recommend>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailCard from './components/Card'
import DetailRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailCard,
    DetailRecommend
  },
  data () {
    return {
      sightName: '',
      img: '',
      imgs: [],
      list: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleInfoSucc)
    },
    handleInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        res = res.data
        this.sightName = res.sightName
        this.img = res.bannerImg
        this.imgs = res.gallaryImgs
        this.list = res.categoryList
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
