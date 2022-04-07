/*
 * @Description: the script configuring the site router
 * @Version: 1.0.0.20220407
 * @Author: Arvin Zhao
 * @Date: 2022-04-07 14:45:23
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-04-07 15:47:25
 */

import { createRouter, createWebHistory } from "vue-router";

import global from "./global.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import("../views/TheMe.vue"),
      name: global.common.ME_VIEW,
      path: "/",
    },
    {
      component: () => import("../views/TheError404.vue"),
      name: global.common.ERROR_404_VIEW,
      path: "/:pathMatch(.*)*",
    },
    { path: `/${global.common.ME_VIEW}`, redirect: "/" },
    { path: "/home", redirect: "/" },
  ],
});

export default router;
