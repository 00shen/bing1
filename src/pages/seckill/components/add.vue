<template>
  <div>
<<<<<<< HEAD
    <el-dialog
      :title="info.isadd?'添加秒杀':'编辑秒杀'"
      :visible.sync="info.isshow"
      @closed="cancel"
    >
=======
    <el-dialog :title="info.isadd?'添加秒杀':'编辑秒杀'" :visible.sync="info.isshow" @closed="cancel">
>>>>>>> 6209bee (tjjj)
      <el-form :model="user">
        <div>user:{{user}}</div>
        <el-form-item label="活动名称" label-width="100px">
          <el-input v-model="user.title"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" label-width="100px">
          <el-date-picker
            v-model="value"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="一级分类" label-width="100px">
          <el-select v-model="user.first_cateid" @change="changecate">
            <el-option label="--请选择--" value disabled></el-option>
            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" label-width="100px">
          <el-select v-model="user.second_cateid" @change="changegoods">
            <el-option label="--请选择--" value disabled></el-option>
            <el-option
              v-for="item in secondCateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品" label-width="100px">
          <el-select v-model="user.goodsid">
            <el-option label="--请选择--" value disabled></el-option>
            <el-option
              v-for="item in goodsArr"
              :key="item.id"
              :label="item.goodsname"
              :value="item.id"
            ></el-option>
          </el-select>
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
import { mapActions, mapGetters } from "vuex";
import {
  reqcatelist,
  reqgoodslist,
  reqseckillAdd,
  reqseckillDetail,
<<<<<<< HEAD
  reqseckillUpdate,
  reqgoodsAdd,
  reqgoodsDetail,
  reqgoodsUpdate
=======
  reqseckillUpdate
>>>>>>> 6209bee (tjjj)
} from "../../../utils/http";
import { successalert, erroralert } from "../../../utils/alert";
export default {
  props: ["info"],
  data() {
    return {
<<<<<<< HEAD
      // 1.初始化数据
=======
>>>>>>> 6209bee (tjjj)
      user: {
        title: "",
        goodsid: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        status: 1
      },
<<<<<<< HEAD
      //4.二级分类的列表
=======
>>>>>>> 6209bee (tjjj)
      secondCateList: [],
      goodsArr: [],
      value: null
    };
  },
  computed: {
    ...mapGetters({
<<<<<<< HEAD
      //3.1 分类的list
      cateList: "cate/list",
      //7.1 规格的list
=======
      cateList: "cate/list",
>>>>>>> 6209bee (tjjj)
      goodslist: "goods/list"
    })
  },
  methods: {
    ...mapActions({
<<<<<<< HEAD
      //3.2分类列表的获取
      reqCateList: "cate/reqList",
      //7.2 规格列表的获取
      reqgoodslist: "goods/reqList"
    }),
=======
      reqCateList: "cate/reqList",
      reqgoodslist: "goods/reqList"
    }),
    checkProps() {
      return new Promise((resolve, reject) => {
        if (this.user.title === "") {
          erroralert("活动名不能为空");
          return;
        }
        if (this.user.goodsid === "") {
          erroralert("一级分类不能为空");
          return;
        }
        if (this.user.first_cateid === "") {
          erroralert("二级分类不能为空");
          return;
        }
        if (this.user.second_cateid === "") {
          erroralert("商品名不能为空");
          return;
        }
        resolve();
      });
    },
>>>>>>> 6209bee (tjjj)
    //二级分类
    changecate() {
      this.user.second_cateid = "";
      this.getSecondList();
    },
    getSecondList() {
      reqcatelist({ pid: this.user.first_cateid }).then(res => {
        if (res.data.code == 200) {
          this.secondCateList = res.data.list;
        }
      });
    },
    //商品
    changegoods() {
      this.user.goodsid = "";
      this.goodsArr = [];
      this.getgoodsList();
    },
    getgoodsList() {
      reqgoodslist().then(res => {
        for (let i = 0; i < res.data.list.length; i++) {
          if (res.data.list[i].second_cateid == this.user.second_cateid) {
            this.goodsArr.push(res.data.list[i]);
          }
        }
      });
    },
    cancel() {
      if (!this.info.isadd) {
        this.empty();
      }
      this.info.isshow = false;
    },
    empty() {
      this.user = {
        title: "",
        goodsid: "",
        first_cateid: "",
        second_cateid: "",
        status: 1,
        beginittime: "",
<<<<<<< HEAD
        endtime: "",
=======
        endtime: ""
>>>>>>> 6209bee (tjjj)
      };
      this.secondCateList = [];
      this.goodsArr = [];
      this.value = null;
    },
    add() {
<<<<<<< HEAD
      this.user.begintime = this.value[0].getTime();
      this.user.endtime = this.value[1].getTime();
      console.log(this.user)
      reqseckillAdd(this.user).then(res => {
        if (res.data.code == 200) {
          this.cancel();
          this.empty();
          successalert(res.data.msg);
        }
      });
       this.$emit("init")
    },
    //获取一条数据
    getOne(id) {
     reqseckillDetail({id:id}).then(res=>{
       this.user = res.data.list
       this.user.id=id
       console.log(this.user)
        this.getgoodsList();
        this.getSecondList();
          this.value = [
          new Date(parseFloat(this.user.begintime)),
          new Date(parseFloat(this.user.endtime)),
        ];
     })

    },
    //修改
    update() {
      this.user.begintime = this.value[0].getTime();
      this.user.endtime = this.value[1].getTime();
      reqseckillUpdate(this.user).then(res=>{
        if (res.data.code == 200) {
          this.cancel();
          this.empty();
          successalert(res.data.msg);
        }
      })
       this.$emit("init")
    }
  },
  mounted() {
    //3.3如果没有请过分类数据，就发一下请求
    if (this.cateList.length === 0) {
      this.reqCateList();
    }

=======
      if (this.value === null) {
        erroralert("时间不能为空");
        return;
      }
      this.user.begintime = this.value[0].getTime();
      this.user.endtime = this.value[1].getTime();
      this.checkProps().then(() => {
        console.log("aaa");
        reqseckillAdd(this.user).then(res => {
          if (res.data.code == 200) {
            this.cancel();
            this.empty();
            successalert(res.data.msg);
          }
        });
      });
      this.$emit("init");
    },
    //获取一条数据
    getOne(id) {
      reqseckillDetail({ id: id }).then(res => {
        this.user = res.data.list;
        this.user.id = id;
        console.log(this.user);
        this.getgoodsList();
        this.getSecondList();
        this.value = [
          new Date(parseFloat(this.user.begintime)),
          new Date(parseFloat(this.user.endtime))
        ];
      });
    },
    //修改
    update() {
      if (this.value === null) {
        erroralert("时间不能为空");
        return;
      }
      this.user.begintime = this.value[0].getTime();
      this.user.endtime = this.value[1].getTime();
      this.checkProps().then(() => {
        reqseckillUpdate(this.user).then(res => {
          if (res.data.code == 200) {
            this.cancel();
            this.empty();
            successalert(res.data.msg);
          }
        });
      });
      this.$emit("init");
    }
  },
  mounted() {
    if (this.cateList.length === 0) {
      this.reqCateList();
    }
>>>>>>> 6209bee (tjjj)
  }
};
</script>

<style scoped>
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
</style>