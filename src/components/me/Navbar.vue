<!--
 * @Description: the navigation bar component
 * @Version: 1.6.13.20220317
 * @Author: Arvin Zhao
 * @Date: 2021-06-22 10:10:29
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-03-17 21:09:31
-->

<template>
  <!-- The navbar section. -->
  <Popover
    :id="global.common.NAVBAR_ID"
    as="nav"
    class="container-navbar motion-safe:transition-300 bg-opacity-0 dark:bg-opacity-0"
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
              class="icon-8 ml-2"
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
            <div
              :id="global.common.NAV_ID"
              aria-label="Navigation"
              class="flex space-x-4"
            >
              <a
                v-for="item in navigation.header"
                @click="navigate(item.anchor)"
                :aria-current="item.active ? 'page' : undefined"
                :class="[
                  item.active
                    ? 'text-content-indigo'
                    : 'text-btn-square motion-safe:transition-colours-300',
                  'nav-item pointer',
                ]"
                :id="item.anchor"
                :key="item.name"
                >{{ t(item.name) }}</a
              >
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
              <img
                alt="Arvin: icon"
                class="icon-8 ml-2"
                src="../../assets/Arvin_icon.png"
              />
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
          <div
            :id="global.common.MOBILE_NAV_ID"
            aria-label="Navigation menu"
            class="py-2 space-y-1"
          >
            <a
              v-for="item in navigation.header"
              @click="navigate(item.anchor)"
              :class="[
                item.active
                  ? 'bg-active text-content-indigo'
                  : 'bg-hover-grey text-btn-square motion-safe:transition-colours-300',
                'btn-nav-item pointer',
              ]"
              :id="item.anchor"
              :key="item.name"
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
      @click="navigate(`#${global.common.HOME_SECTION}`)"
      :id="global.common.SCROLL_TO_TOP_ID"
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
import {
  AcademicCapIcon,
  ArrowUpIcon,
  CollectionIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";

import global from "../../lib/global.js";
import { loadLocaleMessages } from "../../lib/i18n.js";
import ArvinTextLogo from "../svg/ArvinTextLogo.vue";
import FacebookIcon from "../svg/FacebookIcon.vue";
import GitHubIcon from "../svg/GitHubIcon.vue";
import InstagramIcon from "../svg/InstagramIcon.vue";
import LinkedInIcon from "../svg/LinkedInIcon.vue";
import TwitterIcon from "../svg/TwitterIcon.vue";
import WeiboIcon from "../svg/WeiboIcon.vue";

export default {
  components: {
    AcademicCapIcon,
    ArrowUpIcon,
    ArvinTextLogo,
    CollectionIcon,
    FacebookIcon,
    GitHubIcon,
    HomeIcon,
    InstagramIcon,
    LinkedInIcon,
    MenuIcon,
    Popover,
    PopoverButton,
    PopoverPanel,
    TwitterIcon,
    WeiboIcon,
    XIcon,
  },
  methods: {
    /**
     * Apply the backdrop blur filter and box shadow to the navbar if it satisfies the specified offset threshold to the top.
     */
    applyBgBlur() {
      if (this.navbar != null && window.scrollY <= this.navbar.offsetHeight) {
        this.navbar.classList.add("bg-opacity-0", "dark:bg-opacity-0");
        this.navbar.classList.remove("bg-blur", "shadow-xl");
      } else {
        this.navbar.classList.add("bg-blur", "shadow-xl");
        this.navbar.classList.remove("bg-opacity-0", "dark:bg-opacity-0");
      } // end if...else
    }, // end function applyBgBlur

    /**
     * Smooth scroll to the section specified by an anchor.
     * @param {String} anchor the anchor specified by the id attribute for the specific section.
     */
    navigate(anchor) {
      const element = document.querySelector(anchor);

      if (element != null) {
        window.scroll({
          top: element.offsetTop - this.navbar.offsetHeight + 2, // Offset the top to avoid overlapping the fixed header and reduce errors for scrolling to the view.
          left: 0,
          behavior: global.common.SMOOTH_SCROLL,
        });
      } else {
        window.scroll({
          top: 0,
          left: 0,
          behavior: global.common.SMOOTH_SCROLL,
        }); // Scroll to top if no such anchor.
      } // end if...else
    }, // end function navigate

    /**
     * Get the mobile navbar items.
     */
    getMobileNavItems() {
      setTimeout(() => {
        const mobileNav = document.querySelector(
          `#${global.common.MOBILE_NAV_ID}`
        );

        if (mobileNav != null) {
          this.mobileNavItems = null;
          this.mobileNavItems = mobileNav.getElementsByTagName("a");
          this.updateMobileNavItemsStatus();
        } else {
          this.mobileNavItems = null;
        }
      }, 300); // Need delay to make sure the mobile navbar items have been loaded.
    }, // end function getMobileNavItems

    /**
     * Handle scrolling behaviour.
     */
    handleScroll() {
      let activeIndex;

      Array.prototype.forEach.call(this.sections, (element, index) => {
        // The right part of the OR condition is to avoid that the last navbar item would never be active due to insufficient section length.
        if (
          element.offsetTop - this.navbar.offsetHeight <= window.scrollY ||
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
        ) {
          activeIndex = index;
        } // end if
      });
      this.applyBgBlur();

      // Update the active navbar item if necessary.
      if (this.navItems != null && activeIndex !== this.activeIndex) {
        this.activeIndex = activeIndex;
        this.updateNavItemsStatus();

        if (this.mobileNavItems != null) {
          this.updateMobileNavItemsStatus();
        } // end if
      } // end if

      this.showScrollToTop();
    }, // end function handleScroll

    /**
     * Show the button for scrolling to the top properly if applicable.
     */
    showScrollToTop() {
      let temp; // A temp record of the expected dismissing status of the button for scrolling to the top.

      // Show the button for scrolling to the top if the specified offset threshold to the top is satisfied. Two sub-conditions are for suiting different situations of the home section (full screen or not).
      if (
        window.scrollY < (screen.height * 2) / 3 &&
        window.scrollY <
          document.getElementById(global.common.HOME_SECTION).offsetHeight
      ) {
        temp = true;
      } else {
        temp = false;
      } // end if...else

      // Assign the value only if it is different to avoid potential animation loss.
      if (this.isScrollToTopDismissed !== temp) {
        this.isScrollToTopDismissed = temp;

        let buttonScrollToTop;

        if (this.isScrollToTopDismissed) {
          buttonScrollToTop = document.getElementById(
            global.common.SCROLL_TO_TOP_ID
          );

          if (buttonScrollToTop != null) {
            buttonScrollToTop.classList.remove(
              "motion-safe:transition-colours-300"
            );
          } // end if
        } else {
          setTimeout(() => {
            buttonScrollToTop = document.getElementById(
              global.common.SCROLL_TO_TOP_ID
            );

            if (buttonScrollToTop != null) {
              buttonScrollToTop.classList.add(
                "motion-safe:transition-colours-300"
              );
            } // end if
          }, 300);
        } // end if...else
      } // end if
    }, // end function showScrollToTop

    /**
     * Update the mobile navbar items' styles.
     */
    updateMobileNavItemsStatus() {
      Array.prototype.forEach.call(this.mobileNavItems, (element, index) => {
        if (index === this.activeIndex) {
          element.classList.add("bg-active", "text-content-indigo");
          element.classList.remove(
            "bg-hover-grey",
            "text-btn-square",
            "motion-safe:transition-colours-300"
          );
          element.ariaCurrent = "page";
        } else {
          element.classList.add(
            "bg-hover-grey",
            "text-btn-square",
            "motion-safe:transition-colours-300"
          );
          element.classList.remove("bg-active", "text-content-indigo");
          element.ariaCurrent = null;
        } // end if...else
      });
    }, // end function updateMobileNavItemsStatus

    /**
     * Update the navbar items' styles.
     */
    updateNavItemsStatus() {
      Array.prototype.forEach.call(this.navItems, (element, index) => {
        if (index === this.activeIndex) {
          element.classList.add("text-content-indigo");
          element.classList.remove(
            "text-btn-square",
            "motion-safe:transition-colours-300"
          );
          element.ariaCurrent = "page";
        } else {
          element.classList.add(
            "text-btn-square",
            "motion-safe:transition-colours-300"
          );
          element.classList.remove("text-content-indigo");
          element.ariaCurrent = null;
        } // end if...else
      });
    }, // end function updateNavItemsStyles
  },
  data() {
    return {
      activeIndex: 0,
      global,
      isScrollToTopDismissed: true,
      mobileNavItems: null,
      navbar: null,
      navItems: null,
      sections: [],
    };
  },
  mounted() {
    this.navbar = document.getElementById(global.common.NAVBAR_ID);
    this.navItems = document
      .querySelector(`#${global.common.NAV_ID}`)
      .getElementsByTagName("a");
    Array.prototype.forEach.call(this.navItems, (element) => {
      this.sections.push(document.querySelector(element.getAttribute("id")));
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  setup() {
    const { t } = useI18n({
      messages: loadLocaleMessages(
        require.context("../../locales/me/navbar", false, /[-,\s\w]+\.json$/i)
      ),
    });
    return {
      navigation: {
        logo: {
          href: "/",
          textContent: global.common.DEFAULT_TITLE,
          textIcon: ArvinTextLogo,
        },
        header: [
          {
            active: true,
            anchor: `#${global.common.HOME_SECTION}`,
            icon: HomeIcon,
            name: global.common.HOME_SECTION,
          },
          {
            active: false,
            anchor: `#${global.common.PROJECT_SECTION}`,
            icon: CollectionIcon,
            name: global.common.PROJECT_SECTION,
          },
          {
            active: false,
            anchor: `#${global.common.EDUCATION_SECTION}`,
            icon: AcademicCapIcon,
            name: global.common.EDUCATION_SECTION,
          },
        ],
        social: [
          {
            href: "https://www.facebook.com/arvinzjc",
            icon: FacebookIcon,
            name: "fb",
          },
          {
            href: "https://www.instagram.com/arvinzjc",
            icon: InstagramIcon,
            name: "ig",
          },
          {
            href: "https://weibo.com/u/3218812301",
            icon: WeiboIcon,
            name: "wb",
          },
          {
            href: "https://twitter.com/arvinzjc",
            icon: TwitterIcon,
            name: "tt",
          },
          {
            href: "https://www.linkedin.com/in/arvinzjc",
            icon: LinkedInIcon,
            name: "in",
          },
          { href: global.common.GITHUB_ME, icon: GitHubIcon, name: "gh" },
        ],
      },
      t,
    };
  },
};
</script>
