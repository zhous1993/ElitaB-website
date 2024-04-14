/*
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 16:48:31
 * @LastEditors: 周松 zhous@ai-cloud.edu
 * @LastEditTime: 2024-04-12 10:10:27
 * @FilePath: \website-edu\src\main.ts
 *
 */

import { createApp } from "vue";
import "./styles/index.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/plugins/windicss";

import useAppStore from "./store/modules/app";

// console.log(width);

const app = createApp(App);
app.use(router);
app.use(store);
// const metaEL = document.querySelector('meta[name="viewport"]');

const setFontSize = () => {
  const width = window.innerWidth;
  document.documentElement.style.fontSize = `${(width / 1920) * 16}px`;
  // console.log((width / 1920) * 16);
  const appStore = useAppStore();
  appStore.setScreenWidth(width);
  // const scale = width / 1920;
  // metaEL?.setAttribute(
  //   "content",
  //   `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`
  // );
};

setFontSize();
window.addEventListener("resize", setFontSize);
app.mount("#app");
