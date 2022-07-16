<template>
  <div>
    <van-nav-bar
      class="Top"
      title="收藏列表"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <!-- <div class="link">
      <div class="left">
        <div class="picture"></div>
      </div>
      <div class="right">
        <span class="title">单租</span>
        <p class="miaoshu">二室XXXXXXXXX</p>
        <div class="box"><span class="text">进地铁</span></div>
        <p class="price">2000 元/月</p>
      </div>
    </div> -->

    <van-row class="link">
      <van-col span="8" class="left">
        <van-image
          width="3rem"
          height="3rem"
          fit="contain"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col span="16" class="right">
        <sanp class="title">标题名字</sanp>
        <sanp class="miaoshu">4室XXXXXXXXXXX</sanp>
        <sanp class="biaoq">进地铁</sanp>
        <sanp class="price">8888元/月</sanp>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
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

.link {
  background-color: #ccc;
  display: flex;
  border-bottom: 0.5px solid #ccc;
  .right {
    height: 2rem;
    margin-top: 0.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 0.4rem;
      font-weight: bold;
      margin-bottom: 0.08rem;
    }
    .miaoshu {
      color: #ccc;
      font-size: 0.3rem;
    }
    .biaoq {
      color: #39becd;
      background: #e1f5f8;
      padding: 0.08rem;
      margin-top: 0.08rem;
      font-size: 0.3rem;
      width: 1rem;
      border-radius: 0.08rem;
    }
    .price {
      font-size: 0.35rem;
      color: red;
      font-weight: bold;
    }
  }
}

// .link {
//   width: 100%;
//   height: 2.4rem;
//   background-color: #ccc;
//   display: flex;
//   .left {
//     flex: 1;
//     height: 2rem;
//     background-color: #fff;
//     margin-top: 0.18rem;
//   }
//   .right {
//     flex: 2;
//     background-color: red;
//     height: 2rem;
//     margin-top: 0.18rem;
//   }
//   .text {
//     color: #39becd;
//     background: #e1f5f8;
//     padding: 0.1rem;
//     font-size: 0.21rem;
//     border-radius: 0.08rem;
//   }
//   .title {
//     font-size: 0.41rem;
//     font-weight: bold;
//   }
//   .miaoshu {
//     font-size: 0.21rem;
//     color: #afb2b3;
//     margin-top: -0.01rem;
//   }
//   .box {
//     margin-top: -0.3rem;
//   }
//   .price {
//     font-size: 0.21rem;
//   }
// }
</style>
