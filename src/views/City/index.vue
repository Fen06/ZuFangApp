<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      class="Top"
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <div class="isEare"></div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell>{{ value }}</van-cell>
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in HotCity"
        :key="index.value"
        @click="HotC(item.label, item.value)"
      />
      <div v-for="(item, index) in indexList" :key="index">
        <van-index-anchor :index="item">{{ item }}</van-index-anchor>
        <van-cell
          :title="ele.label"
          v-for="(ele, index) in AllCity"
          :key="index"
          v-show="ele.short.substring(0, 1) === item.toLowerCase()"
        >
        </van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCityList } from '@/api'
export default {
  data () {
    return {
      indexList: [
        '#',
        '热',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'I',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Z'
      ],
      HotCity: [],
      AllCity: [],
      value: '北京'
    }
  },
  created () {
    this.getCityList()
    this.getHotCityList()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getCityList () {
      try {
        const res = await getCityList(1)
        console.log(res.data.body)
        this.AllCity = res.data.body
      } catch (error) {
        console.log('error', error)
      }
    },
    async getHotCityList () {
      try {
        const res = await getHotCityList()
        // console.log(res.data.body)
        this.HotCity = res.data.body
      } catch (error) {
        console.log('error', error)
      }
    },
    HotC (val) {
      this.value = val
      this.onClickLeft()
    }
  }
}
</script>

<style lang="less" scoped>
.Top {
  background-color: #21b97a;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
.isEare {
  margin-top: 1.45rem;
  margin-left: 0.42rem;
  font-size: 0.38rem;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.van-icon-arrow-left:before) {
  color: #fff;
}
:deep(.van-index-bar__index) {
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height: 25px;
  padding: 0.1rem 0;
  text-align: center;
  padding: 0.15rem 0.15rem;
  margin-right: 0.2rem;
}
:deep(.van-index-bar__index--active) {
  color: #fff;
  background-color: #21b97a;

  border-radius: 100%;
}
:deep(.van-index-anchor--sticky) {
  position: absolute;
}
</style>
