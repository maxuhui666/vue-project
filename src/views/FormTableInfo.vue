<template>
  <div class="formTableInfo">
    {{ this.$store.state.count }}
    <el-button type="primary" v-on:click="increment">自增1</el-button>
    <el-button type="primary" v-on:click="listTableInfoData">查询</el-button>
  </div>
</template>

<script>
export default {
  name: 'FormTableInfo',
  data () {
    return {
      tableId: '78fc1f07-b47a-4589-837f-4d013946f50d'
    }
  },
  methods: {
    increment: function () {
      this.$store.commit('increment')
    },
    listTableInfoData: function () {
      this.$http
        .get(this.$api.tableInfo.listTableInfoData, {
          tableId: this.tableId
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped></style>
