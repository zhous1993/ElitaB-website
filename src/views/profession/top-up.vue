<template>
  <div>
    <CommonBanner
      title="职教高考"
      :sub-title="'提供优质教育服务，开设校内“学术班/升学班”，助力中职院校<br/>从“就业教育”转型“职业基础教育”'"
      :img="imgList[0]"
      icon="/profession/top-up/icon.png"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content">
      <Title1 class="mb-10">项目背景</Title1>
      <div class="mb-20">
        <Title2 class="mb-6 relative"
          >系统规划和建设职教高考制度是职业教育改革和发展的重点</Title2
        >
        <div class="text-center mb-10">
          <img class="w-full" :src="imgList[1]" alt="" />
        </div>
        <div class="text-center">
          <img class="w-full" :src="imgList[2]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title2 class="mb-6">以就业为导向的中职教育发展面临挑战</Title2>
        <div class="text-center mb-10">
          <img class="w-full" :src="imgList[3]" alt="" />
        </div>
        <div class="text-center">
          <img class="w-full" :src="imgList[4]" alt="" />
        </div>
      </div>

      <div class="mb-24">
        <Title1 class="mb-10">办学优势</Title1>
        <div
          class="text-center font-pingfang-b font-semibold text-[#333] font-pingfang-b text-2xl mb-10"
        >
          励英教育助力中职院校兼顾“升学”“就业”导向，推进文化课课程改革
        </div>

        <Title2 class="mb-6">办学理念</Title2>
        <div class="card-wrap mb-20">
          <div class="card-body">
            <div class="text-center">
              <img class="w-90rem" :src="imgList[5]" alt="" />
            </div>
          </div>
        </div>
        <Title2 class="mb-6">办学实力</Title2>

        <div class="card-wrap mb-20">
          <div class="card-body py-8">
            <div class="text-center">
              <img class="w-90rem" :src="imgList[6]" alt="" />
            </div>
          </div>
        </div>
        <Title2 class="mb-6">办学特色</Title2>
        <div class="mb-24">
          <div class="card-body">
            <div class="text-center mb-5">
              <img class="w-90rem" :src="imgList[8]" alt="" />
            </div>
            <div class="text-center">
              <img class="w-90rem" :src="imgList[9]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Title1 class="mb-10">产品服务</Title1>
        <div
          class="text-center font-pingfang-b text-[#333] text-2xl font-semibold mb-10 relative"
        >
          响应院校客户需求，在对教学现状调研基础上，开发三种基础产品和一种增值产品
        </div>
        <div>
          <div class="card-body">
            <div class="text-center">
              <img class="w-90rem" :src="imgList[10]" alt="" />
            </div>
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
  name: "BeautyEdu",
  setup() {
    const STATIC_PATH = `${config.cdn}/profession/top-up/`;
    const { cdn } = config;
    const imgList = [
      `${STATIC_PATH}banner.png`,
      `${STATIC_PATH}pic_01.png`,
      `${STATIC_PATH}pic_02.png`,
      `${STATIC_PATH}pic_03.png`,
      `${STATIC_PATH}pic_04.png`,
      `${STATIC_PATH}pic_05.png`,
      `${STATIC_PATH}pic_08.png`,
      `${STATIC_PATH}pic_09.png`,
      `${STATIC_PATH}pic_10.png`,
      `${STATIC_PATH}pic_11.png`,
      `${STATIC_PATH}pic_12.png`,
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
  img {
    display: inline-block;
    position: relative;
  }

  p {
    text-indent: 2em;
    line-height: 3rem;
  }
  .card-wrap {
    .card-header {
      background: rgba(238, 238, 238, 1);
      padding: 1rem;
      text-align: center;
      .card-title {
        font-size: 2.25rem;
        color: $theme-color;
        font-weight: bold;
        font-family: PingFang SC;
        line-height: 2.25rem;
        padding: 1rem;
      }
      .card-sub-title {
        font-size: 1.13rem;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 2.25rem;
      }
    }
    .card-body {
      background: #f7f8f8;
    }
  }
}
</style>
