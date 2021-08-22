/*
 * @Description: Tailwind CSS configuration
 * @Version: 1.1.0.20210822
 * @Author: Arvin Zhao
 * @Date: 2021-06-08 15:31:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-08-22 07:51:20
 */

// Keep this CommonJS module rather than converting to an ES6 module.
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: false, // TODO: prefer "class"
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