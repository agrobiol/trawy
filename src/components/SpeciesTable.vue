<template>
  <div id="species-table">
    <el-row :gutter="20"><el-col :span="24">
      <ColumnSelector :columns="columns" :activeColumns="activeColumns" @toggle-column="toggleColumn"></ColumnSelector>
    </el-col></el-row>
    <el-row :gutter="20"><el-col :span="24">
      <el-table v-model="columns" :data="species" stripe>
        <el-table-column width="40" align="center">
          <template scope="scope">
            <el-button size="mini" @click="showImages(scope.row)" icon="picture"></el-button>
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <template scope="scope">
            <SpeciesDetails :row="scope.row"></SpeciesDetails>
          </template>
        </el-table-column>
        <el-table-column v-for="(column, key) in columns" v-if="isColumnActive(key)"
          :prop="key"
          :key="key"
          :label="getColumnLabel(key)"
          :filters="getColumnFilters(key)"
          :filter-method="getColumnFilterMethod(key)"
          :align="getColumnAlign(key)"
          :sortable="isColumnSortable(key)">
          <template scope="scope">
            <div v-if="scope.column.property === 'nameLatin'" style="font-style:italic;">{{ scope.row[scope.column.property] }}</div>
            <el-tag v-else-if="scope.column.property === 'heightTypes'" type="gray" v-for="heightType in scope.row.heightTypes" :key="heightType" close-transition>{{ heightType }}</el-tag>
            <el-tag v-else-if="scope.column.property === 'propagations'" type="success" v-for="propagation in scope.row.propagations" :key="propagation" close-transition>{{ propagation }}</el-tag>
            <el-tag v-else-if="scope.column.property === 'inflorescences'" type="gray" v-for="inflorescence in scope.row.inflorescences" :key="inflorescence" close-transition>{{ inflorescence }}</el-tag>
            <el-tag v-else-if="scope.column.property === 'humidity'" type="primary" v-for="humidity in scope.row.humidity" :key="humidity" close-transition>{{ humidity }}</el-tag>            <el-tag v-else-if="scope.column.property === 'indicators'" v-for="indicator in scope.row.indicators" :key="indicator" close-transition>{{ indicator }}</el-tag>
            <el-tag v-else-if="scope.column.property === 'weeds'" :type="weed == 'chwast bezwzględny' ? 'danger' : 'warning'" v-for="(weed, index) in scope.row.weeds" :key="index" close-transition>{{ weed }}</el-tag>
            <el-rate v-else-if="scope.column.property === 'meadowsApplicable'" :value="scope.row.meadowsApplicable" :max="2" :colors="['#666666']" disabled></el-rate>
            <el-rate v-else-if="scope.column.property === 'pasturesApplicable'" :value="scope.row.pasturesApplicable" :max="2" :colors="['#666666']" disabled></el-rate>
            <el-rate v-else-if="scope.column.property === 'shortUsagesApplicable'" :value="scope.row.shortUsagesApplicable" :max="2" :colors="['#666666']" disabled></el-rate>
            <el-rate v-else-if="scope.column.property === 'lwu'" :value="scope.row.lwu/2" :low-threshold="1.5" :high-threshold="3.5" :colors="['#3200cc', '#19b5cc', '#33cc33']" disabled></el-rate>
            <div v-else>
              {{ scope.row[scope.column.property] }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-col></el-row>
    <el-dialog
      :title="activeRowName()"
      :visible.sync="imagesVisible"
      size="full">
      <SpeciesImages :row="activeRow"></SpeciesImages>
    </el-dialog>
  </div>
</template>

<script>
  import ColumnSelector from './SpeciesTable/ColumnSelector'
  import SpeciesDetails from './SpeciesDetails'
  import SpeciesImages from './SpeciesImages'

  export default {
    name: 'species-table',
    data () {
      return {
        imagesVisible: false,
        activeRow: null,
        activeRowName () {
          return this.activeRow && this.activeRow.name || null
        }
      }
    },
    computed: {
      activeColumns: {
        get () {
          return this.$store.state.activeColumns
        },
        set (columns) {
          this.$store.dispatch('setActiveColumns', columns)
        }
      },
      species () {
        return this.$store.getters.species
      },
      columns () {
        return this.$store.getters.columns
      }
    },
    components: { ColumnSelector, SpeciesDetails, SpeciesImages },
    methods: {
      toggleColumn (column) {
        this.$store.dispatch('toggleColumn', column)
      },
      showImages (row) {
        this.activeRow = row
        this.imagesVisible = true
      },
      hideImages () {
        this.activeRow = null
        this.imagesVisible = false
      },
      setActiveColumns (columns) {
        this.activeColumns = columns
      },
      isColumnActive (key) {
        return this.activeColumns.indexOf(key) > -1
      },
      isColumnSortable (key) {
        return this.columns[key] && (this.columns[key].sortable || this.columns[key].sortable !== false) || false
      },
      getColumnLabel (key) {
        return this.columns[key] && this.columns[key].label || key
      },
      getColumnAlign (key) {
        return this.columns[key] && this.columns[key].align || null
      },
      getColumnFilters (key) {
        return this.columns[key] && this.columns[key].filters || null
      },
      getColumnFilterMethod (key) {
        let methods = {
          heightTypes: (value, row) => this.filterArray(key, value, row),
          propagations: (value, row) => this.filterArray(key, value, row),
          inflorescences: (value, row) => this.filterArray(key, value, row),
          humidity: (value, row) => this.filterArray(key, value, row),
          indicators: (value, row) => this.filterArray(key, value, row),
          weeds: (value, row) => this.filterArray(key, value, row),
          meadowsApplicable: (value, row) => row.meadowsApplicable <= value.max && (value.min || 0) <= row.meadowsApplicable,
          pasturesApplicable: (value, row) => row.pasturesApplicable <= value.max && (value.min || 0) <= row.pasturesApplicable,
          shortUsagesApplicable: (value, row) => row.shortUsagesApplicable <= value.max && (value.min || 0) <= row.shortUsagesApplicable,
          lwu: (value, row) => row.lwu <= value.max && (value.min || -3) <= row.lwu
        }
        if (methods[key]) return methods[key]
        else return null
      },
      filterArray (key, value, row) {
        return row[key].indexOf(value) > -1
      },
      debug () {
        console.log(this)
      }
    }
  }
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>
