/*
 * @Description: ESLint configuration
 * @Version: 1.0.0.20220407
 * @Author: Arvin Zhao
 * @Date: 2022-04-07 14:01:07
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-04-07 14:55:14
 */

/* eslint-env node */
module.exports = {
  env: {
    "vue/setup-compiler-macros": true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  root: true,
};
