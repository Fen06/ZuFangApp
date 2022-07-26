<template>
  <div>
    <!-- 顶部 -->
    <form action="/">
      <van-search
        v-model="value"
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
    <van-popup
      class="eare"
      v-model="Eareshow"
      style="height: 52.7%; z-index: 2"
      :style="{ height: '52.7%' }"
    >
      <!-- 区域选择 -->
      <van-picker
        v-if="this.active === 0"
        show-toolbar
        :columns="columns"
        class="eareChoice"
      >
      </van-picker>
      <!-- 区域选择 -->
      <!-- 方式选择 -->
      <van-picker
        v-if="this.active === 1"
        title="标题"
        show-toolbar
        :columns="FangShi"
      />
      <!-- 方式选择 -->
      <!-- 租金选择 -->
      <van-picker
        v-if="this.active === 2"
        title="标题"
        show-toolbar
        :columns="money"
      />
      <!-- 租金选择 -->
      <van-row class="button">
        <van-col span="8"
          ><van-button class="popupNo" type="primary" @click="btnOut"
            >取消</van-button
          ></van-col
        >
        <van-col span="16"
          ><van-button class="popupYes" type="primary"
            >确认</van-button
          ></van-col
        >
      </van-row>
    </van-popup>

    <!-- 筛选 -->
    <van-popup
      v-model="rightShow"
      class="rightPopup"
      position="right"
      style="width: 78%; z-index: 2355"
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
              :class="item.isSelectet ? 'SelectionCurrent' : ''"
              v-for="(item, index) in HuXing"
              :key="index"
              @click="Cuttent(item, index)"
              >{{ item.name }}</van-col
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
              :class="item.isSelectet ? 'SelectionCurrent' : ''"
              v-for="(item, index) in ChaoXiang"
              :key="index"
              @click="CXCuttent(item, index)"
              >{{ item.name }}</van-col
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
              :class="item.isSelectet ? 'SelectionCurrent' : ''"
              v-for="(item, index) in LouCeng"
              :key="index"
              @click="LcCuttent(item, index)"
              >{{ item.name }}</van-col
            >
          </van-row>
        </van-col>
      </van-row>

      <!-- 亮点 -->
      <van-row class="screenBox">
        <van-col class="screenBox-list">
          <p class="HxText">楼层</p>
          <van-row class="HouseLiangDian">
            <van-col
              span="8"
              class="LiangDianSelection"
              :class="item.isSelectet ? 'SelectionCurrent' : ''"
              v-for="(item, index) in LiangDian"
              :key="index"
              @click="LdCuttent(item, index)"
              >{{ item.name }}</van-col
            >
          </van-row>
        </van-col>
      </van-row>
      <div class="footer">
        <van-button type="primary" class="clear" @click="Clear"
          >清除</van-button
        >
        <van-button type="primary" class="enter">确定</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
// import Favorate from '@/components/Favorate'
import { Toast } from 'vant'
import { getCityEare } from '@/api'
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
      columns: [
        {
          text: '区域',
          children: [
            {
              text: '不限',
              children: [{ text: '' }, { text: '' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '地跌',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],

      // 区域选择
      // 方式选择
      FangShi: ['不限', '整租', '合租'],
      // 方式选择
      // 租金选择
      money: [
        '不限',
        '1000以下',
        '1000-2000',
        '2000-3000',
        '3000-4000',
        '4000-5000',
        '5000-7000',
        '7000以上'
      ],
      // 租金选择
      // 户型
      HuXing: [
        { name: '一室', isSelectet: false },
        { name: '二室', isSelectet: false },
        { name: '三室', isSelectet: false },
        { name: '四室', isSelectet: false },
        { name: '四室+', isSelectet: false }
      ],
      // 朝向
      ChaoXiang: [
        { name: '东', isSelectet: false },
        { name: '南', isSelectet: false },
        { name: '西', isSelectet: false },
        { name: '北', isSelectet: false },
        { name: '东南', isSelectet: false },
        { name: '东北', isSelectet: false },
        { name: '西南', isSelectet: false },
        { name: '西北', isSelectet: false }
      ],
      //  ['东', '南', '西', '北', '东南', '东北', '西南', '西北']
      // 楼层
      LouCeng: [
        { name: '高楼层', isSelectet: false },
        { name: '中楼层', isSelectet: false },
        { name: '低楼层', isSelectet: false }
      ],
      // '高楼层', '中楼层', '低楼层'
      // 房屋两点
      LiangDian: [
        { name: '集中供暖', isSelectet: false },
        { name: '双卫生间', isSelectet: false },
        { name: '近地铁', isSelectet: false },
        { name: '随时看房', isSelectet: false },
        { name: '精装', isSelectet: false },
        { name: '公寓', isSelectet: false },
        { name: '独立卫生间', isSelectet: false },
        { name: '押一付一', isSelectet: false },
        { name: '独立阳台', isSelectet: false },
        { name: '月租', isSelectet: false },
        { name: '限女生', isSelectet: false },
        { name: '限男生', isSelectet: false },
        { name: '新上', isSelectet: false }
      ]
      // ACtiove: 0,
    }
  },
  created () {
    this.HomeCity = this.$store.state.city
    this.HomeEare = this.$store.state.homeEare
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
    Cuttent (item, index) {
      this.actiove = index
      item.isSelectet = !item.isSelectet
    },
    CXCuttent (item, index) {
      this.actiove = index
      item.isSelectet = !item.isSelectet
    },
    LcCuttent (item, index) {
      this.actiove = index
      item.isSelectet = !item.isSelectet
    },
    LdCuttent (item, index) {
      this.actiove = index
      item.isSelectet = !item.isSelectet
    },
    async getCityEare () {
      try {
        Toast.loading({
          message: '正在加载当前城市信息...',
          forbidClick: true
        })
        const res = await getCityEare(this.HomeEare)
        console.log('当前城市信息', res)
      } catch (e) {
        console.log('该城市的信息', e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  z-index: 99;
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
  z-index: 2100;
  .title {
    font-size: 0.425rem;
    span {
      font-size: 0.2rem;
    }
  }
}
.eare {
  margin-top: 2.8rem;
  width: 101%;
  top: 3.5rem;
  z-index: 2003;
}
.button {
  .popupNo {
    width: 100%;
    text-align: center;
    background-color: #fff;
    color: #21b97a;
    border: unset;
    font-size: 0.46rem;
  }
  .popupYes {
    width: 100%;
    background-color: #21b97a;
    font-size: 0.46rem;
  }
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
