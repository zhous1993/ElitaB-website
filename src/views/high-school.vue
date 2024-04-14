<template>
  <div>
    <CommonBanner
      title="国际高中"
      :sub-title="'重点推荐外方'"
      :img="imgList[0]"
    ></CommonBanner>
    <!-- <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" /> -->

    <div class="content">
      <div class="mb-24">
        <div
          class="bg-[#F7F8F8] grid grid-cols-2 p-5 gap-5 mb-12"
          style="grid-template-rows: auto"
        >
          <div v-for="item in schoolList" :key="item.id">
            <a
              class="text-[#222] text-sm hover:text-[var(--primary-color)]"
              :href="`#${item.id}`"
              >{{ item.schoolName }}</a
            >
          </div>
        </div>
        <template v-for="(school, index) of schoolList" :key="school.id">
          <div v-bind:id="school.id" class="mb-16">
            <Title2 class="mb-11">{{ school.schoolName }}</Title2>
            <div class="grid grid-cols-2 gap-10">
              <div>
                <HighLight
                  :high-light="school.highLight"
                  v-if="school.highLight"
                ></HighLight>
                <div
                  :innerHTML="school.content"
                  class="text-[#666] text-lg leading-9 font-normal mt-10"
                ></div>
                <img
                  class="w-full mt-5"
                  v-if="school.id == '02'"
                  :src="imgList[6]"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="w-full"
                  :src="imgList[index + 1]"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </template>
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
    schoolName: "加拿大BC省第8教育局（School District No.8 Kootenay Lake)",
    highLight: "",
    content:
      "• 加拿大BC省库特尼湖第8学区，是加拿大BC 省教育局辖属的公立学区。坐落于加拿大英属哥伦比亚省东南部，处于风景怡人的赛尔科克地区，教育局下辖共7所中学，各学校为学区内的所有学生开设各式各样的多元课程。加拿大是全世界最优质、严谨的非应试公立高中课程体系之一。学生获得加拿大BC省公立高中学籍，学分和毕业证，以加拿大BC省公立学生身份申请加国和世界名校，享有加国公校高中生毕业、升学待遇。",
  },
  {
    id: "02",
    schoolName: "加拿大库特尼湖第八学区（Kootenay Lake School District 8）",
    highLight: "",
    content:
      "• 库特尼湖第8学区 即BC省第8学区，是加拿大BC省教育局辖属的公立学区。坐落于加拿大英属哥伦比亚省东南部，处于风景怡人的赛尔科克地区,人口约40000人，居民以专业人士、企业主及退休人士为主。全区沿库特尼湖缘延伸，并包含教育局总部和LV Rogers中学所在地尼尔森地区(Nelson)。KootenayLake教育局下辖共7所中学，各学校为学区内的所有学生开设各式各样的多元课程，以符合为学区内所有学子在发展的环境中提供优质教育的宗旨。各学校开设的课程包括：全年/半年的全科课程; 主要为了提高国际学生英语水平的冬季课程; 提供强化英语以及部分选修科目的春季课程等。第八学区提供幼儿园到12年级的教育。全区在读学生约4700人，国际生占比3.1%，来自约20个国家。<br/>• 纳尔逊是加拿大英属哥伦比亚省(简称BC省) 东南部的一个小城市， 安全的环境、热情友好的人们使得学生能够更容易融入当地生活、加入团队或其他活动，是学生学习、生活、成长的理想环境。纳尔逊被《北美最好的100个艺术小城镇》发行者评为加拿大最好的小型艺术城市!<br/>• 学区主要有6所中学招收国际学生，可根据个人意愿选择适合的学校，分别为:",
  },
  {
    id: "03",
    schoolName: "加拿大BC省91教育局（SD91 (Nechako Lakes)）",
    highLight: "",
    content:
      "• 隶属于加拿大第91公立教育局国际项目和温哥华校区，是全世界最优质、严谨的非应试公立高中课程体系之一。<br/>• 学生获得加拿大BC省公立高中学籍，学分和毕业证，以加拿大BC省公立学生身份申请加国和世界名校，享有加国公校高中生毕业、升学待遇。",
  },
  {
    id: "04",
    schoolName: "加拿大珀塞尔学校（Purcell Collegiate School）",
    highLight: "",
    content:
      "• 加拿大珀塞尔学校位于加拿大不列颠哥伦比亚省金伯利市，坐落在加拿大珀塞尔山脉和落基山脉的山峰之间，是一所建设中世界级的国际私立寄宿学校，由加拿大BC省教育厅直接授予办学资质认证，归属为第四类别独立学校。<br/>• 2021年开始招生，目前在校生约100人，北美和国际混合寄宿学生占90%，小班制教学，班级平均人数20人，师生比19，校园从金伯利市延伸到包括aq 'am 和克兰布鲁克市的社区，学生可以访问所有这些领域的课程和课外活动资源。在圣尤金教堂的寄宿校园、金伯利高山度假村的户外校园和落基山脉学院的学术校园学习和上课。",
  },
  {
    id: "05",
    schoolName: "加拿大休伦国际学校（Huron International School）",
    highLight: "",
    content:
      "• 休伦国际学院是一所加拿大建筑面积最大的一体化中学校园，是一所大型私立寄宿制学校。学校致力于培养和铸造学生，为九年级至十二年级的学生提供一流的教育。学校帮助学生申请名校，目标在于培养未来领袖。休伦国际学院在一个安静而令人兴奋的环境中教育学生，专注于学术，同时保持艺术、体育和社会活动之间的平衡。",
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
