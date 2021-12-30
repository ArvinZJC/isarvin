/*
 * @Description: the app initialiser
 * @Version: 1.1.6.20211230
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-30 16:06:50
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

const Me = () => import("./views/Me.vue");
const NotFound = () => import("./views/404.vue");

smoothscroll.polyfill();
createApp(App)
  .use(createMetaManager())
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/", component: Me, name: "me" },
        { path: "/:pathMatch(.*)*", component: NotFound, name: "404" },
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
