<template>
  <div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  data () {
    return {}
  },
  components: {
    Footer
  }
}
</script>

<style lang="less" scope>
// .footerr {
//   .van-tabbar-item__icon {
//     // font-size: 0.0001rem;
//     text-align: center;
//   }

//   .icon .iconfont:before {
//     font-size: 0.55rem;
//     color: #888888;
//     margin-top: 1rem;
//   }
//   .current {
//     color: #21b97a;
//   }
// }
// p {
//   font-size: 0.35rem;
// }

// .van-tabbar-item__icon {
//   font-size: 0.0001rem;
// }
</style>
