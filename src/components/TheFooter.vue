<!--
 * @Description: the footer component
 * @Version: 1.5.1.20220913
 * @Author: Arvin Zhao
 * @Date: 2021-06-22 10:14:43
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-09-13 01:44:39
-->

<template>
  <!-- The button for opening the settings panel. -->
  <button
    @click="open = true"
    :title="t('openSettingsPanel')"
    class="btn-action btn-round ring-inset-grey motion-safe:transition-colours-300 bg-opacity-90 bottom-28 shadow-xl"
    type="button"
  >
    <span class="sr-only">{{ t("openSettingsPanel") }}</span>
    <CogIcon class="icon-6" aria-hidden="true" />
  </button>
  <!-- A modal for the settings panel. -->
  <TransitionRoot :show="open" as="template">
    <Dialog
      @close="open = false"
      :open="open"
      as="div"
      class="container-overlay"
      static
    >
      <div class="container-overlay-screen">
        <TransitionChild
          as="template"
          enter="motion-safe:transition-opacity-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="motion-safe:transition-opacity-300 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="container-overlay-translucent" />
        </TransitionChild>
        <!-- This element is to trick the browser into centring the modal contents at the small breakpoint. -->
        <span
          aria-hidden="true"
          class="sm:align-middle sm:h-screen hidden sm:inline-block"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="motion-safe:transition-300 ease-out"
          enter-from="modal-out"
          enter-to="modal-in"
          leave="motion-safe:transition-300 ease-in"
          leave-from="modal-in"
          leave-to="modal-out"
        >
          <div class="card modal ring-container">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <CogIcon
                  aria-hidden="true"
                  class="icon-6 text-content-indigo my-2"
                />
                <div class="mx-2 sm:mx-3">
                  <DialogTitle
                    as="h3"
                    class="text-primary !text-lg !leading-6"
                    >{{ t("settings") }}</DialogTitle
                  >
                </div>
              </div>
              <button
                @click="open = false"
                class="bg-hover-grey btn-square ring-inset-indigo text-btn-square motion-safe:transition-colours-300"
                type="button"
              >
                <span class="sr-only">{{ t("close") }}</span>
                <XMarkIcon aria-hidden="true" class="icon-6" />
              </button>
            </div>
            <ul class="divide-y-grey text-left" role="list">
              <!-- The appearance setting. -->
              <Listbox
                v-model="appearanceSelected"
                as="li"
                class="container-setting py-4"
              >
                <div class="flex flex-col">
                  <ListboxLabel class="text-label">{{
                    t("appearance.name")
                  }}</ListboxLabel>
                  <p class="text-content-grey text-sm">
                    {{ t("appearance.description") }}
                  </p>
                </div>
                <div class="flex items-center">
                  <div class="relative w-full">
                    <ListboxButton
                      class="border-focus-indigo border-grey btn-select-menu ring-focus-indigo relative w-full"
                    >
                      <span
                        class="text-label !font-normal block text-sm truncate"
                        >{{ t(appearanceSelected.name) }}</span
                      >
                      <span class="container-selector">
                        <ChevronUpDownIcon
                          aria-hidden="true"
                          class="icon-5 text-gray-400 dark:text-gray-500"
                        />
                      </span>
                    </ListboxButton>
                    <transition
                      enter-active-class="motion-safe:transition-opacity-300 ease-out"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="motion-safe:transition-opacity-300 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <ListboxOptions
                        @click="changeAppearance()"
                        class="absolute focus:outline-none w-full z-10"
                      >
                        <div class="container-select-menu">
                          <ListboxOption
                            v-for="appearance in appearanceModes"
                            v-slot="{ active, selected }"
                            :key="appearance.id"
                            :value="appearance"
                            as="template"
                            class="motion-safe:transition-colours-300"
                          >
                            <li
                              :class="[
                                active
                                  ? 'colour-indigo'
                                  : 'text-label !font-normal',
                                'pointer pl-8 pr-4 py-2 relative',
                              ]"
                            >
                              <span
                                v-if="appearance.icon"
                                :class="[
                                  active ? '' : 'text-content-indigo',
                                  'absolute flex inset-y-0 items-center left-0 pl-1.5',
                                ]"
                              >
                                <component
                                  :is="appearance.icon"
                                  aria-hidden="true"
                                  class="icon-5"
                                />
                              </span>
                              <span
                                :class="[
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ t(appearance.name) }}</span
                              >
                            </li>
                          </ListboxOption>
                        </div>
                      </ListboxOptions>
                    </transition>
                  </div>
                </div>
              </Listbox>
              <!-- The language setting. -->
              <Listbox
                v-model="languageSelected"
                as="li"
                class="container-setting pt-4"
              >
                <div class="flex flex-col">
                  <ListboxLabel class="text-label">{{
                    t("language.name")
                  }}</ListboxLabel>
                  <p class="text-content-grey text-sm">
                    {{ t("language.description") }}
                  </p>
                </div>
                <div class="flex items-center">
                  <div class="relative w-full">
                    <ListboxButton
                      class="border-focus-indigo border-grey btn-select-menu ring-focus-indigo relative w-full"
                    >
                      <span
                        class="text-label !font-normal block text-sm truncate"
                        >{{ t(languageSelected.name) }}</span
                      >
                      <span class="container-selector">
                        <ChevronUpDownIcon
                          aria-hidden="true"
                          class="icon-5 text-gray-400 dark:text-gray-500"
                        />
                      </span>
                    </ListboxButton>
                    <transition
                      enter-active-class="motion-safe:transition-opacity-300 ease-out"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="motion-safe:transition-opacity-300 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <ListboxOptions
                        @click="changeLanguage()"
                        class="absolute focus:outline-none w-full z-10"
                      >
                        <div class="container-select-menu">
                          <ListboxOption
                            v-for="language in languages"
                            v-slot="{ active, selected }"
                            :key="language.id"
                            :value="language"
                            as="template"
                            class="motion-safe:transition-colours-300"
                          >
                            <li
                              :class="[
                                active
                                  ? 'colour-indigo'
                                  : 'text-label !font-normal',
                                'pointer pl-8 pr-4 py-2 relative',
                              ]"
                            >
                              <span
                                :class="[
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ t(language.name) }}</span
                              >
                            </li>
                          </ListboxOption>
                        </div>
                      </ListboxOptions>
                    </transition>
                  </div>
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
    <div
      class="container-block text-content-grey !tracking-normal md:flex md:items-center py-4 text-center"
    >
      &copy; {{ currentYear }} ArvinZJC
    </div>
  </footer>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CogIcon,
  ComputerDesktopIcon,
  MoonIcon,
  ChevronUpDownIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { applyAppearance } from "../lib/appearance.js";
