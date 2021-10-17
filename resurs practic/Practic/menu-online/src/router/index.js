import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "basket" */ '../views/basket/basket')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order/order')
  },
  {
    path: '/404',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/error/404')
  },
  {
    path: '/:name',
    name: 'Store',
    component: () => import(/* webpackChunkName: "store" */ '../views/store/store')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/product/product')
  },
  {
    path: '/register/:name',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
  }, 500);
})

export default router
