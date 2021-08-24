/*
 * @Description: Tailwind CSS configuration
 * @Version: 1.1.1.20210823
 * @Author: Arvin Zhao
 * @Date: 2021-06-08 15:31:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-23 12:37:14
 */

// Keep this CommonJS module rather than converting to an ES6 module.
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class",
	mode: "jit",
	purge: [
		"./public/**/*.html",
		"./src/**/*.{js,vue}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans]
			}
		}
	}
};