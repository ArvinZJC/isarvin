<!--
 * @Description: the root component
 * @Version: 1.0.1.20210609
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-09 07:46:23
-->

<template>
	<header class="sticky top-0 z-30 bg-opacity-50 bg-gray-50 backdrop-filter backdrop-blur xl:px-8 shadow-lg">
	<!-- TODO: colour scheme? Theme colour? -->
		<div class="flex items-center justify-between mx-auto px-4 py-4 lg:px-8 sm:px-6 max-w-7xl xl:px-0">
			<div class="flex items-center font-bold">
				<a class="flex items-center mr-16" href="/">
					<img class="w-10 h-10 mr-2" src="./assets/vivid_Arvin.png" alt="vivid_Arvin.png" />
					<p class="text-lg font-black">Arvin Zhao</p>
				</a>
				<a class="text-gray-500 hover:text-black transition-colors duration-200 mr-8" href="/">Home</a>
				<a class="text-gray-500 hover:text-black transition-colors duration-200" href="/">Projects?</a>
				<!-- TODO: NOT responsive -->
			</div>
			<div>
				<!-- TODO: for social things (IG, ...) -->
				<a class="text-gray-500 hover:text-black transition-colors duration-200" href="https://github.com/ArvinZJC" title="ArvinZJC on GitHub">
				<!--TODO: serverless func for username? -->
					<svg viewBox="0 0 16 16" class="fill-current w-5 h-5">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
				</a>
			</div>
		</div>
	</header>
	<Home />
	<footer class="flex justify-center bg-gray-50 py-6 border-t border-gray-200">
		<p>&copy; 2021 Arvin Zhao</p>
		<!--TODO: year? -->
	</footer>
</template>

<script>
import Home from "./components/Home.vue";

export default {
	name: "App",
	components: {
		Home,
	},
};
</script>