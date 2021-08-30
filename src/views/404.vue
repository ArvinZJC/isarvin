<!--
 * @Description: the 404 Not Found view
 * @Version: 1.0.4.20210830
 * @Author: Arvin Zhao
 * @Date: 2021-08-22 19:21:02
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-30 19:24:00
-->

<template>
  <main class="view-container">
    <TheNotFound />
    <TheFooter />
  </main>
</template>

<script>
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

import TheFooter from "../components/TheFooter.vue";
import TheNotFound from "../components/404/TheNotFound.vue";

export default {
  components: { TheFooter, TheNotFound },
  setup() {
    const { t } = useI18n();

    useMeta({
      description: t("pages.404.description"),
      title: t("pages.404.title")
    });
    window.addEventListener("languagechange", () => {
      document.querySelector("meta[name='description']").setAttribute("content", t("pages.404.description"));
      document.title = t("pages.404.title");
    });
    return { t };
  }
};
</script>