<template>
  <div>
    <CommonBanner
      title="智慧医美教学实训基地"
      :sub-title="'为国内中高职学校提供医美专业一站式的人才培养服务和多元化的校企合作模式'"
      :img="imgList[0]"
      icon="/digital-edu/beauty/ico-beauty.png"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content">
      <Title1>项目背景</Title1>
      <div class="grid grid-cols-2 gap-8 my-8 mb-24">
        <div>
          <p>
            随着经济社会和医学科学的发展，人们对于美的追求的方式在不断升级，医学美容的发展空间越来越大。同时，也暴露出了具有巨大的人才缺口。为积极应对当前问题，相关部门陆续推出政策，帮助机构规范运营的同时，推动行业良性发展。
          </p>
          <p>
            《中国医疗美容标准体系建设“十四五”规划》中明确指出，教育人才是医疗美容行业行稳致远的必要条件。提升从业人员的专业能力，加强专业人才的在校培养，能够从根本上加快行业目前面对的问题。
          </p>
          <p>
            数据显示，中国医美行业市场规模近五年平均增长率为12.8%，2022年市场规模达到2260亿元，未来3年中国医美市场预计将达3600亿元。且非手术用户占比不断上升（水光针等注射项目及热玛吉等光电项目）。
          </p>
          <p>
            医美机构咨询服务类岗位人员的薪资水平已经明显高于传统医疗单位的医护人员。医美薪酬集中在1-2万和2-4万薪酬范围内，分别占24.3%和18.6%，几乎涵盖了所有医技和非医技岗位。通过计算得出，2021年医美行业平均薪酬为15747元。高薪资具有显著的行业择业与就业的吸引力。
          </p>
        </div>
        <div class="text-center">
          <img class="w-40rem" :src="imgList[1]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="my-8">培养目标</Title1>
        <div
          class="flex items-center"
          style="background: rgba(247, 248, 248, 1)"
        >
          <img style="width: 33.75rem !important" :src="imgList[2]" alt="" />
          <p class="pl-9 pr-16">
            为医疗美容机构、美容企业、化妆品集团、医学美容科研教育机构等，培养具有良好服务意识、健康心理素质及高尚职业道德，掌握医学美容和养生保健等知识和技能，具备对康复、保健、健康指导、医学美容技术咨询、美容企业管理及卫生宣传教育能力的专业人才
          </p>
        </div>
      </div>
      <div class="mb-24">
        <Title1>学院介绍</Title1>
        <div class="grid grid-cols-2 gap-8 my-8">
          <div>
            <p>
              远信医美产业学院是由远信集团与高校共同打造的医美产业学院，是国内首家专业从事医美行业技术人才培养、人才输送的现代化产教融合学院。学院拥有由多名医学博士、硕士、行业资深专家组成的专业师资团队，并拥有强大的行业资源网络，链接全国7000+医美机构，多所中职、高职、本科院校，形成集专业人才培养、输送为一体的闭环式医美技术人才供应链平台，深度贯彻国家产教融合政策，致力于成为医美行业的黄埔军校！
            </p>
            <p>
              远信集团创办于2005
              年，总部设立于广州，是集研发、生产、销售、服务于一体的综合性科技集团。集团通过不同业务的协作，持续坚持打造满足用户不同消费场景、需求的美业生态链，致力于为医美机构提供全球先进及受欢迎的再生医美产品及综合解决方案，为消费者提供更专业、更有效的功能护肤产品。2021年远信集团商品交易总额（GMV）28亿+，纳税金额1亿+。远信集团赋能累计7000多家医美机构。旗下品牌伊肤泉是问题肌修护的权威品牌，稳居行业龙头位置，被称为“国货之光”。
            </p>
          </div>
          <div class="text-center">
            <img
              class="mt-6"
              style="width: 37.5rem"
              src="/images/digital-edu/beauty/pic_03.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="my-8">课程内容</Title1>

        <div class="text-center my-10">
          <img :src="imgList[4]" alt="" />
        </div>
      </div>
      <div>
        <Title1 class="my-8">职业能力与面向岗位</Title1>

        <div class="text-center my-10">
          <img :src="imgList[5]" alt="" />
        </div>
      </div>
    </div>
    <div class="pb-12">
      <ToTop />
    </div>
  </div>
</template>
<script lang="ts">
import Title1 from "@/components/common/Title1.vue";
import config from "@/config";

export default defineComponent({
  name: "BeautyEdu",
  components: { Title1 },
  setup() {
    const STATIC_PATH = `${config.cdn}/digital-edu/beauty/`;
    const { cdn } = config;
    const imgList = [
      `${STATIC_PATH}banner.png`,
      `${STATIC_PATH}pic_01.png`,
      `${STATIC_PATH}pic_02.png`,
      `${STATIC_PATH}pic_03.png`,
      `${STATIC_PATH}pic_04.png`,
      `${STATIC_PATH}pic_05.png`,
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
    width: 90rem;
  }

  p {
    text-indent: 2em;
  }
}
</style>
