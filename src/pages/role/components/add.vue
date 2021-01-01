<template>
  <div>
    <el-dialog :title="info.isadd?'添加角色':'编辑角色'" :visible.sync="info.isshow" @closed="cancel">
      <el-form :model="user">
        <el-form-item label="角色名称" label-width="100px">
          <el-input v-model="user.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" label-width="100px">
          <el-tree
            :data="menuList"
            show-checkbox
            node-key="id"
            ref="tree"
            :props="{children: 'children',label: 'title'}"
          ></el-tree>
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
import {
  reqRoleAdd,
  reqMenulist,
  reqRoleDetail,
  reqRoleUpdate
} from "../../../utils/http";
import { successalert,erroralert } from "../../../utils/alert";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["info", "list"],
  data() {
    return {
      menuList: [],
      user: {
        rolename: "",
        menus: "",
        status: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "userInfo"
    })
  },
  mounted() {
    reqMenulist().then(res => {
      if (res.data.code == 200) {
        this.menuList = res.data.list;
      }
    });
  },
  methods: {
    ...mapActions({
      changeUser: "changeUser"
    }),
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    empty() {
      this.user = {
        rolename: "",
        menus: "",
        status: 1
      };
      this.$refs.tree.setCheckedKeys([]);
    },
    add() {
      if (this.user.rolename === "") {
        erroralert("角色名称不能为空");
        return;
      }
      this.user.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      if (this.user.menus === "[]") {
        erroralert("角色权限不能为空");
        return;
      }
      reqRoleAdd(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    },
    changePid() {
      if (this.user.pid == 0) {
        this.user.type = 1;
      } else {
        this.user.type = 2;
      }
    },
    getOne(id) {
      reqRoleDetail({ id: id }).then(res => {
        if (res.data.code == 200) {
          this.user = res.data.list;
          this.user.id = id;
          this.$refs.tree.setCheckedKeys(JSON.parse(this.user.menus));
        }
      });
    },
    update() {
        if (this.user.rolename === "") {
        erroralert("角色名称不能为空");
        return;
      }
      this.user.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      if (this.user.menus === "[]") {
        erroralert("角色权限不能为空");
        return;
      }
      reqRoleUpdate(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);

          if (this.user.id == this.userInfo.roleid) {
            this.changeUser({});
            this.$router.push("/login");
            return;
          }
          this.cancel();
          this.empty();
          this.$emit("init");
        }
      });
    }
  }
};
</script>

<style>
</style>