<template>
  <div>
    <CommonBanner
      title="学分银行"
      :sub-title="'构建书证融通体系，供给产教融合的高素质人才<br/>基于区块链技术，建设学分银行联盟链'"
      :img="imgList[0]"
      :icon="'/product/itembank/icon.png'"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content">
      <div class="text-center mb-24">
        <img :src="imgList[1]" alt="" />
      </div>
      <div class="mb-24">
        <Title2 class="mb-11"
          >构建多元的（包括省域、区域、机构等各级）学分银行</Title2
        >
        <p>
          建立涵盖学习定制、资历认证、学分管理、个性推送、跟踪服务在内的一体化与一站式的智能学习系统，可将社区教育、老年教育、继续教育、技能培训与学校教育、职业教育进行统整。其数据技术标准、学习服务体系与管理咨询制度，则可以实现数智化终身学习体系的网络创新，从而为个性化学习、知识服务与数据分析提供更强大的数智能力支撑。
        </p>
        <div class="text-center my-10">
          <img :src="imgList[2]" alt="" />
        </div>
      </div>
      <div>
        <Title2 class="mb-11">提供“学分银行”整体解决方案</Title2>
        <p>
          励英教育依托现代信息技术在教育领域的积累与应用，采用模块化设计，面向全国各开放大学和高校，提供包括课程开发、双元师资赋能、教学测评、技能认证、实训实习基地设计实施、精准就业、区域经济公共服务等多维度、全方位的学分银行建设整体解决方案，积极推动职业教育国家“学分银行”的建设与国家资历框架的构建。
        </p>
        <div class="text-center my-10">
          <img :src="imgList[3]" alt="" />
        </div>
      </div>
    </div>
    <div class="pb-12">
      <ToTop />
    </div>
    <Apply :type="2" />
  </div>
</template>
<script lang="ts">
import config from "@/config";

export default defineComponent({
  name: "ItemBank",
  setup() {
    const STATIC_PATH = `${config.cdn}/product/itembank/`;
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
