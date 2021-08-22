/*
 * @Description: the app initialiser
 * @Version: 1.1.0.20210822
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-22 23:13:21
 */

import smoothscroll from "smoothscroll-polyfill";
import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Me from "./views/Me.vue";
import NotFound from "./views/404.vue";
import "./index.css";

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