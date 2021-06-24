<!--
 * @Description: the home component
 * @Version: 1.0.4.20210624
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-24 06:50:53
-->

<template>
	<!-- Banner. -->
	<transition enter-active-class="transition ease-out duration-300 delay-500" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-300" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
		<div v-if="!isBannerDismissed" class="fixed w-full z-40 mt-16 bg-purple-600 shadow">
			<div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between flex-wrap">
					<div class="w-0 flex-1 flex items-center">
						<span class="flex p-2 rounded-lg bg-purple-800">
							<SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
						</span>
						<p class="ml-3 font-medium text-white truncate">
							<span class="md:hidden">Still under construction!🏗</span>
							<span class="hidden md:inline">Hi there!🎉 Sorry, but it's still under construction.🏗</span>
						</p>
					</div>
					<div class="flex-shrink-0 sm:order-3 sm:ml-3">
						<button type="button" class="-mr-2 flex p-2 rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300">
							<span class="sr-only">Dismiss</span>
							<XIcon class="h-6 w-6 text-white" aria-hidden="true" v-on:click="isBannerDismissed = true" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
	<!-- Hero section. -->
	<div class="flex items-center justify-center h-screen pt-16 sm:px-6 lg:px-8">
		<div class="max-h-screen w-full sm:w-auto sm:rounded-2xl overflow-auto bg-gray-900 bg-opacity-50 shadow-xl py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
			<h1 class="text-center tracking-tight">
				<span class="block font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl">Arvin Zhao</span>
				<span class="block font-bold text-purple-400 text-xl sm:text-2xl lg:text-3xl">
					PGT student (<a href="https://www.gla.ac.uk/" target="_blank" class="underline hover:text-purple-200 transition-colors duration-300">@UofG</a>) & developer
				</span>
			</h1>
			<p class="mt-6 max-w-lg mx-auto text-center text-xl text-purple-200 sm:max-w-3xl">
				Arvin is my English name, and my real name is Jichen. I'm an introverted tech geek who always tries to be talkative.
				I'm pretty into exploring software, apps, APIs, AI, etc.
				I could speak Mandarin and English. Could I be said to have a British accent?🤔
			</p>
		</div>
	</div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";

export default {
	components: {
		SpeakerphoneIcon,
		XIcon,
	},
	data() {
		return {
			isBannerDismissed: true
		};
	},
	mounted() {
		document.onreadystatechange = () => {
			if (document.readyState === "complete") {
				this.isBannerDismissed = false;
			}
		};
	}
};
</script>