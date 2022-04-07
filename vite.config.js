/*
 * @Description: Vite configuration
 * @Version: 1.0.0.20220407
 * @Author: Arvin Zhao
 * @Date: 2022-04-07 14:01:07
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2022-04-07 15:25:33
 */

import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: fileURLToPath(new URL("./src/locales/**", import.meta.url)),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
