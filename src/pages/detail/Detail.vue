<template>
  <div>
    <detail-banner></detail-banner>
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
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailCard,
    DetailRecommend
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人一馆联票'
            },
            {
              title: '成人三馆联票'
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
