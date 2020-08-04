<template>
  <div class="topMenu">
    <el-menu
      v-bind:default-active="activeIndex"
      v-bind:router="true"
      mode="horizontal"
      v-on:select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/dictionary">数据字典</el-menu-item>
      <el-submenu index="2">
        <template slot="title">数据管理</template>
        <el-menu-item index="/table">数据表管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item v-on:click="logout">退出</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  created () {
    if (this.$route.path === '/home') {
      this.$router.push('/dictionary')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
.topMenu {
  background-color: cadetblue;
}
</style>
