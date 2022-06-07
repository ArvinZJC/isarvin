<!--
 * @Description: the 404 Not Found component
 * @Version: 1.2.1.20220607
 * @Author: Arvin Zhao
 * @Date: 2021-08-30 12:38:40
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-06-07 18:19:30
-->

<template>
  <div
    class="container-block flex flex-col h-screen justify-center py-16 w-full"
  >
    <div class="flex justify-center">
      <a class="bg-white drop-shadow-lg rounded-full" href="/">
        <img
          alt="Arvin: icon"
          class="avatar-md ring-avatar rounded-full"
          src="../../assets/Arvin_icon.jpg"
        />
      </a>
    </div>
    <div class="py-16 text-center">
      <p
        class="text-content-indigo font-semibold text-sm tracking-wide uppercase"
      >
        {{ t("error") }}
      </p>
      <h1 class="text-title-lg mt-2">{{ t("title") }}</h1>
      <p class="text-content-grey mt-2">
        {{ t("description") }}
      </p>
      <div class="mt-6">
        <a
          class="btn ring-offset-indigo text-component motion-safe:transition-colours-300 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
          href="/"
          type="button"
        >
          {{ t("returnTo") }}isarvin.com
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

import global from "../../lib/global";
import * as en from "../../locales/error404/en.json";
import * as zhCN from "../../locales/error404/zh-CN.json";

export default {
  setup() {
    const messages = {};

    messages[global.common.EN_ID] = en.default;
    messages[global.common.ZH_CN_ID] = zhCN.default;
    return useI18n({ messages });
  },
};
</script>
