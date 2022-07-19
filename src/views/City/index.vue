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

    <div>当前城市</div>
  </div>
</template>

<script>
import { getCityList } from '@/api'
export default {
  data () {
    return {}
  },
  created () {
    this.getCityList()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getCityList () {
      try {
        const res = await getCityList(1)
        console.log(res)
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.Top {
  background-color: #21b97a;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.van-icon-arrow-left:before) {
  color: #fff;
}
</style>
