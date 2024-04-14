<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: 周松 zhous@ai-cloud.edu
 * @LastEditTime: 2024-04-12 14:21:40
 * @FilePath: \website-edu\src\components\home\banner.vue
 *
-->
<template>
  <div class="banner">
    <div class="banner-bg">
      <img :src="cdn + '/home/home-banner02.png'" alt="" />
    </div>
    <div class="content animate-animated animate-fade-in-up overflow-hidden">
      <div class="">
        <div class="desc text-[5rem]">连接全球教育资源</div>
        <div class="w-[11.25rem] h-[0.63rem] bg-white my-[1.88rem]"></div>
      </div>
      <div class="leading-[3.75rem] text-[rgba(255,255,255,0.6)]">
        <div>为合作伙伴提供专业咨询与服务</div>
        <div>为学习者提供成长与深造机会</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from "@/config";
import useAppStore from "@/store/modules/app";

const { cdn } = config;
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.banner {
  background: white;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .banner-bg {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
    }
  }
  .content {
    width: 72.5rem;
    position: absolute;
    top: 0;
    margin-top: 18rem;
    padding-left: 14.94rem;
    background-size: cover;

    .slogan {
      width: 12.44rem;
    }
    .desc {
      font-family: AlibabaPuHuiTiB;
      color: #fff;
      line-height: 4.06rem !important;
      margin-top: 1rem;
    }
  }
}
</style>
