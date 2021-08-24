<!--
 * @Description: the footer component
 * @Version: 1.0.5.20210823
 * @Author: Arvin Zhao
 * @Date: 2021-06-22 10:14:43
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-23 17:04:26
-->

<template>
	<!-- The footer section. It needs the TailwindCSS's utilities "ralative" and "min-h-screen" on the main element. -->
	<footer class="absolute bottom-0 w-full bg-white dark:bg-black">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:flex md:items-center text-center text-base text-gray-500 dark:text-gray-400">&copy; {{ currentYear }} ArvinZJC</div>
	</footer>
</template>

<script>
export default {
	data() {
		const currentYear = new Date().getFullYear();
		return { currentYear };
	}
};
</script>