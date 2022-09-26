import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'OrderView',
    children:[]
    /* children: [
      {
        path: 'OrderView',
        name: 'OrderView',
        component: () => import('../views/OrderView.vue'),
        meta:{
          isShow: true,
          title: '订单列表'
        },
      },
      {
        path: 'UserView',
        name: 'UserView',
        component: () => import('../views/UserView.vue'),
        meta:{
          isShow: true,
          title: '用户列表'
        },
      },
      {
        path: 'RoleView',
        name: 'RoleView',
        component: () => import('../views/RoleView.vue'),
        meta:{
          isShow: true,
          title: '角色列表'
        },
      },
      {
        path: 'AuthorityView',
        name: 'AuthorityView',
        component: () => import('../views/AuthorityView.vue'),
        meta:{
          isShow: false,
          title: '权限列表'
        },
      },
    ] */
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  const token:string | null = localStorage.getItem('token')
  console.log(token);
  
  if(!token && to.path !== '/login'){
    return '/login'
  }else if(token && to.path !== '/login'){
    console.log('token');
    
    if(router.getRoutes().length === 3){
      console.log('3');
      
      // 动态添加路由
      const routerData:any = [
        {
          path: 'OrderView',
          name: 'OrderView',
          component: () => import('../views/OrderView.vue'),
          meta:{
            isShow: true,
            title: '订单列表'
          },
        },
        {
          path: 'UserView',
          name: 'UserView',
          component: () => import('../views/UserView.vue'),
          meta:{
            isShow: true,
            title: '用户列表'
          },
        },
        {
          path: 'RoleView',
          name: 'RoleView',
          component: () => import('../views/RoleView.vue'),
          meta:{
            isShow: true,
            title: '角色列表'
          },
        },
        {
          path: 'AuthorityView',
          name: 'AuthorityView',
          component: () => import('../views/AuthorityView.vue'),
          meta:{
            isShow: false,
            title: '权限列表'
          },
        },
      ]
  
      routerData.forEach((item:any)=>{
        const routerObj:RouteRecordRaw = {
          path:item.name,
          name:item.name,
          meta:item.meta,
          component: () => import(/* webpackChunkName: "[request]" */ `@/views/${item.path}.vue`)
        }
        router.addRoute('home',routerObj)
      })
    }
    router.replace(to.path)
  }else if(token && to.path === '/login'){
    return '/'
  }
})

export default router
