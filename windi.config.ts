/*
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-02-20 15:55:11
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-03-03 09:34:19
 * @FilePath: \website-edu\windi.config.ts
 *
 */
import { defineConfig } from "windicss/helpers";
// import plugin from "windicss/plugin";

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}

export default defineConfig({
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  darkMode: "class",
  attributify: false,
  theme: {
    screens: {
      "3xl": "1921px",
    },
    // extend: {
    //   backgroundColor: {
    //     // 暗黑背景色
    //     "v-dark": "var(--dark-bg-color)",
    //   },
    //   // screens: {
    //   //   sm: '768px',
    //   //   md: '992px',
    //   //   lg: '1200px',
    //   //   xl: '1920px'
    //   // }
    // },
    // height: {
    //   ...range(50).map((i) => `h-${i}px`)
    // },
    // margin: {
    //   // ...range(50).map((i) => `mt-${i}px`),
    //   // ...range(50).map((i) => `mr-${i}px`),
    //   // ...range(50).map((i) => `mb-${i}px`),
    //   // ...range(50).map((i) => `ml-${i}px`)
    // }
  },
  plugins: [
    // plugin(({ addComponents }) => {
    //   const obj = {};
    //   range(50).map((i) => {
    //     obj[`.border-top-${i}`] = {
    //       borderTopWidth: `${i}px`,
    //     };
    //     obj[`.border-left-${i}`] = {
    //       borderLeftWidth: `${i}px`,
    //     };
    //     obj[`.border-right-${i}`] = {
    //       borderRightWidth: `${i}px`,
    //     };
    //     obj[`.border-bottom-${i}`] = {
    //       borderBottomWidth: `${i}px`,
    //     };
    //   });
    //   addComponents({
    //     ".hover-trigger": {
    //       display: "flex",
    //       height: "100%",
    //       padding: "1px 10px 0",
    //       cursor: "pointer",
    //       alignItems: "center",
    //       transition: "background var(--transition-time-02)",
    //       "&:hover": {
    //         backgroundColor: "var(--top-header-hover-color)",
    //       },
    //     },
    //     ".dark .hover-trigger": {
    //       "&:hover": {
    //         backgroundColor: "var(--el-bg-color-overlay)",
    //       },
    //     },
    //     ...obj,
    //   });
    // }),
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    require("@windicss/plugin-animations")(),
  ],
});
