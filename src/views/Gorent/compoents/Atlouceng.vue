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
      <template #label>所在楼层</template>
    </van-field>
    <van-popup
      v-model="showPicker"
      position="bottom"
      v-for="(item, index) in HouseCondition.floor"
      :key="index"
    >
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
  props: {
    HouseCondition: {
      type: [Array, Object],
      required: true
    }
  },

  data () {
    return {
      value: '',
      columns: ['高楼层', '中楼层', '低楼层'],
      showPicker: false
    }
  },
  created () {},
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    }
  }
}
</script>

<style></style>
