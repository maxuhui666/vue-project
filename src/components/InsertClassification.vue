<template>
  <div class="insertClassification">
    <el-form
      v-bind:model="insertDictionary"
      v-bind:rules="insertDictionaryRule"
      ref="insertDictionary"
    >
      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-form-item prop="pid">
            <el-select v-model="insertDictionary.pid" placeholder="请选择父级">
              <el-option
                v-for="item of classificationList"
                v-bind:key="item.id"
                v-bind:label="item.name"
                v-bind:value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-form-item prop="name">
            <el-input
              v-model="insertDictionary.name"
              placeholder="请输入名称"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-form-item prop="sort">
            <el-input-number v-model.number="insertDictionary.sort" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-form-item prop="remark">
            <el-input
              type="textarea"
              v-model="insertDictionary.remark"
              placeholder="请输入备注"
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col v-bind:span="6">
          <el-button type="primary" v-on:click="insertSave('insertDictionary')"
            >提交
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'InsertClassification',
  props: ['closeDialog'],
  data () {
    return {
      // 分类列表
      classificationList: [],
      // 插入分类的数据对象
      insertDictionary: { pid: null, name: '', sort: 0, remark: '' },
      insertDictionaryRule: {
        name: [
          { require: true, message: '请输入名称', trigger: 'blur' },
          {
            min: 2,
            max: 30,
            message: '请输入2到20个字符之间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created () {
    this.listDictionaryClassification()
  },
  methods: {
    insertSave (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post(
            this.$api.dictionaryClassification.insert,
            this.insertDictionary
          ).then(response => {
            if (response.status === 0) {
              this.$message.success('成功！')
              this.$emit('closeDialog')
              this.insertDictionary = {
                pid: null,
                name: '',
                sort: 0,
                remark: ''
              }
            }
          }).catch(error => {
            console.log(error)
          })
        } else {
          this.$message.error('失败！')
          return false
        }
      })
    },
    listDictionaryClassification () {
      this.$http.get(this.$api.dictionaryClassification.list, {}).then(response => {
        this.classificationList = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped></style>
