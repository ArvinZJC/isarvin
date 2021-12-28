<!--
 * @Description: the 404 Not Found view
 * @Version: 1.0.4.20211228
 * @Author: Arvin Zhao
 * @Date: 2021-08-22 19:21:02
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-28 13:01:18
-->

<template>
  <main class="container-view">
    <NotFound />
    <Footer />
  </main>
</template>

<script>
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

import NotFound from "../components/404/NotFound.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Footer, NotFound },
  setup() {
    const { t } = useI18n();

    useMeta({
      description: t("pages.404.description"),
      title: t("pages.404.title"),
    });
    window.addEventListener("languagechange", () => {
      document
        .querySelector("meta[name='description']")
        .setAttribute("content", t("pages.404.description"));
      document.title = t("pages.404.title");
    });
    return { t };
  },
};
</script>
