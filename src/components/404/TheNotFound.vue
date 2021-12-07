<!--
 * @Description: the 404 Not Found component
 * @Version: 1.1.1.20211207
 * @Author: Arvin Zhao
 * @Date: 2021-08-30 12:38:40
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-07 22:50:50
-->

<template>
  <div class="container-block flex flex-col h-screen justify-center py-16 w-full">
    <div class="flex justify-center">
      <a class="bg-white drop-shadow-lg rounded-full" href="/">
        <img
          alt="Arvin: icon"
          class="avatar-md ring-avatar rounded-full"
          src="../../assets/Arvin_icon.png"
        />
      </a>
    </div>
    <div class="py-16 text-center">
      <p class="text-content-indigo font-semibold text-sm tracking-wide uppercase">{{ t("error") }}</p>
      <h1 class="text-title-lg mt-2">{{ t("title") }}</h1>
      <p class="text-content-grey mt-2 tracking-tight">{{ t("description") }}</p>
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

import { loadLocaleMessages } from "../../lib/i18n.js";

export default {
  setup() {
    return useI18n({ messages: loadLocaleMessages(require.context("../../locales/404", false, /[A-Za-z0-9-_,\s]+\.json$/i)) });
  }
};
</script>