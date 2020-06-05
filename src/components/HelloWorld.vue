<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table border="1">
      <tr>
        <th>设备名称</th>
        <th>设备编号</th>
        <th>更新时间</th>
      </tr>
      <tr v-for="eq in this.equipmentList" v-bind:key="eq.id">
        <td>{{ eq.deviceName }}</td>
        <td>{{ eq.number }}</td>
        <!--使用全局过滤器-->
        <td>{{ eq.creditedTime | dateFormat("YYYY-MM-DD") }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      pageNumber: 2,
      equipmentList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .post(this.$api.test1.url, {
          pageNumber: this.pageNumber
        })
        .then(response => {
          this.equipmentList = response.data.list;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
