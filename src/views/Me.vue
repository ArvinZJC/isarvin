<!--
 * @Description: the view telling who I am
 * @Version: 1.0.3.20210822
 * @Author: Arvin Zhao
 * @Date: 2021-07-11 12:08:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-22 23:32:05
-->

<template>
	<main class="relative min-h-screen flex-grow bg-gray-50">
		<TheNavbar />
		<TheHome />
		<TheProjects />
		<TheEducation />
		<TheTweeting />
		<TheFooter />
	</main>
</template>

<script>
import { useMeta } from "vue-meta";
import TheEducation from "../components/me/TheEducation.vue";
import TheHome from "../components/me/TheHome.vue";
import TheNavbar from "../components/me/TheNavbar.vue";
import TheProjects from "../components/me/TheProjects.vue";
import TheTweeting from "../components/me/TheTweeting.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
	components: {
		TheEducation,
		TheFooter,
		TheHome,
		TheNavbar,
		TheProjects,
		TheTweeting
	},
	setup() {
		useMeta({
			description: "I came to know myself better when I started to build my personal website. So this is Arvin.😉",
			title: "Arvin Zhao | PGT Student (@UofG) & Developer"
		});
	}
};
</script>