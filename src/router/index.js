//1.創建路由組件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

//2.將路由與組件進行映射
const routes = [
    //主路由
    {   path: '/', 
        component: Main,
        children:[
            //子路由
            { path: '/home', component: Home },
            { path: '/user', component: User }
        ]
    },

  ]

//3.創建router實例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

export default router

