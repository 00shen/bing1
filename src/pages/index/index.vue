<template>
  <div>
    <el-container class="index">
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#20222a"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

<<<<<<< HEAD
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/menu">菜单管理</el-menu-item>
              <el-menu-item index="/role">角色管理</el-menu-item>
              <el-menu-item index="/manage">管理员管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商城管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/cate">商品分类</el-menu-item>
              <el-menu-item index="/specs">商品规格</el-menu-item>
              <el-menu-item index="/goods">商品管理</el-menu-item>
              <el-menu-item index="/member">会员管理</el-menu-item>
              <el-menu-item index="/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/seckill">秒杀活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!-- 面包屑 -->
=======
          <div v-for="item in userInfo.menus" :key="item.id">
            <el-menu-item v-if="!item.children" :index="item.url">{{item.title}}</el-menu-item>
            <el-submenu :index="item.id+''" v-if="item.children">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="i in item.children" :key="i.id" :index="i.url">{{i.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span>{{userInfo.username}}</span>
          <el-button type="danger" class="tc" @click="logout">退出登录</el-button>
        </el-header>
        <el-main>
>>>>>>> 6209bee (tjjj)
          <el-breadcrumb separator="/" v-if="$route.name">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
<<<<<<< HEAD
          <!-- 二级路由出口 -->
=======
>>>>>>> 6209bee (tjjj)
          <router-view class="con"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {};
=======
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      userInfo: "userInfo"
    })
  },
  methods: {
    ...mapActions({
      changeUser: "changeUser"
    }),
    logout() {
      this.changeUser({});
      this.$router.replace("/login");
    }
  },
  mounted() {}
};
>>>>>>> 6209bee (tjjj)
</script>

<style scoped>
.index {
  height: 100vh;
}
.el-aside {
  background: #20222a;
}
.el-header {
  background: #b3c0d1;
}
<<<<<<< HEAD
.con{
  padding-top: 20px;
}
=======
.con {
  padding-top: 20px;
}
.tc{
  float: right;
}
>>>>>>> 6209bee (tjjj)
</style>