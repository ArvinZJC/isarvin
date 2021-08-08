<!--
 * @Description: the tweeting component
 * @Version: 1.0.0.20210808
 * @Author: Arvin Zhao
 * @Date: 2021-08-08 12:14:10
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-08 16:22:33
-->

<template>
    <!-- Mail to me. -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-4 lg:pt-6 pb-16 sm:pb-20 lg:pb-24">
        <div class="flex justify-center items-center">
            <span class="h-12 w-12 rounded-full flex items-center justify-center mr-6 px-2 bg-purple-600 ripple">
                <MailIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
            </span>
            <a href="mailto:SteveJobz@isarvin.com" class="font-semibold text-xl text-purple-400 hover:text-purple-600 transition-colors duration-300 break-all">SteveJobz@isarvin.com</a>
        </div>
        <p class="max-w-2xl mx-auto mt-6 text-center text-sm text-gray-300">
            <span class="italic">Don't get me wrong! Steve Jobz is Arvin. Arvin is me. I'm good at Hello World, so I'm on top of the world.</span>
            <span>😛</span>
        </p>
    </div>
    <!-- Motto. -->
    <div class="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <!-- Hide the rectangle points on the right bottom at the large breakpoint. -->
        <svg class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
                <pattern id="rect-points-rb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#rect-points-rb)" />
        </svg>
        <!-- Show the rectangle points on the left at the large breakpoint. -->
        <svg class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
                <pattern id="rect-points-l" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#rect-points-l)" />
        </svg>
        <div class="relative lg:flex lg:items-center">
            <!-- Show the large avatar at the large breakpoint. -->
            <img :src="steveJobs.imageUrl" :alt="steveJobs.alt" class="hidden lg:block lg:flex-shrink-0 h-64 xl:h-80 w-64 xl:w-80 rounded-full border-2 border-purple-200" />
            <div class="relative lg:ml-10">
                <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-purple-300 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
                    <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
                </svg>
                <blockquote class="relative">
                    <p class="font-mono italic text-justify text-2xl leading-9 font-medium text-gray-900">
                        Your time is limited, so don't waste it living someone else's life.
                        Don't be trapped by dogma - which is living with the results of other people's thinking.
                        Don't let the noise of other's opinions drown out your own inner voice.
                        And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.
                    </p>
                    <footer class="mt-8">
                        <div class="flex">
                            <!-- Hide the small avatar at the large breakpoint. -->
                            <img :src="steveJobs.imageUrl" :alt="steveJobs.alt" class="lg:hidden flex-shrink-0 h-12 w-12 rounded-full border-2 border-purple-200" />
                            <div class="ml-4 lg:ml-0">
                                <div class="text-base font-medium text-gray-900">Steve Jobs</div>
                                <div class="text-base font-medium text-indigo-600">Co-founder, Apple Inc.</div>
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
import SteveJobs from "../assets/SteveJobs.jpg";

export default {
    components: { MailIcon },
    setup() {
        const steveJobs = {
            imageUrl: SteveJobs,
            alt: "Steve Jobs"
        };
        return { steveJobs };
    }
};
</script>