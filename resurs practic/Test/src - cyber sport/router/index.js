import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/shop",
    name: "shoppage",
    // meta: { layout: "main" },
    component: () => import("../views/ShopMain.vue"),
  },
  {
    path: "/shop/:id",
    name: "detail",
    // meta: { layout: "main" },
    component: () => import("../views/DetailShop.vue"),
  },
  {
    path: "/basket",
    name: "basket",
    // meta: { layout: "main" },
    component: () => import("../views/BasketPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    // meta: { layout: "main" },
    component: () => import("../views/Registration.vue"),
  },
  {
    path: "/authorization",
    name: "authorization",
    // meta: { layout: "main" },
    component: () => import("../views/Authorization.vue"),
  },
  {
    path: "/confirmation",
    name: "confirmation",
    // meta: { layout: "main" },
    component: () => import("../views/Confirmation.vue"),
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
