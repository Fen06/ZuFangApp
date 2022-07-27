<template>
  <div>
    <!-- 顶部 -->
    <form action="/">
      <van-search
        show-action
        class="search"
        placeholder="请输入小区或地址"
        background="#21b97a"
      >
        <template #left>
          <van-icon name="arrow-left" class="arrow-left" @click="go" />
        </template>
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

    <van-tabbar
      v-model="active"
      :fixed="false"
      active-color="#21b97a"
      class="screen"
    >
      <van-tabbar-item class="title" @click="Eareshow = true"
        >区域 <span>▼</span></van-tabbar-item
      >
      <van-tabbar-item class="title" @click="Eareshow = true"
        >方式 <span>▼</span></van-tabbar-item
      >
      <van-tabbar-item class="title" @click="Eareshow = true"
        >租金 <span>▼</span></van-tabbar-item
      >
      <van-tabbar-item class="title" @click="rightShow = true"
        >筛选 <span>▼</span></van-tabbar-item
      >
    </van-tabbar>
    <!-- 面板显示 -->
    <van-popup class="eare" v-model="Eareshow" :style="{ height: '52.7%' }">
      <!-- 区域选择 -->
      <van-picker
        v-if="this.active === 0"
        show-toolbar
        :columns="columns"
        class="eareChoice"
      >
        <!-- @confirm="submit(item, index)" -->
        <template #confirm>
          <button class="EnterYes">确认</button>
        </template>

        <template #cancel>
          <button class="EnterNo" @click="Eareshow = false">取消</button>
        </template>
      </van-picker>
      <!-- 区域选择 -->
      <!-- 方式选择 -->
      <van-picker
        v-if="this.active === 1"
        confirm-button-text=" "
        cancel-button-text=" "
        show-toolbar
        :columns="FangShi"
        @confirm="submit"
      >
        <template #confirm>
          <button class="EnterYes">确认</button>
        </template>

        <template #cancel>
          <button class="EnterNo" @click="Eareshow = false">取消</button>
        </template>
      </van-picker>
      <!-- 方式选择 -->
      <!-- 租金选择 -->
      <van-picker
        v-if="this.active === 2"
        confirm-button-text=" "
        cancel-button-text=" "
        show-toolbar
        :columns="money"
        @confirm="rent"
      >
        <template #confirm>
          <button class="EnterYes">确认</button>
        </template>

        <template #cancel>
          <button class="EnterNo" @click="Eareshow = false">取消</button>
        </template>
      </van-picker>
      <!-- 租金选择 -->
    </van-popup>

    <!-- 筛选 -->
    <van-popup
      v-model="rightShow"
      class="rightPopup"
      position="right"
      :style="{ width: '78%' }"
    >
      <!-- 户型 -->
      <van-row class="screenBox">
        <van-col class="screenBox-list">
          <p class="HxText">户型</p>
          <van-row class="HouseType">
            <!-- SelectionCurrent -->
            <van-col
              span="8"
              class="TypeSelection"
              :class="{ SelectionCurrent: isCurrent.indexOf(item.value) > -1 }"
              v-for="(item, index) in HuXing"
              :key="index"
              @click="Cuttent(item.value)"
              >{{ item.label }}</van-col
            >
          </van-row>
        </van-col>
      </van-row>
      <!-- 朝向 -->
      <van-row class="screenBox">
        <van-col class="screenBox-list">
          <p class="HxText">朝向</p>
          <van-row class="HouseDirection">
            <van-col
              span="8"
              class="DirectionSelection"
              :class="{ SelectionCurrent: isCurrent.indexOf(item.value) > -1 }"
              v-for="(item, index) in ChaoXiang"
              :key="index"
              @click="CXCuttent(item.value)"
              >{{ item.label }}</van-col
            >
          </van-row>
        </van-col>
      </van-row>

      <!-- 楼层 -->
      <van-row class="screenBox">
        <van-col class="screenBox-list">
          <p class="HxText">楼层</p>
          <van-row class="HouseLouCeng">
            <van-col
              span="8"
              class="LouCengSelection"
              :class="{ SelectionCurrent: isCurrent.indexOf(item.value) > -1 }"
              v-for="(item, index) in LouCeng"
              :key="index"
              @click="LcCuttent(item.value)"
              >{{ item.label }}</van-col
            >
          </van-row>
        </van-col>
      </van-row>

      <!-- 亮点 -->
      <van-row class="screenBox">
        <van-col class="screenBox-list">
          <p class="HxText">房屋亮点</p>
          <van-row class="HouseLiangDian">
            <van-col
              span="8"
              class="LiangDianSelection"
              :class="{ SelectionCurrent: isCurrent.indexOf(item.value) > -1 }"
              v-for="(item, index) in LiangDian"
              :key="index"
              @click="LdCuttent(item.value)"
              >{{ item.label }}</van-col
            >
          </van-row>
        </van-col>
      </van-row>
      <div class="footer">
        <van-button type="primary" class="clear" @click="clear"
          >清除</van-button
        >
        <van-button type="primary" class="enter">确定</van-button>
      </div>
    </van-popup>

    <Favorate :item="FindHouse"></Favorate>
  </div>
