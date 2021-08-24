<!--
 * @Description: the projects component
 * @Version: 1.0.11.20210824
 * @Author: Arvin Zhao
 * @Date: 2021-06-23 20:40:06
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-24 05:18:48
-->

<template>
    <!-- Projects section. -->
    <div id="projects" class="bg-indigo-100 dark:bg-indigo-900">
        <div class="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 lg:pb-8">
            <!-- Section header. -->
            <span class="mb-6 h-12 w-12 rounded-lg flex items-center justify-center bg-purple-600 shadow-lg">
                <CollectionIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
            </span>
            <div class="text-center">
                <h2 class="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50">Projects</h2>
                <p class="max-w-2xl mx-auto mt-3 sm:mt-4 text-xl text-gray-500 dark:text-gray-300">
                    I reckon my five years’ uni life is so incredibly fulfiling, devoting a part of my spare time to several projects.
                    Most of them, either active or archived, are hosted on 
                    <a href="https://github.com/ArvinZJC" target="_blank" class="underline text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 motion-safe:transition-colors motion-safe:duration-300">GitHub</a>.
                    I’ve still got a pretty long way to go. Would I reach the end one day?🐌
                </p>
            </div>
            <!-- Project cards. -->
            <div class="max-w-lg lg:max-w-none mt-12 mx-auto grid gap-5 lg:grid-cols-3">
                <div v-for="project in projects" :key="project.title" class="flex flex-col ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-5 rounded-2xl shadow-lg overflow-hidden">
                    <div class="flex-shrink-0 bg-purple-100 dark:bg-purple-400">
                        <img class="h-48 sm:h-56 w-full object-cover" :src="project.imageUrl" :alt="project.title" />
                    </div>
                    <div class="flex-1 bg-white dark:bg-black p-4 sm:p-6 flex flex-col justify-between">
                        <div class="flex-1 max-h-80 text-justify overflow-auto">
                            <span :class="['items-center px-2.5 py-0.5 rounded-full text-sm font-medium ' + project.category.style]">{{ project.category.name }}</span>
                            <div class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900 dark:text-gray-50">{{ project.title }}</p>
                                <p class="mt-3 text-base text-gray-500 dark:text-gray-400">{{ project.description }}</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center">
                            <button @click="open = true" type="button" class="relative z-10 overflow-hidden w-24 rounded-lg shadow-md px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-500 motion-safe:transition-colors motion-safe:duration-300
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-black">
                                <span class="relative z-10 text-base font-medium text-gray-50">Explore</span>
                                <div class="motion-safe:liquid" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- A modal indicating a project page's unavailable status. -->
            <TransitionRoot as="template" :show="open">
                <Dialog as="div" static class="fixed z-50 inset-0 overflow-y-auto" @close="open = false" :open="open">
                    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <TransitionChild as="template" enter="ease-out motion-safe:duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in motion-safe:duration-300" leave-from="opacity-100" leave-to="opacity-0">
                            <DialogOverlay class="fixed inset-0 bg-gray-500 dark:bg-gray-400 bg-opacity-75 dark:bg-opacity-75 motion-safe:transition-opacity" />
                        </TransitionChild>
                        <!-- This element is to trick the browser into centring the modal contents at the small breakpoint. -->
                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <TransitionChild as="template" enter="ease-out motion-safe:duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in motion-safe:duration-300" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <div class="inline-block align-bottom sm:align-middle bg-white dark:bg-black ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-5 rounded-2xl sm:my-8 p-4 sm:p-6 text-left overflow-hidden shadow-2xl
                                transform motion-safe:transition-all max-w-sm w-full">
                                <span class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-800 shadow-lg">
                                    <ExclamationCircleIcon class="h-6 w-6 text-yellow-800 dark:text-yellow-100" aria-hidden="true" />
                                </span>
                                <div class="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50 overflow-ellipsis overflow-hidden">Page under construction</DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500 dark:text-gray-400 overflow-ellipsis overflow-hidden">Sorry, but the project page is unavailable because it's still under construction.🏗</p>
                                    </div>
                                </div>
                                <div class="mt-5 sm:mt-6">
                                    <button @click="open = false" type="button" class="w-full rounded-lg shadow-md px-4 py-2 bg-purple-600 text-base sm:text-sm font-medium text-gray-50 hover:bg-purple-700 dark:hover:bg-purple-500
                                        motion-safe:transition-colors motion-safe:duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-black">Alright</button>
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
import { ref } from "vue";
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { CollectionIcon, ExclamationCircleIcon } from "@heroicons/vue/outline";
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
        const categories = {
            active: { name: "Active", style: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100" },
            inWorks: { name: "In the works", style: "bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100" }
        };
        const projects = [
            {
                imageUrl: ShSzStockHelperWindowsBanner,
                category: categories.active,
                title: "ShSzStockHelper-Windows",
                description: "SH/SZ Stock Helper is a Windows app that can mainly search strike prices and volumes for users. The app is primarily designed for a specified part of Chinese users, and contents are displayed in simplified Chinese.",
                route: "#"
            },
            {
                imageUrl: WeiboEmojiBanner,
                category: categories.active,
                title: "WeiboEmoji",
                description: "Weibo Emoji is a repository for saving and sharing most Emoji images that are used/were previously used by the app Weibo. The ways to extract these images from Weibo are simple. "
                    + "What I have done to save your time is to basically categorise them according to their meanings.",
                route: "#"
            },
            {
                imageUrl: TgStickerPorterBanner,
                category: categories.inWorks,
                title: "TgStickerPorter",
                description: "What would happen when a Telegram bot meets with Emoji/stickers and... me?😏",
                route: "#"
            }
        ];
        const open = ref(false);

        return { open, projects };
    },
    mounted() {
        // Disable the liquid animation of buttons on touchscreens.
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
            var liquidButtons = document.getElementsByClassName("motion-safe:liquid");

            if (liquidButtons) {
                Array.prototype.forEach.call(liquidButtons, element => {
                    element.style.display = "none";
                });
            } // end if
        } // end if
    }
};
</script>