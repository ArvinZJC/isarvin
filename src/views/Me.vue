<!--
 * @Description: the view telling who I am
 * @Version: 1.0.0.20210711
 * @Author: Arvin Zhao
 * @Date: 2021-07-11 12:08:15
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-07-11 20:02:39
-->

<template>
	<main class="flex-grow">
		<TheHome />
		<TheProjects />
	</main>
</template>

<script>
import TheHome from "../components/TheHome.vue";
import TheProjects from "../components/TheProjects.vue";

export default {
	components: {
		TheHome,
		TheProjects
	}
};
</script>