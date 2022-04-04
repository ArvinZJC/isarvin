<!--
 * @Description: the project component
 * @Version: 1.2.3.20220404
 * @Author: Arvin Zhao
 * @Date: 2021-06-23 20:40:06
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-04-04 17:29:41
-->

<template>
  <!-- Project section. -->
  <div
    :id="global.common.PROJECT_SECTION"
    class="bg-indigo-100 dark:bg-indigo-900"
  >
    <div
      class="container-block flex flex-col items-center pb-4 sm:pb-6 lg:pb-8 pt-16 sm:pt-20 lg:pt-24"
    >
      <!-- Section header. -->
      <div class="flex flex-col items-center justify-center">
        <span class="badge-square-3 mb-6 shadow-lg">
          <CollectionIcon aria-hidden="true" class="icon-6" />
        </span>
        <div class="text-center">
          <h2 class="text-title">{{ t(global.common.PROJECT_SECTION) }}</h2>
          <p class="container-text text-secondary mt-3 sm:mt-4 text-xl">
            {{ t("description[0]") }}
            <a
              :href="global.common.GITHUB_HOME"
              class="text-link motion-safe:transition-colours-300"
              rel="noopener noreferrer nofollow"
              target="_blank"
              >{{ t("gh") }}</a
            >
            {{ t("description[1]") }}
          </p>
        </div>
      </div>
      <!-- Project cards. -->
      <div
        class="gap-5 grid lg:grid-cols-3 max-w-lg lg:max-w-none mt-12 mx-auto"
      >
        <div v-for="project in projects" :key="project.name" class="flex">
          <transition
            enter-active-class="motion-safe:transition-1000 ease-out"
            enter-from-class="float-down-5"
            enter-to-class="float-up"
            leave-active-class="motion-safe:transition-1000 ease-in"
            leave-from-class="float-up"
            leave-to-class="float-down-5"
          >
            <div
              class="card ring-container flex flex-col overflow-hidden shadow-lg"
            >
              <img
                :alt="project.name"
                :src="project.imageUrl"
                class="container-avatar !rounded-none h-48 sm:h-56 object-cover shrink-0 w-full"
              />
              <div class="flex flex-1 flex-col justify-between p-4 sm:p-6">
                <div class="flex-1 max-h-80 overflow-auto text-justify">
                  <span :class="[project.category.style, 'badge']">
                    {{ t(project.category.name) }}
                  </span>
                  <div class="block mt-2">
                    <p class="text-primary">{{ t(project.name) }}</p>
                    <p class="text-content-grey mt-3">
                      {{ t(project.intro) }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center mt-6">
                  <button
                    @click="open = true"
                    class="btn ring-offset-indigo motion-safe:transition-colours-300 group overflow-hidden relative focus:ring-offset-white dark:focus:ring-offset-black w-24 z-10"
                    type="button"
                  >
                    <span class="text-component relative z-10">
                      {{ t("explore") }}
                    </span>
                    <div :class="liquid" />
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!-- A modal indicating a project details page's unavailable status. -->
      <TransitionRoot :show="open" as="template">
        <Dialog
          @close="open = false"
          :open="open"
          as="div"
          class="container-overlay"
          static
        >
          <div class="container-overlay-screen">
            <TransitionChild
              as="template"
              enter="motion-safe:transition-opacity-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="motion-safe:transition-opacity-300 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="container-overlay-translucent" />
            </TransitionChild>
            <!-- This element is to trick the browser into centring the modal contents at the small breakpoint. -->
            <span
              aria-hidden="true"
              class="sm:align-middle sm:h-screen hidden sm:inline-block"
              >&#8203;</span
            >
            <TransitionChild
              as="template"
              enter="motion-safe:transition-300 ease-out"
              enter-from="modal-out"
              enter-to="modal-in"
              leave="motion-safe:transition-300 ease-in"
              leave-from="modal-in"
              leave-to="modal-out"
            >
              <div class="card modal ring-container">
                <div class="flex">
                  <span
                    class="badge-square-3 !colour-warning !rounded-full mx-auto shadow-lg"
                  >
                    <ExclamationCircleIcon aria-hidden="true" class="icon-6" />
                  </span>
                </div>
                <div class="mt-3 sm:mt-5 text-center">
                  <DialogTitle
                    as="h3"
                    class="text-primary !font-medium !text-lg !leading-6 overflow-hidden text-ellipsis"
                    >{{ t("pageUnavailable.title") }}</DialogTitle
                  >
                  <p
                    class="text-content-grey mt-2 overflow-hidden text-ellipsis text-sm"
                  >
                    {{ t("pageUnavailable.message") }}
                  </p>
                </div>
                <div class="mt-4 sm:mt-6">
                  <button
                    @click="open = false"
                    class="btn ring-offset-indigo text-component motion-safe:transition-colours-300 focus:ring-offset-white dark:focus:ring-offset-black w-full"
                    type="button"
                  >
                    {{ t("alright") }}
                  </button>
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
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CollectionIcon, ExclamationCircleIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import PySicBanner from "../../assets/PySic_banner.png";
import KobeBanner from "../../assets/Kobe_banner.png";
import WeiboEmojiBanner from "../../assets/WeiboEmoji_banner.png";
import global from "../../lib/global.js";
import { loadLocaleMessages } from "../../lib/i18n.js";

export default {
  components: {
    CollectionIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    ExclamationCircleIcon,
    TransitionChild,
    TransitionRoot,
  },
  data() {
    return { global };
  },
  mounted() {
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      const liquidButtons = document.getElementsByClassName(this.liquid);

      if (liquidButtons != null) {
        Array.prototype.forEach.call(liquidButtons, (element) => {
          element.style.display = "none";
        });
      } // end if
    } // end if
  },
  setup() {
    const { t } = useI18n({
      messages: loadLocaleMessages(
        require.context("../../locales/me/projects", false, /[-,\s\w]+\.json$/i)
      ),
    });
    const categories = {
      active: { name: "status.active", style: "colour-success" },
      archived: { name: "status.archived", style: "colour-danger" },
      inWorks: { name: "status.inWorks", style: "colour-warning" },
    };
    return {
      liquid:
        "motion-safe:liquid motion-safe:after:liquid-after motion-safe:before:liquid-before group-hover:liquid-hover",
      open: ref(false),
      projects: [
        {
          imageUrl: KobeBanner,
          category: categories.active,
          name: "info.kobe.name",
          intro: "info.kobe.intro",
          route: "#",
        },
        {
          imageUrl: WeiboEmojiBanner,
          category: categories.active,
          name: "info.weiboEmoji.name",
          intro: "info.weiboEmoji.intro",
          route: "#",
        },
        {
          imageUrl: PySicBanner,
          category: categories.archived,
          name: "info.pySic.name",
          intro: "info.pySic.intro",
          route: "#",
        },
      ],
      t,
    };
  },
};
</script>
