<template>
  <div>
    <CommonBanner
      title="教育数字化"
      :sub-title="'推动先进计算、大数据、人工智能、5G通信、计算机终端、数据中心等先进技术和<br />硬件设备设施在教育领域的应用与拓展，为高校提供针对性解决方案'"
      :img="imgList[0]"
      :icon="'/icon/other-icon/ico-digital.svg'"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content">
      <Title1>教育数字化</Title1>
      <div class="text-center mt-10">
        <img :src="imgList[1]" alt="" />
      </div>

      <div class="text-center my-10 mb-24">
        <img :src="imgList[2]" alt="" />
      </div>
      <Title1 class="my-8">数字内容</Title1>
      <div class="text-center my-10 mb-24">
        <img :src="imgList[3]" alt="" />
      </div>
      <Title1 class="my-8">实验室服务案例</Title1>
      <div class="text-center my-10 mb-24">
        <img :src="imgList[4]" alt="" />
        <img class="mt-5rem" :src="imgList[5]" alt="" />
      </div>
      <Title1 class="my-8">特色产品</Title1>
      <div class="grid grid-cols-2 gap-4 grid-rows-[15rem] mt-8">
        <div
          class="flex flex-col justify-end items-start child-item"
          :style="{
            backgroundImage: `url('${imgList[6]}')`,
          }"
          @click="locationTo('/digital-edu/DC')"
        >
          <div class="mask"></div>
          <div>特色产品</div>
          <div>数字人民币创新实验室</div>
        </div>
        <div
          class="flex flex-col justify-end items-start child-item"
          :style="{
            backgroundImage: `url('${imgList[7]}')`,
          }"
          @click="locationTo('/digital-edu/beauty')"
        >
          <div class="mask"></div>

          <div>特色产品</div>
          <div>智慧医美教学实训基地</div>
        </div>
      </div>
    </div>
    <div class="pb-12">
      <ToTop />
    </div>
  </div>
</template>
<script lang="ts">
import config from "@/config";
import { locationTo } from "@/utils/func";

export default defineComponent({
  name: "DigitalEdu",
  setup() {
    const STATIC_PATH = `${config.cdn}/digital-edu/digital/`;
    const { cdn } = config;
    const imgList = [
      `${STATIC_PATH}banner.png`,
      `${STATIC_PATH}pic_01.png`,
      `${STATIC_PATH}pic_02.png`,
      `${STATIC_PATH}pic_03.png`,
      `${STATIC_PATH}pic_04.png`,
      `${STATIC_PATH}pic_05.png`,
      `${STATIC_PATH}digital.png`,
      `${STATIC_PATH}beauty.png`,
    ];
    return {
      STATIC_PATH,
      imgList,
      cdn,
      locationTo,
    };
  },
});
</script>

<style lang="scss" scoped>
.top-bg {
  position: absolute;
  right: 0;
  top: 40rem;
}
.footer-bg {
  position: absolute;
  bottom: 0;
  left: 0rem;
}
.content {
  width: $content-width;
  margin: auto;
  padding: 6rem 0 3rem;
  img {
    display: inline-block;
    width: 90rem;
    position: relative;
  }

  p {
    text-indent: 2em;
    line-height: 3rem;
  }
}
.child-item {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  color: white;
  cursor: pointer;
  div {
    position: relative;
    z-index: 10;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: -2rem;
    margin-bottom: -2rem;
  }
  &:hover {
    .mask {
      background: linear-gradient(
        180deg,
        rgba(0, 26, 51, 0.3) 0%,
        rgba(0, 13, 26, 0.5) 100%
      );
    }
  }
  div:last-child {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2rem;

    font-family: PingFangSC-Semibold, PingFang SC;
  }
}
</style>
