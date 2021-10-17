import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "name1",
    // meta: { layout: "main" },
    component: () => import("../views/DetaliRecord.vue"),
  },
  {
    path: "/2",
    name: "name2",
    // meta: { layout: "main" },
    component: () => import("../views/Detali.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
