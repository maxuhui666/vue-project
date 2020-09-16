<template>
  <div class="todoList">
    <el-row type="flex" justify="center">
      <el-col v-bind:span="8">
        <el-input v-model="inputValue"/>
      </el-col>
      <el-col v-bind:span="4" v-bind:offset="1">
        <el-button type="primary" v-on:click="addItem">提交</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col v-bind:span="12">
        <ol>
          <li v-for="(item,index) of itemList" v-bind:key="index">
            {{ item }}
          </li>
        </ol>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      inputValue: '',
      itemList: []
    }
  },
  methods: {
    addItem () {
      this.itemList.push(this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style scoped lang="scss">
.todoList {
  margin: 0 auto;
  width: 50vw;
}
</style>
