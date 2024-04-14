<template>
  <div>
    <CommonBanner
      title="职业本科/产业学院"
      :sub-title="'校企协同育人——助推职业本科建设高质量发展<br/>人才需求分析·专业内涵提升·实训实践条件·双师型队伍·就业实习支持'"
      :img="imgList[0]"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content">
      <Title1>业务介绍</Title1>
      <div class="grid grid-cols-2 gap-8 mb-20">
        <div>
          <Title2 class="my-8">建设目标</Title2>
          <p>
            以我国十四五经济发展规划为引领，支撑“数字中国”、“中国制造2025”重大战略，贯彻落实《国家职业教育改革实施方案》、《关于推动现代职业教育高质量发展的意见》、《关于深化现代职业教育体系建设改革的意见》等职教领域的政策文件要求。中汇联合“产教研”多方资源与力量，建设“教行企研”四位一体的产学研深度融合体系。坚持以教促产、以产助教、产教融合、产学合作，打造产业学院新模式，延伸教育链、服务产业链、支撑供应链、打造人才链、培养更多高素质技术技能人才、能工巧匠、大国工匠，为我国产业转型升级提供人才支撑。
          </p>
        </div>
        <div>
          <img class="w-42.5rem" :src="imgList[1]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title2 class="my-8">总体规划</Title2>
        <div class="grid grid-cols-2 gap-8 mb-20">
          <div class="text-center">
            <img class="w-42.5rem" :src="imgList[2]" alt="" />
          </div>
          <div>
            <p>
              励英教育联合行业企业，面向高职院校、职业本科院校、应用型本科院校，以985、211高校教学教研能力为支撑，以人工智能、大数据、云计算、AVR新科技为手段，以职业教育数字化为抓手，聚合校、企、行、研多方资源和力量，进行产业学院建设。开展探索混合所有制办学机制，创新人才培养模式、构建产教融合课程体系、优化教学模式、提升教师能力、打造产教融合实训环境及提升教学信息化智能化等业务，将产业学院建成融人才培养、师资提升、课程建设、人才认证、就业服务为一体的产教协同育人平台。
            </p>
          </div>
        </div>
        <div class="mb-20">
          <div class="text-center font-pingfang-r text-lg font-bold mb-4">
            构建了多元参与，共建共治型的数智化学习平台
          </div>
          <div class="text-center font-pingfang-r text-lg mb-4">
            支撑“校企合作、产教融合、专本衔接、职普融通”的合作模式
          </div>
          <div class="text-center">
            <img class="w-87.5rem" :src="imgList[4]" alt="" />
          </div>
        </div>
        <div class="text-center font-pingfang-r text-lg mb-4">
          职教内涵建设需打通人才链、教育链、产业链、创新链，通过“四链融通”实现人才从筛选、吸收、培养、评估到输送的完整闭环。
        </div>
        <div class="text-center">
          <img class="w-90rem" :src="imgList[3]" alt="" />
        </div>
      </div>
      <Title1 class="my-8">产品服务</Title1>
      <div class="mb-24">
        <Title2 class="my-8">产品体系</Title2>
        <p class="mb-8">
          结合产业发展趋势及国家经济战略布局，中汇利用办学优势，集中打造6条产业学院产品线。
        </p>
        <div class="text-center">
          <img class="w-full" :src="imgList[5]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title2 class="my-8">服务体系</Title2>
        <div class="text-center">
          <img class="w-full" :src="imgList[6]" alt="" />
        </div>
      </div>
      <div class="my-8"></div>
      <Title1>典型案例</Title1>
      <div class="mt-8 text-center">
        <img class="w-full" :src="imgList[7]" alt="" />
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
    const STATIC_PATH = `${config.cdn}/college/`;
    const { cdn } = config;
    const imgList = [
      `${STATIC_PATH}banner.png`,
      `${STATIC_PATH}pic_01.png`,
      `${STATIC_PATH}pic_02.png`,
      `${STATIC_PATH}pic_03.png`,
      `${STATIC_PATH}pic_03_1.png`,
      `${STATIC_PATH}pic_04.png`,
      `${STATIC_PATH}pic_05.png`,
      `${STATIC_PATH}pic_06.png`,
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
    line-height: 48px;
  }
}
</style>
