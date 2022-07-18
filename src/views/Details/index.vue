<template>
  <!-- 顶部 -->
  <div class="bgc">
    <!-- 顶部 -->
    <van-nav-bar
      class="Top"
      :title="HousesInformation.description"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in HousesInformation.houseImg"
        :key="index"
      >
        <img :src="`http://liufusong.top:8080${item}`" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 小区简介 -->
    <div class="Community-profile">
      <div class="Ttop">
        <van-row class="introduce">
          <span class="name">{{ HousesInformation.title }}</span>
          <div class="box">
            <span class="biaoq">{{
              HousesInformation.tags && HousesInformation.tags[0]
            }}</span>
          </div>
        </van-row>

        <van-row class="price">
          <van-col class="price-box" span="8">
            <div class="topred">{{ HousesInformation.price }}/月</div>
            <div class="bottom">租金</div>
          </van-col>
          <van-col class="price-box" span="8">
            <div class="topred">{{ HousesInformation.roomType }}</div>
            <div class="bottom">房型</div>
          </van-col>
          <van-col class="price-box" span="8">
            <div class="topred">{{ HousesInformation.size }}平米</div>
            <div class="bottom">面积</div>
          </van-col>
        </van-row>

        <van-row class="classification">
          <van-col class="left-classification" span="12">
            <div class="showzx">
              <span class="grey">装修：</span><span class="black">精装</span>
            </div>
            <div class="showlouc">
              <span class="grey">楼层：</span
              ><span class="black">{{ HousesInformation.floor }}</span>
            </div>
          </van-col>
          <van-col class="right-classification" span="12">
            <div class="showzx">
              <span class="grey">朝向：</span
              ><span>{{ HousesInformation.oriented[0] }}</span>
            </div>
            <div class="showlouc">
              <span class="grey">类型：</span><span>普通住宅</span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>

    <!-- 位置配套 -->
    <div class="Location-conditions">
      <van-row class="row"><p>小区：天山星城</p></van-row>
      <van-row class="map">
        <div class="img"></div>
      </van-row>
      <van-row class="row-title">
        <p>房间配套</p>
      </van-row>
      <van-row class="row-icon">
        <van-col span="4" class="icon-box">
          <van-icon name="gem-o"></van-icon>
          <span>{{ HousesInformation.supporting[0] }}</span>
        </van-col>
      </van-row>
    </div>
    <!-- 房源近况 -->
    <div class="recent-developments">
      <van-row class="recent-title"> <p>房源近况</p> </van-row>
      <van-row class="master">
        <van-col span="6"
          ><van-image
            width="1.65rem"
            height="1.65rem"
            fit="cover"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </van-col>
        <van-col span="6" class="Owner-information">
          <span>王女士</span>
          <div class="Certification-words">
            <van-icon name="passed" class="authentication" />
            <span>已认证房主</span>
          </div>
        </van-col>
        <van-col span="6"></van-col>
        <van-col span="6" class="button">
          <van-button plain type="primary" class="button-btn"
            >发消息</van-button
          >
        </van-col>
      </van-row>
      <van-row class="text">
        <p>
          1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
          2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
          3.人车分流，环境优美。
          4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
        </p>
      </van-row>
    </div>

    <!-- 猜你喜欢 -->
    <div class="like">
      <van-row class="like-title"><p>猜你喜欢</p></van-row>
      <van-row class="link">
        <van-col span="8" class="left">
          <van-image
            width="3rem"
            height="3rem"
            fit="contain"
            src="http://liufusong.top:8080/img/message/1.png"
          />
        </van-col>
        <van-col span="16" class="right">
          <span class="title">安贞西里 3室1厅</span>
          <span class="miaoshu">72.32²/南 北/低楼层</span>
          <span class="biaoq" style="width: 1.3rem">随时看房</span>
          <span class="price">4500 元/月</span>
        </van-col>
      </van-row>
      <van-row class="link">
        <van-col span="8" class="left">
          <van-image
            width="3rem"
            height="3rem"
            fit="contain"
            src="http://liufusong.top:8080/img/message/1.png"
          />
        </van-col>
        <van-col span="16" class="right">
          <span class="title">天居园 2室1厅</span>
          <span class="miaoshu">83²/南/高楼层</span>
          <span class="biaoq">近地铁</span>
          <span class="price">7200 元/月</span>
        </van-col>
      </van-row>
      <van-row class="link">
        <van-col span="8" class="left">
          <van-image
            width="3rem"
            height="3rem"
            fit="contain"
            src="http://liufusong.top:8080/img/message/2.png"
          />
        </van-col>
        <van-col span="16" class="right">
          <span class="title">角门甲四号院 1室1厅</span>
          <span class="miaoshu">52²/西南/低楼层</span>
          <span class="biaoq" style="width: 1.3rem">集中供暖</span>
          <span class="price">4300 元/月</span>
        </van-col>
      </van-row>
    </div>
    <div class="blank"></div>

    <!-- 底部 -->
    <!-- <div class="footer">
      <div class="button">
        <img
          src="http://liufusong.top:8080/img/unstar.png
"
          alt=""
        />
        <span>收藏</span>
      </div>
      <div class="button">在线咨询</div>
      <div class="button">收藏</div>
    </div> -->
    <div>
      <van-row class="footer">
        <van-col span="8" class="button" @click="btnXX">
          <img class="sc" :src="Xingx" alt="" />
          <span class="sctext">收藏</span>
        </van-col>
        <van-col class="button" span="8">在线咨询</van-col>
        <van-col class="button button-t" span="8">电话预约</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getHouses } from '@/api'
