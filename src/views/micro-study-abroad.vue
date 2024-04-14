<template>
  <div>
    <CommonBanner
      title="微留学"
      :sub-title="'（高中生、 大学生）寒暑期 研学'"
      :img="imgList[0]"
    ></CommonBanner>
    <!-- <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" /> -->

    <div class="content">
      <div class="mb-24">
        <div class="mb-16">
          <Title2 class="mb-11"
            >新加坡国立大学——“人工智能与生成式人工智能”项目 5~7天</Title2
          >
          <div class="grid grid-cols-2 gap-2">
            <div
              v-for="(item, index) of itemList1"
              :key="index"
              class="text-lg text-[#666]"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="mb-16">
          <Title2 class="mb-11"
            >牛津大学萨默维尔学院——寒暑期精英课程项目 2~3周</Title2
          >
          <div class="grid gap-10">
            <p>
              <span class="font-bold text-[#222]"
                >人文社科板块（涵盖商业、心理、人文、历史等多个主题，参考课题如下）：</span
              ><br />
              1. 商业创新领域的机遇与挑战 (Challenges and Opportunities for
              Business and Entrepreneurship) <br />
              2. 社交平台的心理学 (What is the SELFie: the Psychology of Social
              Media) <br />
              3. 未来的历史：人类将怎样被记住 (Future Histories: How will we be
              remembered, archived, excavated?) <Br />
              4. 文化与沟通 ( What Makes Us Human?)
            </p>
            <p>
              <span class="font-bold text-[#222]">
                科学工程板块（涵盖医疗、人工智能、环境、计算机、机器人等多个主题，参考课题如下）：</span
              ><br />
              1. AI 变革医疗健康领域 (Revolutionising Healthcare: The
              Transformative Impact of AI inMedicine) <br />
              2. 机器人工程与人工智能 (AI for Robotics Engineering) <br />
              3. 气候变迁的方方面面 (The A to Z of Climate Change) <br />
              4. 人工智能：学习与推理（AI: Learning and Reasoning） <br />
              5. 人工智能中的知识图谱（Knowledge Graphs in Artificial
              Intelligence）。
            </p>
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

const STATIC_PATH = `${config.cdn}/high-school/`;
const { cdn } = config;
const imgList = [
  `${STATIC_PATH}banner.png`,
  `${STATIC_PATH}pic_lv2_3_table1.png`,
  `${STATIC_PATH}pic_lv2_3_table2.png`,
  `${STATIC_PATH}pic_lv2_3_table3.png`,
  `${STATIC_PATH}pic_lv2_3_table4.png`,
  `${STATIC_PATH}pic_lv2_3_table5.png`,
  `${STATIC_PATH}pic_01.png`,
];
const schoolList = [
  {
    id: "01",
    schoolName: "新加坡国立大学——“人工智能与生成式人工智能”项目 5~7天",
    highLight: "",
    content: "",
  },
  {
    id: "02",
    schoolName: "牛津大学萨默维尔学院——寒暑期精英课程项目 2~3周",
    highLight: "",
    content: "",
  },
];
const itemList1 = [
  "• 国立大学邀请函 Invitation of NUS",
  "• 国立大学官方证书 Certificate of NUS",
  "• 表现优秀证明信 Performance Excellence Certificate",
  "• 专为15岁以上青年设计 Designed for over 15-year-old Youths",
  "• 世界顶级学府学术课程 World-class University Academic Courses",
  "• 城市人文探索 Urban Cultural Exploration",
  "• 政企机构参访 Government and Enterprise Institution Visits",
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
    width: 90rem;
    position: relative;
  }

  p {
    line-height: 3rem;
    color: #666;
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
