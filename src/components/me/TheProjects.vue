<!--
 * @Description: the projects component
 * @Version: 1.1.0.20210909
 * @Author: Arvin Zhao
 * @Date: 2021-06-23 20:40:06
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-09-09 02:14:31
-->

<template>
  <!-- Projects section. -->
  <div class="bg-indigo-100 dark:bg-indigo-900" id="projects">
    <div class="container-block flex flex-col items-center pb-4 sm:pb-6 lg:pb-8 pt-16 sm:pt-20 lg:pt-24">
      <!-- Section header. -->
      <span class="badge-square-3 mb-6 shadow-lg">
        <CollectionIcon aria-hidden="true" class="icon-6" />
      </span>
      <div class="text-center">
        <h2 class="text-title">{{ t("projects") }}</h2>
        <p class="container-text text-secondary mt-3 sm:mt-4 text-xl tracking-tight">
          {{ t("description[0]") }}<a class="text-link motion-safe:transition-colours-300" href="https://github.com/ArvinZJC" target="_blank">{{ t("gh") }}</a>{{ t("description[1]") }}
        </p>
      </div>
      <!-- Project cards. -->
      <div class="gap-5 grid lg:grid-cols-3 max-w-lg lg:max-w-none mt-12 mx-auto">
        <div v-for="project in projects" :key="project.name" class="card ring-container flex flex-col overflow-hidden shadow-lg">
          <img :alt="project.name" :src="project.imageUrl" class="container-avatar !rounded-none flex-shrink-0 h-48 sm:h-56 object-cover w-full" />
          <div class="flex flex-1 flex-col justify-between p-4 sm:p-6">
            <div class="flex-1 max-h-80 overflow-auto text-justify">
              <span :class="[project.category.style, 'badge']">{{ t(project.category.name) }}</span>
              <div class="block mt-2">
                <p class="text-primary">{{ t(project.name) }}</p>
                <p class="text-content-grey mt-3 tracking-tight">{{ t(project.intro) }}</p>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <button @click="open = true" class="btn ring-offset-indigo motion-safe:transition-colours-300 overflow-hidden relative focus:ring-offset-white dark:focus:ring-offset-black w-24 z-10" type="button">
                <span class="text-component relative z-10">{{ t("explore") }}</span>
                <div class="motion-safe:liquid" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- A modal indicating a project details page's unavailable status. -->
      <TransitionRoot :show="open" as="template">
        <Dialog @close="open = false" :open="open" as="div" class="container-overlay" static>
          <div class="container-overlay-screen">
            <TransitionChild as="template" enter="motion-safe:transition-opacity-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="motion-safe:transition-opacity-300 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <DialogOverlay class="container-overlay-translucent" />
            </TransitionChild>
            <!-- This element is to trick the browser into centring the modal contents at the small breakpoint. -->
            <span aria-hidden="true" class="sm:align-middle sm:h-screen hidden sm:inline-block">&#8203;</span>
            <TransitionChild as="template" enter="motion-safe:transition-300 ease-out" enter-from="modal-out" enter-to="modal-in" leave="motion-safe:transition-300 ease-in" leave-from="modal-in" leave-to="modal-out">
              <div class="card modal ring-container">
                <div class="flex">
                  <span class="badge-square-3 !colour-warning !rounded-full mx-auto shadow-lg">
                    <ExclamationCircleIcon aria-hidden="true" class="icon-6" />
                  </span>
                </div>
                <div class="mt-3 sm:mt-5 text-center">
                  <DialogTitle as="h3" class="text-primary !font-medium !text-lg !leading-6 overflow-ellipsis overflow-hidden">{{ t("pageUnavailable.title") }}</DialogTitle>
                  <div class="mt-2">
                    <p class="text-content-grey overflow-ellipsis overflow-hidden text-sm">{{ t("pageUnavailable.message") }}</p>
                  </div>
                </div>
                <div class="mt-4 sm:mt-6">
                  <button @click="open = false" class="btn ring-offset-indigo text-component motion-safe:transition-colours-300 focus:ring-offset-white dark:focus:ring-offset-black w-full" type="button">{{ t("alright") }}</button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<script>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { CollectionIcon, ExclamationCircleIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import { loadLocaleMessages } from "../../lib/i18n.js";
import ShSzStockHelperWindowsBanner from "../../assets/ShSzStockHelper-Windows_banner.png";
import TgStickerPorterBanner from "../../assets/TgStickerPorter_banner.png";
import WeiboEmojiBanner from "../../assets/WeiboEmoji_banner.png";

export default {
  components: {
    CollectionIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    ExclamationCircleIcon,
    TransitionChild,
    TransitionRoot
  },
  setup() {
    const { t } = useI18n({ messages: loadLocaleMessages(require.context("../../locales/me/projects", false, /[A-Za-z0-9-_,\s]+\.json$/i)) });
    const categories = {
      active: { name: "status.active", style: "colour-success" },
      inWorks: { name: "status.inWorks", style: "colour-warning" }
    };
    const projects = [
      {
        imageUrl: ShSzStockHelperWindowsBanner,
        category: categories.active,
        name: "info.shSzStockHelper.name",
        intro: "info.shSzStockHelper.intro",
        route: "#"
      },
      {
        imageUrl: WeiboEmojiBanner,
        category: categories.active,
        name: "info.weiboEmoji.name",
        intro: "info.weiboEmoji.intro",
        route: "#"
      },
      {
        imageUrl: TgStickerPorterBanner,
        category: categories.inWorks,
        name: "info.tgStickerPorter.name",
        intro: "info.tgStickerPorter.intro",
        route: "#"
      }
    ];
    const open = ref(false);
    return { open, projects, t };
  },
  mounted() {
    // Disable the liquid animation of buttons on touchscreens.
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
      var liquidButtons = document.getElementsByClassName("motion-safe:liquid");

      if (liquidButtons) {
        Array.prototype.forEach.call(liquidButtons, (element) => {
          element.style.display = "none";
        });
      } // end if
    } // end if
  }
};
</script>