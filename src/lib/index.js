/*
 * @Description: general scripts
 * @Version: 1.0.1.20210830
 * @Author: Arvin Zhao
 * @Date: 2021-08-23 13:03:10
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-30 05:16:58
 */

import { applyTheme } from "./theme.js";

const darkThemeMql = window.matchMedia("(prefers-color-scheme: dark)"); // A MediaQueryList object containing the results of detecting the system theme.

applyTheme(window.matchMedia("(prefers-color-scheme: dark)"));
darkThemeMql.onchange = applyTheme; // Listen to the change of the system theme.