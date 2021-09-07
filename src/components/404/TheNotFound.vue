<!--
 * @Description: the 404 Not Found component
 * @Version: 1.0.3.2021907
 * @Author: Arvin Zhao
 * @Date: 2021-08-30 12:38:40
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-09-07 19:53:49
-->

<template>
  <div class="flex flex-col justify-center max-w-7xl h-screen w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="flex justify-center">
      <a href="/" class="rounded-full bg-white ring-2 ring-indigo-200 dark:ring-indigo-700 drop-shadow-lg">
        <img class="h-24 sm:h-28 lg:h-32 w-24 sm:w-28 lg:w-32 rounded-full" src="../../assets/Arvin_icon.png" alt="Arvin: icon" />
      </a>
    </div>
    <div class="py-16 text-center">
      <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-500 uppercase tracking-wide">{{ t("error") }}</p>
      <h1 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-5xl">{{ t("title") }}</h1>
      <p class="mt-2 text-base text-gray-500 dark:text-gray-400">{{ t("description") }}</p>
      <div class="mt-6">
        <a href="/" type="button" class="bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 motion-safe:transition-colors motion-safe:duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-black font-medium text-gray-50 rounded-lg shadow-md px-4 py-2">
          {{ t("returnTo") }}isarvin.com<span aria-hidden="true"> &rarr;</span>
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