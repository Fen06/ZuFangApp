<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        class="search"
        placeholder="请输入小区或地址"
        background="#21b97a"
      >
        <template #left>
          <van-icon name="arrow-left" class="arrow-left" />
        </template>
        <template #label>
          <div @click="$router.push('/city')">
            <span class="bj">北京</span> <span class="bj bj-font"> ▼</span>
          </div>
        </template>
        <template #action>
          <span class="iconfont icon-ditu"></span>
        </template>
        <!-- <template #right-icon>

        </template> -->
      </van-search>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  z-index: 99;
  left: 5%;
  top: 0.3rem;
  .arrow-left {
    color: #fff;
    margin-left: -0.1rem;
  }
  .van-search__content {
    margin-left: 0.25rem;
  }
  .bj {
    font-size: 0.2rem;
    color: #7f7f80;
  }
  .bj-font {
    padding-right: 0.37rem;
    border-right: 0.02rem solid #ccc;
  }
  .icon-ditu {
    color: #fff;
    padding: 0.1rem;
    border: 0.06rem solid #fff;
    border-radius: 50%;
    font-size: 0.5rem;
    margin-right: 0.45rem;
  }
}
</style>
