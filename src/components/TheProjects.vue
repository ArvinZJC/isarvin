<!--
 * @Description: the projects component
 * @Version: 1.0.1.20210711
 * @Author: Arvin Zhao
 * @Date: 2021-06-23 20:40:06
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-07-11 23:42:49
-->

<template>
    <!-- Projects section. -->
    <div id="projects">
        <div class="bg-gradient-to-b from-transparent to-gray-50 h-20 sm:h-24 lg:h-28" />
        <div class="bg-gray-50">
            <div class="flex flex-col items-center max-w-7xl mx-auto pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8">
                <!-- Section header. -->
                <span class="relative -top-6 h-12 w-12 rounded-md flex items-center justify-center bg-purple-600">
                    <CollectionIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
                </span>
                <div class="text-center">
                    <h2 class="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">Projects</h2>
                    <!-- TODO: global variable: GitHub link? -->
                    <p class="max-w-2xl mx-auto mt-3 sm:mt-4 text-xl text-gray-500">
                        My five years’ uni life is so incredibly fulfiling, devoting a part of my spare time to several projects.
                        Most of them, either active or archived, are hosted on <a href="https://github.com/ArvinZJC" class="hover:text-gray-900 transition-colors duration-300">GitHub</a>.
                        I’ve still got a long way to go before becoming a big potato. Would I reach the end one day?🐌
                    </p>
                </div>
                <!-- Project cards. -->
                <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    <div v-for="project in projects" :key="project.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0 bg-purple-100">
                            <img class="h-48 sm:h-56 w-full object-cover" :src="project.imageUrl" :alt="project.title" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1 max-h-80 text-justify">
                                <span :class="['inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ' + project.category.style]">{{ project.category.name }}</span>
                                <div class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">{{ project.title }}</p>
                                    <p class="mt-3 text-base text-gray-500">{{ project.description }}</p>
                                </div>
                            </div>
                            <div class="mt-6 flex items-center">
                                <!-- TODO: URL? -->
                                <button type="button" class="inline-flex rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-gray-50 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300" @click="open = true">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- A modal indicating a project page's unavailable status. -->
                <TransitionRoot as="template" :show="open">
                    <Dialog as="div" static class="fixed z-50 inset-0 overflow-y-auto" @close="open = false" :open="open">
                        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-300" leave-from="opacity-100" leave-to="opacity-0">
                                <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </TransitionChild>
                            <!-- This element is to trick the browser into centring the modal contents. -->
                            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-300" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                    <div>
                                        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                                            <ExclamationCircleIcon class="h-6 w-6 text-yellow-600" aria-hidden="true" />
                                        </div>
                                        <div class="mt-3 text-center sm:mt-5">
                                            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">Page under construction</DialogTitle>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-500">Sorry, but the project page is unavailable because it's still under construction.🏗</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5 sm:mt-6">
                                        <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base sm:text-sm font-medium text-gray-50 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300" @click="open = false">Alright</button>
                                    </div>
                                </div>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </TransitionRoot>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { CollectionIcon, ExclamationCircleIcon } from "@heroicons/vue/outline";
import ShSzStockHelperWindowsBanner from "../assets/ShSzStockHelper-Windows_banner.png";
import TgStickerPorterBanner from "../assets/TgStickerPorter_banner.png";
import WeiboEmojiBanner from "../assets/WeiboEmoji_banner.png";

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
        const projects = [
            {
                imageUrl: ShSzStockHelperWindowsBanner,
                category: { name: "Active", style: "bg-green-100 text-green-800" },
                title: "ShSzStockHelper-Windows",
                description: "SH/SZ Stock Helper is a Windows app that can mainly search strike prices and volumes for users. The app is primarily designed for a specified part of Chinese users, and contents are displayed in simplified Chinese.",
                route: "#"
            },
            {
                imageUrl: WeiboEmojiBanner,
                category: { name: "Active", style: "bg-green-100 text-green-800" },
                title: "WeiboEmoji",
                description: "Weibo Emoji is a repository for saving and sharing most Emoji images that are used/were previously used by the app Weibo. The ways to extract these images from Weibo are simple. What I have done to save your time is to basically categorise them according to their meanings.",
                route: "#"
            },
            {
                imageUrl: TgStickerPorterBanner,
                category: { name: "In the works", style: "bg-yellow-100 text-yellow-800" },
                title: "TgStickerPorter",
                description: "What would happen when a Telegram bot meets with a Emoji/sticker and... me?😏",
                route: "#"
            }
        ];
        const open = ref(false);

        return {
            projects,
            open
        };
    }
};
</script>