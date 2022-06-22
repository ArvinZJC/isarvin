<!--
 * @Description: the root component
 * @Version: 1.3.0.20220622
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-06-22 21:08:05
-->

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
    <template v-slot:description="{ metainfo }">{{
      metainfo.description
    }}</template>
  </metainfo>
  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="motion-safe:transition-opacity-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="motion-safe:transition-opacity-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <component :is="Component" :key="$route.name" />
    </transition>
  </router-view>
</template>

<script>
import { applyAppearance } from "./lib/appearance.js";
import { decideLanguage } from "./lib/i18n.js";

export default {
  mounted() {
    const darkModeMql = window.matchMedia("(prefers-color-scheme: dark)"); // A MediaQueryList object containing the results of detecting the system appearance.

    applyAppearance(darkModeMql);
    darkModeMql.onchange = applyAppearance; // Listen to the change of the system appearance.
  },
};
</script>

<script setup>
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";

import global from "./lib/global.js";

const { locale } = useI18n({ useScope: global.common.GLOBAL_LOCALE });

useMeta({ title: global.common.DEFAULT_TITLE });
window.addEventListener("languagechange", () => {
  locale.value = decideLanguage();
});
</script>
