<!--
 * @Description: the home component
 * @Version: 1.0.2.20210622
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-23 14:20:11
-->

<template>
	<div :style="{backgroundImage: 'url(' + heroImage + ')'}" class="bg-fixed bg-cover bg-center bg-no-repeat pt-16">
		<transition enter-active-class="transition ease-out duration-300 delay-500" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-300" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
			<!-- Banner. -->
			<div v-if="!isBannerDismissed" class="fixed w-full z-40 bg-purple-600 bg-opacity-70 backdrop-filter backdrop-blur shadow">
				<div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
					<div class="flex items-center justify-between flex-wrap">
						<div class="w-0 flex-1 flex items-center">
							<span class="flex p-2 rounded-lg bg-purple-800">
								<SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
							</span>
							<p class="ml-3 font-medium text-white truncate">
								<span class="md:hidden">Still under construction!🔨</span>
								<span class="hidden md:inline">Welcome, mate!🎉 Sorry, but it's still under construction.🔨</span>
							</p>
						</div>
						<div class="flex-shrink-0 sm:order-3 sm:ml-3">
							<!-- TODO: Hide the banner when appropriate. -->
							<button type="button" class="-mr-2 flex p-2 rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-white">
								<span class="sr-only">Dismiss</span>
								<XIcon class="h-6 w-6 text-white" aria-hidden="true" v-on:click="isBannerDismissed = true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<!-- Hero section. -->
		<div class="bg-gray-900 bg-opacity-50 py-40 sm:py-60 lg:py-80 px-4 sm:px-6 lg:px-8">
			<h1 class="text-center tracking-tight">
				<span class="block font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl">Arvin Zhao</span>
				<span class="block font-bold text-purple-400 text-xl sm:text-2xl lg:text-3xl">
					PGT student (<a href="https://www.gla.ac.uk/" target="_blank" class="underline hover:text-purple-200 transition-colors duration-300">@UofG</a>) & developer
				</span>
			</h1>
			<p class="mt-6 max-w-lg mx-auto text-center text-xl text-purple-200 sm:max-w-3xl">
				Arvin is my English name, and my real name is Jichen. I'm an introverted tech geek who always tries to be talkative.
				I'm quite into exploring software, apps, APIs, AI, etc.
				I could speak Mandarin and English. Could I be said to have a British accent?🤔
			</p>
		</div>
		<div class="bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur h-96 pt-8 space-y-8">
			
		</div>
		<div class="bg-purple-500 h-96 pt-8 space-y-8">
			
		</div>
		<div class="bg-white h-96 pt-8 space-y-8">
			
		</div>
	</div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";
import HeroImage from "../assets/Arvin_hero.jpg";

export default {
	components: {
		SpeakerphoneIcon,
		XIcon,
	},
	data() {
		return {
			isBannerDismissed: true,
			heroImage: HeroImage, 
		};
	},
	mounted() {
		document.onreadystatechange = () => {
			if (document.readyState == "complete") {
				this.isBannerDismissed = false;
			}
		};
	},
};
</script>