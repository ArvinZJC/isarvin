<!--
 * @Description: the footer component
 * @Version: 1.2.6.20210907
 * @Author: Arvin Zhao
 * @Date: 2021-06-22 10:14:43
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-09-07 21:33:18
-->

<template>
  <!-- The button for opening the settings panel. -->
  <button @click="open = true" type="button" class="fixed bottom-28 right-4 sm:right-6 lg:right-8 z-30 rounded-full flex items-center justify-center h-12 w-12 bg-indigo-600 bg-opacity-90 hover:bg-indigo-700 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 motion-safe:transition-colors motion-safe:duration-300 shadow-xl" title="Open the settings panel.">
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
        <TransitionChild as="template" enter="ease-out motion-safe:duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in motion-safe:duration-300" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom sm:align-middle bg-white dark:bg-black ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-5 rounded-2xl sm:my-8 p-4 pb-6 text-left shadow-2xl transform motion-safe:transition-all max-w-sm w-full">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="flex items-center justify-center py-2">
                  <CogIcon class="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </span>
                <div class="mx-2 sm:mx-3">
                  <DialogTitle as="h3" class="text-lg leading-6 font-semibold text-gray-900 dark:text-gray-50">{{ t("settings") }}</DialogTitle>
                </div>
              </div>
              <button type="button" v-on:click="open = false" class="flex p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-indigo-400 motion-safe:transition-colors motion-safe:duration-300">
                <span class="sr-only">{{ t("close") }}</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
              <!-- The appearance setting. -->
              <Listbox as="li" v-model="themeSelected" class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-4">
                <div class="flex flex-col">
                  <ListboxLabel class="text-base font-medium text-gray-700 dark:text-gray-200">{{ t("appearance.name") }}</ListboxLabel>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t("appearance.description") }}</p>
                </div>
                <div class="relative">
                  <ListboxButton class="relative w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-md pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-sm">
                    <span class="block text-gray-700 dark:text-gray-200 truncate">{{ t(themeSelected.name) }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon class="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    </span>
                  </ListboxButton>
                  <transition enter-active-class="ease-out motion-safe:duration-300" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="ease-in motion-safe:duration-300" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <div class="absolute z-10 w-full">
                      <ListboxOptions @click="changeAppearance()" class="mt-1 mb-10 shadow-md max-h-60 rounded-lg py-1 bg-white dark:bg-black ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-20 overflow-auto focus:outline-none text-sm motion-safe:transition transform origin-top-right">
                        <ListboxOption as="template" v-for="theme in themes" :key="theme.id" :value="theme" v-slot="{ active, themeSelected }" class="motion-safe:transition-colors motion-safe:duration-300">
                          <li :class="[active ? 'text-gray-50 bg-indigo-600' : 'text-gray-700 dark:text-gray-200', 'select-none cursor-pointer relative py-2 pl-8 pr-4']">
                            <span v-if="theme.icon" :class="[active ? '' : 'text-indigo-600 dark:text-indigo-400', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                              <component :is="theme.icon" class="h-5 w-5" aria-hidden="true" />
                            </span>
                            <span :class="[themeSelected ? 'font-semibold' : 'font-normal', 'block truncate']">
                              {{ t(theme.name) }}
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </div>
                  </transition>
                </div>
              </Listbox>
              <!-- The language setting. -->
              <Listbox as="li" v-model="localeSelected" class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4">
                <div class="flex flex-col">
                  <ListboxLabel class="text-base font-medium text-gray-700 dark:text-gray-200">{{ t("language.name") }}</ListboxLabel>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t("language.description") }}</p>
                </div>
                <div class="relative">
                  <ListboxButton class="relative w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-md pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 text-sm">
                    <span class="block text-gray-700 dark:text-gray-200 truncate">{{ t(localeSelected.name) }}</span>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon class="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    </span>
                  </ListboxButton>
                  <transition enter-active-class="ease-out motion-safe:duration-300" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="ease-in motion-safe:duration-300" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <div class="absolute z-10 w-full">
                      <ListboxOptions @click="changeLanguage()" class="mt-1 mb-10 shadow-md max-h-60 rounded-lg py-1 bg-white dark:bg-black ring-gray-900 dark:ring-gray-50 ring-1 ring-opacity-5 dark:ring-opacity-20 overflow-auto focus:outline-none text-sm motion-safe:transition transform origin-top-right">
                        <ListboxOption as="template" v-for="locale in locales" :key="locale.id" :value="locale" v-slot="{ active, localeSelected }" class="motion-safe:transition-colors motion-safe:duration-300">
                          <li :class="[active ? 'text-gray-50 bg-indigo-600' : 'text-gray-700 dark:text-gray-200', 'select-none cursor-pointer relative py-2 pl-3 pr-4']">
                            <span :class="[localeSelected ? 'font-semibold' : 'font-normal', 'block truncate']">
                              {{ t(locale.name) }}
                            </span>
                          </li>
                        </ListboxOption>
                      </ListboxOptions>
                    </div>
                    
                  </transition>
                </div>
              </Listbox>
            </ul>
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
import { Dialog, DialogOverlay, DialogTitle, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { CogIcon, MoonIcon, SelectorIcon, SunIcon, XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import { decideLocale } from "../lib/i18n.js";
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
     * Apply the locale change.
     */
    applyLocale() {
      this.locale = decideLocale();
      document.querySelector("meta[name='description']").setAttribute("content", this.t("pages." + this.$route.name + ".description"));
      document.title = this.t("pages." + this.$route.name + ".title");
    }, // end function applyLocale

    /**
     * Change the language setting.
     */
    changeLanguage() {
      if (this.localeSelected.id === 0) {
        if (localStorage.locale) {
          localStorage.removeItem("locale"); // Choose to follow the browser setting.
          this.applyLocale();
        } // end if
      }
      else {
        if (this.localeSelected.name !== localStorage.locale) {
          localStorage.locale = this.localeSelected.name;
          this.applyLocale();
        } // end if
      } // end if...else
    }, // end function changeLanguage

    /**
     * Change the appearance setting.
     */
    changeAppearance() {
      if (this.themeSelected.id === 0) {
        if (localStorage.theme) {
          localStorage.removeItem("theme"); // Choose to follow the system setting.
          applyTheme(window.matchMedia("(prefers-color-scheme: dark)"));
        } // end if
      }
      else {
        if (this.themeSelected.name !== localStorage.theme) {
          localStorage.theme = this.themeSelected.name;
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
    const { t, locale } = useI18n({ useScope: "global" });
    const open = ref(false);
    const themes = [
      { id: 0, name: "systemDefault", icon: null },
      { id: 1, name: "light", icon: SunIcon },
      { id: 2, name: "dark", icon: MoonIcon }
    ];
    var themeSelected;
    const locales = [
      { id: 0, name: "browserDefault" },
      { id: 1, name: "en" },
      { id: 2, name: "zh-CN" }
    ];
    var localeSelected;

    // Set the current locale.
    if (localStorage.locale) {
      if (localStorage.locale === "en") {
        localeSelected = ref(locales[1]);
      }
      else {
        localeSelected = ref(locales[2]);
      } // end if...else
    }
    else {
      localeSelected = ref(locales[0]);
    } // end if...else

    // Set the current theme.
    if (localStorage.theme) {
      if (localStorage.theme === "light") {
        themeSelected = ref(themes[1]);
      }
      else {
        themeSelected = ref(themes[2]);
      } // end if...else
    }
    else {
      themeSelected = ref(themes[0]);
    } // end if...else
    
    return { locale, locales, localeSelected, open, t, themes, themeSelected };
  }
};
</script>