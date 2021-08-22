<!--
 * @Description: the 404 Not Found view
 * @Version: 1.0.0.20210822
 * @Author: Arvin Zhao
 * @Date: 2021-08-22 19:21:02
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-22 23:31:03
-->

<template>
    <main class="relative flex-grow bg-gray-50">
        <div class="min-h-screen flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="flex justify-center">
                <a href="/" class="flex flex-row rounded-full">
                    <img class="border-2 border-black border-opacity-5 h-24 sm:h-28 lg:h-32 w-24 sm:w-28 lg:w-32 rounded-full shadow-lg" src="../assets/Arvin_icon.png" alt="Arvin: icon" />
                </a>
            </div>
            <div class="py-16 text-center">
                <p class="text-sm font-semibold text-purple-600 uppercase tracking-wide">404 error</p>
                <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                <p class="mt-2 text-base text-gray-500">It seems the page you're looking for doesn't exist.</p>
                <div class="mt-6">
                    <a href="/" class="mt-6 text-base font-medium text-purple-400 hover:text-purple-600 motion-safe:transition-colors motion-safe:duration-300">Return to isarvin.com<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
        </div>
        <TheFooter />
    </main>
</template>

<script>
import { useMeta } from "vue-meta";
import TheFooter from "../components/TheFooter.vue";

export default {
    components: { TheFooter },
    setup() { useMeta({ title: "Page Not Found - Arvin Zhao" }); }
};
</script>