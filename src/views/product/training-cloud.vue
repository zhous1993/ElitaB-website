<template>
  <div>
    <CommonBanner
      title="实训云"
      :sub-title="'以学生为中心，以结果为导向，以实践为载体，<br/>以能力为核心的中心思想去实现产教融合超融合实训环境'"
      :img="imgList[0]"
      :icon="'/product/training-cloud/icon.png'"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content">
      <div>
        <Title1>产品定位</Title1>
        <div class="grid grid-cols-2 gap-20 mt-10">
          <p>
            励英教育 · 实训云平台，主要面向职业院校的 IT
            技能课程的学习、教学、实践为
            一体的实训平台。致力于为职业院校提供社会需要技术的一流 IT
            课程建设，跟踪教学与 学习数据化；关联课程的实践项目，在线编辑；提供
            IT 技能评测，课后训后，让学生学
            习更扎实；学习要结合实际社会需求，提供企业项目参考。课程有 13
            个大类，全系列技 术方向
            1000+门以上专业课程，及在教学方面实现教学效果数据化进行灵活教学，实现
            实习与实践进度跟踪等功能。 励英教育 ·
            实训云平台，以学生为中心，以结果为导向，以实践为载体，以能力
            为核心的中心思想去实现产教融合超融合实训环境。
          </p>
          <div class="text-center">
            <img class="w-37.5rem" :src="imgList[1]" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pb-12">
      <ToTop />
    </div>
    <Apply :type="3" />
  </div>
</template>
<script lang="ts">
import config from "@/config";

export default defineComponent({
  name: "TrainingCloud",
  setup() {
    const STATIC_PATH = `${config.cdn}/product/training-cloud/`;
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
