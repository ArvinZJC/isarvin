/*
 * @Description: Tailwind CSS configuration
 * @Version: 1.0.1.20210609
 * @Author: Arvin Zhao
 * @Date: 2021-06-08 15:31:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-09 06:15:09
 */

// Keep this CommonJS module rather than converting to an ES6 module.
module.exports = {
	purge: [
		'./index.html',
		'./src/**/*.{vue,js}',
	],
	darkMode: false, // TODO: prefer 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};