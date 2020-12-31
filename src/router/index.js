import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

<<<<<<< HEAD
//11.导出二级路由
=======
import store from "../store"
function checkEnter(path,next){
  if(store.state.userInfo.menus_url.includes(path)){
    next()
  }else{
    next("/")
  }
}

//导出二级路由
>>>>>>> 6209bee (tjjj)
export let indexRoutes=[
  {
    path:"menu",
    component:()=>import("../pages/menu/menu.vue"),
<<<<<<< HEAD
    name:"菜单管理"
=======
    name:"菜单管理",
    beforeEnter(to,from,next){
     checkEnter("/menu",next)
    }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"role",
    component:()=>import("../pages/role/role.vue"),
<<<<<<< HEAD
    name:"角色管理"
=======
    name:"角色管理",
    beforeEnter(to,from,next){
      checkEnter("/role",next)
     }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"manage",
    component:()=>import("../pages/manage/manage.vue"),
<<<<<<< HEAD
    name:"管理员管理"
=======
    name:"管理员管理",
    beforeEnter(to,from,next){
      checkEnter("/manage",next)
     }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"cate",
    component:()=>import("../pages/cate/cate.vue"),
<<<<<<< HEAD
    name:"商品分类"
=======
    name:"商品分类",
    beforeEnter(to,from,next){
      checkEnter("/cate",next)
     }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"specs",
    component:()=>import("../pages/specs/specs.vue"),
<<<<<<< HEAD
    name:"商品规格"
=======
    name:"商品规格",
    beforeEnter(to,from,next){
      checkEnter("/specs",next)
     }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"goods",
    component:()=>import("../pages/goods/goods.vue"),
<<<<<<< HEAD
    name:"商品管理"
=======
    name:"商品管理",
    beforeEnter(to,from,next){
      checkEnter("/goods",next)
     }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"member",
    component:()=>import("../pages/member/member.vue"),
<<<<<<< HEAD
    name:"会员管理"
=======
    name:"会员管理",
    beforeEnter(to,from,next){
      checkEnter("/member",next)
     }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"banner",
    component:()=>import("../pages/banner/banner.vue"),
<<<<<<< HEAD
    name:"轮播图管理"
=======
    name:"轮播图管理",
    beforeEnter(to,from,next){
      checkEnter("/banner",next)
     }
>>>>>>> 6209bee (tjjj)
  },
  {
    path:"seckill",
    component:()=>import("../pages/seckill/seckill.vue"),
<<<<<<< HEAD
    name:"秒杀活动"
  },
]

export default new Router({
=======
    name:"秒杀活动",
    beforeEnter(to,from,next){
      checkEnter("/seckill",next)
     }
  },
]

let router=new Router({
>>>>>>> 6209bee (tjjj)
  routes: [
    {
      path: "/login",
      component: () => import("../pages/login/login.vue")
    },
    {
      path: "/",
      component: () => import("../pages/index/index.vue"),
      children:[
        {
          path:"",
          component:()=>import("../pages/home/home.vue")
        },
<<<<<<< HEAD
        //12.恢复
=======
>>>>>>> 6209bee (tjjj)
        ...indexRoutes
      ]
    },

  ]
})
<<<<<<< HEAD
=======

router.beforeEach((to,from,next)=>{
  if(to.path==="/login"){
    next()
    return
  }
  if(store.state.userInfo.id){
    next()
    return;
  }
  next("/login")
})

export default router
>>>>>>> 6209bee (tjjj)
