<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        class="search"
        placeholder="请输入小区或地址"
        background="transparent"
      >
        <template #label>
          <div @click="$router.push('/city')">
            <span class="bj">{{ HomeCity === '' ? '北京' : HomeCity }}</span>
            <span class="bj bj-font"> ▼</span>
          </div>
        </template>
        <template #action>
          <span class="iconfont icon-ditu"></span>
        </template>
        <!-- <template #right-icon>

        </template> -->
      </van-search>
    </form>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in imges" :key="index">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 整租/合租/地图找房/去出租 -->
    <van-row class="Four-icon">
      <van-col span="6" class="TuBiao">
        <img src="../../assets/img/下载.png" alt="" />
        <span>整租</span>
      </van-col>
      <van-col span="6" class="TuBiao">
        <img src="../../assets/img/合租.png" alt="" />
        <span>合租</span>
      </van-col>
      <van-col span="6" class="TuBiao">
        <img src="../../assets/img/地图找房.png" alt="" />
        <span>地图找房</span>
      </van-col>
      <van-col span="6" class="TuBiao" @click="$router.push('/gorent')">
        <img src="../../assets/img/去出租.png" alt="" />
        <span>去出租</span>
      </van-col>
    </van-row>

    <!-- 整租小组 -->
    <div class="team">
      <van-cell-group>
        <van-cell title="整租小组" value="更多" />
      </van-cell-group>
      <van-row class="RentTeam">
        <van-col
          span="11"
          class="public"
          v-for="item in RentCity"
          :key="item.id"
        >
          <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
          <div class="text">
            <span class="title">{{ item.title }}</span>
            <span class="desc">{{ item.desc }}</span>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getShouye, getRentHouse } from '@/api'
export default {
  data () {
    return {
      imges: [],
      value: '',
      // 当前城市
      HomeCity: '',
      // 当地地区vlaue
      HomeEare: '',
      //  租房小组
      RentCity: ''
    }
  },
  created () {
    this.getShouye()
    // 保存进度   取值选中的城市-------------------------------------
    this.HomeCity = this.$store.state.city
    this.HomeEare = this.$store.state.homeEare
    console.log('当前城市', this.HomeCity, '地区vlaue值', this.HomeEare)
  },
  mounted () {
    this.getRentHouse()
  },
  methods: {
    // 获取首页轮播图
    async getShouye () {
      try {
        const { data } = await getShouye()
        this.imges = [...data.body]
      } catch (error) {
        console.log('Shouye', error)
      }
    },
    async getRentHouse () {
      try {
        const res = await getRentHouse(this.HomeEare)
        console.log('租房小组', res.data.body)
        this.RentCity = res.data.body
      } catch (e) {
        console.log('获取地区有误', e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  position: absolute;
  // top: 25px;
  z-index: 99;
  left: 5%;
  top: 0.3rem;

  .bj {
    font-size: 0.2rem;
    color: #7f7f80;
  }
  .bj-font {
    padding-right: 0.37rem;
    border-right: 0.02rem solid #ccc;
  }
  .icon-ditu {
    color: #fff;
    padding: 0.1rem;
    border: 0.06rem solid #fff;
    border-radius: 50%;
    font-size: 0.5rem;
  }
}
.Four-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  .TuBiao {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 65%;
    }
    span {
      font-size: 0.25rem;
      margin-top: 0.4rem;
    }
  }
}

.team {
  margin-top: 0.75rem;
  background-color: #f6f5f6;

  .van-cell {
    padding: 0.26667rem 0.67667rem;
    background-color: #f6f5f6;
  }
  .van-cell__title {
    font-weight: 700;
  }
  .van-cell__value {
    font-weight: 400;
  }

  .RentTeam {
    background-color: #f6f5f6;
    padding: 0 0.2rem 0.2rem 0.2rem;
    .public {
      display: flex;
      padding: 0.4rem;
      margin: 0.2rem;
      font-size: 0.3rem;
      background-color: #fff;
      img {
        width: 1rem;
        height: 1rem;
      }
      .text {
        margin-left: 0.65rem;
        display: flex;
        flex-direction: column;
      }
    }
    // margin: 0.35rem;
  }
}
// .my-swipe .van-swipe-item {
//   color: #fff;
//   font-size: 20px;
//   line-height: 5.5rem;
//   text-align: center;
//   background-color: #39a9ed;
//   img {
//     width: 100%;
//   }
// }

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 6rem;
  text-align: center;
  // background-color: #ccc;
  img {
    width: 100%;
  }
}
</style>
