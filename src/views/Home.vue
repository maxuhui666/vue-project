<template>
  <div class="home">
    <el-row>
      <el-col v-bind:span="24">
        <top-menu />
      </el-col>
    </el-row>
    <el-row>
      <el-col v-bind:span="24">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopMenu from '../components/TopMenu'
export default {
  name: 'Home',
  components: { TopMenu }
}
</script>
