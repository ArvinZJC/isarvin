<!--
 * @Description: the view telling who I am
 * @Version: 1.0.6.20211211
 * @Author: Arvin Zhao
 * @Date: 2021-07-11 12:08:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-28 13:02:32
-->

<template>
  <main class="container-view">
    <Navbar />
    <Home />
    <Projects />
    <Education />
    <Tweeting />
    <Footer />
  </main>
</template>

<script>
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

import Footer from "../components/Footer.vue";
import Education from "../components/me/Education.vue";
import Home from "../components/me/Home.vue";
import Navbar from "../components/me/Navbar.vue";
import Projects from "../components/me/Projects.vue";
import Tweeting from "../components/me/Tweeting.vue";

export default {
  components: {
    Education,
    Footer,
    Home,
    Navbar,
    Projects,
    Tweeting,
  },
  setup() {
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
    return { t };
  },
};
</script>
