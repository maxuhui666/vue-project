<template>
  <div class="columnInfo">
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="columnName"
          label="列名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="dataType"
          label="数据类型"
          width="180">
      </el-table-column>
      <el-table-column
          prop="columnLength"
          label="长度"
          width="180">
      </el-table-column>
      <el-table-column
          label="主键"
          width="180">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.primaryKey"
              active-color="#13ce66"
              inactive-color="#ff4949"
              v-bind:active-value=1
              v-bind:inactive-value=0>
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
          label="允许为空"
          width="180">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.nullAble"
              active-color="#13ce66"
              inactive-color="#ff4949"
              v-bind:active-value=1
              v-bind:inactive-value=0>
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
          prop="defaultValue"
          label="默认值"
          width="180">
      </el-table-column>
      <el-table-column
          prop="remark"
          label="说明">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ListColumnInfo',
  props: {
    id: String
  },
  created () {
    this.getTableData()
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getTableData: function () {
      this.$http.get(this.$api.tableInfo.listColumnInfos, { tableId: this.id })
        .then(response => {
          this.tableData = response.data
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
