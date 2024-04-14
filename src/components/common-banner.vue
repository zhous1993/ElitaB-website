<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-16EDV1I\zs_lq zhous0310@gmail.com
 * @LastEditTime: 2024-04-14 21:16:32
 * @FilePath: \website-edu\src\components\common-banner.vue
 *
-->
<template>
  <div
    class="common-banner flex flex-col items-center justify-center"
    :style="{ backgroundImage: `url('${img}')` }"
  >
    <div class="w-full" :style="{ backgroundImage: `url('${img}')` }">
      <img class="banner-bg" :src="img" alt="" />
    </div>

    <div class="absolute h-full flex flex-col items-center justify-center">
      <div class="relative">
        <img
          class="w-4rem animate-animated animate-fade-in-up"
          :src="cdn + icon"
          alt=""
          v-if="icon"
        />
      </div>
      <div
        v-if="title"
        class="title mt-4 animate-animated animate-fade-in-up text-56px"
      >
        {{ title }}
      </div>
      <div
        class="sub-title mt-2 animate-animated animate-fade-in-up delay-300"
        v-html="subTitle"
      ></div>
      <div
        class="nav-btn flex justify-center items-center animate-animated animate-fade-in-up delay-600"
        @click="handleScroll"
      >
        <img
          :src="cdn + '/icon/home-icon/left-arrow-down.svg'"
          alt=""
          class="transition-all duration-500"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, toRefs } from "vue";
import config from "@/config";
import useAppStore from "@/store/modules/app";

const appStore = useAppStore();
const { cdn } = config;
const props = defineProps({
  title: { type: String, default: "" },
  img: { type: String, default: "" },
  subTitle: { type: String, default: "哈哈哈哈" },
  icon: { type: String, default: "" },
});
const { title } = toRefs(props);
const handleScroll = () => {
  const top = (appStore.getScreenWidth / 1920) * 640;
  window.scroll(0, top);
};
</script>

<style lang="scss" scoped>
.common-banner {
  width: 100%;
  position: relative;
  overflow: hidden;
  .w-full {
    background-attachment: fixed;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .banner-bg {
    position: sticky;
    top: 0;
    width: 100%;
    margin-right: -10px;
    visibility: hidden;
  }
  .right-side {
    position: fixed;
    top: 10.06rem;
    right: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .addr {
      writing-mode: vertical-rl;
      color: white;
      font-size: 1.21rem;
      font-weight: 200;
    }
  }
  .title {
    line-height: 4.88rem !important;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;

    font-family: PingFangSC-Semibold, PingFang SC;
  }
  .sub-title {
    font-size: 1.5rem;
    color: white;
    line-height: 2.06rem;
    text-align: center;

    font-family: PingFangSC-Regular, PingFang SC;
  }
  .nav-btn {
    width: 4.5rem;
    height: 4.5rem;
    background-color: $theme-color;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    left: 50%;
    bottom: 2.5rem;
    margin-left: -2.25rem;
    animation: scroll-icon 1.2s infinite alternate
      cubic-bezier(0.65, 0.05, 0.36, 1);
    &:hover {
      background-color: rgba(245, 25, 39, 1);
    }
  }
}
@keyframes scroll-icon {
  0% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
  100% {
    -webkit-transform: translateY(12px);
    transform: translateY(12px);
  }
}
</style>
