<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:10
 * @LastEditors: DESKTOP-16EDV1I\zs_lq zhous0310@gmail.com
 * @LastEditTime: 2024-04-14 21:13:04
 * @FilePath: \website-edu\src\views\aboutus-page.vue
 *
-->
<template>
  <div>
    <CommonBanner title="关于我们" :img="imgList[0]" sub-title="">
    </CommonBanner>
    <!-- <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" /> -->
    <div class="content">
      <div class="mb-24">
        <div class="text-center">
          <img :src="imgList[1]" class="w-[13.75rem] h-[8.13rem]" />
        </div>
        <div class="mt-10 flex justify-center">
          <div
            class="w-[62.5rem] h-[5rem] bg-[#0930B8] text-white text-center flex items-center justify-center text-4xl font-bold"
          >
            追求资源、注重长期价值、放眼全球及未来
          </div>
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="mb-10">关于我们</Title1>
        <div class="mb-10 flex overflow-hidden bg-[#F7F8F8]">
          <div class="flex-1 text-lg leading-9 p-10">
            <p>
              <span class="text-[#222222] font-bold text-lg text-left"
                >北京励英教育科技有限公司</span
              >
              创办于2023年，由海内外从事国际教育合作与交流的行业精英、支持中外合作办学改革创新和可持续发展教育事业的专家顾问团队、以及从事或服务于国际教育合作与交流的机构、协会、高校联盟等参与共建。
            </p>

            <p>
              作为一家国际教育企业，以“立足中国，面向世界;
              让教育助力构建人类命运共同体”为使命。引进世界一流院校资源开展高水平合作办学，共建广泛而深入的校际合作，同时也致力于海外引智、学术交流、联合培养、教育信息化、教育投资、校企合作及产教融合等领域。支持中国教育携手国际教
              育培养年轻一代共同建设更美好的新世界。
            </p>
          </div>
          <img class="w-[39.19rem] h-[20/63rem]" :src="imgList[2]" alt="" />
        </div>
        <div class="grid grid-cols-3 gap-7 mb-16">
          <div
            class="h-[20rem] bg-[#F7F8F8]"
            v-for="item of itemList"
            :key="item.id"
          >
            <div
              class="bg-[var(--primary-color)] text-white h-[6.25rem] flex items-center justify-between"
            >
              <span class="px-7">{{ item.title }}</span>
              <img :src="item.icon" class="h-full w-[7.5rem]" alt="" />
            </div>
            <div class="text-[#666] text-lg leading-6 p-8">
              {{ item.content }}
            </div>
          </div>
        </div>
        <Title2 class="mb-5">战略合作伙伴</Title2>
        <div class="bg-[#F7F8F8] flex h-[25rem] mb-[6.25rem]">
          <div
            class="bg-[#EAEDF8] w-[35rem] !h-full flex items-center justify-center"
          >
            <div class="w-[25rem]">
              <img class="w-[25rem]" :src="imgList[3]" alt="" />
              <div
                class="h-[2.63rem] flex items-center bg-[#8B9FE5] text-white justify-center text-2xl font-bold"
              >
                未来教育科技创新基地
              </div>
            </div>
          </div>
          <div class="flex-1 p-10">
            <p>
              教育部学校规划建设发展中心，教育部直属正司级事业单位开展学校、区域、城市、行业、企业产教融合发展战略的研究、规划和设计服务，开展高等教育、职业教育的结构优化和形态变革研究。
            </p>
            <p>
              未来教育科技创新基地是由教育部学校规划建设发展中心倡导发起的服务于新时代教育创新的“产教融合创新要素载体平台”和“科教创新驱动发展服务平台”。
            </p>
            <p>
              基地以新一代信息技术、数字经济、安全科技、文化教育为核心，聚集面向未来的创新型企业和机构，通过平台驱动、政策支持、产业化运作，采用平台对平台，学校+企业的合作模式，充分发挥平台资源优势，深化产教融合，以创新动能驱动区域社会经济发展，有效促进教育链、人才链、服务链、创新链与产业链、资金链的有机衔接，推动建立人才培养与实体经济、科技创新、现代金融、人力资源协同发展的产业体系。
            </p>
          </div>
        </div>
        <div class="bg-[#F7F8F8] flex h-[16.25rem] mb-[6.25rem]">
          <div class="flex-1 p-10">
            <p>
              WEBA (World Educate Business
              Association)世界教育商业协会是一家全球教育商业合作伙伴关系的伞形会员制组织，总部在瑞士。通过每年定期举办世界各地教育洽谈会等专业教育活动，在教育界获得了较高的声誉和认可。
            </p>
            <p>
              WEBA拥有来自世界50多个国家几百所高校和世界各地的招生代理机构的商业会员。WEBA与公立、私立和非营利性大学、学院、中学、教育机构等合作。励英教育科技作为WEBA中国站教育巡展和教育洽谈会协办单位。
            </p>
          </div>
          <div
            class="bg-[#EAEDF8] w-[35rem] !h-full flex items-center justify-center"
          >
            <div class="w-[25rem]">
              <img class="w-[25rem]" :src="imgList[4]" alt="" />
              <div
                class="h-[2.63rem] flex items-center bg-[#8B9FE5] text-white justify-center text-2xl font-bold"
              >
                WEBA 世界教育商业协会
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#F7F8F8] flex h-[18.75rem] mb-[6.25rem]">
          <div
            class="bg-[#EAEDF8] w-[35rem] !h-full flex items-center justify-center"
          >
            <div class="w-[25rem]">
              <img class="w-[25rem]" :src="imgList[5]" alt="" />
              <div
                class="h-[2.63rem] flex items-center bg-[#8B9FE5] text-white justify-center text-2xl font-bold"
              >
                全球最大的北美留学互联网申请平台
              </div>
            </div>
          </div>
          <div class="flex-1 p-10">
            <p>
              成立于2015年，总部位于加拿大滑铁卢，旨在为申请留学的国际学生提供留学申请服务。ApplyBoard与超过1500所院校合作，利用人工智能数据分析系统，根据学生的兴趣和学术背景，学习计划和财务状况等指标，帮助学生在加拿大、美国和英国自动匹配最优的留学院校和和专业，让学生申请、录取、入读更为简便高效。
            </p>
            <p>
              ApplyBoard全球申请学生数量20多万人，在线留学教育平台简化了国际学生的留学申请过程。通过与ApplyBoard的战略招生合作，非常高效地帮助学生选择理想的留学院校，并提高大学录取的成功率。
            </p>
          </div>
        </div>
        <div class="bg-[#F7F8F8] flex h-[20.63rem] mb-[6.25rem]">
          <div class="flex-1 p-10">
            <p>
              美国华盛频教育科技产业园占地
              65英亩，位于美国首都华盛顿周边，是由一所文理学院华盛顿哥伦比亚特区大学(WUDC)和一所私立教会中学锡安学院为核心，以众多实验室和产品研发机构构成的集产学，研，教为一体的现代化产业园区。深耕美国本土教育发展理念和鼓励创业孵化教育产业科技和服务体系。
            </p>
            <p>
              美国华盛顿哥伦比亚特区大学(WUDC)是一所拥有百年历史的文理大学并附属K-K12学校
              ，学术氛围浓厚 ，作为高等教 育的基石
              ，WUDC采取文理学院典型的小班授课教学模式，特殊课程还提供一对一的课堂体验。专业设置分别聚焦于音乐、美术、商业/会计、政治、科学、公共卫生、
              网络安全等学科和专业。
            </p>
          </div>
          <div
            class="bg-[#EAEDF8] w-[35rem] !h-full flex items-center justify-center"
          >
            <div class="w-[25rem]">
              <img class="w-[25rem]" :src="imgList[6]" alt="" />
              <div
                class="h-[2.63rem] flex items-center bg-[#8B9FE5] text-white justify-center text-2xl font-bold"
              >
                由美国GHC投资资产管理公司运营管理
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="content !pt-10">
        <Title2>合作伙伴</Title2>
        <img class="w-full mt-7" :src="imgList[7]" alt="" />
      </div>
    </div>
    <div class="content">
      <div>
        <Title1 class="mb-10">联系我们</Title1>
        <div class="contact flex">
          <img class="w-36.25rem" :src="imgList[8]" alt="" />
          <div class="flex-1 pl-16 pt-14">
            <div class="title">北京励英教育科技有限公司</div>
            <div>地址：北京亦庄开发区国锐广场B座912</div>
            <div>联系电话：13911639807 孙老师</div>
            <div>邮箱：info@elitab.top</div>
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
const STATIC_PATH = `${cdn}/about/`;
const imgList = [
  `${STATIC_PATH}banner.png`,
  `${STATIC_PATH}logo.png`,

  `${STATIC_PATH}pic_about_01.png`,
  `${STATIC_PATH}pic_about_02.png`,
  `${STATIC_PATH}pic_about_03.png`,
  `${STATIC_PATH}pic_about_04.png`,
  `${STATIC_PATH}pic_about_05.png`,
  `${STATIC_PATH}pic_about_06.png`,
  `${STATIC_PATH}pic_about_07.png`,

  `${STATIC_PATH}ico_01.png`,
  `${STATIC_PATH}ico_02.png`,
  `${STATIC_PATH}ico_03.png`,
];
const itemList = [
  {
    id: "1",
    title: "诚信好的品牌战略",
    content:
      "励英以诚信为根，注重维护客户的利益，通过不断提升产品质量，构建品牌优势，服务于学生学习和生活。",
    icon: imgList[9],
  },
  {
    id: "2",
    title: "私人定制化贴心服务",
    content:
      "利用人工智能数据分析系统，根据学生的兴趣和学术背景，学习计划和财务状况等指标，帮助学生在欧美亚国家自动匹配最优的留学院校和专业，让学生申请、录取、入读更为简便高效。",
    icon: imgList[10],
  },
  {
    id: "3",
    title: "专业严谨的咨询团队",
    content:
      "联合国际国内知名企业家和名校校友成立的一流教育服务团队。旨在为高中及大学生提供学术及就业背景提升、硕博申请指导及就业辅导的解决方案。集团拥有美国藤校、英国G5、双一流大学等国内外顶尖的学术资源、头部券商、上市公司、国企等优质的企业资源和完善的“一站式”服务体系。打造了独特的“定制化周期产教服务”。",
    icon: imgList[11],
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
    @apply text-lg leading-9 text-[#666];
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
  .qualifications {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    grid-template-rows: 28.94rem;
    gap: 0.63rem;
    img {
      height: 100%;
    }
  }
  .qualifications2 {
    margin-top: 0.63rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 15.25rem;
    gap: 0.63rem;
    img {
      height: 100%;
    }
    color: white;
  }
}
.partner {
  width: 100%;
  background: url("/images/about/pic_bg.png");
  background-size: cover;
}
</style>
