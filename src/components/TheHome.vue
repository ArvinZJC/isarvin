<!--
 * @Description: the home component
 * @Version: 1.1.0.20210805
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-05 16:29:02
-->

<template>
	<div class="bg-gradient-to-b from-indigo-600 to-purple-300 h-screen">
		<!-- Banner. -->
		<transition enter-active-class="transition ease-out duration-300 delay-500" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-300" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
			<div v-if="!isBannerDismissed" class="fixed w-full z-30 mt-16">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
					<div class="rounded-lg bg-purple-600 bg-opacity-90 shadow-xl p-2">
						<div class="flex items-center justify-between flex-wrap">
							<div class="w-0 flex-1 flex items-center">
								<span class="flex p-2 rounded-lg bg-purple-800">
									<SpeakerphoneIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
								</span>
								<div class="mx-2 sm:mx-3 overflow-hidden">
									<p id="banner-text" class="font-medium text-gray-50 whitespace-nowrap">Hi there!🎉 Welcome to my brand-new personal website!😆</p>
								</div>
							</div>
							<div class="flex-shrink-0 sm:order-3">
								<button type="button" class="flex p-2 rounded-md text-gray-50 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-gray-50 transition-colors duration-300">
									<span class="sr-only">Dismiss</span>
									<XIcon class="h-6 w-6" aria-hidden="true" v-on:click="isBannerDismissed = true" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<!-- Home section: full screen containing the hero bio. -->
		<div id="home" class="absolute z-10 flex flex-col items-center justify-between h-screen w-full overflow-hidden pt-16 sm:px-6 lg:px-8">
			<!-- A placeholder for "justify-between". -->
			<div class="h-px" />
			<div class="max-h-3/4">
				<img class="relative -bottom-12 sm:-bottom-14 lg:-bottom-16 mx-auto h-24 sm:h-28 lg:h-32 w-24 sm:w-28 lg:w-32 rounded-full shadow-lg" src="../assets/Arvin_hero.jpg" alt="Arvin: hero avatar" />
				<div class="max-w-7xl rounded-2xl overflow-auto bg-gray-900 bg-opacity-50 shadow-md space-y-4 mx-4 sm:mx-auto p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-24">
					<h1 class="text-center tracking-tight">
						<span class="block font-extrabold text-3xl sm:text-4xl text-gray-50">Arvin Zhao</span>
						<span class="block font-bold text-xl text-purple-400">
							PGT student (<a href="https://www.gla.ac.uk/" target="_blank" class="underline hover:text-purple-200 transition-colors duration-300">@UofG</a>) & developer
						</span>
					</h1>
					<p class="max-w-lg sm:max-w-3xl mx-auto text-center text-base text-purple-200">
						Arvin is my English name, and my real name is Jichen. I'm an introverted tech geek who always tries to be talkative.
						I'm pretty into exploring software, apps, APIs, AI, etc.
						I could speak Mandarin and English. Could I be said to have a British accent?🤔
					</p>
				</div>
			</div>
			
			<svg class="relative h-12 sm:h-14 lg:h-16 w-screen" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" shape-rendering="auto" viewBox="0 24 150 28">
				<defs>
					<path id="smooth-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				</defs>
				<g class="wave">
					<use class="fill-current text-gray-50 opacity-70" xlink:href="#smooth-wave" x="48" y="0" />
					<use class="fill-current text-gray-50 opacity-50" xlink:href="#smooth-wave" x="48" y="3" />
					<use class="fill-current text-gray-50 opacity-30" xlink:href="#smooth-wave" x="48" y="5" />
					<use class="fill-current text-gray-50" xlink:href="#smooth-wave" x="48" y="7" />
				</g>
			</svg>
		</div>
		<div class="absolute top-0 h-full w-full" >
			<ul class="bubbles z-0 absolute h-full w-full overflow-hidden">
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
		</div >
	</div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from "@heroicons/vue/outline";

export default {
	components: {
		SpeakerphoneIcon,
		XIcon
	},
	methods: {
		// Auto-scroll the banner text when it is too long.
		autoScrollBannerText() {
			var bannerText = document.querySelector("#banner-text");
			
			if (bannerText) {
				if (bannerText.scrollWidth > bannerText.offsetWidth) {
					bannerText.classList.add("marquee");
				}
				else {
					bannerText.classList.remove("marquee");
				} // end if...else
			} // end if
		} // end function autoScrollBannerText
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
				setTimeout(() => {
					this.autoScrollBannerText();
				}, 300); // Need delay to make sure the banner have been loaded.
			}
		};
		window.onresize = this.autoScrollBannerText;
	}
};
</script>