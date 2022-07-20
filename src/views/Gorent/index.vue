<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar
      class="Top"
      title="发布房源"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <!-- 表体 -->
    <van-form @submit="onSubmit">
      <van-field name="房源信息" label="房源信息" class="Fyxx" disabled />
      <a href="#/gorent/search"
        ><van-field
          name="小区名称"
          label="小区名称"
          placeholder="请输入小区名称"
          class="XiaoQuGo"
      /></a>
      <van-field name="租金" placeholder="请输入租金/月"
        ><template #label>租 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 金</template>
        <template #right-icon>¥ / 月</template>
      </van-field>
      <van-field name="建筑面积" label="建筑面积" placeholder="请输入建筑面积">
        <template #right-icon>㎡</template></van-field
      >

      <!-- 户型选择 -->
      <Xuanzq></Xuanzq>
      <!-- 所在楼层 -->
      <Atlouceng :HouseCondition="HouseCondition"></Atlouceng>
      <!-- 朝向 -->
      <DNXB></DNXB>
      <!-- 房屋标题 -->
      <van-cell-group>
        <van-field
          placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
          class="houseImg"
        >
          <template #label
            ><br /><br />
            房屋图像
          </template>
        </van-field>
      </van-cell-group>
      <!-- 房屋配置 -->
      <div class="upImg">
        <van-icon name="plus" class="upicon" />
        <!-- <van-field name="uploader">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field> -->
        <p>房屋配置</p>
      </div>
      <!-- </van-form> -->

      <div class="solid"></div>
      <van-row id="House-configure" :column-num="5">
        <van-col
          span="4"
          class="House-configure-box"
          v-for="(item, index) in HouseCondition.supporting"
          :key="index"
        >
          <i class="iconfont icon-yigui-hui"></i>
          <span class="iconName">{{ item.label }}</span>
        </van-col>
      </van-row>
      <!-- <van-row id="House-configure">
        <van-col span="4" class="House-configure-box">
          <i class="iconfont icon-shuinuanqigongcheng"></i>
          <span class="iconName">暖气</span>
        </van-col>

      </van-row> -->

      <div class="Hui"></div>
      <van-cell-group class="Miaoshu">
        <van-field v-model="value" disabled>
          <template #label> <span class="Fangwums">房屋描述</span> </template>
        </van-field>
      </van-cell-group>
      <van-field
        rows="6"
        autosize
        type="textarea"
        placeholder="请输入房屋描述信息"
        show-word-limit
      />
      <div class="HuiFooter"></div>
      <div class="isSubmit">
        <button class="no" @click="isOut">取消</button>
        <button class="yes" native-type="submit">提交</button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Dialog } from 'vant'
import { getHouseCondition } from '@/api'
import Xuanzq from './compoents/xuanzq.vue'
import Atlouceng from './compoents/Atlouceng.vue'
import DNXB from './compoents/DNXB.vue'
export default {
  data () {
    return {
      body: {},
      value: '',
      HouseCondition: []
    }
  },
  created () {
    this.getHouseCondition()
  },
  components: {
    Xuanzq,
    Atlouceng,
    DNXB
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getHouseCondition () {
      const res = await getHouseCondition()
      // console.log(res)
      console.log(res.data.body)
      this.HouseCondition = res.data.body
    },
    onSubmit () {
      // this.getHouseCondition()
    },
    isOut () {
      Dialog.confirm({
        title: '标题',
        message: '放弃发布房源？',
        cancelButtonText: '放弃',
        confirmButtonText: '继续编辑'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
          this.onClickLeft()
        })
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
.Fyxx {
  :deep(.van-field__label) {
    color: #21b97a;
  }
}
:deep(.XiaoQuGo) {
  .van-field__control {
    margin-left: 3.25rem;
    color: #888888;
  }
}
:deep(.Hx) {
  border-bottom: 0.01rem solid #f5f6f7;
  .van-field__control {
    margin-left: 4.7rem;
    color: #888888;
  }
}
:deep(.houseTitle) {
  margin-bottom: 0rem;
}
:deep(.houseImg) {
  .van-field__control {
    width: 120%;
    margin-left: -2.7rem;
  }
}
.upImg {
  width: 2.5rem;
  height: 2.5rem;
  border: 0.02rem solid #dddddd;
  margin: 0.3rem;
  .upicon {
    left: 0.85rem;
    top: 0.85rem;
    color: #dddddd;
  }
  p {
    font-size: 0.35rem;
    margin-top: 2.5rem;
    margin-left: 0.1rem;
  }
}
.solid {
  width: 100%;
  height: 0.01rem;
  background: #f7f8f9;
  margin-top: 1.1rem;
}
#House-configure {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem 0rem;
  flex-wrap: wrap;
  .van-col--4 {
    width: 20%;
  }

  .House-configure-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3rem 0;
    .iconfont {
      font-size: 0.65rem;
      color: #333333;
    }
    .iconName {
      font-size: 0.4rem;
      color: #333333;
      margin-top: 0.12rem;
    }
  }
}
:deep(.current) {
  color: #21b97a;
}
.Hui {
  width: 100%;
  height: 0.6rem;
  background-color: #f6f5f6;
}
.HuiFooter {
  width: 100%;
  height: 2rem;
  background-color: #f6f5f6;
}
.Miaoshu {
  .Fangwums {
    color: #333d6e;
  }
}
.van-field__body {
  min-height: 5rem;
}
.isSubmit {
  .no {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 1.25rem;
    border: none;
    background-color: #fff;
    font-size: 0.4rem;
    color: #21b97a;
  }
  .yes {
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 50%;
    height: 1.25rem;
    border: none;
    background-color: #21b97a;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
