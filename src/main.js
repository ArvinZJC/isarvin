/*
 * @Description: the app initialiser
 * @Version: 1.0.5.20210625
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-25 22:29:40
 */

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import "./index.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home }
    ],
    scrollBehavior(to) {
        if (to.hash) {
            if (document.getElementById(to.hash.split("#")[1])) {
                document.getElementById(to.hash.split("#")[1]).scrollIntoView({ behavior: "smooth" });
                return {
                    el: to.hash,
                    behavior: "smooth",
                    top: 64 // Better equal to the height of the navigation bar (Tailwind CSS: "m/p-16" - 4rem).
                };
            }

            return {
                top: 0,
                behavior: "smooth"
            }; // Scroll to top if no such anchor.
        }
    }
});

createApp(App).use(router).mount("#app");