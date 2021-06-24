/*
 * @Description: Tailwind CSS configuration
 * @Version: 1.0.3.20210624
 * @Author: Arvin Zhao
 * @Date: 2021-06-08 15:31:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-06-24 06:46:45
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
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};