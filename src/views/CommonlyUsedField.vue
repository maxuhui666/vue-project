<template>
  <div class="commonlyUsedField">
    <el-row>
      <el-col v-bind:span="4" v-bind:offset="18">
        <el-button type="primary" v-on:click="openDialog">增加</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-bind:span="20" v-bind:offset="2">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="columnName" label="字段名" width="180"/>
          <el-table-column prop="dataType" label="类型" width="180"/>
          <el-table-column prop="columnLength" label="长度"/>
          <el-table-column prop="remark" label="说明"/>
          <el-table-column prop="gmtCreate" label="创建时间" v-bind:formatter="dateFormat" />
        </el-table>
      </el-col>
    </el-row>
    <el-dialog title="新增" v-bind:visible.sync="editPageVisible" v-bind:destroy-on-close="true">
      <AddCommonlyUsedField v-on:closeDialog="closeDialog"/>
    </el-dialog>
  </div>
</template>

<script>
import AddCommonlyUsedField from '@/components/AddCommonlyUsedField'
import Moment from 'moment'

export default {
  name: 'CommonlyUsedField',
  components: { AddCommonlyUsedField },
  data () {
    return {
      queryParam: {
        name: '',
        pageNumber: 1,
        pageSize: 10
      },
      editPageVisible: false,
      tableData: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    dateFormat (row, column) {
      const date = row[column.property]
      if (date === undefined) {
        return ''
      }
      return Moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    getData () {
      this.$http.get(this.$api.commonlyUsedField.select, this.queryParam)
        .then(response => {
          this.tableData = response.data.list
        }).catch(error => {
          this.$message.error('失败！')
          console.log(error)
        })
    },
    // 关闭编辑窗口
    closeDialog: function () {
      this.editPageVisible = false
    },
    // 打开编辑窗口
    openDialog: function () {
      this.editPageVisible = true
    }
  }
}
</script>

<style scoped>

</style>
