<!--
 * @Description: the root component
 * @Version: 1.0.2.20210623
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-23 07:32:27
-->

<template>
	<Navbar />
	<main class="flex-grow">
		<Home />
	</main>
	<Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
	components: {
		Footer,
		Home,
		Navbar,
	},
};
</script>