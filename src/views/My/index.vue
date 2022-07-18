<template>
  <div class="myad">
    <div class="hand">
      <!-- <div class="userBox">
        <div class="toux">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <div class="loginfont">
          <p>{{ userinfo.nickname }}</p>
          <van-button
            v-if="!!$store.state.user.token"
            type="primary"
            size="small"
            @click="loginout"
            >退出</van-button
          >
          <van-button v-else type="primary" size="small" to="/login">
            登录
          </van-button>
        </div>
      </div> -->

      <div class="userBox" v-if="!!$store.state.user.token">
        <div class="toux">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <div class="loginfont">
          <p>{{ userinfo.nickname }}</p>
          <van-button type="primary" size="mini" @click="loginout"
            >退出</van-button
          >
          <p class="bj">编辑个人资料 ▶</p>
        </div>
      </div>

      <div class="userBox-else" v-else>
        <div class="toux">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <div class="loginfont">
          <p>游客</p>
          <van-button type="primary" size="small" to="/login">
            登录
          </van-button>
        </div>
      </div>
      <div class="ellipse">
        <img
          :src="
            isLogin
              ? `http://liufusong.top:8080${userinfo.avatar}`
              : 'http://liufusong.top:8080/img/profile/bg.png'
          "
          alt=""
        />
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="box">
      <a :href="isLogin ? '#/favorate' : '#/login'" class="flex-box ttop">
        <div class="font">
          <i class="iconfont icon-shoucang"></i>
          <p>我的收藏</p>
        </div>
      </a>
      <a :href="isLogin ? '#/rental' : '#/login'" class="flex-box ttop">
        <div class="font">
          <i class="iconfont icon-fangzi-copy"></i>
          <p>我的出租</p>
        </div>
      </a>
      <a href="javascript:;" class="flex-box ttop">
        <div class="font">
          <i class="iconfont icon-lishijilu"></i>
          <p>我的看房记录</p>
        </div>
      </a>

      <a href="javascript:;" class="flex-box">
        <div class="font">
          <i class="iconfont icon-yinhangqia-copy"></i>
          <p>成为房主</p>
        </div>
      </a>

      <a href="javascript:;" class="flex-box">
        <div class="font">
          <i class="iconfont icon-wode"></i>
          <p>个人资料</p>
        </div>
      </a>

      <a href="javascript:;" class="flex-box">
        <div class="font">
          <i class="iconfont icon-kefu"></i>
          <p>联系我们</p>
        </div>
      </a>
    </div>

    <!-- 图片 -->
    <div>
      <img
        class="ad"
        src="http://liufusong.top:8080/img/profile/join.png"
        alt=""
      />
    </div>
    <!-- 底部 -->
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
import { Dialog } from 'vant'
import { Toast } from 'vant'
export default {
  data () {
    return {
      userinfo: {}
      // isLogin: !!this.$store.state.user.token
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  computed: {
    isLogin () {
      return !!this.$store.state.user.token
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      try {
        const res = await getUserInfo()
        console.log(res.data.body)
        this.userinfo = res.data.body
      } catch (error) {
        console.log(error)
      }
    },

    loginout () {
      Dialog.confirm({
        title: '提示',
        message: '是否确定退出'
      })
        .then(() => {
          // on confirm
          this.$store.commit('setuser', {})
          Toast.loading({
            message: '加载中...',
            forbidClick: true
          })
          this.isLogin = !this.isLogin
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style scope lang="less">
.hand {
  position: relative;
  .userBox {
    position: absolute;
    width: 80%;
    top: 60%;
    left: 9%;
    height: 6rem;
    box-shadow: 2px 2px 10px #909090;
    background-color: #fff;
    .toux {
      position: relative;
      img {
        position: absolute;
        width: 1.7rem;
        height: 1.7rem;
        box-shadow: 0.01rem 0.1rem 0.09rem #c7c7c7;
        border: 0.189rem solid #fff;
        // background-color: #000;
        border-radius: 50%;
        left: 3rem;
        margin-top: -1rem;
      }
    }
    .loginfont {
      position: relative;
      p {
        font-size: 0.4rem;
        text-align: center;
        margin-top: 1.65rem;
      }
      .bj {
        position: absolute;
        color: #999999;
        left: 3rem;
        top: 0.6rem;
        font-size: 0.3rem;
      }
      .van-button--primary {
        color: #fff;
        background-color: #21b97a;
        //   border: 0.02667rem solid #21b97a;
        width: 2rem;
        // top: 50%;
        bottom: 0.35rem;
        left: 3rem;
        border-radius: 2rem;
      }
    }
  }
  .userBox-else {
    position: absolute;
    width: 80%;
    top: 60%;
    left: 9%;
    height: 4.5rem;
    box-shadow: 2px 2px 10px #909090;
    background-color: #fff;
    .toux {
      position: relative;
      img {
        position: absolute;
        width: 1.7rem;
        height: 1.7rem;
        box-shadow: 0.01rem 0.1rem 0.09rem #c7c7c7;
        border: 0.189rem solid #fff;
        // background-color: #000;
        border-radius: 50%;
        left: 3rem;
        margin-top: -1rem;
      }
    }
    .loginfont {
      p {
        font-size: 0.4rem;
        text-align: center;
        margin-top: 1.65rem;
      }
      .van-button--primary {
        color: #fff;
        background-color: #21b97a;
        //   border: 0.02667rem solid #21b97a;
        width: 2rem;
        top: 50%;
        left: 3rem;
        border-radius: 10%;
      }
    }
  }
  .ellipse {
    width: 100%;
    // height: 4.8rem;
    // border-radius: 0 0 99% 99%;
    // background-color: #ccc;
    img {
      width: 100%;
      display: block;
    }
  }
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3.2rem;

  .flex-box {
    width: 33.3333%;
    color: #000;

    .font {
      text-align: center;
      margin-top: 0.2rem;
      p {
        font-size: 0.35rem;
        margin-top: 0.1rem;
      }
      .iconfont {
        font-size: 0.6rem;
      }
    }
  }
  a:active {
    background-color: #dddddd;
  }

  .ttop {
    margin-bottom: 0.9rem;
  }
}

.myad {
  position: relative;
  .ad {
    position: absolute;
    width: 90%;
    margin-left: 5%;
    margin-top: 8%;
  }
}

.icon {
  .iconfont:before {
    font-size: 0.7rem;
    color: #888888;
  }
  .current {
    color: #21b97a;
  }
}
</style>
