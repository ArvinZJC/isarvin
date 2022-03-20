/*
 * @Description: the utility script
 * @Version: 1.0.0.20220320
 * @Author: Arvin Zhao
 * @Date: 2022-03-20 19:36:00
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-03-20 20:31:45
 */

import global from "./global.js";

/**
 * Debounce the specified function to improve performance.
 * @param {Number} delay the delay for debouncing.
 * @param {Function} fn the function to debounce.
 */
export function debounce(delay, fn) {
  let timer;

  return () => {
    let _this = this;
    let args = arguments;
    delay = delay > 0 ? delay : global.common.DEFAULT_DEBOUNCE_DELAY;

    if (timer) {
      clearTimeout(timer);
    } // end if

    timer = setTimeout(() => fn.apply(_this, args), delay);
  };
} // end function debounce

/**
 * Throttle the specified function to improve performance.
 * @param {Number} delay the delay for throttling.
 * @param {Function} fn the function to throttle.
 */
export function throttle(delay, fn) {
  let previous = 0;

  return () => {
    let _this = this;
    let args = arguments;
    let now = new Date();
    delay = delay > 0 ? delay : global.common.DEFAULT_THROTTLE_DELAY;

    if (now - previous > delay) {
      fn.apply(_this, args);
      previous = now;
    } // end if
  };
} // end function throttle
