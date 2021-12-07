<!--
 * @Description: the navigation bar component
 * @Version: 1.6.4.20211207
 * @Author: Arvin Zhao
 * @Date: 2021-06-22 10:10:29
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-12-07 22:52:52
-->

<template>
  <!-- The navbar section. -->
  <Popover
    as="nav"
    class="container-navbar motion-safe:transition-300 bg-opacity-0 dark:bg-opacity-0"
    id="navbar"
  >
    <div class="container-block">
      <div class="flex h-16 justify-between">
        <div class="flex items-center">
          <a
            :href="navigation.logo.href"
            class="text-btn-square motion-safe:transition-colours-300 flex"
          >
            <img
              alt="Arvin: icon"
              class="animate-pulse icon-8 ml-2"
              id="hero-icon"
              src="../../assets/Arvin_icon.png"
            />
            <span class="sr-only">{{ navigation.logo.textContent }}</span>
            <!-- Hide the logo text between the medium breakpoint and the large breakpoint. -->
            <component
              :is="navigation.logo.textIcon"
              aria-hidden="true"
              class="lg:block h-8 md:hidden w-32"
            />
          </a>
          <!-- Show navigation items at the medium breakpoint. -->
          <div class="md:block hidden md:ml-6">
            <div aria-label="Navigation" class="flex space-x-4" id="nav">
              <a
                v-for="item in navigation.header"
                @click="navigate(item.anchor)"
                :aria-current="item.active ? 'page' : undefined"
                :class="[item.active ? 'text-content-indigo' : 'text-btn-square motion-safe:transition-colours-300', 'nav-item pointer']"
                :id="item.anchor"
                :key="item.name"
              >{{ t(item.name) }}</a>
            </div>
          </div>
        </div>
        <!-- Show my social links at the medium breakpoint. -->
        <div class="md:flex hidden md:items-center md:ml-6 md:space-x-6">
          <a
            v-for="item in navigation.social"
            :href="item.href"
            :key="item.name"
            :title="t(item.name)"
            class="text-btn-square motion-safe:transition-colours-300"
            target="_blank"
          >
            <span class="sr-only">{{ t(item.name) }}</span>
            <component :is="item.icon" aria-hidden="true" class="icon-6" />
          </a>
        </div>
        <!-- Hide the menu button at the medium breakpoint. -->
        <div class="flex md:hidden items-center">
          <PopoverButton
            @click="getMobileNavItems"
            class="bg-hover-grey btn-square ring-inset-indigo text-btn-square motion-safe:transition-colours-300"
          >
            <span class="sr-only">{{ t("openNavMenu") }}</span>
            <MenuIcon aria-hidden="true" class="icon-6" />
          </PopoverButton>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="motion-safe:transition-300 ease-out"
      enter-from-class="fade-out"
      enter-to-class="fade-in"
      leave-active-class="motion-safe:transition-300 ease-in"
      leave-from-class="fade-in"
      leave-to-class="fade-out"
    >
      <!-- Hide the menu at the medium breakpoint. -->
      <PopoverPanel class="nav-menu transform-gpu-tr md:hidden">
        <div class="card ring-container px-2 sm:px-4 shadow-2xl" focus>
          <div class="flex items-center justify-between py-2">
            <a
              :href="navigation.logo.href"
              class="text-btn-square motion-safe:transition-colours-300 flex"
            >
              <img alt="Arvin: icon" class="icon-8 ml-2" src="../../assets/Arvin_icon.png" />
              <span class="sr-only">{{ navigation.logo.textContent }}</span>
              <!-- Hide the logo text between the medium breakpoint and the large breakpoint. -->
              <component
                :is="navigation.logo.textIcon"
                aria-hidden="true"
                class="lg:block md:hidden h-8 w-32"
              />
            </a>
            <PopoverButton
              class="bg-hover-grey btn-square ring-inset-indigo text-btn-square motion-safe:transition-colours-300"
            >
              <span class="sr-only">{{ t("closeNavMenu") }}</span>
              <XIcon aria-hidden="true" class="icon-6" />
            </PopoverButton>
          </div>
          <!-- Navigation items in the menu. -->
          <div aria-label="Navigation menu" class="py-2 space-y-1" id="mobile-nav">
            <a
              v-for="item in navigation.header"
              @click="navigate(item.anchor)"
              :class="[item.active ? 'bg-active text-content-indigo' : 'bg-hover-grey text-btn-square motion-safe:transition-colours-300', 'btn-nav-item pointer']"
              :id="item.anchor"
              :key="item.name"
              type="button"
            >
              <span class="badge-square-2 sm:badge-square-3">
                <component :is="item.icon" aria-hidden="true" class="icon-6" />
              </span>
              <p class="ml-4 font-medium truncate">{{ t(item.name) }}</p>
            </a>
          </div>
          <!-- Social links in the menu. -->
          <div class="border-grey border-t flex flex-wrap justify-center px-4">
            <a
              v-for="item in navigation.social"
              :href="item.href"
              :key="item.name"
              :title="t(item.name)"
              class="text-btn-square motion-safe:transition-colours-300 mx-3 my-2"
              target="_blank"
            >
              <span class="sr-only">{{ t(item.name) }}</span>
              <component :is="item.icon" aria-hidden="true" class="icon-6" />
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  <!-- The button for scrolling to the top. -->
  <transition
    enter-active-class="motion-safe:transition-300 ease-out"
    enter-from-class="float-down-1"
    enter-to-class="float-up"
    leave-active-class="motion-safe:transition-300 ease-in"
    leave-from-class="float-up"
    leave-to-class="float-down-1"
  >
    <button
      v-if="!isScrollToTopDismissed"
      @click="navigate('#home')"
      :title="t('scrollToTop')"
      class="btn-action btn-round ring-inset-grey bg-opacity-90 bottom-44 shadow-xl"
      type="button"
    >
      <span class="sr-only">{{ t("scrollToTop") }}</span>
      <ArrowUpIcon aria-hidden="true" class="icon-6" />
    </button>
  </transition>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { AcademicCapIcon, ArrowUpIcon, CollectionIcon, HomeIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import { defineComponent, h } from "vue";
import { useI18n } from "vue-i18n";

import { loadLocaleMessages } from "../../lib/i18n.js";

export default {
  components: {
    AcademicCapIcon,
    ArrowUpIcon,
    CollectionIcon,
    HomeIcon,
    MenuIcon,
    Popover,
    PopoverButton,
    PopoverPanel,
    XIcon
  },
  methods: {
    /**
     * Smooth scroll to the section specified by an anchor.
     * @param {String} anchor the anchor specified by the id attribute for the specific section.
     */
    navigate(anchor) {
      var element = document.querySelector(anchor);

      if (element !== null) {
        window.scroll({
          top: element.offsetTop - this.navbar.offsetHeight + 2, // Offset the top to avoid overlapping the fixed header and reduce errors for scrolling to the view.
          left: 0,
          behavior: "smooth"
        });
      }
      else {
        window.scroll({ top: 0, left: 0, behavior: "smooth" }); // Scroll to top if no such anchor.
      } // end if...else
    }, // end function navigate

    /**
     * Get the mobile navbar items.
     */
    getMobileNavItems() {
      setTimeout(() => {
        var mobileNav = document.querySelector("#mobile-nav");

        if (mobileNav !== null) {
          this.mobileNavItems = null;
          this.mobileNavItems = mobileNav.getElementsByTagName("a");
          this.updateMobileNavItemsStatus();
        }
        else {
          this.mobileNavItems = null;
        }
      }, 300); // Need delay to make sure the mobile navbar items have been loaded.
    }, // end function getMobileNavItems

    /**
     * Handle scrolling behaviour for the navbar items.
     */
    handleScroll() {
      var activeIndex;
      var temp; // A temp record of the expected dismissing status of the button for scrolling to the top.

      Array.prototype.forEach.call(this.sections, (element, index) => {
        // The right part of the OR condition is to avoid that the last navbar item would never be active due to insufficient section length.
        if (element.offsetTop - this.navbar.offsetHeight <= window.scrollY
          || window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
          activeIndex = index;
        } // end if
      });

      // Apply the backdrop blur filter and box shadow to the navbar if it satisfies the specified offset threshold to the top.
      if (window.scrollY <= this.navbar.offsetHeight) {
        this.navbar.classList.add("bg-opacity-0", "dark:bg-opacity-0");
        this.navbar.classList.remove("bg-blur", "shadow-xl");
      }
      else {
        this.navbar.classList.add("bg-blur", "shadow-xl");
        this.navbar.classList.remove("bg-opacity-0", "dark:bg-opacity-0");
      }

      // Update the active navbar item if necessary.
      if (activeIndex !== this.activeIndex) {
        this.activeIndex = activeIndex;
        Array.prototype.forEach.call(this.navItems, (element, index) => {
          if (index === activeIndex) {
            element.classList.add("text-content-indigo");
            element.classList.remove("text-btn-square", "motion-safe:transition-colours-300");
            element.ariaCurrent = "page";
          }
          else {
            element.classList.add("text-btn-square", "motion-safe:transition-colours-300");
            element.classList.remove("text-content-indigo");
            element.ariaCurrent = null;
          } // end if...else
        });

        if (this.mobileNavItems !== null) {
          this.updateMobileNavItemsStatus();
        } // end if
      } // end if

      // Show the button for scrolling to the top if the specified offset threshold to the top is satisfied. Two sub-conditions are for suiting different situations of the home section (full screen or not).
      if (window.scrollY < screen.height * 2 / 3 && window.scrollY < document.getElementById("home").offsetHeight) {
        temp = true;
      }
      else {
        temp = false;
      } // end if...else

      // Assign the value only if it is different to avoid potential animation loss.
      if (this.isScrollToTopDismissed !== temp) {
        this.isScrollToTopDismissed = temp;
      } // end if
    }, // end function handleScroll

    /**
     * Update the mobile navbar items' styles.
     */
    updateMobileNavItemsStatus() {
      Array.prototype.forEach.call(this.mobileNavItems, (element, index) => {
        if (index === this.activeIndex) {
          element.classList.add("bg-active", "text-content-indigo");
          element.classList.remove("bg-hover-grey", "text-btn-square", "motion-safe:transition-colours-300");
          element.ariaCurrent = "page";
        }
        else {
          element.classList.add("bg-hover-grey", "text-btn-square", "motion-safe:transition-colours-300");
          element.classList.remove("bg-active", "text-content-indigo");
          element.ariaCurrent = null;
        } // end if...else
      });
    } // end function updateMobileNavItemsStatus
  },
  data() {
    return {
      activeIndex: 0,
      isScrollToTopDismissed: true,
      mobileNavItems: null,
      navbar: null,
      navItems: null,
      sections: []
    };
  },
  setup() {
    const { t } = useI18n({ messages: loadLocaleMessages(require.context("../../locales/me/navbar", false, /[A-Za-z0-9-_,\s]+\.json$/i)) });
    const navigation = {
      logo: {
        href: "/",
        textContent: "Arvin Zhao",
        textIcon: defineComponent({
          render: () =>
            h("svg", { viewBox: "0 0 1200 141" }, [
              h("g", { class: "fill-current", transform: "translate(0,141) scale(0.1,-0.1)", stroke: "none" }, [
                h("path", { d: "M4393 1361 c-40 -25 -53 -49 -53 -101 0 -34 6 -48 34 -76 28 -28 42 -34 75 -34 23 0 56 7 72 16 37 19 63 75 55 119 -15 76 -116 118 -183 76z" }),
                h("path", { d: "M8100 700 l0 -660 95 0 95 0 0 266 0 266 36 54 c68 102 185 184 264 184 58 0 100 -40 111 -106 4 -27 8 -187 8 -356 l1 -308 96 0 96 0 -4 358 c-5 403 -10 434 -78 502 -126 126 -323 110 -482 -38 l-48 -45 0 272 0 271 -95 0 -95 0 0 -660z" }),
                h("path", { d: "M1405 1298 c-13 -36 -395 -1248 -395 -1252 0 -3 44 -6 98 -6 l97 0 43 135 42 135 209 0 208 0 43 -135 44 -135 106 0 107 0 -201 633 -202 632 -97 3 c-72 2 -99 -1 -102 -10z m174 -584 c39 -121 71 -226 71 -232 0 -9 -42 -12 -150 -12 -110 0 -150 3 -150 12 0 27 144 468 151 461 4 -5 39 -107 78 -229z" }),
                h("path", { d: "M7099 1248 c0 -35 -2 -71 -4 -80 -3 -17 16 -18 277 -18 262 0 280 -1 276 -17 -3 -10 -132 -222 -287 -472 l-281 -454 0 -84 0 -83 420 0 420 0 0 85 0 85 -295 0 c-192 0 -295 4 -295 10 0 6 128 217 285 471 l285 461 0 79 0 79 -400 0 -400 0 -1 -62z" }),
                h("path", { d: "M2648 980 c-74 -13 -153 -54 -213 -111 l-55 -52 0 72 0 71 -95 0 -95 0 0 -460 0 -460 95 0 95 0 0 266 0 265 39 57 c78 116 181 186 263 180 l41 -3 -2 -97 -2 -98 95 0 96 0 0 174 0 174 -42 10 c-64 16 -167 22 -220 12z" }),
                h("path", { d: "M5554 980 c-64 -13 -142 -57 -199 -111 -29 -27 -55 -49 -59 -49 -4 0 -6 32 -4 70 l3 70 -95 0 -95 0 3 -460 2 -460 90 0 90 0 0 256 c0 297 -2 290 98 396 109 115 218 150 280 89 16 -17 32 -44 36 -62 3 -17 6 -177 6 -355 l0 -324 96 0 96 0 -4 367 c-3 362 -3 369 -27 421 -51 114 -187 179 -317 152z" }),
                h("path", { d: "M10402 979 c-122 -21 -250 -116 -305 -229 -126 -258 -32 -583 200 -693 65 -31 73 -32 193 -32 120 0 128 1 193 32 282 134 346 575 116 806 -67 66 -135 101 -229 116 -74 12 -94 12 -168 0z m196 -181 c87 -41 134 -146 134 -299 0 -199 -91 -319 -242 -319 -69 0 -125 25 -169 75 -43 49 -58 86 -72 174 -21 141 25 296 106 353 69 49 160 55 243 16z" }),
                h("path", { d: "M9395 952 c-158 -54 -274 -188 -320 -367 -20 -77 -20 -243 0 -320 27 -103 89 -178 183 -222 113 -53 271 -12 386 99 l56 54 6 -36 c3 -19 9 -53 13 -75 l7 -40 100 -3 101 -3 -18 68 c-16 59 -18 119 -18 459 l-1 391 -152 6 c-227 10 -288 8 -343 -11z m293 -156 c9 -5 12 -54 12 -180 l0 -172 -31 -48 c-40 -65 -126 -149 -177 -175 -143 -73 -241 36 -230 254 9 165 88 284 218 326 30 10 190 6 208 -5z" }),
                h("path", { d: "M3042 868 c23 -51 114 -257 204 -458 l163 -365 92 0 91 0 204 453 c112 249 204 455 204 458 0 3 -43 3 -96 2 l-96 -3 -145 -320 c-80 -176 -148 -324 -153 -328 -4 -4 -73 140 -153 320 l-146 328 -105 3 -105 3 41 -93z" }),
                h("path", { d: "M4110 880 l0 -80 125 0 125 0 0 -380 0 -380 220 0 220 0 0 80 0 80 -125 0 -125 0 0 380 0 380 -220 0 -220 0 0 -80z" }),
              ])
            ])
        })
      },
      header: [
        { icon: HomeIcon, name: "home", anchor: "#home", active: true },
        { icon: CollectionIcon, name: "projects", anchor: "#projects", active: false },
        { icon: AcademicCapIcon, name: "education", anchor: "#education", active: false }
      ],
      social: [
        {
          name: "fb",
          href: "https://www.facebook.com/arvinzjc",
          icon: defineComponent({
            render: () =>
              h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
                h("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" })
              ])
          })
        },
        {
          name: "ig",
          href: "https://www.instagram.com/arvinzjc",
          icon: defineComponent({
            render: () =>
              h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
                h("path", { d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" })
              ])
          })
        },
        {
          name: "wb",
          href: "https://weibo.com/u/3218812301",
          icon: defineComponent({
            render: () =>
              h("svg", { class: "fill-current", viewBox: "0 0 50 50" }, [
                h("path", { d: "M35 6c-.777 0-1.527.078-2.25.207a1 1 0 0 0 .344 1.973C33.727 8.066 34.359 8 35 8c6.086 0 11 4.914 11 11 0 1.316-.242 2.574-.672 3.754-.133.34-.074.723.156 1.004.235.281.598.414.957.347a.998.998 0 0 0 .766-.668c.504-1.382.793-2.87.793-4.437 0-7.168-5.832-13-13-13zm0 6c-.426 0-.828.043-1.21.11a1.001 1.001 0 0 0 .343 1.972c.293-.05.582-.082.867-.082a4.985 4.985 0 0 1 4.691 6.707 1.001 1.001 0 0 0 1.883.684c.27-.743.426-1.547.426-2.391 0-3.855-3.145-7-7-7zm-13.824.406c-3.211-.062-8.055 2.473-12.371 6.707C4.512 23.406 2 27.906 2 31.781c0 7.532 9.629 12.032 19.152 12.032 12.348 0 20.614-7.114 20.614-12.766 0-3.453-2.93-5.34-5.547-6.176-.625-.21-1.043-.312-.73-1.152.206-.5.511-1.453.511-2.719 0-1.438-1-2.684-3-2.906-.992-.11-5-.094-7.66 1.02 0 0-1.469.632-1.05-.52.733-2.301.628-4.188-.524-5.235-.625-.629-1.516-.933-2.59-.953zm-.863 11.528c7.804 0 14.128 3.98 14.128 8.894 0 4.91-6.324 8.89-14.129 8.89-7.8 0-14.125-3.98-14.125-8.89 0-4.914 6.325-8.894 14.125-8.894zm-1.047 2.09c-3.02.023-5.953 1.675-7.227 4.222-1.57 3.238-.105 6.797 3.66 7.945 3.766 1.254 8.262-.629 9.832-4.078 1.567-3.343-.418-6.898-4.183-7.836a8.04 8.04 0 0 0-2.082-.254zm1.558 4.226c.578 0 1.047.465 1.047 1.043a1.047 1.047 0 0 1-2.094 0c0-.578.47-1.043 1.047-1.043zm-4.406 1.043c.328.004.656.055.965.16 1.34.426 1.75 1.695.926 2.754-.72 1.059-2.364 1.586-3.602 1.059-1.23-.528-1.539-1.801-.82-2.75.539-.797 1.543-1.235 2.531-1.223z" })
              ])
          })
        },
        {
          name: "tt",
          href: "https://twitter.com/arvinzjc",
          icon: defineComponent({
            render: () =>
              h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
                h("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" })
              ])
          })
        },
        {
          name: "in",
          href: "https://www.linkedin.com/in/arvinzjc",
          icon: defineComponent({
            render: () =>
              h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
                h("path", { d: "M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" })
              ])
          })
        },
        {
          name: "gh",
          href: "https://github.com/ArvinZJC",
          icon: defineComponent({
            render: () =>
              h("svg", { class: "fill-current", viewBox: "0 0 24 24" }, [
                h("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" })
              ])
          })
        }
      ]
    };
    return { navigation, t };
  },
  mounted() {
    this.navbar = document.getElementById("navbar");
    this.navItems = document.querySelector("#nav").getElementsByTagName("a");
    Array.prototype.forEach.call(this.navItems, (element) => {
      this.sections.push(document.querySelector(element.getAttribute("id")));
    });
    window.addEventListener("load", () => {
      var heroIcon = document.getElementById("hero-icon");

      if (heroIcon !== null) {
        heroIcon.classList.remove("animate-pulse");
      } // end if
    });
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>