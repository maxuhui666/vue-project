<template>
  <div class="listTableInfo">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <ListColumnInfo v-bind:id="props.row.id"/>
        </template>
      </el-table-column>
      <el-table-column
        label="表名"
        prop="tableName">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="remark">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ListColumnInfo from '@/components/ListColumnInfo'

export default {
  name: 'ListTableInfo',
  components: { ListColumnInfo },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getTableList()
  },
  methods: {
    getTableList: function () {
      this.$http.get(this.$api.tableInfo.listTables)
        .then(response => {
          this.tableData = response.data
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
