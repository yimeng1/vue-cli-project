<template>
  <div>
    <div>
      <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
      <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    </div>

    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RadioGroup',
    data () {
      return {
        radio: '1',
        value2: null
      }
    }
  }
</script>
