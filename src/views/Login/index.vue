<template>
  <div>
    <div>
      <van-nav-bar
        class="Top"
        title="账号登录"
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <!-- 登录表单 -->
    <div>
      <van-form class="from" @submit="onSubmit">
        <van-field v-model="username" name="用户名" placeholder="请输入账号" />
        <!-- :rules="[{ required: true, message: '请填写用户名' }]" -->
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
        />
        <!-- :rules="[{ required: true, message: '请填写密码' }]" -->
        <div style="margin: 16px">
          <van-button block type="info" native-type="submit">登 录</van-button>
        </div>
      </van-form>
    </div>

    <div class="register"><a href="#/register">还没有账号，去注册~</a></div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async onSubmit () {
      if (this.username.trim() === '' || this.password.trim() === '') {
        return Toast('用户名和密码不能为空')
      }
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      const res = await login(this.username, this.password)
      console.log(res.data.body)
      this.$store.commit('setuser', res.data.body)

      if (res.status === 200) {
        Toast.success('登录成功')
      } else {
        Toast.fail('登录失败')
      }
    }
  }
}
</script>

<style scope lang="less">
.Top {
  background-color: #1cb676;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}

.from {
  margin-top: 0.53333rem;
  .van-button--info {
    background-color: #1cb676;
    margin-top: 1rem;
  }
  .van-field__control {
    font-size: 0.425rem;
    line-height: 0.9rem;
  }
  .van-button--normal {
    font-size: 0.4633rem;
  }
}

.register {
  position: relative;
  margin-top: 1rem;
  a {
    position: absolute;
    left: 32%;
    font-size: 0.39rem;
  }
}
</style>
