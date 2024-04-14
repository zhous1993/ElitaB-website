<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-08-09 09:59:00
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-03-06 17:34:46
 * @FilePath: \website-edu\src\views\digital-edu\digital-currency.vue
 *
-->
<template>
  <div>
    <CommonBanner
      title="数字人民币创新实验室"
      :img="imgList[0]"
      sub-title="基于银行真实业务系统的“实训系统+课程+实践+服务”的综合解决方案"
      icon="/digital-edu/DC/icon.svg"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />
    <div class="content">
      <div class="text-center mb-24">
        <img class="w-full" :src="imgList[1]" alt="" />
      </div>
      <div class="mb-24">
        <Title1 class="mb-10">项目背景</Title1>
        <div class="text-center">
          <img class="w-full" :src="imgList[2]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="mb-10">产品定位</Title1>
        <div class="text-center">
          <img class="w-full" :src="imgList[3]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="mb-10">产品特色</Title1>
        <div class="text-center">
          <img class="w-full" :src="imgList[4]" alt="" />
        </div>
      </div>
      <div>
        <Title1 class="mb-10">教学应用</Title1>
        <div class="mb-20">
          <Title2 class="mb-10">实训系统</Title2>
          <div class="text-center mb-20">
            <img class="w-full" :src="imgList[5]" alt="" />
          </div>
        </div>
        <div class="mb-20">
          <Title2 class="mb-10">课程架构</Title2>
          <div class="text-center mb-20">
            <img class="w-full" :src="imgList[6]" alt="" />
          </div>
        </div>
        <div>
          <Title2 class="mb-10">应用范围</Title2>
          <div class="text-center">
            <img class="w-full mb-10" :src="imgList[7]" alt="" />
            <img class="w-full" :src="imgList[8]" alt="" />
          </div>
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

export default defineComponent({
  name: "ContinuingEdu",
  setup() {
    const STATIC_PATH = `${config.cdn}/digital-edu/DC/`;
    const { cdn } = config;
    const imgList = [
      `${STATIC_PATH}banner.png`,
      `${STATIC_PATH}pic1.png`,
      `${STATIC_PATH}pic2.png`,
      `${STATIC_PATH}pic3.png`,
      `${STATIC_PATH}pic4.png`,
      `${STATIC_PATH}pic5.png`,
      `${STATIC_PATH}pic6.png`,
      `${STATIC_PATH}pic7.png`,
      `${STATIC_PATH}pic8.png`,
      `${STATIC_PATH}pic9.png`,
      `${STATIC_PATH}pic10.png`,
      `${STATIC_PATH}pic11.png`,
    ];
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
  position: relative;
  img {
    display: inline-block;
    position: relative;
  }
  .d-grid {
    display: grid;
    grid-template-columns: 537px 529px;
    grid-column-gap: 55px;
    p {
      padding: 0;
      padding-right: 0;
    }
  }
  p {
    text-indent: 2em;
    line-height: 48px;
    padding-right: 20px;
  }
  .title {
    color: $fs-dark-color;
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
    // border-bottom: 1px solid #ddd;
  }
  .sub-title {
    // text-indent: 2em;
    color: $fs-dark-color;

    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
  }
  .pic-title {
    color: $fs-dark-color;
    line-height: 48px;
  }
  .bg-theme :deep(.content-title) {
    border-radius: 15px;
    background-color: $theme-color;
    color: white;
  }
}
</style>
