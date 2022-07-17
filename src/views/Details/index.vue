<template>
  <!-- 顶部 -->
  <div class="bgc">
    <!-- 顶部 -->
    <van-nav-bar
      class="Top"
      title="住房名称"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- 小区简介 -->
    <div class="Community-profile">
      <div class="Ttop">
        <van-row class="introduce">
          <span class="name">XX小区</span>
          <div class="box"><span class="biaoq">近地铁</span></div>
        </van-row>

        <van-row class="price">
          <van-col class="price-box" span="8">
            <div class="topred">3000/月</div>
            <div class="bottom">租金</div>
          </van-col>
          <van-col class="price-box" span="8">
            <div class="topred">3000/月</div>
            <div class="bottom">租金</div>
          </van-col>
          <van-col class="price-box" span="8">
            <div class="topred">3000/月</div>
            <div class="bottom">租金</div>
          </van-col>
        </van-row>

        <van-row class="classification">
          <van-col class="left-classification" span="12">
            <div class="showzx">
              <span class="grey">装修：</span><span class="black">精装</span>
            </div>
            <div class="showlouc">
              <span class="grey">楼层：</span><span class="black">高楼层</span>
            </div>
          </van-col>
          <van-col class="right-classification" span="12">
            <div class="showzx">
              <span class="grey">朝向：</span><span>北</span>
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
          <span>洗衣服</span>
        </van-col>
        <van-col span="4" class="icon-box">
          <van-icon name="gem-o"></van-icon>
          <span>洗衣服</span>
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
          爱的我激动激动IQ叫我ID机器哦我王建东IQ叫我if机器哦我我佛IQ我我哦轻举妄动IQ为奇偶IQ解冻期我就去启动进去我的机器哦未鉴定哦IQ我觉得我去玩今日排期即日起我怕乳胶漆我居然
        </p>
      </van-row>
    </div>

    <!-- 猜你喜欢 -->
    <div class="like">
      <van-row class="like-title"><p>房源近况</p></van-row>
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
          <span class="title">标题名字</span>
          <span class="miaoshu">4室XXXXXXXXXXX</span>
          <span class="biaoq">进地铁</span>
          <span class="price">8888元/月</span>
        </van-col>
      </van-row>
    </div>

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
        <van-col span="8" class="button">
          <img
            class="sc"
            src="http://liufusong.top:8080/img/unstar.png
"
            alt=""
          />
          <span class="sctext">收藏</span>
        </van-col>
        <van-col class="button" span="8">在线咨询</van-col>
        <van-col class="button button-t" span="8">电话预约</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import getHouses from '@/api'
export default {
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
        // console.log(this.$route.params.detailsId)
      } catch (error) {
        console.log('detailsId', error)
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
    line-height: 6rem;
    text-align: center;
    background-color: #39a9ed;
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
        .price {
          font-size: 0.35rem;
          color: red;
          font-weight: bold;
        }
      }
    }
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
      border-right: none;
    }
  }
}
</style>
