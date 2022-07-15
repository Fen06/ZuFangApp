import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/ ',
        component: () => import('@/views/Home')
      },
      {
        path: '/news',
        component: () => import('@/views/news')
      },
      {
        path: '/find',
        component: () => import('@/views/Find')
      },
      {
        path: '/my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index')
  },
  {
    path: '/register',
    component: () => import('@/views/Register')
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  }
]

const router = new VueRouter({
  routes
})

// 导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     next()
//   } else {
//     const token = localStorage.getItem('userToken')
//     if (token === null || token === '') {
//       next({ path: '/' })
//     } else {
//       next()
//     }
//   }
// })
export default router
