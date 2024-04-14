<template>
  <div>
    <CommonBanner title="成人教育"
      ><img :src="imgList[0]" alt=""
    /></CommonBanner>
    <div class="content py-6">
      <p>
        励英教育中心现与数十所重点大学建立合作关系，通过遍布全国的渠道支撑体系和强大的数字化平台技术，为社会在职人员提供高中起点专科、专科起点本科等5大类近百个专业的高校成人教育支持服务。
      </p>
      <div class="title">一、校外优秀教学点：</div>
      <p>
        目前以集团体系内的华商学院、华商职业学院和四川城市职业学院等院校为依托，申办高等学历继续教育校外教学点，为社会在职人员提供更多的优质高等教育机会和多层次、多样化的教育服务。
      </p>
      <div class="py-4 d-flex">
        <div>
          <div class="sub-title">校外优秀教学点：</div>
        </div>
      </div>
      <div class="d-flex-column-center">
        <img :src="imgList[1]" alt="" />
        <div class="pic-title">（广州华商职业学院）</div>
      </div>
      <div class="d-flex-center mt-4">
        <div class="d-flex-column-center mr-4">
          <img :src="imgList[2]" alt="" />
          <div class="pic-title">（广州华商学院）</div>
        </div>
        <div class="d-flex-column-center">
          <img :src="imgList[3]" alt="" />
          <div class="pic-title">（四川城市职业学院）</div>
        </div>
      </div>
      <p>
        以学院为依托的校外教学点为学生配置了多个计算机教室和多媒体教室，同时为学生提供多种学习场地以满足学生不同的学习需求；配备了近百
        名各类专业的优秀辅导教师，为学生提供学习咨询和学业帮扶；建设了设施齐全、功能完备的实验教室，相关实训场地可供学生使用；制定了学生学
        业评价体系，从入学到毕业全流程促进学生的学习、进步与发展。通过全方位的细致服务，提升成人教育支持服务水平。
      </p>
      <div class="d-flex-center mt-4">
        <div class="d-flex-column-center mr-4">
          <img :src="imgList[4]" alt="" />
          <div class="pic-title">（仿真银行实训室）</div>
        </div>
        <div class="d-flex-column-center">
          <img :src="imgList[5]" alt="" />
          <div class="pic-title">（网络系统与安全技术实训室）</div>
        </div>
      </div>
      <div class="d-flex-center mt-4">
        <div class="d-flex-column-center mr-4">
          <img :src="imgList[6]" alt="" />
          <div class="pic-title">（物流管理综合实训室）</div>
        </div>
        <div class="d-flex-column-center">
          <img :src="imgList[7]" alt="" />
          <div class="pic-title">（多媒体教学辅导）</div>
        </div>
      </div>

      <div class="title">二、励英教育数字化学习平台</div>
      <p>
        励英教育中心坚持全民终身学习理念，遵循高等学历继续教育规律，充分利用大数据、互联网、云计算、人工智能等新技术，开发集招生、
        教学、实训、考试、学籍、证书、收费、就业等各环节一体化全流程管理云平台，实现职业本科教育的教学活动可溯源、培养过程可跟踪、教学质量
        可评价。探索建立学分银行，促进学分互认；创建就业网，打通职业教育与企业用人需求的渠道，为高质量精准就业提供服务。
      </p>
      <div class="py-4">
        <div class="d-flex-center">
          <img :src="imgList[8]" alt="" />
        </div>
      </div>
      <ContentTitle class="mt-5"
        >支持多用户个性化配置，通过大数据、云计算进行过程监管以及实时评估</ContentTitle
      >
      <div class="py-4">
        <div class="d-flex-center">
          <img :src="imgList[9]" alt="" />
        </div>
      </div>
      <ContentTitle class="mt-5"
        >坚持数据及时性、准确性、完整性原则，数据接口标准化，切实提高风险管控能力</ContentTitle
      >
      <div class="py-4">
        <div class="d-flex-center">
          <img :src="imgList[10]" alt="" />
        </div>
      </div>
      <ContentTitle class="mt-5"
        >大数据、云计算、AI等新科技赋能教育与教育管理场景中的新应用，有效提升教育管理信息化、智能化水平</ContentTitle
      >
      <div class="py-4">
        <div class="d-flex-center">
          <img :src="imgList[11]" alt="" />
        </div>
      </div>
      <ContentTitle class="mt-5"
        >开发对标岗位能力的虚拟实训系统，用做事的流程来培养做事的人</ContentTitle
      >
      <div class="py-4">
        <div class="d-flex-center">
          <img :src="imgList[12]" alt="" />
        </div>
      </div>
      <ContentTitle class="mt-5"
        >拓展完善网上学习支持服务功能，激发学生学习动力</ContentTitle
      >
      <div class="py-4">
        <div class="d-flex-center">
          <img :src="imgList[13]" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import config from "@/config";

export default defineComponent({
  name: "ContinuingEdu",
  setup() {
    const STATIC_PATH = `${config.cdn}/education/continuing-edu/`;
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
      `${STATIC_PATH}pic9.png`,
      `${STATIC_PATH}pic10.png`,
      `${STATIC_PATH}pic11.png`,
      `${STATIC_PATH}pic12.png`,
      `${STATIC_PATH}pic13.png`,
    ];
    return {
      STATIC_PATH,
      imgList,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  width: $content-width;
  margin: auto;
  p {
    text-indent: 2em;
    line-height: 48px;
    padding-right: 20px;
  }
  .title {
    color: $fs-dark-color;
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
    // border-bottom: 1px solid #ddd;
  }
  .sub-title {
    text-indent: 2em;
    color: $fs-dark-color;

    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
  }
  .pic-title {
    color: $fs-dark-color;
    line-height: 48px;
  }
}
</style>
