<template>
  <div>
    <van-field
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
      <template #label
        >朝 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 向
        <p class="houseTitle">房屋标题</p></template
      >
    </van-field>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      columns: ['东', '南', '西', '北', '东南', '东北', '西南', '西北'],
      showPicker: false
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    }
  }
}
</script>

<style></style>
