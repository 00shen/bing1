<template>
  <div class="form">
    <el-dialog :title="info.isadd?'添加分类':'编辑分类'" :visible.sync="info.isshow" @closed="cancel">
      <el-form :model="user">
        <el-form-item label="轮播图名称" label-width="100px">
          <el-input v-model="user.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" label-width="100px" v-if="user.pid!==0">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg2"
          >
            <img v-if="imgUrl" :src="imgUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
  reqbannerAdd,
  reqbannerDetail,
  reqbannerUpdate
} from "../../../utils/http";
import { successalert, erroralert } from "../../../utils/alert";
import path from "path";
export default {
  props: ["info", "list"],
  data() {
    return {
      imgUrl: "",
      user: {
        title: "",
        img: null,
        status: 1
      }
    };
  },
  mounted() {},
  methods: {
    checkProps() {
      return new Promise((resolve, reject) => {
        if (this.user.title === "") {
          erroralert("轮播图名不能为空");
          return;
        }
        if (this.user.img === null) {
          erroralert("轮播图不能为空");
          return;
        }
      });
    },
    changeImg2(e) {
      let file = e.raw;
      this.imgUrl = URL.createObjectURL(file);
      this.user.img = file;
    },
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    empty() {
      this.imgUrl = "";
      this.user = {
        title: "",
        img: null,
        status: 1
      };
    },
    add() {
      this.checkProps().then(() => {
        reqbannerAdd(this.user).then(res => {
          if (res.data.code == 200) {
            successalert(res.data.msg);
            this.cancel();
            this.empty();
            this.$emit("init");
          }
        });
      });
    },
    getOne(id) {
      reqbannerDetail({ id: id }).then(res => {
        if (res.data.code == 200) {
          this.user = res.data.list;
          this.user.id = id;
          this.imgUrl = this.$pre + this.user.img;
        }
      });
    },
    update() {
      this.checkProps().then(() => {
        reqbannerUpdate(this.user).then(res => {
          if (res.data.code == 200) {
            successalert(res.data.msg);
            this.cancel();
            this.empty();
            this.$emit("init");
          }
        });
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.form >>>.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>