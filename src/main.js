/*
 * @Description: the app initialiser
 * @Version: 1.2.0.20220407
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-04-07 15:54:29
 */

import smoothscroll from "smoothscroll-polyfill";
import { createApp } from "vue";
import { createMetaManager } from "vue-meta";

import App from "./App.vue";
import global from "./lib/global.js";
import i18n from "./lib/i18n.js";
import router from "./lib/router.js";
import "./styles/index.css";

smoothscroll.polyfill();
createApp(App)
  .use(createMetaManager())
  .use(router)
  .use(i18n)
  .mount(`#${global.common.APP_SCHEME}`);
