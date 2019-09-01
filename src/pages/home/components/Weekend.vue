<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必打卡',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
          title: '周末亲子爱玩',
          desc: '走进自然或玩转乐园，感知大千世界，游乐项目惊险刺激，特色表演异彩纷呈，等你们~'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
          title: '上海城市观光',
          desc: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
          title: '情迷博物馆',
          desc: '走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg',
          title: '学生最爱TOP10',
          desc: '学习之余最爱玩耍，爱玩的你不可错过'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    height: .8rem
    line-height: .8rem
    padding-left: .2rem
  .item
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 37%
      .item-img
        width: 100%
    .item-info
      padding: .2rem
      .item-title
        font-size: .28rem
        line-height: .48rem
        padding-right: 2rem
        ellipsis()
      .item-desc
        font-size: .24rem
        line-height: .42rem
        padding-right: 2rem
        ellipsis()
</style>
