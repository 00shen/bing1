<template>
  <div>
    <el-dialog :title="info.isadd?'添加管理员':'编辑管理员'" :visible.sync="info.isshow" @closed="cancel">
      <el-form :model="user">
        <el-form-item label="手机号" label-width="100px">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名称" label-width="100px">
          <el-input v-model="user.nickname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" label-width="100px">
          <el-input v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="状态" label-width="100px">
          <el-switch v-model="user.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isadd">添 加</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reqmemberUpdate, reqmemberDetail } from "../../../utils/http";
import { successalert,erroralert } from "../../../utils/alert";
export default {
  props: ["info", "list"],
  data() {
    return {
      user: {
        roleid: "",
        username: "",
        password: "",
        status: 1
      }
    };
  },
  mounted() {},
  methods: {
    cancel() {
      this.info.isshow = false;
    },
    checkProps() {
      return new Promise((resolve, reject) => {
        if (this.user.roleid === "") {
          erroralert("手机号不能为空");
          return;
        }
        if (this.user.username === "") {
          erroralert("用户名不能为空");
          return;
        }
        if (this.user.password === "") {
          erroralert("密码不能为空");
          return;
        }
        resolve();
      });
    },
    getOne(id) {
      reqmemberDetail({ uid: id }).then(res => {
        if (res.data.code == 200) {
          this.user = res.data.list;
          this.user.password = "";
        }
      });
    },
    update() {
      this.checkProps().then(()=>{
        reqmemberUpdate(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.$emit("init");
        }
      });
      })
    }
  }
};
</script>

<style>
</style>