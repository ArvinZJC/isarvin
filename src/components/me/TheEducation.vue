<!--
 * @Description: the education component
 * @Version: 1.0.10.20210905
 * @Author: Arvin Zhao
 * @Date: 2021-08-07 18:00:31
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-09-05 18:12:15
-->

<template>
  <!-- Education section. -->
  <div id="education" class="relative z-10 bg-indigo-200 dark:bg-indigo-800 polygon-section">
    <!-- Background colour transition. -->
    <div class="h-24 sm:h-28 lg:h-32 bg-gradient-to-b from-indigo-100 dark:from-indigo-900 to-indigo-200 dark:to-indigo-800" />
    <!-- Use the row layout at the small breakpoint. -->
    <div class="flex flex-col sm:flex-row justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-24 sm:pb-20 lg:pb-24">
      <!-- Section header. -->
      <div class="flex flex-col items-center justify-center mb-12 sm:mb-0 sm:mr-12 lg:mr-16">
        <span class="mb-6 h-12 w-12 rounded-lg flex items-center justify-center bg-indigo-600 shadow-lg">
          <AcademicCapIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
        </span>
        <h2 class="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50">{{ t("education") }}</h2>
      </div>
      <!-- Education feeds. -->
      <ul class="flow-root -mb-8 overflow-auto">
        <li v-for="(event, eventIndex) in timeline" :key="event.content">
          <div class="relative pb-8">
            <!-- Connecting line between two images. -->
            <span v-if="(eventIndex !== timeline.length - 1)" class="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-400 dark:bg-gray-500" aria-hidden="true" />
            <div class="relative flex space-x-3">
              <template v-if="event.type === 'name'">
                <img :src="event.imageUrl" class="relative h-12 w-12 rounded-full flex items-center justify-center bg-indigo-300 dark:bg-indigo-400 ring-8 ring-indigo-200 dark:ring-indigo-800" alt="Arvin: headshot" />
                <div class="flex-1 pt-3.5 flex justify-between space-x-4">
                  <p class="font-medium text-sm text-gray-900 dark:text-gray-50">{{ t(event.content) }}</p>
                  <p class="text-right text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ event.period }}</p>
                </div>
              </template>
              <template v-else>
                <div class="px-2">
                  <span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center px-2 ring-8 ring-indigo-200 dark:ring-indigo-800']">
                    <component :is="event.icon" class="h-5 w-5 text-gray-50" aria-hidden="true" />
                  </span>
                </div>
                <a v-if="event.hasLink" :href="event.href" target="_blank" class="underline text-sm text-indigo-500 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200 motion-safe:transition-colors motion-safe:duration-300 pt-1.5">
                  {{ t(event.content) }}
                </a>
                <p v-else class="text-sm text-gray-500 dark:text-gray-300 pt-1.5">{{ t(event.content) }}</p>
              </template>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { AcademicCapIcon, CheckIcon, EmojiHappyIcon, FireIcon, FlagIcon } from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";

import { loadLocaleMessages } from "../../lib/i18n.js";
import ArvinHeadshotMiddle from "../../assets/Arvin_headshot_middle.jpg";
import ArvinHeadshotPrimary1 from "../../assets/Arvin_headshot_primary1.jpg";
import ArvinHeadshotPrimary2 from "../../assets/Arvin_headshot_primary2.jpg";
import ArvinHeadshotSenior from "../../assets/Arvin_headshot_senior.jpg";
import ArvinHeadshotUni1 from "../../assets/Arvin_headshot_uni1.jpg";
import ArvinHeadshotUni2 from "../../assets/Arvin_headshot_uni2.jpg";
import ArvinHeadshotUni3 from "../../assets/Arvin_headshot_uni3.jpg";

export default {
  components: { AcademicCapIcon },
  setup() {
    const { t } = useI18n({ messages: loadLocaleMessages(require.context("../../locales/me/education", false, /[A-Za-z0-9-_,\s]+\.json$/i)) });
    const eventIcons = {
      check: { icon: CheckIcon, background: "bg-green-600" },
      happy: { icon: EmojiHappyIcon, background: "bg-pink-600" },
      flag: { icon: FlagIcon, background: "bg-purple-600" },
      fire: { icon: FireIcon, background: "bg-yellow-600" }
    };
    const timeline = [
      {
        content: "jinhua",
        imageUrl: ArvinHeadshotPrimary1,
        period: "2004 - 2009",
        type: "name"
      },
      {
        content: "jiahuiSunshine",
        imageUrl: ArvinHeadshotPrimary2,
        period: "2009 - 2010",
        type: "name"
      },
      {
        content: "jiahui",
        imageUrl: ArvinHeadshotMiddle,
        period: "2010 - 2013",
        type: "name"
      },
      {
        content: "yuming",
        imageUrl: ArvinHeadshotSenior,
        period: "2013 - 2016",
        type: "name"
      },
      {
        content: "beihang.name",
        imageUrl: ArvinHeadshotUni1,
        period: "2016 - 2019",
        type: "name"
      },
      {
        content: "beihang.degree",
        icon: eventIcons.check.icon,
        iconBackground: eventIcons.check.background,
        type: "highlight"
      },
      {
        content: "beihang.achievements[0]",
        icon: eventIcons.happy.icon,
        iconBackground: eventIcons.happy.background,
        type: "highlight"
      },
      {
        content: "beihang.achievements[1]",
        icon: eventIcons.flag.icon,
        iconBackground: eventIcons.flag.background,
        type: "highlight"
      },
      {
        content: "uol.name",
        imageUrl: ArvinHeadshotUni2,
        period: "2019 - 2020",
        type: "name"
      },
      {
        content: "uol.degree",
        icon: eventIcons.check.icon,
        iconBackground: eventIcons.check.background,
        type: "highlight"
      },
      {
        content: "uol.achievements[0]",
        icon: eventIcons.happy.icon,
        iconBackground: eventIcons.happy.background,
        type: "highlight"
      },
      {
        content: "uol.achievements[1]",
        hasLink: true,
        href: "https://www.credly.com/badges/264eea0b-6261-4d08-9e17-d7a41472eca6",
        icon: eventIcons.flag.icon,
        iconBackground: eventIcons.flag.background,
        type: "highlight"
      },
      {
        content: "uofg.name",
        imageUrl: ArvinHeadshotUni3,
        period: "2021 - 2022",
        type: "name"
      },
      {
        content: "uofg.degree",
        icon: eventIcons.fire.icon,
        iconBackground: eventIcons.fire.background,
        type: "highlight"
      }
    ];
    return { t, timeline };
  }
};
</script>