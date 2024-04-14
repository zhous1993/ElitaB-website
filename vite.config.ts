/*
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 16:48:31
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-02-28 17:02:58
 * @FilePath: \website-edu\vite.config.ts
 *
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// 图标
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import WindiCSS from "vite-plugin-windicss";
import legacy from "@vitejs/plugin-legacy";
import ElementPlus from "unplugin-element-plus/vite";
// import postcsspxtoviewport from "postcss-px-to-viewport";
// https://vitejs.dev/config/
export default defineConfig((env) => {
  const viteEnv = loadEnv(env.mode, `.env.${env.mode}`);

  return {
    base: viteEnv.VITE_BASE,
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    css: {
      postcss: {
        plugins: [
          // postcsspxtoviewport({
          //   unitToConvert: "px", // 要转化的单位
          //   viewportWidth: 1920, // UI设计稿的宽度
          //   unitPrecision: 6, // 转换后的精度，即小数点位数
          //   propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          //   viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          //   fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          //   selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
          //   minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          //   mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          //   replace: true, // 是否转换后直接更换属性值
          //   // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          //   exclude: [],
          //   landscape: false, // 是否处理横屏情况
          // }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables";@import "@/styles/mixin";`,
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: true,
      port: 8080,
      open: true,
      cors: true,
      strictPort: true,
      proxy: {
        "/api": {
          // 本地8080前端代码的接口 代理到8888的服务端口
          target: "http://8.136.207.60:8180",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/"),
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log"],
        },
      },
      assetsDir: "static/assets",
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/assets/[name]-[hash][extname]",
        },
      },
    },
    plugins: [
      WindiCSS(),
      ElementPlus(),
      AutoImport({
        dts: "./src/auto-import.d.ts",
        imports: ["vue", "pinia", "vue-router"],
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`,
          // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          globalsPropValue: true,
        },
      }),
      Components({
        dts: "./src/components.d.ts",
        // imports 指定组件所在位置，默认为 src/components
        dirs: ["src/components"],
        resolvers: IconsResolver(),
      }),
      Icons({
        compiler: "vue3",
        autoInstall: true,
      }),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      vue(),
    ],
  };
});
