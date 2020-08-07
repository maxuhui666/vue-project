<template>
  <div class="formTableInfo">
    <el-row>
      <el-col v-bind:span="5">
        <el-select v-model="tableId" placeholder="请选择数据表">
      <el-option v-for="table of tableList" v-bind:key="table.id" v-bind:label="table.tableName" v-bind:value="table.id">
      </el-option>
        </el-select>
      </el-col>
      <el-col v-bind:span="3">
        <el-button type="primary" v-on:click="listTableInfoData">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <ListTableInfo/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ListTableInfo from '@/components/ListTableInfo'
export default {
  name: 'FormTableInfo',
  components: { ListTableInfo },
  data () {
    return {
      tableId: '',
      tableList: []
    }
  },
  created () {
    this.getTableList()
  },
  methods: {
    getTableList () {
      this.$http.get(this.$api.tableInfo.listTables)
        .then(response => {
          this.tableList = response.data
        }).catch(err => {
          console.log(err)
        })
    },
    listTableInfoData: function () {
      this.$http.get(this.$api.tableInfo.listTableInfoData, { tableId: this.tableId })
        .then(response => {
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
