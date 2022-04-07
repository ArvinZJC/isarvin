<!--
 * @Description: the education component
 * @Version: 1.2.0.20220407
 * @Author: Arvin Zhao
 * @Date: 2021-08-07 18:00:31
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-04-07 19:37:23
-->

<template>
  <!-- Education section. -->
  <div
    :id="global.common.EDUCATION_SECTION"
    class="polygon-section bg-indigo-200 dark:bg-gray-800 relative z-10"
  >
    <!-- Background colour transition. -->
    <div
      class="bg-gradient-to-b from-indigo-100 dark:from-indigo-900 h-24 sm:h-28 lg:h-32 to-indigo-200 dark:to-gray-800"
    />
    <!-- Use the row layout at the small breakpoint. -->
    <div
      class="container-block flex flex-col sm:flex-row justify-center pb-24 sm:pb-20 lg:pb-24 pt-4 sm:pt-6 lg:pt-8"
    >
      <!-- Section header. -->
      <div
        class="flex flex-col items-center justify-center sm:mb-0 mb-12 sm:mr-12 lg:mr-16"
      >
        <span class="badge-square-3 mb-6 shadow-lg">
          <AcademicCapIcon aria-hidden="true" class="icon-6" />
        </span>
        <h2 class="text-title">{{ t(global.common.EDUCATION_SECTION) }}</h2>
      </div>
      <!-- Education feeds. -->
      <ul class="-mb-8 flow-root overflow-auto">
        <li v-for="(event, eventIndex) in timeline" :key="event.content">
          <div class="pb-8 relative">
            <!-- Connecting line between 2 images. -->
            <span
              v-if="eventIndex !== timeline.length - 1"
              aria-hidden="true"
              class="line-v -ml-px absolute left-6 top-6"
            />
            <div class="flex relative space-x-3">
              <template v-if="event.type === 'name'">
                <img
                  :src="event.imageUrl"
                  alt="Arvin: headshot"
                  class="avatar container-avatar flex items-center justify-center relative ring-8 ring-indigo-200 dark:ring-gray-800"
                />
                <div class="flex flex-1 justify-between pt-3.5 space-x-4">
                  <p class="text-primary !font-medium !text-sm">
                    {{ t(event.content) }}
                  </p>
                  <p
                    class="text-content-grey text-right text-sm whitespace-nowrap"
                  >
                    {{ event.period }}
                  </p>
                </div>
              </template>
              <template v-else>
                <div class="px-2">
                  <span
                    :class="[
                      event.iconBackground,
                      'badge-square-2 !rounded-full inline-flex ring-8 ring-indigo-200 dark:ring-gray-800',
                    ]"
                  >
                    <component
                      :is="event.icon"
                      aria-hidden="true"
                      class="icon-4"
                    />
                  </span>
                </div>
                <a
                  v-if="event.hasLink"
                  :href="event.href"
                  class="text-link motion-safe:transition-colours-300 pt-1.5 text-sm"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  >{{ t(event.content) }}</a
                >
                <p
                  v-else
                  :class="[
                    event.hasLineThrough ? 'line-through ' : '',
                    'text-content-grey pt-1.5 text-sm',
                  ]"
                >
                  {{ t(event.content) }}
                </p>
              </template>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  AcademicCapIcon,
  CheckIcon,
  EmojiHappyIcon,
  FireIcon,
  FlagIcon,
} from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";

import ArvinHeadshotMiddle from "../../assets/Arvin_headshot_middle.jpg";
import ArvinHeadshotPrimary1 from "../../assets/Arvin_headshot_primary1.jpg";
import ArvinHeadshotPrimary2 from "../../assets/Arvin_headshot_primary2.jpg";
import ArvinHeadshotSenior from "../../assets/Arvin_headshot_senior.jpg";
import ArvinHeadshotUni1 from "../../assets/Arvin_headshot_uni1.jpg";
import ArvinHeadshotUni2 from "../../assets/Arvin_headshot_uni2.jpg";
import ArvinHeadshotUni3 from "../../assets/Arvin_headshot_uni3.jpg";
import global from "../../lib/global.js";
import * as en from "../../locales/me/education/en.json";
import * as zh_CN from "../../locales/me/education/zh-CN.json";

export default {
  components: { AcademicCapIcon },
  data() {
    return { global };
  },
  setup() {
    const messages = {};

    messages[global.common.EN_ID] = en.default;
    messages[global.common.ZH_CN_ID] = zh_CN.default;

    const { t } = useI18n({ messages });
    const eventIcons = {
      check: { icon: CheckIcon, background: "!bg-green-600" },
      happy: { icon: EmojiHappyIcon, background: "!bg-pink-600" },
      fire: { icon: FireIcon, background: "!bg-yellow-600" },
      flag: { icon: FlagIcon, background: "!bg-purple-600" },
    };
    return {
      t,
      timeline: [
        {
          content: "jinhua",
          imageUrl: ArvinHeadshotPrimary1,
          period: "2004 - 2009",
          type: global.common.NAME_TYPE,
        },
        {
          content: "jiahuiSunshine",
          imageUrl: ArvinHeadshotPrimary2,
          period: "2009 - 2010",
          type: global.common.NAME_TYPE,
        },
        {
          content: "jiahui",
          imageUrl: ArvinHeadshotMiddle,
          period: "2010 - 2013",
          type: global.common.NAME_TYPE,
        },
        {
          content: "yuming",
          imageUrl: ArvinHeadshotSenior,
          period: "2013 - 2016",
          type: global.common.NAME_TYPE,
        },
        {
          content: "beihang.name",
          imageUrl: ArvinHeadshotUni1,
          period: "2016 - 2019",
          type: global.common.NAME_TYPE,
        },
        {
          content: "beihang.degree",
          icon: eventIcons.check.icon,
          iconBackground: eventIcons.check.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "beihang.achievements[0]",
          icon: eventIcons.happy.icon,
          iconBackground: eventIcons.happy.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "beihang.achievements[1]",
          icon: eventIcons.flag.icon,
          iconBackground: eventIcons.flag.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "uol.name",
          imageUrl: ArvinHeadshotUni2,
          period: "2019 - 2020",
          type: global.common.NAME_TYPE,
        },
        {
          content: "uol.degree",
          icon: eventIcons.check.icon,
          iconBackground: eventIcons.check.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "uol.achievements[0]",
          icon: eventIcons.happy.icon,
          iconBackground: eventIcons.happy.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "uol.achievements[1]",
          hasLink: true,
          href: "https://www.credly.com/badges/264eea0b-6261-4d08-9e17-d7a41472eca6",
          icon: eventIcons.flag.icon,
          iconBackground: eventIcons.flag.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "uofg.name",
          imageUrl: ArvinHeadshotUni3,
          period: "2021 - 2022",
          type: global.common.NAME_TYPE,
        },
        {
          content: "uofg.degree",
          icon: eventIcons.flag.icon,
          iconBackground: eventIcons.flag.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "uofg.achievements[0]",
          icon: eventIcons.happy.icon,
          iconBackground: eventIcons.happy.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
        {
          content: "uofg.achievements[1]",
          hasLineThrough: true,
          icon: eventIcons.fire.icon,
          iconBackground: eventIcons.fire.background,
          type: global.common.HIGHLIGHT_TYPE,
        },
      ],
    };
  },
};
</script>
