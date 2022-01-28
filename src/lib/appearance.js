/*
 * @Description: the script applying the site appearance
 * @Version: 1.0.3.20220128
 * @Author: Arvin Zhao
 * @Date: 2021-08-24 08:06:11
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-01-28 17:36:06
 */

import global from "./global.js";

/**
 * Apply the light/dark mode according to the corresponding user/system preference.
 * @param {MediaQueryList} mql a MediaQueryList object containing the results of detecting the system appearance
 */
export function applyAppearance(mql) {
  if (
    localStorage.getItem(global.common.APPEARANCE_KEY) ===
      global.common.DARK_MODE_ID ||
    (localStorage.getItem(global.common.APPEARANCE_KEY) === null && mql.matches)
  ) {
    document.documentElement.classList.add(global.common.DARK_MODE_ID);
  } else {
    document.documentElement.classList.remove(global.common.DARK_MODE_ID);
  } // end if...else
} // end function applyAppearance
