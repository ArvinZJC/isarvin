<!--
 * @Description: the tweeting component
 * @Version: 1.1.9.20220313
 * @Author: Arvin Zhao
 * @Date: 2021-08-08 12:14:10
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-03-13 12:52:49
-->

<template>
  <!-- Mail to me. -->
  <div class="container-block pb-12 sm:pb-20 lg:pb-24 pt-6 sm:pt-4 lg:pt-6">
    <div class="flex items-center justify-center">
      <span
        class="badge-square-3 motion-safe:ripple dark:motion-safe:ripple-dark !rounded-full mr-6"
      >
        <MailIcon aria-hidden="true" class="icon-6" />
      </span>
      <span class="sr-only">{{ t("mailTo") }}</span>
      <a
        :href="'mailto:' + mail"
        class="text-link break-all font-semibold text-xl motion-safe:transition-colours-300"
        >{{ mail }}</a
      >
    </div>
    <p class="container-text text-explanation-grey mt-6 text-center">
      {{ t("steveJobz") }}
    </p>
  </div>
  <!-- Motto. -->
  <div
    class="container-block overflow-hidden pb-36 lg:pb-40 pt-20 lg:pt-24 relative"
  >
    <!-- Hide the rectangle points on the right bottom at the large breakpoint. -->
    <svg
      aria-hidden="true"
      class="-translate-y-40 absolute fill-[none] lg:hidden left-0 top-full transform-gpu translate-x-80"
      height="404"
      viewBox="0 0 784 404"
      width="784"
    >
      <defs>
        <pattern
          :id="global.common.RECT_POINTS_RB_ID"
          height="20"
          patternUnits="userSpaceOnUse"
          width="20"
          x="0"
          y="0"
        >
          <rect
            class="text-verbose fill-current"
            height="4"
            width="4"
            x="0"
            y="0"
          />
        </pattern>
      </defs>
      <rect
        :fill="`url(#${global.common.RECT_POINTS_RB_ID})`"
        height="404"
        width="784"
      />
    </svg>
    <!-- Show the rectangle points on the left at the large breakpoint. -->
    <svg
      aria-hidden="true"
      class="-translate-y-1/2 absolute lg:block fill-[none] hidden right-full top-1/2 transform-gpu translate-x-[51%]"
      height="784"
      viewBox="0 0 404 784"
      width="404"
    >
      <defs>
        <pattern
          :id="global.common.RECT_POINTS_L_ID"
          height="20"
          patternUnits="userSpaceOnUse"
          width="20"
          x="0"
          y="0"
        >
          <rect
            class="text-verbose fill-current"
            height="4"
            width="4"
            x="0"
            y="0"
          />
        </pattern>
      </defs>
      <rect
        :fill="`url(#${global.common.RECT_POINTS_L_ID})`"
        height="784"
        width="404"
      />
    </svg>
    <div class="lg:flex lg:items-center relative">
      <!-- Show the large avatar at the large breakpoint. -->
      <img
        :alt="t('steveJobs.name')"
        :src="SteveJobs"
        class="avatar-lg container-avatar ring-avatar lg:block drop-shadow-lg hidden lg:shrink-0"
      />
      <div class="lg:ml-10 relative">
        <!-- Left quotation mark. -->
        <svg
          aria-hidden="true"
          class="text-explanation-indigo -translate-x-8 -translate-y-24 absolute fill-[none] h-36 left-0 opacity-50 stroke-current top-0 transform-gpu w-36"
          viewBox="0 0 144 144"
        >
          <path
            class="stroke-[2]"
            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
          />
        </svg>
        <blockquote class="relative">
          <p class="text-primary !font-normal !leading-9 text-justify">
            {{ t("motto") }}
          </p>
          <footer class="mt-8">
            <div class="flex">
              <!-- Hide the relatively small avatar at the large breakpoint. -->
              <img
                :alt="t('steveJobs.name')"
                :src="SteveJobs"
                class="avatar container-avatar ring-avatar drop-shadow-lg lg:hidden shrink-0"
              />
              <div class="lg:ml-0 ml-4">
                <div class="text-primary !font-medium !text-base">
                  {{ t("steveJobs.name") }}
                </div>
                <div class="text-content-indigo font-medium">
                  {{ t("steveJobs.title") }}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon } from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";

import SteveJobs from "../../assets/SteveJobs.jpg";
import global from "../../lib/global.js";
import { loadLocaleMessages } from "../../lib/i18n.js";

export default {
  components: { MailIcon },
  data() {
    return { global };
  },
  setup() {
    const { t } = useI18n({
      messages: loadLocaleMessages(
        require.context("../../locales/me/tweeting", false, /[-,\s\w]+\.json$/i)
      ),
    });
    return { mail: "SteveJobz@isarvin.com", SteveJobs, t };
  },
};
</script>
