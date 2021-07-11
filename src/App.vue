<!--
 * @Description: the root component
 * @Version: 1.0.4.20210711
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-07-11 16:58:05
-->

<template>
	<TheNavbar />
	<Me />
	<TheFooter />
</template>

<script>
import Me from "./views/Me.vue";
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";

export default {
	components: {
		Me,
		TheFooter,
		TheNavbar
	}
};
</script>