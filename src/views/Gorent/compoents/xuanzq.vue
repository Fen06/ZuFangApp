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
      <template #label>户 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 型</template>
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
      columns: ['一室', '二室', '三室', '四室', '四室+'],
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
