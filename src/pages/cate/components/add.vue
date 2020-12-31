<template>
  <div>
    <el-dialog :title="info.isadd?'添加分类':'编辑分类'" :visible.sync="info.isshow" @closed="cancel">
      {{user}}
      <el-form :model="user">
        <el-form-item label="上级分类" label-width="100px">
          <el-select v-model="user.pid">
            <el-option value label="--请选择--" disabled></el-option>
            <el-option :value="0" label="顶级分类"></el-option>
            <el-option v-for="item in list" :key="item.id" :label="item.catename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-from-item label="分类名称" label-width="100px">
          <el-input v-model="user.catename" autocomplete="off"></el-input>
        </el-from-item>

        <el-from-item label="图片" label-width="100px" v-if="user.pid!==0">
          <div class="my-upload">
            <div class="add">+</div>
            <img v-if="imgUrl" class="img" :src="imgUrl" alt />
            <input v-if="info.isshow" type="file" class="ipt" @change="changeImg" />
          </div>
        </el-from-item>

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
import { reqcateAdd, reqcateDetail, reqcateUpdate } from "../../../utils/http";
import { successalert, erroralert } from "../../../utils/alert";
<<<<<<< HEAD
import {mapActions,mapGetters} from "vuex"
import path from "path";
export default {
  props: ["info"],
  computed:{
    ...mapGetters({
      list:"cate/list"
=======
import { mapActions, mapGetters } from "vuex";
import path from "path";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      list: "cate/list"
>>>>>>> 6209bee (tjjj)
    })
  },
  data() {
    return {
      imgUrl: "",
      user: {
        pid: "",
        catename: "",
        img: null,
        status: 1
      }
    };
  },
  methods: {
    ...mapActions({
      ...mapActions({
<<<<<<< HEAD
        "reqList":"cate/reqList"
=======
        reqList: "cate/reqList"
>>>>>>> 6209bee (tjjj)
      })
    }),
    changeImg(e) {
      let file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        erroralert("文件大小不能超过2M");
        return;
      }
      let extname = path.extname(file.name);
      let arr = [".png", ".gif", ".jpg", ".jpeg"];
      if (!arr.some(item => item === extname)) {
        erroralert("请上传图片");
        return;
      }
      this.imgUrl = URL.createObjectURL(file);
      this.user.img = file;
<<<<<<< HEAD
      console.log(this.imgUrl)
      console.log(this.user.img)
=======
      console.log(this.imgUrl);
      console.log(this.user.img);
>>>>>>> 6209bee (tjjj)
    },
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    empty() {
<<<<<<< HEAD
      this.imgUrl="",
      this.user = {
        pid: "",
        catename: "",
        img: null,
        status: 1
      };
    },
    add() {
      reqcateAdd(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.reqList()
        }
=======
      (this.imgUrl = ""),
        (this.user = {
          pid: "",
          catename: "",
          img: null,
          status: 1
        });
    },
    checkProps() {
      return new Promise((resolve, reject) => {
        if (this.user.pid === "") {
          erroralert("上级分类不能为空");
          return;
        }
        if (this.user.catename === "") {
          erroralert("分类名不能为空");
          return;
        }
        if (this.user.img === null) {
          if (this.user.pid === 0) {
          } else {
            erroralert("图片不能为空");
            return;
          }
        }

        resolve();
      });
    },
    add() {
      this.checkProps().then(() => {
        reqcateAdd(this.user).then(res => {
          if (res.data.code == 200) {
            successalert(res.data.msg);
            this.cancel();
            this.empty();
            this.reqList();
          }
        });
>>>>>>> 6209bee (tjjj)
      });
    },
    getOne(id) {
      reqcateDetail({ id: id }).then(res => {
        if (res.data.code == 200) {
          this.user = res.data.list;
          this.user.id = id;
          this.imgUrl = this.$pre + this.user.img;
        }
      });
    },
    update() {
<<<<<<< HEAD
      reqcateUpdate(this.user).then(res => {
        if (res.data.code == 200) {
          successalert(res.data.msg);
          this.cancel();
          this.empty();
          this.reqList()
        }
=======
      this.checkProps().then(() => {
        reqcateUpdate(this.user).then(res => {
          if (res.data.code == 200) {
            successalert(res.data.msg);
            this.cancel();
            this.empty();
            this.reqList();
          }
        });
>>>>>>> 6209bee (tjjj)
      });
    }
  }
};
</script>

<style scoped lang="stylus">
/* 原生js的样式 */
.my-upload {
  width: 100px;
  height: 100px;
  border: 1px dashed #999;
  position: relative;
}

.my-upload .add {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  color: #666;
}

.my-upload .ipt {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

.my-upload .img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
}

<<<<<<< HEAD
// 穿透
=======
>>>>>>> 6209bee (tjjj)
/* element-ui的样式 */
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