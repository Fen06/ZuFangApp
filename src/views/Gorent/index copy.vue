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
      <van-field
        v-model="username"
        name="房源信息"
        label="房源信息"
        class="Fyxx"
      />
      <van-field v-model="xiaoquname" name="小区名称" label="小区名称" />
      <van-field v-model="zujin" name="租金" placeholder="请输入租金/月"
        ><template #label>租 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 金</template>
        <template #right-icon>¥ / 月</template>
      </van-field>
      <van-field
        v-model="username"
        name="建筑面积"
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #right-icon>㎡</template></van-field
      >

      <!-- 户型选择 -->
      <Xuanzq></Xuanzq>
      <!-- 所在楼层 -->
      <Atlouceng></Atlouceng>
      <!-- 朝向 -->
      <DNXB></DNXB>
      <!-- 房屋标题 -->
      <van-cell-group>
        <van-field
          v-model="value"
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
        <p>房屋配置</p>
      </div>
    </van-form>

    <div class="solid"></div>
    <van-row class="House-configure">
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-yigui-hui"></i>
        <span class="iconName">衣柜</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-xiyiji"></i>
        <span class="iconName">洗衣机</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-kongdiao"></i>
        <span class="iconName">空调</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-meiqitianranqi"></i>
        <span class="iconName">天然气</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-bingxiang"></i>
        <span class="iconName">冰箱</span>
      </van-col>
    </van-row>
    <van-row class="House-configure">
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-shuinuanqigongcheng"></i>
        <span class="iconName">暖气</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-dianshi"></i>
        <span class="iconName">电视</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-haofangtuo400iconfont2reshuiqi"></i>
        <span class="iconName">热水器</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-wifi"></i>
        <span class="iconName">宽带</span>
      </van-col>
      <van-col span="4" class="House-configure-box">
        <i class="iconfont icon-haofangtuo400iconfont2shafa"></i>
        <span class="iconName">沙发</span>
      </van-col>
    </van-row>

    <div class="Hui"></div>
    <van-cell-group class="Miaoshu">
      <van-field v-model="value" disabled>
        <template #label> <span class="Fangwums">房屋描述</span> </template>
      </van-field>
    </van-cell-group>
    <van-field
      v-model="message"
      rows="1"
      autosize
      type="textarea"
      placeholder="请输入房屋描述信息"
    />
  </div>
</template>
<script>
import Xuanzq from './compoents/xuanzq.vue'
import Atlouceng from './compoents/Atlouceng.vue'
import DNXB from './compoents/DNXB.vue'
export default {
  data () {
    return {}
  },
  components: {
    Xuanzq,
    Atlouceng,
    DNXB
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
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
.House-configure {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem 0rem;
  .House-configure-box {
    display: flex;
    flex-direction: column;
    align-items: center;
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
.current {
  color: #21b97a;
}
.Hui {
  width: 100%;
  height: 0.6rem;
  background-color: #f6f5f6;
}
.Miaoshu {
  .Fangwums {
    color: #333d6e;
  }
}
</style>
