<template>
  <div class="login">
<<<<<<< HEAD
      <div class="con">
        <h3 class="center">登录</h3>
        <div class="ipt">
          <el-input v-model="user.name" placeholder="请输入账号" clearable></el-input>
        </div>
        <div class="ipt">
          <el-input v-model="user.pass" placeholder="请输入密码" clearable show-password></el-input>
        </div>
        <div class="center">
          <el-button type="primary" @click="login">登录</el-button>
        </div>
      </div>
=======
    <div class="con">
      <h3 class="center">登录</h3>
      <el-form :model="user" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="user.username" placeholder="请输入账号" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="user.password" placeholder="请输入密码" clearable show-password></el-input>
        </el-form-item>

        <div class="center">
          <el-button type="primary" @click="login">登录</el-button>
        </div>
      </el-form>
    </div>
>>>>>>> 6209bee (tjjj)
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  data(){
    return {
      user:{
        name:"",
        pass:""
      }
    }
  },
  methods:{
    //登录
    login(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.login{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right,#553544,#433A52,#303D60);
}
.con{
=======
import { reqLogin } from "../../utils/http";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapActions({
      changeUser: "changeUser"
    }),
    //登录
    login() {
      reqLogin(this.user).then(res => {
        if (res.data.code === 200) {
          this.changeUser(res.data.list);
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #553544, #433a52, #303d60);
}
.con {
>>>>>>> 6209bee (tjjj)
  width: 400px;
  background: #ffffff;
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
<<<<<<< HEAD
  transform: translate(-50%,-50%);
  border-radius: 20px;
}
.ipt{
  margin: 10px;
}
.center{
=======
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
.ipt {
  margin: 10px;
}
.center {
>>>>>>> 6209bee (tjjj)
  text-align: center;
}
</style>