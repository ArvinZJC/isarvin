/*
 * @Description: the app initialiser
 * @Version: 1.0.6.20210711
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-07-11 16:51:03
 */

import { createApp } from "vue";
import smoothscroll from "smoothscroll-polyfill";
import App from "./App.vue";
import "./index.css";

smoothscroll.polyfill();
createApp(App).mount("#app");