import global from "../lib/global.js";
import { decideLanguage } from "../lib/i18n.js";
export default {
  components: {
    CogIcon,
    ComputerDesktopIcon,
    // eslint-disable-next-line vue/no-reserved-component-names
    Dialog,
    DialogOverlay,
    DialogTitle,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    MoonIcon,
    ChevronUpDownIcon,
    SunIcon,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
  },
  methods: {
    /**
     * Apply the language change.
     */
    applyLanguage() {
      this.locale = decideLanguage();
      document
        .querySelector("meta[name='description']")
        .setAttribute(
          "content",
          this.t("pages." + this.$route.name + ".description")
        );
      document.title = this.t("pages." + this.$route.name + ".title");
    }, // end function applyLanguage

    /**
     * Change the appearance setting.
     */
    changeAppearance() {
      if (this.appearanceSelected.id === 0) {
        if (localStorage.getItem(global.common.APPEARANCE_KEY)) {
          localStorage.removeItem(global.common.APPEARANCE_KEY); // Follow the system default.
          applyAppearance(window.matchMedia("(prefers-color-scheme: dark)"));
        } // end if
      } else {
        if (
          this.appearanceSelected.name !==
          localStorage.getItem(global.common.APPEARANCE_KEY)
        ) {
          localStorage.setItem(
            global.common.APPEARANCE_KEY,
            this.appearanceSelected.name
          );
          applyAppearance(window.matchMedia("(prefers-color-scheme: dark)"));
        } // end if
      } // end if...else
    }, // end function changeAppearance

    /**
     * Change the language setting.
     */
    changeLanguage() {
      if (this.languageSelected.id === 0) {
        if (localStorage.getItem(global.common.LANGUAGE_KEY) != null) {
          localStorage.removeItem(global.common.LANGUAGE_KEY); // Follow the browser default.
          this.applyLanguage();
        } // end if
      } else {
        if (
          this.languageSelected.name !==
          localStorage.getItem(global.common.LANGUAGE_KEY)
        ) {
          localStorage.setItem(
            global.common.LANGUAGE_KEY,
            this.languageSelected.name
          );
          this.applyLanguage();
        } // end if
      } // end if...else
    }, // end function changeLanguage
  },
  data() {
    return { currentYear: new Date().getFullYear() };
  },
  setup() {
    const { locale, t } = useI18n({ useScope: global.common.GLOBAL_LOCALE });
    const open = ref(false);
    const appearanceModes = [
      {
        icon: ComputerDesktopIcon,
        id: 0,
        name: global.common.SYSTEM_DEFAULT_MODE_ID,
      },
      { icon: SunIcon, id: 1, name: global.common.LIGHT_MODE_ID },
      { icon: MoonIcon, id: 2, name: global.common.DARK_MODE_ID },
    ];
    let currentAppearance = localStorage.getItem(global.common.APPEARANCE_KEY);
    let appearanceSelected;
    const languages = [
      { id: 0, name: global.common.BROWSER_DEFAULT_MODE_ID },
      { id: 1, name: global.common.EN_GB_ID },
      { id: 2, name: global.common.EN_US_ID },
      { id: 3, name: global.common.ZH_CN_ID },
    ];
    let currentLanguage = localStorage.getItem(global.common.LANGUAGE_KEY);
    let languageSelected;

    // Set the current appearance.
    switch (currentAppearance) {
      case global.common.DARK_MODE_ID:
        appearanceSelected = ref(appearanceModes[2]);
        break;

      case global.common.LIGHT_MODE_ID:
        appearanceSelected = ref(appearanceModes[1]);
        break;

      default:
        appearanceSelected = ref(appearanceModes[0]);
    } // end switch-case

    // Set the current language.
    switch (currentLanguage) {
      case global.common.EN_GB_ID:
        languageSelected = ref(languages[1]);
        break;

      case global.common.EN_US_ID:
        languageSelected = ref(languages[2]);
        break;

      case global.common.ZH_CN_ID:
        languageSelected = ref(languages[3]);
        break;

      default:
        languageSelected = ref(languages[0]);
    } // end switch-case

    return {
      appearanceModes,
      appearanceSelected,
      languages,
      languageSelected,
      locale,
      open,
      t,
    };
  },
};
</script>
