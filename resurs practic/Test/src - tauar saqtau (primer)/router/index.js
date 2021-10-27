import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Stores.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/number",
    name: "detalirecord",
    // meta: { layout: "main" },
    component: () => import("../views/PropsStor.vue"),
  },
  // {
  //   path: "/histori",
  //   name: "histori",
  //   meta: { layout: "main" },
  //   component: () => import("../views/History.vue"),
  // },
  // {
  //   path: "/planning",
  //   name: "planning",
  //   meta: { layout: "main" },
  //   component: () => import("../views/Planning.vue"),
  // }, 
  // {
  //   path: "/login",
  //   name: "login",
  //   meta: { layout: "empty" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
