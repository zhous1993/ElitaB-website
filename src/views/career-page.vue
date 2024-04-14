<template>
  <div>
    <CommonBanner
      title="就业帮"
      :img="imgList[0]"
      sub-title="大学生就业好帮手"
      icon="/career/icon.png"
    >
    </CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />
    <div class="content relative">
      <div>
        <Title1 class="mb-10">高校毕业生就业问题</Title1>
        <div>
          <template v-for="item of imgTextList">
            <ImageText
              :imgUrl="item.imgUrl"
              :title="item.title"
              :items="item.content"
              :reverse="item.reverse"
              class="mb-10"
            >
            </ImageText>
          </template>
        </div>
        <Title1 class="mb-10 mt-24">就业帮6大服务</Title1>
        <div class="grid grid-cols-3 gap-7 grid-rows-[21.88rem,21.88rem] mb-10">
          <div
            class="bg-[#F7F8F8] px-11 flex flex-col items-center"
            v-for="(item, index) in itemList"
            :key="item.title"
          >
            <img class="w-[5.63rem] mt-8" :src="imgList[index + 4]" alt="" />
            <div class="font-pingfang-b text-[#333] text-2xl my-7">
              {{ item.title }}
            </div>
            <div class="font-pingfang-r text-lg indent-lg text-center">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToTop class="pb-12" />
  </div>
</template>
<script setup lang="ts">
import config from "@/config";
const { cdn } = config;
const STATIC_PATH = `${cdn}/career/`;
const imgList = [
  `${STATIC_PATH}banner.png`,
  `${STATIC_PATH}pic_jyb_01.png`,
  `${STATIC_PATH}pic_jyb_02.png`,
  `${STATIC_PATH}pic_jyb_03.png`,
  `${STATIC_PATH}pic_jyb_04.png`,
  `${STATIC_PATH}pic_jyb_05.png`,
  `${STATIC_PATH}pic_jyb_06.png`,
  `${STATIC_PATH}pic_jyb_07.png`,
  `${STATIC_PATH}pic_jyb_08.png`,
  `${STATIC_PATH}pic_jyb_09.png`,
  `${STATIC_PATH}pic_jyb_10.png`,
];
const imgTextList = [
  {
    imgUrl: imgList[1],
    title: "学生培养",
    reverse: false,
    content: [
      "学生职业规划不清晰",
      "所学专业较为冷门，工作机会少，跨专业就业",
      "感兴趣的岗位，跟专业相关性不符",
      "成绩一般般，能力也不突出，难以脱颖而出",
      "课程偏理论，学生实操能力不足",
    ],
  },
  {
    imgUrl: imgList[2],
    title: "就业过程",
    reverse: true,
    content: [
      "缺乏就业经验，写简历，面试等均缺乏经验，需反复试错，通过几率",
      "就业信息多，筛选困难",
      "对于除社会就业外，其他就业渠道了解少",
      "学校对于学生的就业过程监控少，管理成本高",
    ],
  },
  {
    imgUrl: imgList[3],
    title: "就业资源",
    reverse: false,
    content: [
      "供需错位，造成学生找不到工作，企业招不到人",
      "适合本校学生的岗位数不足",
      "院校知名度不高，很难邀请大型企业来招聘",
      "学校拓岗渠道有限，能接触到的企业有限",
    ],
  },
];
const itemList = [
  {
    title: "信息整合",
    desc: "整合学生/招聘就业/国考/升学/创业/参军等各种就业渠道信息",
  },
  {
    title: "职业规划",
    desc: "根据整合的学生信息通过算法提供个性化的职业规划方案",
  },
  {
    title: "信息推荐",
    desc: "通过算法精准推送岗位/政策/活动等信息",
  },
  {
    title: "技能成长",
    desc: "提供多种工具及资源辅助学生成长，完成就业规划目标",
  },
  {
    title: "运营管理",
    desc: "提供统计、监控等能力，实时预警，提早干涉，推动学生就业进程",
  },
  {
    title: "资源拓展",
    desc: "提供企业/课程等资源，助力学校与企业深度合作，帮助学生提升技能",
  },
];
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
    line-height: 48px;
  }
  .contact {
    background: rgba(247, 248, 248, 1);
    .title {
      font-size: 1.5rem;
      line-height: 3rem;
      font-family: PingFangSC-Semibold;
      color: #333;
      font-weight: bold;
    }
    div {
      font-size: 1.13rem;
      font-family: PingFangSC-Regular;
      color: #333;
      line-height: 3rem;
    }
  }
}
</style>
