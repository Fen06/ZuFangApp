<template>
  <div>
    <div class="Search-box">
      <div class="left">
        <div class="tubiao">
          <span>北京 </span>
          <i>▼</i>
        </div>
      </div>

      <span class="iconfont icon-ditu"></span>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in imges" :key="index">
        <!-- <template #default> -->
        <img :scr="`http://liufusong.top:8080${item.imgSrc}`" />
        <!-- </template> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getShouye } from '@/api'
export default {
  data () {
    return {
      imges: []
    }
  },
  created () {
    this.getShouye()
  },
  methods: {
    async getShouye () {
      try {
        const { data } = await getShouye()
        console.log(data.body)
        this.imges = [...data.body]
        console.log(this.imges)
      } catch (error) {
        console.log('Shouye', error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.Search-box {
  position: absolute;
  top: 25px;
  width: 80%;
  padding: 0 10px;
  z-index: 99;

  // background-color: #fff;
  .left {
    background-color: #fff;
    .tubiao {
      padding: 0.03rem;
      width: 1.75rem;
      height: 0.85rem;
      line-height: 0.65rem;
      text-align: center;
      background-color: #ccc;
      span {
        font-size: 0.25rem;
        color: #333333;
      }
      i {
        font-size: 0.25rem;
        color: #7f7f80;
      }
    }
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 5.5rem;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 375px;
  }
}
</style>
