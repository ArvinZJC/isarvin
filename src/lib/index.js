/*
 * @Description: general scripts
 * @Version: 1.0.1.20211206
 * @Author: Arvin Zhao
 * @Date: 2021-08-23 13:03:10
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-06 22:11:42
 */

import { applyTheme } from "./theme.js";

const darkThemeMql = window.matchMedia("(prefers-color-scheme: dark)"); // A MediaQueryList object containing the results of detecting the system theme.

applyTheme(window.matchMedia("(prefers-color-scheme: dark)"));
darkThemeMql.onchange = applyTheme; // Listen to the change of the system theme.
