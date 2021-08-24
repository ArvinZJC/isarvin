/*
 * @Description: the script applying the theme to the site
 * @Version: 1.0.0.20210824
 * @Author: Arvin Zhao
 * @Date: 2021-08-24 08:06:11
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-24 08:34:39
 */

// Apply the light/dark theme according to the corresponding user/system preference.
export function applyTheme(mql) {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && mql.matches)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    } // end if...else
} // end function applyTheme