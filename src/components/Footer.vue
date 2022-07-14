<template>
  <div class="footer">
    <van-tabbar v-model="active" active-color="#21b97a" route>
      <!-- -->
      <van-tabbar-item to="/home">
        <i slot="icon" class="iconfont icon-fangzi"></i>
        <span class="title">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/find">
        <i slot="icon" class="iconfont iconfont icon-sousuodefuben"></i>
        <span class="title">找房</span>
      </van-tabbar-item>
      <van-tabbar-item to="/news">
        <i slot="icon" class="iconfont iconfont icon-zixun"></i>
        <span class="title">资讯</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <!-- :class="{ current: active === 3 }"
        @click="chang(3)" -->
        <i slot="icon" class="iconfont icon-31wode"></i>
        <span class="title">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },

  methods: {}
}
</script>

<style lang="less" scope>
.footerr {
  .van-tabbar-item__icon {
    // font-size: 0.0001rem;
    text-align: center;
  }

  .icon-31wode {
    font-size: 0.58rem;
  }
  // .icon .iconfont:before {
  //   font-size: 0.95rem;
  //   // color: #888888;
  //   margin-top: 1rem;
  // }
}
p {
  font-size: 0.35rem;
}
// .current {
//   color: #21b97a;
// }
// .van-tabbar-item__icon {
//   font-size: 0.0001rem;
// }
</style>
