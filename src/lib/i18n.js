/*
 * @Description: the script configuring the internationalisation.
 * @Version: 1.1.0.20220407
 * @Author: Arvin Zhao
 * @Date: 2021-08-29 01:12:50
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-06-22 21:51:32
 */

import { createI18n } from "vue-i18n";

import global from "./global.js";
import * as enGb from "../locales/en-GB.json";
import * as enUs from "../locales/en-US.json";
import * as zhCN from "../locales/zh-CN.json";

/**
 * Decide the site language according to the corresponding user/browser preference.
 * @returns the decided site language
 */
export function decideLanguage() {
  let language = localStorage.getItem(global.common.LANGUAGE_KEY);

  // Follow the browser default.
  if (language == null) {
    switch (navigator.language.toLowerCase()) {
      case global.common.EN_GB_ID.toLowerCase():
        language = global.common.EN_GB_ID;
        break;

      case global.common.EN_US_ID.toLowerCase():
        language = global.common.EN_US_ID;
        break;

      case global.common.ZH_CN_ID.toLowerCase():
        language = global.common.ZH_CN_ID;
        break;

      default:
        language = global.common.EN_US_ID;
    } // end switch-case
  } // end if

  document.documentElement.lang = language;
  return language;
} // end function decideLanguage

const messages = {};

messages[global.common.EN_GB_ID] = enGb.default;
messages[global.common.EN_US_ID] = enUs.default;
messages[global.common.ZH_CN_ID] = zhCN.default;

const i18n = createI18n({
  locale: decideLanguage(),
  messages,
});

export default i18n;
