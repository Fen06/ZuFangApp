<template>
  <div>
    <van-nav-bar
      class="Top"
      title="房屋管理"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <Favorate :item="FavorateList"></Favorate>
  </div>
</template>

<script>
import Favorate from '@/components/Favorate/index.vue'
import { getUserHouses } from '@/api'
export default {
  data () {
    return {
      FavorateList: []
    }
  },
  components: {
    Favorate
  },
  created () {
    this.getUserHouses()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getUserHouses () {
      try {
        const res = await getUserHouses()
        console.log(res)
        this.FavorateList = res.data.body
      } catch (error) {
        console.log('getUserHouses', error)
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
