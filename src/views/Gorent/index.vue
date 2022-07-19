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
      <xuanzq></xuanzq>
      <!-- <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="户型"
        placeholder="请选择"
        @click="showPicker = true"
        class="Hx"
      >
        <template #right-icon><van-icon name="arrow"></van-icon></template>
        <template #label>户 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 型</template>
      </van-field>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup> -->
      <!-- 所在楼层 -->

      <van-field v-model="dnxb" name="朝向"
        ><template #label
          >朝 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 向</template
        ></van-field
      >
    </van-form>
  </div>
</template>

<script>
import xuanzq from './compoents/xuanzq.vue'
export default {
  data () {
    return {}
  },
  components: {
    xuanzq
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
  .van-field__control {
    margin-left: 4.7rem;
    color: #888888;
  }
}
</style>
