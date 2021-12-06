/*
 * @Description: the script applying the theme to the site
 * @Version: 1.0.2.20211206
 * @Author: Arvin Zhao
 * @Date: 2021-08-24 08:06:11
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-06 22:11:43
 */

const DARK = "dark";
const LIGHT = "light";
const THEME = "theme"; // The key to store the theme info in the local storage.

export { DARK, LIGHT, THEME };

/**
 * Apply the light/dark theme according to the corresponding user/system preference.
 * @param {MediaQueryList} mql a MediaQueryList object containing the results of detecting the system theme
 */
export function applyTheme(mql) {
  if (
    localStorage.getItem(THEME) === DARK ||
    (localStorage.getItem(THEME) === null && mql.matches)
  ) {
    document.documentElement.classList.add(DARK);
  } else {
    document.documentElement.classList.remove(DARK);
  } // end if...else
} // end function applyTheme
