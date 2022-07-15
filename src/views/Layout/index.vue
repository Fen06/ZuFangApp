<template>
  <div>
    <router-view></router-view>
    <van-tabbar active-color="#21b97a" route>
      <!--   -->
      <van-tabbar-item to="/ ">
        <template #icon>
          <span class="iconfont icon-fangzi"></span>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item to="/find">
        <template #icon>
          <span class="iconfont icon-sousuodefuben"></span>
        </template>
        找房
      </van-tabbar-item>
      <van-tabbar-item to="/news">
        <template #icon>
          <span class="iconfont icon-zixun"></span>
        </template>
        资讯
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <template #icon>
          <span class="iconfont icon-31wode"></span>
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 0.5333rem;
}
</style>
