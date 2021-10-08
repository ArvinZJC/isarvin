<!--
 * @Description: the home component
 * @Version: 1.2.5.20211008
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-10-08 20:25:53
-->

<template>
  <!-- Banner. -->
  <transition enter-active-class="motion-safe:transition-opacity-300 delay-500 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="motion-safe:transition-opacity-300 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="!isBannerDismissed" class="container-banner top-16">
      <div class="container-block">
        <div class="banner ring-container">
          <div class="flex flex-wrap items-center justify-between">
            <!-- "w-0" is necessary for the marquee feature.-->
            <div class="flex flex-1 items-center w-0">
              <span class="badge-square-2 !bg-indigo-800 shadow-md">
                <SpeakerphoneIcon aria-hidden="true" class="icon-6" />
              </span>
              <div class="mx-2 sm:mx-3 overflow-hidden">
                <p class="text-component motion-safe:whitespace-nowrap" id="banner-text">{{ t("banner") }}</p>
              </div>
            </div>
            <button @click="dismissBanner" class="btn-square ring-inset-grey motion-safe:transition-colours-300 hover:bg-indigo-400 text-gray-50" type="button">
              <span class="sr-only">{{ t("dismiss") }}</span>
              <XIcon aria-hidden="true" class="icon-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- Home section. Enable full screen height at the small breakpoint. -->
  <div class="flex flex-col sm:h-screen" id="home">
    <!-- Added for the navbar area. -->
    <div class="bg-indigo-200 dark:bg-indigo-800 h-16 w-full" />
    <!-- Primary content. -->
    <div class="bg-gradient-to-b flex flex-col flex-grow from-indigo-200 dark:from-indigo-800 items-center justify-between overflow-hidden sm:px-6 lg:px-8 to-indigo-400 dark:to-indigo-400 w-full">
      <!-- Show the placeholder for "justify-between" at the small breakpoint. -->
      <div class="sm:block h-px hidden" />
      <!-- Bio card. -->
      <transition enter-active-class="motion-safe:transition-1000 ease-out" enter-from-class="float-down-5" enter-to-class="float-up" leave-active-class="motion-safe:transition-1000 ease-in" leave-from-class="float-up" leave-to-class="float-down-5">
        <div v-if="isBioShown" class="sm:mt-0 mt-3 z-10">
          <img alt="Arvin: hero avatar" class="avatar-md animate-pulse container-avatar ring-avatar -bottom-12 sm:-bottom-14 lg:-bottom-16 drop-shadow-lg mx-auto relative" id="hero-avatar" src="../../assets/Arvin_hero.jpg" />
          <div class="card ring-container bg-opacity-50 dark:bg-opacity-50 max-w-7xl mx-4 sm:mx-auto p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-24 shadow-md space-y-4">
            <h1 class="text-center">
              <span class="text-title block">{{ t("name") }}</span>
              <span class="text-subtitle block">
                {{ t("positions[0]") }}<a class="text-link motion-safe:transition-colours-300" href="https://www.gla.ac.uk/" target="_blank">@{{ t("school") }}</a>{{ t("positions[1]") }}
              </span>
            </h1>
            <p class="text-secondary sm:max-w-3xl max-w-lg mx-auto text-center">
              <span>{{ t("bio[0]") }}</span>
              <span class="line-through">{{ t("jokes[0]") }}</span>
              <span>{{ t("bio[1]") }}</span>
              <span class="line-through">{{ t("jokes[1]") }}</span>
              <span>{{ t("bio[2]") }}</span>
            </p>
          </div>
        </div>
      </transition>
      <!-- Wave animation. -->
      <svg class="h-16 sm:h-24 lg:h-32 mt-16 sm:mt-0 relative w-screen z-10" preserveAspectRatio="none" shape-rendering="auto" viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" id="smooth-wave" />
        </defs>
        <g class="motion-safe:waves">
          <use class="wave-fill opacity-70" x="48" xlink:href="#smooth-wave" y="0" />
          <use class="wave-fill opacity-50" x="48" xlink:href="#smooth-wave" y="3" />
          <use class="wave-fill opacity-30" x="48" xlink:href="#smooth-wave" y="5" />
          <use class="wave-fill" x="48" xlink:href="#smooth-wave" y="7" />
        </g>
      </svg>
      <!-- Bubble animation. -->
      <ul class="motion-safe:bubbles absolute overflow-hidden top-0 w-full" id="bubble-animation">
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
      var bannerText = document.getElementById("banner-text");
      
      if (bannerText !== null) {
        if (bannerText.scrollWidth > bannerText.offsetWidth) {
          bannerText.classList.add("motion-safe:marquee");
        }
        else {
          bannerText.classList.remove("motion-safe:marquee");
        } // end if...else
      } // end if
    }, // end function autoScrollBannerText

    /**
     * Dismiss the banner.
     */
    dismissBanner() {
      localStorage.setItem("isBannerDismissed", "true");
      localStorage.bannerText = this.t("banner");
      this.isBannerDismissed = true;
    }, // end function dismissBanner

    /**
     * Set the height of the bubble area according to the height of the home section.
     */
    setBubbleAreaHeight() {
      document.getElementById("bubble-animation").style.height = document.getElementById("home").offsetHeight - 2 + "px";
    } // end function setBubbleAreaHeight
  },
  data() {
    return { isBannerDismissed: true, isBioShown: false };
  },
  setup() {
    return useI18n({ messages: loadLocaleMessages(require.context("../../locales/me/home", false, /[A-Za-z0-9-_,\s]+\.json$/i)) });
  },
  mounted() {
    this.isBioShown = true;
    
    window.addEventListener("load", () => {
      this.setBubbleAreaHeight();

      // By default, show the banner.
      // When the banner has been set dismissed, it should be re-displayed if the banner text has updates. However, using the t() function introduces a limitation that the banner will be re-displayed if the locale changes and the page is reloaded.
      if (localStorage.getItem("isBannerDismissed") === null || localStorage.getItem("bannerText") !== this.t("banner")) {
        localStorage.setItem("isBannerDismissed", "false")
      } // end if
      
      this.isBannerDismissed = localStorage.getItem("isBannerDismissed") === "true";
      setTimeout(() => {
        this.autoScrollBannerText();
      }, 300); // Need delay to make sure the banner has been loaded due to its animation.
      
      var heroAvatar = document.getElementById("hero-avatar");

      if (heroAvatar !== null) {
        heroAvatar.classList.remove("animate-pulse");
      } // end if
    });
    window.addEventListener("resize", () => {
      this.autoScrollBannerText();
      this.setBubbleAreaHeight();
    });
  }
};
</script>