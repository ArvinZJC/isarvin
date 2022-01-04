/*
 * @Description: the app initialiser
 * @Version: 1.1.6.20220105
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-01-05 03:52:00
 */

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createMetaManager } from "vue-meta";
import { createRouter, createWebHistory } from "vue-router";
import smoothscroll from "smoothscroll-polyfill";

import { decideLocale, loadLocaleMessages } from "./lib/i18n.js";
import App from "./App.vue";
import "./lib/index.js";
import "./styles/index.css";

smoothscroll.polyfill();
createApp(App)
  .use(createMetaManager())
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/", component: () => import("./views/Me.vue"), name: "me" },
        {
          path: "/:pathMatch(.*)*",
          component: () => import("./views/404.vue"),
          name: "404",
        },
      ],
    })
  )
  .use(
    createI18n({
      legacy: false,
      locale: decideLocale(),
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
      messages: loadLocaleMessages(
        require.context("./locales", false, /[A-Za-z0-9-_,\s]+\.json$/i)
      ),
    })
  )
  .mount("#app");
