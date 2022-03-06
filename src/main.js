/*
 * @Description: the app initialiser
 * @Version: 1.1.9.20220306
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-03-06 13:08:17
 */

import smoothscroll from "smoothscroll-polyfill";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createMetaManager } from "vue-meta";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import global from "./lib/global.js";
import { decideLanguage, loadLocaleMessages } from "./lib/i18n.js";
import "./styles/index.css";

smoothscroll.polyfill();
createApp(App)
  .use(createMetaManager())
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [
        {
          component: () => import("./views/Me.vue"),
          name: global.common.ME_VIEW,
          path: "/",
        },
        {
          component: () => import("./views/404.vue"),
          name: global.common.NOT_FOUND_VIEW,
          path: "/:pathMatch(.*)*",
        },
        { path: `/${global.common.ME_VIEW}`, redirect: "/" },
        { path: "/home", redirect: "/" },
      ],
    })
  )
  .use(
    createI18n({
      legacy: false,
      locale: decideLanguage(),
      fallbackLocale:
        process.env.VUE_APP_I18N_FALLBACK_LOCALE || global.common.EN_ID,
      messages: loadLocaleMessages(
        require.context("./locales", false, /[-,\s\w]+\.json$/i)
      ),
    })
  )
  .mount(`#${global.common.APP_SCHEME}`);
