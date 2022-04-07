<!--
 * @Description: the 404 Not Found view
 * @Version: 1.1.0.20220407
 * @Author: Arvin Zhao
 * @Date: 2021-08-22 19:21:02
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-04-07 15:50:19
-->

<template>
  <main class="container-view">
    <NotFound />
    <TheFooter />
  </main>
</template>

<script>
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

import NotFound from "../components/error404/NotFound.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: { TheFooter, NotFound },
  setup() {
    const { t } = useI18n();

    useMeta({
      description: t("pages.error404.description"),
      title: t("pages.error404.title"),
    });
    window.addEventListener("languagechange", () => {
      document
        .querySelector("meta[name='description']")
        .setAttribute("content", t("pages.error404.description"));
      document.title = t("pages.error404.title");
    });
    return { t };
  },
};
</script>
