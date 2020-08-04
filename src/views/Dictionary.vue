<template>
  <div class="dictionary">
    <el-row>
      <el-col v-bind:span="3">
        <el-button type="primary" v-on:click="insertDialogVisible = true"
          >新增分类
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-bind:span="3">
        展示
      </el-col>
    </el-row>
    <el-dialog
      v-bind:title="insertDialogTitle"
      v-bind:visible.sync="insertDialogVisible"
    >
      <InsertClassification v-on:closeDialog="closeDialog" />
    </el-dialog>
  </div>
</template>

<script>
import InsertClassification from '@/components/InsertClassification'

export default {
  name: 'Dictionary',
  components: { InsertClassification },
  data () {
    return {
      insertDialogTitle: '新增字典分类',
      insertDialogVisible: false,
      // 树节点
      classificationTree: []
    }
  },
  created () {
    // 获取字典分类树结构
    this.getClassificationTree()
  },
  methods: {
    closeDialog () {
      this.insertDialogVisible = false
    },
    getClassificationTree () {
      this.$http.get(this.$api.dictionaryClassification.listTree, {}).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