</template>

<script>
import Favorate from '@/components/Favorate'
import { Toast } from 'vant'
import { getCityEare, getFindHouse } from '@/api'
export default {
  data () {
    return {
      value: '',
      // 当前城市
      HomeCity: '',
      // 当地地区vlaue
      HomeEare: '',
      active: '',
      Eareshow: false,
      // 右侧筛选
      rightShow: false,
      // 区域选择
      columns: [],
      // 区域选择
      // 方式选择
      FangShi: [],
      // 方式选择
      // 租金选择
      money: [],
      // 租金选择
      // 户型
      HuXing: [],
      // 朝向
      ChaoXiang: [],
      // 楼层
      LouCeng: [],
      // 房屋亮点
      LiangDian: [],
      // ACtiove: 0,
      isCurrent: [],
      FindHouse: [],
      XuanZValue: [],
      ThisCity: [],
      // 确认租金
      Rent: '',
      // 确认方式
      Fs: ''
    }
  },
  components: {
    Favorate
  },
  created () {
    this.HomeCity = this.$store.state.city
    this.HomeEare = this.$store.state.homeEare
    this.getFindHouse()
    console.log('当前城市', this.HomeCity, '地区vlaue值', this.HomeEare)
    this.getCityEare()
  },
  mounted () {},
  methods: {
    go () {
      this.$router.go(-1)
    },
    btnOut () {
      this.Eareshow = false
    },
    clear () {
      this.isCurrent = ''
    },
    Cuttent (item) {
      if (this.isCurrent.some((ele) => ele === item)) {
        this.isCurrent = this.isCurrent.filter((ele) => ele !== item)
      } else {
        this.isCurrent.push(item)
      }
    },
    CXCuttent (item) {
      if (this.isCurrent.some((ele) => ele === item)) {
        this.isCurrent = this.isCurrent.filter((ele) => ele !== item)
      } else {
        this.isCurrent.push(item)
      }
    },
    LcCuttent (item) {
      if (this.isCurrent.some((ele) => ele === item)) {
        this.isCurrent = this.isCurrent.filter((ele) => ele !== item)
      } else {
        this.isCurrent.push(item)
      }
    },
    LdCuttent (item) {
      if (this.isCurrent.some((ele) => ele === item)) {
        this.isCurrent = this.isCurrent.filter((ele) => ele !== item)
      } else {
        this.isCurrent.push(item)
      }
      console.log(this.isCurrent)
    },
    // 获取当前城市列表
    async getFindHouse () {
      try {
        Toast.loading({
          message: '正在加载数据...',
          forbidClick: true,
          duration: 0
        })
        const res = await getFindHouse({ cityId: this.HomeEare })
        console.log(res)
        this.FindHouse = res.data.body.list
        Toast.clear()
      } catch (e) {
        console.log('查询房屋', e)
      }
    },
    async submit (item, index) {
      console.log(item, index)
      const rent = this.ThisCity.rentType.filter((ele) => ele.label === item)
      this.Fs = rent[0].value
      console.log(this.Fs)
      this.Eareshow = false
      const res = await getFindHouse({
        cityId: this.HomeEare,
        rentType: this.Fs
      })
      console.log(res)
    },
    // 确认租金
    async rent (item, index) {
      console.log(item, index)
      const rent = this.ThisCity.price.filter((ele) => ele.label === item)
      this.Rent = rent[0].value
      console.log(this.Rent)
      this.Eareshow = false
      const res = await getFindHouse({
        cityId: this.HomeEare,
        price: this.Rent
      })
      console.log(res)
    },
    // 获得当前城市房屋查询条件
    async getCityEare () {
      try {
        Toast.loading({
          message: '正在加载当前城市信息...',
          forbidClick: true,
          duration: 0
        })
        const { data } = await getCityEare(this.HomeEare)
        // 设置区域值
        for (let i = 0; i < 2; i++) {
          if (i === 0) {
            this.columns.push({ text: '', children: [] })
            this.columns[i].text = data.body.area.label
            for (let j = 0; j < data.body.area.children.length; j++) {
              this.columns[i].children.push({ text: '', children: [] })
              this.columns[i].children[j].text =
                data.body.area.children[j].label
              if (j === 0) {
                this.columns[i].children[j].children.push({ text: '' })
              } else {
                for (
                  let k = 0;
                  k < data.body.area.children[j].children.length;
                  k++
                ) {
                  this.columns[i].children[j].children.push({ text: '' })
                  this.columns[i].children[j].children[k].text =
                    data.body.area.children[j].children[k].label
                }
              }
            }
          } else {
            this.columns.push({ text: '', children: [] })
            this.columns[i].text = data.body.subway.label
            for (let j = 0; j < data.body.subway.children.length; j++) {
              this.columns[i].children.push({ text: '', children: [] })
              this.columns[i].children[j].text =
                data.body.subway.children[j].label
              if (j === 0) {
                this.columns[i].children[j].children.push({ text: '' })
              } else {
                for (
                  let k = 0;
                  k < data.body.subway.children[j].children.length;
                  k++
                ) {
                  this.columns[i].children[j].children.push({ text: '' })
                  this.columns[i].children[j].children[k].text =
                    data.body.subway.children[j].children[k].label
                }
              }
            }
          }
        }
        // 设置方式值
        const Fs = data.body.rentType
        for (let i = 0; i < Fs.length; i++) {
          this.FangShi.push(Fs[i].label)
        }
        // money
        // 设置租金值
        const Mo = data.body.price
        for (let i = 0; i < Mo.length; i++) {
          this.money.push(Mo[i].label)
        }
        // 设置筛选中的户型
        const Hx = data.body.roomType
        for (let i = 0; i < Hx.length; i++) {
          this.HuXing.push(Hx[i])
          // console.log(this.HuXing)
        }
        // 设置筛选中的朝向
        const Cx = data.body.oriented
        for (let i = 0; i < Cx.length; i++) {
          this.ChaoXiang.push(Cx[i])
        }

        // 设置筛选中的楼层
        const Lc = data.body.floor
        for (let i = 0; i < Lc.length; i++) {
          this.LouCeng.push(Lc[i])
        }
        // 设置筛选中的房屋亮点
        const Ld = data.body.characteristic
        for (let i = 0; i < Ld.length; i++) {
          this.LiangDian.push(Ld[i])
        }
        Toast.clear()
        this.ThisCity = data.body
        console.log('当前城市信息', this.ThisCity)
      } catch (e) {
        console.log('该城市的信息', e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.EnterYes {
  position: absolute;
  width: 6rem;
  height: 1.1rem;
  margin-top: 8.27rem;
  background-color: #21b97a;
  color: #fff;
  margin-left: -5.6rem;
  margin-top: 7.67rem;
  border-top: 0.02rem solid #ccc;
  font-size: 0.45rem;
  border: unset;
}

.EnterNo {
  width: 3.5rem;
  height: 1.1rem;
  margin-top: 8.27rem;
  color: #21b97a;
  font-size: 0.45rem;
  margin-left: -0.35rem;
  border: unset;
  background: #fff;
}
.search {
  z-index: 2009;
  left: 5%;
  top: 0.3rem;
  .arrow-left {
    color: #fff;
    margin-left: -0.1rem;
  }
  .van-search__content {
    margin-left: 0.25rem;
  }
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
    margin-right: 0.45rem;
  }
}

.screen {
  z-index: 3;
  .title {
    font-size: 0.425rem;
    span {
      font-size: 0.2rem;
    }
  }
}
.eare {
  margin-top: 3.8rem;
  width: 101%;
  top: 3.5rem;
  z-index: 5000;
}

.screenBox {
  display: flex;
  flex-direction: column;

  // 户型
  .HouseType {
    border-bottom: 0.02rem solid #e5e5e5;
    width: 75%;
    margin-left: 20%;
    .TypeSelection {
      font-size: 0.35rem;
      border: 0.01rem solid #dddddd;
      text-align: center;
      color: #888888;
      padding: 0.2rem 0;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.1rem;
    }
  }

  // 朝向

  .HouseDirection {
    border-bottom: 0.02rem solid #e5e5e5;
    width: 75%;
    margin-left: 20%;
    .DirectionSelection {
      font-size: 0.35rem;
      border: 0.01rem solid #dddddd;
      text-align: center;
      color: #888888;
      padding: 0.2rem 0;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.1rem;
    }
  }

  // 楼层

  .HouseLouCeng {
    border-bottom: 0.02rem solid #e5e5e5;
    width: 75%;
    margin-left: 20%;
    .LouCengSelection {
      font-size: 0.35rem;
      border: 0.01rem solid #dddddd;
      text-align: center;
      color: #888888;
      padding: 0.2rem 0;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.1rem;
    }
  }

  // 亮点
  .HouseLiangDian {
    width: 75%;
    margin-left: 20%;
    .LiangDianSelection {
      font-size: 0.35rem;
      border: 0.01rem solid #dddddd;
      text-align: center;
      color: #888888;
      padding: 0.2rem 0;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 0.1rem;
    }
  }
  .HxText {
    font-size: 0.42rem;
    margin-left: 0.5rem;
  }
}

.footer {
  position: -webkit-sticky;
  position: sticky; /*兼容*/
  left: 0%;
  bottom: 0%;
  // border-radius: unset;
  .clear {
    width: 3rem;
    height: 1.4rem;
    background-color: #fff;
    color: #21b97a;
    border-top: 0.02rem solid #e9e9e9;
    border-left: unset;
    border-right: unset;
    border-bottom: unset;
    font-size: 0.45rem;
  }
  .enter {
    font-size: 0.45rem;
    width: 4.8rem;
    height: 1.4rem;
    background-color: #fff;
    color: #21b97a;
    border-top: 0.02rem solid #e9e9e9;
    border-left: unset;
    border-right: unset;
    border-bottom: unset;
    background-color: #21b97a;
    color: #fff;
  }
}
// 高亮效果-----------------------------------
.SelectionCurrent {
  font-size: 0.35rem;
  text-align: center;
  padding: 0.2rem 0;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.1rem;
  background-color: #defaef;
  border: 0.01rem solid #21b97a;
  color: #21b97a;
}
</style>
