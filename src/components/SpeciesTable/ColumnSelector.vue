<template>
  <div>
    <el-checkbox-group v-model="selectedColumns" size="small">
      <el-checkbox-button v-for="(column, key) in columns" @change="handleColumnSelection" :label="key" :key="key">{{ column.label }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'column-selector',
  props: {
    columns: Object,
    activeColumns: Array
  },
  data () {
    return {
      selectedColumns: this.activeColumns
    }
  },
  methods: {
    handleColumnSelection (event) {
      this.$emit('toggle-column', event.target.value)
    }
  }
}
</script>
