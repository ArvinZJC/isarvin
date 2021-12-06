/*
 * @Description: Vue configuration
 * @Version: 1.0.3.20211206
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 23:43:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-06 22:15:05
 */

module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
    },
  },
};
