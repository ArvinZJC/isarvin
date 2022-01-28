/*
 * @Description: the script configuring the internationalisation.
 * @Version: 1.0.4.20220128
 * @Author: Arvin Zhao
 * @Date: 2021-08-29 01:12:50
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-01-28 17:59:40
 */

import global from "./global.js";

/**
 * Load all locale messages under the specified main directory.
 *
 * The loaded JSON locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * @param {function} locales all locale messages matched under the specified main directory by `require.context(<dir>, false, /[-_,\s\w]+\.json$/i)` (set "false" to exclude subdirectories)
 */
export function loadLocaleMessages(locales) {
  const messages = {};

  locales.keys().forEach((key) => {
    const matched = key.match(/([-\w]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];

      messages[locale] = locales(key).default;
    } // end if
  });
  return messages;
} // end function loadLocaleMessages

/**
 * Decide the site language according to the corresponding user/browser preference.
 * @returns the decided site language
 */
export function decideLanguage() {
  var language = localStorage.getItem(global.common.LANGUAGE_KEY);

  // Follow the browser default.
  if (language === null) {
    if (
      navigator.language.toLowerCase() === global.common.ZH_CN_ID.toLowerCase()
    ) {
      language = global.common.ZH_CN_ID;
    } else {
      language = global.common.EN_ID;
    } // end if...else
  } // end if

  document.documentElement.lang = language;
  return language;
} // end function decideLanguage
