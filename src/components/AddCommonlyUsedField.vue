<template>
  <div class="editCommonlyUsedField">
    <el-form v-bind:model="myData" v-bind:rules="myDataRule" ref="myData">
      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-form-item prop="columnName">
            <el-input type="text" v-model="myData.columnName" placeholder="请输入列名"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-form-item prop="dataType">
            <el-select v-model="myData.dataType" placeholder="选择类型">
              <el-option v-for="item of dataType" v-bind:key="item.fieldType"
                         v-bind:label="item.typeTitle"
                         v-bind:value="item.fieldType"/>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-form-item prop="columnLength">
            <el-input-number v-model="myData.columnLength"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-input v-model="myData.remark" placeholder="请输入字段说明"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col v-bind:span="4">
          <el-button type="primary" v-on:click="saveData('myData')">保存</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AddCommonlyUsedField',
  data () {
    return {
      dataType: this.$enumStore.dataType,
      myData: {
        columnName: '',
        dataType: '',
        columnLength: 0,
        remark: ''
      },
      myDataRule: {
        columnName: [
          { require: true, message: '请输入字段名称', trigger: 'blur' }
        ],
        dataType: [
          { require: true, message: '请选择字段类型', trigger: 'blur' }
        ],
        remark: [
          { require: true, message: '选输入字段长度', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    saveData: function (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post(this.$api.commonlyUsedField.insert, this.myData)
            .then(response => {
              console.log(response)
            }).catch(error => {
              console.log(error)
            })
          this.$message.success('成功！')
          this.$emit('closeDialog')
        } else {
          this.$message.error('失败！')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
