<!--
 * @Description: the root component
 * @Version: 1.0.3.20210624
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-24 06:49:19
-->

<template>
	<Navbar />
	<main class="flex-grow">
		<Home />
		<Projects />
	</main>
	<Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Projects from "./components/Projects.vue";

export default {
	components: {
		Footer,
		Home,
		Navbar,
		Projects
	}
};
</script>