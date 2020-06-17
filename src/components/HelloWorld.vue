<template>
  <div class="hello">
    <el-button type="primary">刷新</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      constellations: [
        { value: 1, label: "白羊座" },
        { value: 2, label: "金牛座" },
        { value: 3, label: "双子座" },
        { value: 4, label: "巨蟹座" },
        { value: 5, label: "狮子座" },
        { value: 6, label: "处女座" },
        { value: 7, label: "天秤座" },
        { value: 8, label: "天蝎座" },
        { value: 9, label: "射手座" },
        { value: 10, label: "魔羯座" },
        { value: 11, label: "水瓶座" },
        { value: 12, label: "双鱼座" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss"></style>
