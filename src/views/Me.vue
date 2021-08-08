<!--
 * @Description: the view telling who I am
 * @Version: 1.0.2.20210808
 * @Author: Arvin Zhao
 * @Date: 2021-07-11 12:08:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-08 15:55:00
-->

<template>
	<main class="flex-grow bg-gray-50">
		<TheHome />
		<TheProjects />
		<TheEducation />
		<TheTweeting />
	</main>
</template>

<script>
import TheEducation from "../components/TheEducation.vue";
import TheHome from "../components/TheHome.vue";
import TheProjects from "../components/TheProjects.vue";
import TheTweeting from "../components/TheTweeting.vue";

export default {
	components: {
		TheEducation,
		TheHome,
		TheProjects,
		TheTweeting
	}
};
</script>