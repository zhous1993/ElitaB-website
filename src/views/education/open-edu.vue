<template>
  <div class="relative">
    <CommonBanner
      title="继续教育"
      :img="imgList[0]"
      sub-title="服务省级开放大学，在继续教育、职业技能培训、退伍军人教育培训、</br>社区教育、老年教育等多个领域发挥优势、共同探索"
      icon="/education/open-edu/icon.svg"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />
    <div class="content">
      <p class="mb-24">
        励英教育中心与全国多地开放大学进行深入合作，在职业技能培训、社区教育、老年教育等多个领域进行研究探讨，充分发挥各自优势，构建终生教育体系。
      </p>
      <div class="mb-24">
        <Title1 class="mb-10">合作项目</Title1>
        <div class="text-center mb-10">
          <img :src="imgList[1]" class="w-full" alt="" />
        </div>
        <div class="text-center mb-10">
          <img :src="imgList[2]" class="w-full" alt="" />
        </div>
      </div>
      <div>
        <Title1 class="mb-10">平台建设</Title1>
        <div class="mb-20">
          <Title2 class="mb-8">平台特点</Title2>
          <div class="text-center">
            <img :src="imgList[4]" class="w-full" alt="" />
          </div>
        </div>
        <div>
          <Title2 class="mb-8">数字化混合式学习平台</Title2>
          <div class="text-center mb-10 bg-[#F7F8F8] py-7">
            <div class="text-[#C3141F] text-2xl font-semibold">学习平台</div>
            <div class="text-lg text-[#333] mt-2">
              提供在线学习、课程记录、练习、作业、线上实验、学籍反馈等服务。满足学员在学习过程中行为可量化、数据可分析。
            </div>
            <img :src="imgList[5]" class="w-[70.19rem] mt-7" alt="" />
          </div>
          <div class="text-center mb-10 bg-[#F7F8F8] py-7">
            <div class="text-[#C3141F] text-2xl font-semibold">教学平台</div>
            <div class="text-lg text-[#333] mt-2">
              提供在线课程设计、学生管理、线上作业布置、线上考核设置等功能。为教师提供教学过程可监控及智能决策的数据服务。
            </div>
            <img :src="imgList[6]" class="w-[70.19rem] mt-7" alt="" />
          </div>
          <div class="text-center mb-10 bg-[#F7F8F8] py-7">
            <div class="text-[#C3141F] text-2xl font-semibold">
              教学管理平台
            </div>
            <div class="text-lg text-[#333] mt-2">
              为高校提供从师资管理、课程编排、教学过程管理、考务管理、证书颁发、学籍管理等全流程式的教学管理服务，满足管理人员的数据跟踪、
              分析、决策的需求。
            </div>
            <img :src="imgList[7]" class="w-[70.19rem] mt-7" alt="" />
          </div>
          <div class="text-center bg-[#F7F8F8] py-7">
            <div class="text-[#C3141F] text-2xl font-semibold">招生平台</div>
            <div class="text-lg text-[#333] mt-2">
              为合作伙伴提供高效的报名信息智能化审核，入学资料智能化识别、专业及招生计划管理、教学点管理、报名信息批量处理等。
            </div>
            <img :src="imgList[8]" class="w-[70.19rem] mt-7" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pb-12">
      <ToTop />
    </div>
  </div>
</template>
<script lang="ts" setup>
import config from "@/config";

const { cdn } = config;
const STATIC_PATH = `${config.cdn}/education/open-edu/`;
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
];
</script>

<style lang="scss" scoped>
.top-bg {
  position: absolute;
  right: 0;
  top: 40rem;
  z-index: 0;
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
    position: relative;
    display: inline-block;
  }
  p {
    text-indent: 2em;
  }
  .title {
    color: $fs-dark-color;
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
    border-bottom: 1px solid #ddd;
  }
  .sub-title {
    text-indent: 2em;
    color: $fs-dark-color;

    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
  }
}
</style>
