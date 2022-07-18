<template>
  <div>
    <van-row class="link" v-for="(item, index) in item" :key="index">
      <router-link
        :to="{
          name: 'details',
          params: {
            detailsId: item.houseCode
          }
        }"
      >
        <!-- `#/details/${item.houseCode}` -->
        <van-col span="8" class="left">
          <van-image
            width="3rem"
            height="3rem"
            fit="contain"
            :src="`http://liufusong.top:8080${item.houseImg}`"
          />
        </van-col>
        <van-col span="16" class="right">
          <span class="title">{{ item.title }}</span>
          <span class="miaoshu">{{ item.desc }}</span>
          <span class="biaoq">{{ item.tags && item.tags[0] }}</span>
          <span class="price">{{ item.price }} 元/月</span>
        </van-col>
      </router-link>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'FavorateLList',
  props: {
    item: {
      type: Array,
      required: true
      //   default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  // background-color: #ccc;
  //   display: flex;
  border-bottom: 0.5px solid #ccc;

  .van-image__img {
    display: block;
    width: 106px;
    margin-top: 0.5rem;
    height: 80px;
  }
  .right {
    height: 2rem;
    margin-top: 0.5rem;
    // background-color: #fff;
    display: flex;
    flex-direction: column;
    // margin-left: 0.25rem;

    .title {
      font-size: 0.4rem;
      font-weight: bold;
      // margin-bottom: 0.08rem;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
      width: 1.3rem;
      text-align: center;
      border-radius: 0.08rem;
    }
    .price {
      font-size: 0.35rem;
      color: red;
      font-weight: bold;
    }
  }
}
</style>
