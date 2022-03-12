/*
 * @Description: Vue configuration
 * @Version: 1.0.4.20220312
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 23:43:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-03-12 20:52:21
 */

module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  crossorigin: "anonymous",
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
