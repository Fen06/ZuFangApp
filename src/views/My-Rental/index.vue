<template>
  <div>
    <van-nav-bar
      class="Top"
      title="房屋管理"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="toast" v-if="this.FavorateList.length === 0">
      <!--  -->
      <img src="http://liufusong.top:8080/img/not-found.png" alt="" />
      <p class="text">您还没有发布房源，<span>去发布房源</span>吧~</p>
    </div>
    <Favorate v-else :item="FavorateList"></Favorate>
  </div>
</template>

<script>
import Favorate from '@/components/Favorate/index.vue'
import { Toast } from 'vant'

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
        Toast.loading({
          message: '加载中...',
          forbidClick: true
        })
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
.toast {
  margin-top: 2rem;
  img {
    margin-left: 2.5rem;
    width: 5rem;
  }
  .text {
    text-align: center;
    font-size: 0.32rem;
    span {
      color: #33c4b8;
    }
  }
}
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
