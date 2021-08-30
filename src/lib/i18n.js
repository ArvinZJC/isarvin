/*
 * @Description: the script configuring the internationalisation.
 * @Version: 1.0.0.20210830
 * @Author: Arvin Zhao
 * @Date: 2021-08-29 01:12:50
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-30 14:49:40
 */

/**
 * Load all locale messages under the specified main directory.
 *
 * The loaded JSON locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * @param {function} locales all locale messages matched under the specified main directory by `require.context(<dir>, false, /[A-Za-z0-9-_,\s]+\.json$/i)` (set "false" to exclude subdirectories)
 */
export function loadLocaleMessages(locales) {
  const messages = {};

  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];

      messages[locale] = locales(key).default;
    } // end if
  });
  return messages;
} // end function loadLocaleMessages

/**
 * Decide the site locale according to the corresponding user/browser preference. 
 * @returns the decided site locale
 */
export function decideLocale() {
  var locale;

  if (localStorage.locale === "en" || (!("locale" in localStorage) && navigator.language.toLowerCase() !== "zh-cn")) {
    locale = "en";
  }
  else {
    locale = "zh-CN";
  } // end if...else

  document.documentElement.lang = locale;
  return locale;
} // end function matchSystemLocale