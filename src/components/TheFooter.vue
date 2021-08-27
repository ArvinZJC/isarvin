<!--
 * @Description: the footer component
 * @Version: 1.1.0.20210826
 * @Author: Arvin Zhao
 * @Date: 2021-06-22 10:14:43
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-26 17:19:28
-->

<template>
	<!-- The button for opening the settings panel. -->
	<button @click="open = true" type="button" class="fixed bottom-28 right-4 sm:right-6 lg:right-8 z-30 rounded-full flex items-center justify-center h-12 w-12 bg-purple-600 bg-opacity-90 hover:bg-purple-700 dark:hover:bg-purple-500 focus:outline-none
		focus:ring-2 focus:ring-inset focus:ring-gray-50 motion-safe:transition-colors motion-safe:duration-300 shadow-xl" title="Open the settings panel.">
		<CogIcon class="h-6 w-6 text-gray-50" aria-hidden="true" />
	</button>
	<!-- A modal for the settings panel. -->
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" static class="fixed z-50 inset-0 overflow-y-auto" @close="open = false" :open="open">
			<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<TransitionChild as="template" enter="ease-out motion-safe:duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in motion-safe:duration-300" leave-from="opacity-100" leave-to="opacity-0">
					<DialogOverlay class="fixed inset-0 bg-gray-500 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 motion-safe:transition-opacity" />
				</TransitionChild>
				<!-- This element is to trick the browser into centring the modal contents at the small breakpoint. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
				<TransitionChild as="template" enter="ease-out motion-safe:duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in motion-safe:duration-300" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
					<div class="inline-block align-bottom sm:align-middle bg-white dark:bg-black ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-5 rounded-2xl sm:my-8 p-4 pb-6 text-left overflow-hidden shadow-2xl transform
						motion-safe:transition-all max-w-sm w-full">
						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<span class="flex items-center justify-center py-2">
									<CogIcon class="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden="true" />
								</span>
								<div class="mx-2 sm:mx-3">
									<DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50">Settings</DialogTitle>
								</div>
							</div>
							<button type="button" class="flex p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset
								focus:ring-purple-500 dark:focus:ring-purple-400 motion-safe:transition-colors motion-safe:duration-300">
								<span class="sr-only">Dismiss</span>
								<XIcon class="h-6 w-6" aria-hidden="true" v-on:click="open = false" />
							</button>
						</div>
						<div class="mt-4">
							<ul role="list" class="divide-y divide-gray-200">
								<!-- The appearance setting. -->
								<Listbox as="li" v-model="selected" class="flex flex-col sm:flex-row justify-between">
									<div class="flex flex-col">
										<ListboxLabel class="text-sm font-medium text-gray-700 dark:text-gray-200">Appearance</ListboxLabel>
										<p class="text-sm text-gray-500 dark:text-gray-400">Customise how the site looks on your device.</p>
									</div>
									<div class="relative mt-2 sm:mt-0 sm:ml-4">
										<ListboxButton class="relative w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-md pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-400
											focus:border-purple-500 dark:focus:border-purple-400 sm:text-sm">
											<span class="block text-gray-700 dark:text-gray-200 truncate">{{ selected.name }}</span>
											<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
												<SelectorIcon class="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
											</span>
										</ListboxButton>
										<transition enter-active-class="ease-out motion-safe:duration-300" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
											leave-active-class="ease-in motion-safe:duration-300" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
											<ListboxOptions @click="changeAppearance()" class="mt-1 w-full shadow-md max-h-60 rounded-lg py-1 ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-20 overflow-auto focus:outline-none sm:text-sm motion-safe:transition
												transform origin-top-right">
												<ListboxOption as="template" v-for="theme in themes" :key="theme.id" :value="theme" v-slot="{ active, selected }" class="motion-safe:transition-colors motion-safe:duration-300">
													<li :class="[active ? 'text-gray-50 bg-purple-600' : 'text-gray-700 dark:text-gray-200', 'select-none cursor-pointer relative py-2 pl-8 pr-4']">
														<span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
															{{ theme.name }}
														</span>
														<span v-if="theme.icon" :class="[active ? '' : 'text-purple-600 dark:text-purple-300', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
															<component :is="theme.icon" class="h-5 w-5" aria-hidden="true" />
														</span>
													</li>
												</ListboxOption>
											</ListboxOptions>
										</transition>
									</div>
								</Listbox>
							</ul>
						</div>
					</div>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
	<!-- The footer section. It needs the TailwindCSS's utilities "ralative" and "min-h-screen" on the main element. -->
	<footer class="absolute bottom-0 w-full bg-white dark:bg-black">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:flex md:items-center text-center text-base text-gray-500 dark:text-gray-400">&copy; {{ currentYear }} ArvinZJC</div>
	</footer>
</template>

<script>
import { ref } from "vue";
import { Dialog, DialogOverlay, DialogTitle, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { CogIcon, MoonIcon, SelectorIcon, SunIcon, XIcon } from "@heroicons/vue/outline";
import { applyTheme } from "../lib/theme.js";

export default {
	components: {
		CogIcon,
		Dialog,
		DialogOverlay,
		DialogTitle,
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		MoonIcon,
		SelectorIcon,
		SunIcon,
		TransitionChild,
		TransitionRoot,
		XIcon
	},
	methods: {
		/**
		 * Change the appearance setting.
		 */
		changeAppearance() {
			if (this.selected.id === 0) {
				if (localStorage.theme) {
					localStorage.removeItem("theme"); // Choose to follow the system setting.
					applyTheme(window.matchMedia("(prefers-color-scheme: dark)"));
				} // end if
			}
			else {
				var themeName = this.selected.name.toLowerCase();

				if (themeName !== localStorage.theme) {
					localStorage.theme = themeName;
					applyTheme(window.matchMedia("(prefers-color-scheme: dark)"));
				} // end if
			} // end if...else
		} // end function changeAppearance
	},
	data() {
		const currentYear = new Date().getFullYear();
		return { currentYear };
	},
	setup() {
		const open = ref(false);
		const themes = [
			{id: 0, name: "System default", icon: null},
			{id: 1, name: "Light", icon: SunIcon},
			{id: 2, name: "Dark", icon: MoonIcon}
		];
		var selected;

		// Set the current appearance.
		if (localStorage.theme) {
			if (localStorage.theme === "light") {
				selected = ref(themes[1]);
			}
			else {
				selected = ref(themes[2]);
			} // end if...else
		}
		else {
			selected = ref(themes[0]);
		} // end if...else
		
		return { open, selected, themes };
	}
};
</script>