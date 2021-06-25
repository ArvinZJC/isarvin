/*
 * @Description: Tailwind CSS configuration
 * @Version: 1.0.4.20210624
 * @Author: Arvin Zhao
 * @Date: 2021-06-08 15:31:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-24 11:37:05
 */

// Keep this CommonJS module rather than converting to an ES6 module.
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [
		// TODO: can cause layout problem
		//"./index.html",
		//"./src/**/*.{vue,js}"
	],
	darkMode: false, // TODO: prefer "class"
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans]
			},
			zIndex: {
				"-10": "-10"
			}
		}
	},
	variants: {
		extend: {
			animation: ["motion-safe"]
		}
	},
	plugins: []
};