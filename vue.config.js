/*
 * @Description: Vue configuration
 * @Version: 1.0.3.20210829
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 23:43:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-29 04:27:02
 */

// Keep this CommonJS module rather than converting to an ES6 module. 
module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true
    }
  }
};