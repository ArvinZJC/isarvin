/*
 * @Description: the app initialiser
 * @Version: 1.1.2.20210823
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-23 13:03:50
 */

import smoothscroll from "smoothscroll-polyfill";
import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Me from "./views/Me.vue";
import NotFound from "./views/404.vue";
import "./index.css";
import "./index.js";

smoothscroll.polyfill();
createApp(App).use(
    createRouter({
        history: createWebHistory(),
        routes: [
            { path: "/", component: Me },
            { path: "/:pathMatch(.*)*", component: NotFound}
        ]
    })
).use(createMetaManager()).mount("#app");