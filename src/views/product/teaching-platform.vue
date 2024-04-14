<template>
  <div>
    <CommonBanner
      title="智慧教学"
      :sub-title="'致力于为院校提供智慧，便捷的全面教学流程管理'"
      :img="imgList[0]"
      :icon="'/product/teaching-platform/icon.png'"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content">
      <div>
        <Title1>产品定位</Title1>
        <div class="grid grid-cols-2 gap-20 mt-10">
          <p>
            随着学校教学管理改革不断深入发展，学校管理理念也正在发生深刻变化从过去片面强调管理逐步向服务的理念转变，这必然要求学校的信息化建设适应这种理念的变化,打破传统信息化重管理功能轻服务体验的观念,树立服务教学、服务师生的理念。
            励英教育 ·
            智慧教学平台，主要面向院校的教学、学习、管理为一体的教学管理平台。致力于为院校提供课程建设，在教学方面实现教学效果数据化进行灵活教学，实现实习与实践进度跟踪等功能。
            励英教育 ·
            智慧教学平台系统是面向院校的教学与学生学习全流程一体化的服务平台，致力于为院校提供智慧，便捷的全面教学流程管理。
          </p>
          <div class="text-center">
            <img class="w-32.5rem" :src="imgList[1]" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pb-12">
      <ToTop />
    </div>
    <Apply :type="4" />
  </div>
</template>
<script lang="ts">
import config from "@/config";

export default defineComponent({
  name: "TeachingPlatform",
  setup() {
    const STATIC_PATH = `${config.cdn}/product/teaching-platform/`;
    const { cdn } = config;
    const imgList = [`${STATIC_PATH}banner.png`, `${STATIC_PATH}pic_01.png`];
    return {
      STATIC_PATH,
      imgList,
      cdn,
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