export default {
  data () {
    return {
      HousesInformation: [],
      Xingx: 'http://liufusong.top:8080/img/star.png'
      // http://liufusong.top:8080/img/unstar.png
    }
  },
  created () {
    this.getHouses()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getHouses () {
      try {
        console.log(this.$route.params.detailsId)
        const res = await getHouses(this.$route.params.detailsId)
        console.log(res)
        this.HousesInformation = res.data.body
        // console.log(this.$route.params.detailsId)
      } catch (error) {
        console.log('detailsId', error)
      }
    },

    btnXX () {
      if (this.Xingx === 'http://liufusong.top:8080/img/star.png') {
        Toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        this.$toast.success('已取消收藏')
        this.Xingx = 'http://liufusong.top:8080/img/unstar.png'
      } else {
        Toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        this.$toast.success('已添加到收藏夹')
        this.Xingx = 'http://liufusong.top:8080/img/star.png'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bgc {
  background-color: #f6f5f6;
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
    // line-height: 6rem;
    text-align: center;
    background-color: #f6f5f6;
    img {
      width: 375px;
    }
  }
  .Community-profile {
    background-color: #fff;

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
          margin-top: 0.08rem;
          .biaoq {
            color: #39becd;
            background: #e1f5f8;
            padding: 0.08rem;
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
        flex-direction: column;
        border-bottom: 0.03rem solid #ccc;
        .price-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          .topred {
            font-size: 0.5rem;
            color: #fa5741;
            font-weight: bold;
          }
          .bottom {
            color: #999999;
            font-size: 0.32rem;
            margin-top: 0.12rem;
          }
        }
      }

      .classification {
        height: 2.4rem;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .left-classification {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          .showzx {
            font-size: 0.33rem;
            padding: 0.06rem 0;
          }
          .showlouc {
            font-size: 0.33rem;
            padding: 0.06rem 0;
          }
        }

        .right-classification {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          .showzx {
            font-size: 0.33rem;
            padding: 0.06rem 0;
          }
          .showlouc {
            font-size: 0.33rem;
            padding: 0.06rem 0;
          }
        }
      }
    }
  }
  .Location-conditions {
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    background-color: #fff;
    .row p {
      font-size: 0.38rem;
      padding: 0 0.6rem;
    }
    .map .img {
      width: 100%;
      height: 3.7rem;
      background-color: #ccc;
    }
    .row-title {
      padding: 0 0.6rem;
      font-size: 0.38rem;
      font-weight: bold;
      // border-bottom: 0.03rem solid #ccc;
    }
    .row-icon {
      margin: 0 0.6rem;
      border-top: 0.03rem solid #ccc;
      .icon-box {
        height: 1.8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 0.3rem;
        }
      }
    }
  }

  .recent-developments {
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    background-color: #fff;
    .recent-title {
      border-bottom: 0.03rem solid #ccc;
      margin: 0 0.6rem;
      p {
        font-size: 0.38rem;
        font-weight: bold;
        // padding: 0.38rem 0.6rem 0.001rem;
      }
    }
    .master {
      display: flex;
      align-items: center;
      height: 3rem;
      margin: 0 0.6rem;
      .Owner-information {
        span {
          font-size: 0.3rem;
        }
        .Certification-words {
          margin-bottom: 0.5rem;
          .authentication {
            font-size: 0.335rem;
            color: #fa5741;
          }
          span {
            margin-left: 0.18rem;
            color: #fa5741;
          }
        }
      }
    }
    .button-btn {
      height: 0.8rem;
      border-radius: 0.1rem;
      margin-bottom: 0.3rem;
    }
    .text {
      padding: 0 0.6rem;
      display: flex;
      p {
        font-size: 0.2rem;
        line-height: 0.6rem;
      }
    }
  }
  .like {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    .like-title {
      border-bottom: 0.03rem solid #ccc;
      margin: 0 0.6rem;
      p {
        font-size: 0.38rem;
        font-weight: bold;
        // padding: 0 0.6rem;
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

    .link {
      // background-color: #ccc;
      display: flex;
      margin: 0 0.6rem;
      border-bottom: 0.5px solid #ccc;
      .right {
        height: 2rem;
        margin-top: 0.5rem;
        // background-color: #fff;
        display: flex;
        flex-direction: column;
        margin-left: 0.35rem;

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
        // .biaoq::first-child {
        //   padding: 0.08rem 0.2rem;
        //   width: 1.3rem;
        // }
        .price {
          font-size: 0.35rem;
          color: red;
          font-weight: bold;
        }
      }
    }
  }
  .blank {
    width: 100%;
    height: 1.1rem;
    background-color: #fff;
  }

  :deep(.grey) {
    color: #999999;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #9999b3;
    font-size: 0.4rem;
    line-height: 1.2rem;
    text-align: center;
    .button {
      width: 33.33333%;
      height: 1.2rem;
      background-color: #fff;
      border-right: 0.05rem solid #ccc;
      border-top: 0.05rem solid #ccc;
      .sctext {
        margin-left: 0.1rem;
      }
      :deep(.sc) {
        width: 13.5%;
      }
    }
    .button-t {
      color: #fff;
      border-right: none;
      background-color: #21b97a;
    }
  }
}
</style>
