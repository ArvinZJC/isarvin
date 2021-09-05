<!--
 * @Description: the home component
 * @Version: 1.1.16.20210905
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-09-05 18:12:37
-->

<template>
  <!-- Banner. -->
  <transition enter-active-class="ease-out motion-safe:duration-300 delay-500" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="ease-in motion-safe:duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="!isBannerDismissed" class="fixed w-full z-30 mt-16 motion-safe:transition-opacity">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div class="rounded-lg bg-indigo-600 bg-opacity-90 ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-5 shadow-xl p-2">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-indigo-800 shadow-md">
                <SpeakerphoneIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
              </span>
              <div class="mx-2 sm:mx-3 overflow-hidden">
                <p id="banner-text" class="font-medium text-gray-50 motion-safe:whitespace-nowrap">{{ t("banner") }}</p>
              </div>
            </div>
            <div class="flex-shrink-0 sm:order-3">
              <button type="button" class="flex p-2 rounded-lg text-gray-50 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 motion-safe:transition-colors motion-safe:duration-300">
                <span class="sr-only">{{ t("dismiss") }}</span>
                <XIcon class="h-6 w-6" aria-hidden="true" v-on:click="isBannerDismissed = true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- Home section. Enable full screen height at the small breakpoint. -->
  <div id="home" class="flex flex-col sm:h-screen">
    <!-- Added for the navbar area. -->
    <div class="h-16 w-full bg-indigo-200 dark:bg-indigo-800" />
    <!-- Primary content. -->
    <div class="flex flex-col flex-grow items-center justify-between w-full bg-gradient-to-b from-indigo-200 dark:from-indigo-800 to-indigo-400 dark:to-indigo-400 overflow-hidden sm:px-6 lg:px-8">
      <!-- Show the placeholder for "justify-between" at the small breakpoint. -->
      <div class="hidden sm:block h-px" />
      <!-- Bio card. -->
      <div class="z-10 mt-16 sm:mt-0">
        <img class="relative bg-indigo-300 dark:bg-indigo-400 ring-2 ring-gray-50 -bottom-12 sm:-bottom-14 lg:-bottom-16 mx-auto h-24 sm:h-28 lg:h-32 w-24 sm:w-28 lg:w-32 rounded-full shadow-lg" src="../../assets/Arvin_hero.jpg" alt="Arvin: hero avatar" />
        <div class="max-w-7xl rounded-2xl bg-black bg-opacity-50 shadow-md space-y-4 mx-4 sm:mx-auto p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-24">
          <h1 class="text-center tracking-tight">
            <span class="block font-extrabold text-3xl sm:text-4xl text-gray-50">{{ t("name") }}</span>
            <span class="block font-bold text-xl text-indigo-100">
              {{ t("positions[0]") }}<a href="https://www.gla.ac.uk/" target="_blank" class="underline text-indigo-400 hover:text-indigo-300 motion-safe:transition-colors motion-safe:duration-300">@{{ t("school") }}</a>{{ t("positions[1]") }}
            </span>
          </h1>
          <p class="max-w-lg sm:max-w-3xl mx-auto text-center text-base text-indigo-200">
            <span>{{ t("bio[0]") }}</span>
            <span class="line-through">{{ t("jokes[0]") }}</span>
            <span>{{ t("bio[1]") }}</span>
            <span class="line-through">{{ t("jokes[1]") }}</span>
            <span>{{ t("bio[2]") }}</span>
          </p>
        </div>
      </div>
      <!-- Wave animation. -->
      <svg class="relative z-10 h-16 sm:h-24 lg:h-32 w-screen mt-16 sm:mt-0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" shape-rendering="auto" viewBox="0 24 150 28">
        <defs>
          <path id="smooth-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="motion-safe:waves">
          <use class="fill-current text-indigo-100 dark:text-indigo-900 opacity-70" xlink:href="#smooth-wave" x="48" y="0" />
          <use class="fill-current text-indigo-100 dark:text-indigo-900 opacity-50" xlink:href="#smooth-wave" x="48" y="3" />
          <use class="fill-current text-indigo-100 dark:text-indigo-900 opacity-30" xlink:href="#smooth-wave" x="48" y="5" />
          <use class="fill-current text-indigo-100 dark:text-indigo-900" xlink:href="#smooth-wave" x="48" y="7" />
        </g>
      </svg>
      <!-- Bubble animation. -->
      <ul id="bubble-animation" class="motion-safe:bubbles absolute top-0 w-full overflow-hidden">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";

import { loadLocaleMessages } from "../../lib/i18n.js";

export default {
  components: { SpeakerphoneIcon, XIcon },
  methods: {
    /**
     * Auto-scroll the banner text when it is too long.
     */
    autoScrollBannerText() {
      var bannerText = document.querySelector("#banner-text");
      
      if (bannerText) {
        if (bannerText.scrollWidth > bannerText.offsetWidth) {
          bannerText.classList.add("motion-safe:marquee");
        }
        else {
          bannerText.classList.remove("motion-safe:marquee");
        } // end if...else
      } // end if
    }, // end function autoScrollBannerText

    /**
     * Set the height of the bubble area according to the height of the home section.
     */
    setBubbleAreaHeight() {
      document.getElementById("bubble-animation").style.height = document.getElementById("home").offsetHeight - 2 + "px";
    } // end function setBubbleAreaHeight
  },
  data() {
    return { isBannerDismissed: true };
  },
  setup() {
    return useI18n({ messages: loadLocaleMessages(require.context("../../locales/me/home", false, /[A-Za-z0-9-_,\s]+\.json$/i)) });
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.setBubbleAreaHeight();
        this.isBannerDismissed = false;
        setTimeout(() => {
          this.autoScrollBannerText();
        }, 300); // Need delay to make sure the banner have been loaded.
      }
    };
    window.onresize = () => {
      this.autoScrollBannerText();
      this.setBubbleAreaHeight();
    };
  }
};
</script>