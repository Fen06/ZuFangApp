<template>
  <div>
    <van-nav-bar
      class="Top"
      title="住房名称"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="Ttop">
      <van-row class="introduce">
        <span class="name">XX小区</span>
        <div class="box"><span class="biaoq">近地铁</span></div>
      </van-row>

      <van-row class="price">
        <van-col span="8">
          <div class="topred">3000/月</div>
          <div class="bottom">租金</div>
        </van-col>
        <van-col span="8">
          <div class="topred">3000/月</div>
          <div class="bottom">租金</div>
        </van-col>
        <van-col span="8">
          <div class="topred">3000/月</div>
          <div class="bottom">租金</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.Top {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon-arrow-left:before) {
    color: #fff;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 6rem;
  text-align: center;
  background-color: #39a9ed;
}
.Ttop {
  padding: 0 0.6rem;
  .introduce {
    // background-color: #ccc;
    display: flex;
    height: 2.4rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 0.03rem solid #ccc;
    .name {
      font-size: 0.45rem;
    }
    .box {
      .biaoq {
        color: #39becd;
        background: #e1f5f8;
        padding: 0.08rem;
        margin-top: 0.08rem;
        font-size: 0.3rem;
        width: 1rem;
        border-radius: 0.08rem;
      }
    }
  }

  .price {
    height: 2.4rem;
    align-items: center;
    justify-content: center;
    border-bottom: 0.03rem solid #ccc;
  }
}
</style>
