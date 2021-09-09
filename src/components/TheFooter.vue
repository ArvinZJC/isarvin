<!--
 * @Description: the footer component
 * @Version: 1.3.0.20210909
 * @Author: Arvin Zhao
 * @Date: 2021-06-22 10:14:43
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-09-09 02:50:42
-->

<template>
  <!-- The button for opening the settings panel. -->
  <button @click="open = true" :title="t('openSettingsPanel')" class="btn-action btn-round ring-inset-grey motion-safe:transition-colours-300 bg-opacity-90 bottom-28 shadow-xl" type="button">
    <span class="sr-only">{{ t("openSettingsPanel") }}</span>
    <CogIcon class="icon-6" aria-hidden="true" />
  </button>
  <!-- A modal for the settings panel. -->
  <TransitionRoot :show="open" as="template">
    <Dialog @close="open = false" :open="open" as="div" class="container-overlay" static>
      <div class="container-overlay-screen">
        <TransitionChild as="template" enter="motion-safe:transition-opacity-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="motion-safe:transition-opacity-300 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="container-overlay-translucent" />
        </TransitionChild>
        <!-- This element is to trick the browser into centring the modal contents at the small breakpoint. -->
        <span aria-hidden="true" class="sm:align-middle sm:h-screen hidden sm:inline-block">&#8203;</span>
        <TransitionChild as="template" enter="motion-safe:transition-300 ease-out" enter-from="modal-out" enter-to="modal-in" leave="motion-safe:transition-300 ease-in" leave-from="modal-in" leave-to="modal-out">
          <div class="card modal ring-container transform">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <CogIcon aria-hidden="true" class="icon-6 text-content-indigo my-2" />
                <div class="mx-2 sm:mx-3">
                  <DialogTitle as="h3" class="text-primary !text-lg !leading-6">{{ t("settings") }}</DialogTitle>
                </div>
              </div>
              <button @click="open = false" class="bg-hover-grey btn-square ring-inset-indigo text-btn-square motion-safe:transition-colours-300" type="button">
                <span class="sr-only">{{ t("close") }}</span>
                <XIcon aria-hidden="true" class="icon-6" />
              </button>
            </div>
            <ul class="divide-y-grey text-left" role="list">
              <!-- The appearance setting. -->
              <Listbox v-model="themeSelected" as="li" class="container-setting py-4">
                <div class="flex flex-col">
                  <ListboxLabel class="text-label">{{ t("appearance.name") }}</ListboxLabel>
                  <p class="text-content-grey text-sm tracking-tight">{{ t("appearance.description") }}</p>
                </div>
                <div class="relative">
                  <ListboxButton class="border-focus-indigo border-grey btn-select-menu ring-focus-indigo relative w-full">
                    <span class="text-label !font-normal block text-sm truncate">{{ t(themeSelected.name) }}</span>
                    <span class="container-selector">
                      <SelectorIcon aria-hidden="true" class="icon-5 text-gray-400 dark:text-gray-500" />
                    </span>
                  </ListboxButton>
                  <transition enter-active-class="motion-safe:transition-opacity-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="motion-safe:transition-opacity-300 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions @click="changeAppearance()" class="absolute focus:outline-none w-full z-10">
                      <div class="container-select-menu">
                        <ListboxOption v-for="theme in themes" v-slot="{ active, themeSelected }" :key="theme.id" :value="theme" as="template" class="motion-safe:transition-colours-300">
                          <li :class="[active ? 'colour-indigo' : 'text-label !font-normal', 'pointer pl-8 pr-4 py-2 relative']">
                            <span v-if="theme.icon" :class="[active ? '' : 'text-content-indigo', 'absolute flex inset-y-0 items-center left-0 pl-1.5']">
                              <component :is="theme.icon" aria-hidden="true" class="icon-5" />
                            </span>
                            <span :class="[themeSelected ? 'font-semibold' : 'font-normal', 'block truncate']">
                              {{ t(theme.name) }}
                            </span>
                          </li>
                        </ListboxOption>
                      </div>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
              <!-- The language setting. -->
              <Listbox v-model="localeSelected" as="li" class="container-setting pt-4">
                <div class="flex flex-col">
                  <ListboxLabel class="text-label">{{ t("language.name") }}</ListboxLabel>
                  <p class="text-content-grey text-sm tracking-tight">{{ t("language.description") }}</p>
                </div>
                <div class="relative">
                  <ListboxButton class="border-focus-indigo border-grey btn-select-menu ring-focus-indigo relative w-full">
                    <span class="text-label !font-normal block text-sm truncate">{{ t(localeSelected.name) }}</span>
                    <span class="container-selector">
                      <SelectorIcon aria-hidden="true" class="icon-5 text-gray-400 dark:text-gray-500" />
                    </span>
                  </ListboxButton>
                  <transition enter-active-class="motion-safe:transition-opacity-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="motion-safe:transition-opacity-300 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions @click="changeLanguage()" class="absolute focus:outline-none w-full z-10">
                      <div class="container-select-menu">
                        <ListboxOption v-for="locale in locales" v-slot="{ active, localeSelected }" :key="locale.id" :value="locale" as="template" class="motion-safe:transition-colours-300">
                          <li :class="[active ? 'colour-indigo' : 'text-label !font-normal', 'pointer pl-8 pr-4 py-2 relative']">
                            <span :class="[localeSelected ? 'font-semibold' : 'font-normal', 'block truncate']">
                              {{ t(locale.name) }}
                            </span>
                          </li>
                        </ListboxOption>
                      </div>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </ul>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- The footer section. -->
  <footer class="container-footer">
    <div class="container-block text-content-grey !tracking-normal md:flex md:items-center py-4 text-center">&copy; {{ currentYear }} ArvinZJC</div>
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