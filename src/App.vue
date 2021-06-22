<!--
 * @Description: the root component
 * @Version: 1.0.1.20210609
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-22 10:16:32
-->

<template>
	<Navbar />
	<Home />
	<Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
	name: "App",
	components: {
		Footer,
		Home,
		Navbar,
	},
};
</script>