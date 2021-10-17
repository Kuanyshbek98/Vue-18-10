import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/home'),
    meta: {layout: 'default'}
  },
  {
    path: '/auth/:name',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/auth/auth'),
    meta: {layout: 'auth'}
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "resume" */ '../views/resume/resume'),
    meta: {layout: 'main'}
  },
  {
    path: '/offers',
    name: 'Offers',
    component: () => import(/* webpackChunkName: "offers" */ '../views/offers/offers'),
    meta: {layout: 'main'}
  },
  {
    path: '/deals',
    name: 'Deals',
    component: () => import(/* webpackChunkName: "deals" */ '../views/deals/deals'),
    meta: {layout: 'main'}
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/search'),
    meta: {layout: 'main'}
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/chat/chat'),
    meta: {layout: 'main'}
  },
  {
    path: '/admin/statistics',
    name: 'Statistics',
    component: () => import(/* webpackChunkName: "statistics" */ '../views/admin/statistics/statistics'),
    meta: {layout: 'admin'}
  },
  {
    path: '/admin/experts',
    name: 'Experts',
    component: () => import(/* webpackChunkName: "experts" */ '../views/admin/experts/experts'),
    meta: {layout: 'admin'}
  },
  {
    path: '/admin/companies',
    name: 'Companies',
    component: () => import(/* webpackChunkName: "companies" */ '../views/admin/companies/companies'),
    meta: {layout: 'admin'}
  },
  {
    path: '/admin/transactions',
    name: 'Transactions',
    component: () => import(/* webpackChunkName: "statistics" */ '../views/admin/transactions/transactions'),
    meta: {layout: 'admin'}
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
