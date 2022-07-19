import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/ ',
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
    component: () => import('@/views/FavorateList')
  },
  {
    path: '/details/:detailsId',
    name: 'details',
    component: () => import('@/views/Details')
  },
  {
    path: '/rental',
    name: 'rental',
    component: () => import('@/views/My-Rental')
  },
  {
    path: '/city',
    component: () => import('@/views/City')
  },
  {
    path: '/gorent',
    component: () => import('@/views/Gorent')
  }
]
// Rental
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
