<!--
 * @Description: the education component
 * @Version: 1.0.3.20210822
 * @Author: Arvin Zhao
 * @Date: 2021-08-07 18:00:31
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-22 06:29:53
-->

<template>
    <!-- Education section. -->
    <div id="education" class="relative z-10 bg-purple-100 polygon-section">
        <!-- Background colour transition. -->
        <div class="h-24 sm:h-28 lg:h-32 bg-gradient-to-b from-indigo-100 to-purple-100" />
        <!-- Use the row layout at the small breakpoint. -->
        <div class="flex flex-col sm:flex-row justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-24 sm:pb-20 lg:pb-24">
            <!-- Section header. -->
            <div class="flex flex-col items-center justify-center mb-12 sm:mb-0 sm:mr-12 lg:mr-16">
                <span class="mb-6 h-12 w-12 rounded-lg flex items-center justify-center bg-purple-600 shadow-lg">
                    <AcademicCapIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
                </span>
                <h2 class="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">Education</h2>
            </div>
            <!-- Education feeds. -->
            <ul class="flow-root -mb-8 overflow-auto">
                <li v-for="(event, eventIndex) in timeline" :key="event.content">
                    <div class="relative pb-8">
                        <!-- Connecting line between two images. -->
                        <span v-if="(eventIndex !== timeline.length - 1)" class="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-300" aria-hidden="true" />
                        <div class="relative flex space-x-3">
                            <template v-if="event.type === 'name'">
                                <img :src="event.imageUrl" class="relative h-12 w-12 rounded-full border-2 border-gray-300 flex items-center justify-center ring-8 ring-purple-100" alt="Arvin: headshot" />
                                <div class="flex-1 pt-3.5 flex justify-between space-x-4">
                                    <p class="font-medium text-sm text-gray-900">{{ event.content }}</p>
                                    <p class="text-right text-sm text-gray-500 whitespace-nowrap">{{ event.period }}</p>
                                </div>
                            </template>
                            <template v-else>
                                <div class="px-2">
                                    <span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center px-2 ring-8 ring-purple-100']">
                                        <component :is="event.icon" class="h-5 w-5 text-gray-50" aria-hidden="true" />
                                    </span>
                                </div>
                                <a v-if="event.hasLink" :href="event.href" target="_blank" class="underline text-sm text-purple-400 hover:text-purple-600 motion-safe:transition-colors motion-safe:duration-300 pt-1.5">{{ event.content }}</a>
                                <p v-else class="text-sm text-gray-500 pt-1.5">{{ event.content }}</p>
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
import ArvinHeadshotMiddle from "../assets/Arvin_headshot_middle.jpg";
import ArvinHeadshotPrimary1 from "../assets/Arvin_headshot_primary1.jpg";
import ArvinHeadshotPrimary2 from "../assets/Arvin_headshot_primary2.jpg";
import ArvinHeadshotSenior from "../assets/Arvin_headshot_senior.jpg";
import ArvinHeadshotUni1 from "../assets/Arvin_headshot_uni1.jpg";
import ArvinHeadshotUni2 from "../assets/Arvin_headshot_uni2.jpg";
import ArvinHeadshotUni3 from "../assets/Arvin_headshot_uni3.jpg";

export default {
    components: { AcademicCapIcon },
    setup() {
        const timeline = [
            {
                content: "Dalian Jinhua Primary School",
                imageUrl: ArvinHeadshotPrimary1,
                period: "2004 - 2009",
                type: "name"
            },
            {
                content: "Dalian Jiahui Sunshine Primary School",
                imageUrl: ArvinHeadshotPrimary2,
                period: "2009 - 2010",
                type: "name"
            },
            {
                content: "Dalian Jiahui Middle School",
                imageUrl: ArvinHeadshotMiddle,
                period: "2010 - 2013",
                type: "name"
            },
            {
                content: "Dalian Yuming Senior High School",
                imageUrl: ArvinHeadshotSenior,
                period: "2013 - 2016",
                type: "name"
            },
            {
                content: "Beihang University",
                imageUrl: ArvinHeadshotUni1,
                period: "2016 - 2019",
                type: "name"
            },
            {
                content: "Software Development, 90+ (average)",
                icon: CheckIcon,
                iconBackground: "bg-green-500",
                type: "highlight"
            },
            {
                content: "Several scholarships awarding study on language and professional skills",
                icon: EmojiHappyIcon,
                iconBackground: "bg-blue-500",
                type: "highlight"
            },
            {
                content: "SQA Ambassadors China 2019",
                icon: FlagIcon,
                iconBackground: "bg-pink-500",
                type: "highlight"
            },
            {
                content: "University of Lincoln",
                imageUrl: ArvinHeadshotUni2,
                period: "2019 - 2020",
                type: "name"
            },
            {
                content: "BS (Hons) in Computer Science, First-Class Honours",
                icon: CheckIcon,
                iconBackground: "bg-green-500",
                type: "highlight"
            },
            {
                content: "The University of Lincoln 50% Global Scholarship 2019",
                icon: EmojiHappyIcon,
                iconBackground: "bg-blue-500",
                type: "highlight"
            },
            {
                content: "MTA: Software Development Fundamentals - Certified 2019",
                hasLink: true,
                href: "https://www.credly.com/badges/264eea0b-6261-4d08-9e17-d7a41472eca6",
                icon: FlagIcon,
                iconBackground: "bg-pink-500",
                type: "highlight"
            },
            {
                content: "University of Glasgow",
                imageUrl: ArvinHeadshotUni3,
                period: "2021 - 2022",
                type: "name"
            },
            {
                content: "MS in Computing Science, working hard✍️",
                icon: FireIcon,
                iconBackground: "bg-yellow-500",
                type: "highlight"
            }
        ];
        return { timeline };
    }
};
</script>