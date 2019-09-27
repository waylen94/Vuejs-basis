import Vue from 'vue'
import Router from 'vue-router'
// 引入 ./routes.js 的默认值
import routes from './routes'


Vue.use(Router)

// const routes = [
//   {
//     path: '/auth/register',
//     name: 'Register',
//     component: () => import('@/views/auth/Register')
//   },
//   // 首页路由配置
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/views/Home')
//   },
//   // 其他未配置的路由都跳转到首页
//   {
//     path: '*',
//     // 重定向
//     redirect: '/'
//   },
//   {
//     path: '/auth/login',
//     name: 'Login',
//     component: () => import('@/views/auth/Login')
//   },
// ]

const router = new Router({
  mode: 'history',
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const auth = router.app.$options.store.state.auth

  if (auth && to.path.indexOf('/auth/') !== -1) {
    next('/')
  } else {
    next()
  }
})

export default router
