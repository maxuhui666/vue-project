<template>
  <div class="home">
    <el-row>
      <el-col v-bind:span="24">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
