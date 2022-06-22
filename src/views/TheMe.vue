<!--
 * @Description: the view telling who I am
 * @Version: 1.2.0.20220622
 * @Author: Arvin Zhao
 * @Date: 2021-07-11 12:08:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-06-22 21:08:58
-->

<template>
  <main class="container-view">
    <TheNavbar />
    <TheHome />
    <TheProjects />
    <TheEducation />
    <TheTweeting />
    <TheFooter />
  </main>
</template>

<script setup>
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

import TheEducation from "../components/me/TheEducation.vue";
import TheHome from "../components/me/TheHome.vue";
import TheNavbar from "../components/me/TheNavbar.vue";
import TheProjects from "../components/me/TheProjects.vue";
import TheTweeting from "../components/me/TheTweeting.vue";
import TheFooter from "../components/TheFooter.vue";

const { t } = useI18n();

useMeta({
  description: t("pages.me.description"),
  title: t("pages.me.title"),
});
window.addEventListener("languagechange", () => {
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", t("pages.me.description"));
  document.title = t("pages.me.title");
});
</script>
