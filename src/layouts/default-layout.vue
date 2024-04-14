<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-02-27 15:20:52
 * @FilePath: \website-edu\src\layouts\default-layout.vue
 *
-->
<template>
  <div ref="appRef" class="main">
    <Header />
    <div class="main-container">
      <router-view></router-view>
    </div>
    <Footer class="relative" />
    <!-- <Nav class="nav"></Nav> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from "vue";
import Header from "./components/app-header.vue";
import Footer from "@/layouts/components/app-footer.vue";
// import Nav from "@/components/profession/digital/nav.vue";
// import useDraw from "@/utils/useDraw";
// * 适配处理
// const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();
onMounted(() => {
  // todo 屏幕适应
  // windowDraw();
  // calcRate();
});
onBeforeUnmount(() => {
  // unWindowDraw();
});
</script>

<style lang="scss" scoped>
.main-container {
  min-height: calc(100vh - 5.25rem - 21.44rem);
  position: relative;
}
.nav {
  position: absolute;
  right: 0;
  top: 80px;
  transform: translateX(100%);
}
</style>
