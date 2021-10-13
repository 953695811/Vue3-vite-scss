import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const Router = createRouter({
  history: createWebHashHistory(), // web哈希模式
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
  ],
});

export default Router;
