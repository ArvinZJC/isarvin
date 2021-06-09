/*
 * @Description: Tailwind CSS configuration
 * @Version: 1.0.2.20210609
 * @Author: Arvin Zhao
 * @Date: 2021-06-08 15:31:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-09 07:28:01
 */

// Keep this CommonJS module rather than converting to an ES6 module.
module.exports = {
	purge: [
		// TODO: can cause layout problem
		//"./index.html",
		//"./src/**/*.{vue,js}",
	],
	darkMode: false, // TODO: prefer "class"
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};