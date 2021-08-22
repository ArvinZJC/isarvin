<!--
 * @Description: the root component
 * @Version: 1.1.0.20210822
 * @Author: Arvin Zhao
 * @Date: 2021-06-07 17:13:42
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-22 23:30:47
-->

<template>
	<metainfo>
		<template v-slot:title="{ content }">{{ content }}</template>
		<template v-slot:description="{ metainfo }">{{ metainfo.description }}</template>
	</metainfo>
	<router-view v-slot="{ Component }">
		<transition enter-active-class="ease-out motion-safe:duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
			leave-active-class="ease-in motion-safe:duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
			<component :is="Component" :key="$route.path" class="motion-safe:transition-opacity" />
		</transition>
	</router-view>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
	setup() {
		useMeta({
			title: "Arvin Zhao"
		});
	}
}
</script>