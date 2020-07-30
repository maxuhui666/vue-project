<template>
  <div class="login">
    <el-form v-bind:model="loginInfo" v-bind:rules="loginRule" ref="loginInfo">
      <el-row>
        <el-col v-bind:span="6" v-bind:offset="9">
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="loginInfo.username"
              placeholder="请输入用户名"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col v-bind:span="6" v-bind:offset="9">
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginInfo.password"
              placeholder="请输入密码"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-button type="primary" v-on:click="login('loginInfo')">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginInfo: {
        username: "",
        password: "",
        code: ""
      },
      loginRule: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "用户名长度在3-16个字符之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "密码长度在6-16个字符之间",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/");
        } else {
          this.$message.error("失败！");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  text-align: center;
}
</style>
