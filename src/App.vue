<!--
 * @Description: the root component
 * @Version: 1.1.2.20210830
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-30 19:43:03
-->

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
    <template v-slot:description="{ metainfo }">{{ metainfo.description }}</template>
  </metainfo>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="ease-out motion-safe:duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in motion-safe:duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <component :is="Component" :key="$route.name" class="motion-safe:transition-opacity" />
    </transition>
  </router-view>
</template>

<script>
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";

import { decideLocale } from "./lib/i18n.js";

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });

    useMeta({ title: "Arvin Zhao" });
    window.addEventListener("languagechange", () => {
      locale.value = decideLocale();
    });
    return { t };
  }
};
</script>