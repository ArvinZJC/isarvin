/*
 * @Description: universal JS scripts
 * @Version: 1.0.0.20210824
 * @Author: Arvin Zhao
 * @Date: 2021-08-23 13:03:10
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-24 08:33:59
 */

import { applyTheme } from "./lib/theme.js";

const darkThemeMql = window.matchMedia("(prefers-color-scheme: dark)"); // A MediaQueryList object containing the results of detecting the system theme.

applyTheme(window.matchMedia("(prefers-color-scheme: dark)"));
darkThemeMql.addEventListener("change", event => applyTheme(event)); // Listen to the change of the system theme.