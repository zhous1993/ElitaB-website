<template>
  <div>
    <div class="title">一、项目简介</div>
    <div class="d-flex">
      <div>
        <p>
          全国卫生健康技术推广传承应用项目旨在探索通过传承方式推广卫生健康技术。项目遵循医学理论和发展规律，坚持继承和创新相结合，保持和发挥我国医学特色和优势，依托全国卫生健康领域知名专家学者力量，面向基层卫生健康工作者开展卫生健康技术推广传承，力求加快卫生健康适宜技术在基层的推广应用。
        </p>
        <p>
          项目将分批次、分层次确定卫生健康技术推广传承人（国医大师）和师承人（学员），整理传承人的学术思想、临床经验和技术专长，通过有效方法和创新模式，有针对性地将传承人的学术思想、临床经验向师承人进行传授。通过项目的实施，可以丰富基层卫生健康工作人员学习新技术的路径，促进基层卫生健康服务能力的提升，进一步满足人民群众对卫生健康服务的需求。
        </p>
        <p>
          励英教育中心在项目联合办公室的指导下，作为全国卫生健康技术推广传承应用项目工作站，负责组织开展项目传承活动，包括师承人推荐、师承人资料整理、项目实践活动等工作。
        </p>
      </div>
    </div>

    <!-- <div class="d-flex-center">
      <div class="visiting-card d-flex-center">
        <div class="card-info">
          <div class="info-title">工作站联系方式：</div>
          <div>联系地址：深圳市南山区讯美科技广场2号楼1808</div>
          <div>联系人及电话：辛老师 15101067114</div>
          <div>电子邮箱：xinbin@aicloud-edu.com</div>
        </div>
        <div class="d-flex-column-center">
          <div class="wechat-qrcode">
            <img :src="imgList[1]" alt="" />
          </div>
          <div class="fs-xsm">微信扫一扫加好友咨询</div>
        </div>
      </div>
    </div> -->
    <div class="title">二、首批传承人</div>
    <div class="d-flex-center py-4">
      <img :src="imgList[2]" alt="" />
      <div class="ml-4">
        <div class="label">金世元</div>
        <div class="d-flex">
          <div class="flex-1">
            <span class="label">单位：</span><span>北京中医药学院</span>
          </div>
          <div class="flex-1">
            <span class="label">职称：</span><span>主任中药师</span>
          </div>
          <div class="flex-1">
            <span class="label">科室：</span><span>--</span>
          </div>
        </div>
        <div>
          <span class="label">擅长：</span>
          <span>中药炮制</span>
        </div>
        <div>
          <p
            style="
              display: inline-block;
              text-indent: 0;
              margin-top: 0;
              line-height: 30px;
            "
          >
            <span class="label" style="line-height: 30px">简介:</span>
            国医大师。享受国务院特殊津贴。主任中药师，教授，中华中医药学会中成药分会主任委员，北京中医药学院客座教授，国家科委国家秘密技术中医会中医中药学中药审查专家，国家中医药管理局科技成果评审专家,中国中医药学会中成药分会主任委员，中国中医药学及中药专业委员会顾问，中国老教授协会医药专业委员会顾问，国家中医药管理局药材系统高级职称评委等。被授予“全国中医药杰出贡献奖”称号。
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex-center py-4">
      <img :src="imgList[3]" alt="" />
      <div class="ml-4">
        <div class="label">陈可冀</div>
        <div class="d-flex">
          <div class="flex-1">
            <span class="label">单位：</span><span>中国中医科学院</span>
          </div>
          <div class="flex-1">
            <span class="label">职称：</span><span>教授</span>
          </div>
          <div class="flex-1">
            <span class="label">科室：</span><span>内科</span>
          </div>
        </div>
        <div>
          <span class="label">擅长：</span>
          <span>心脑血管疾病</span>
        </div>
        <div>
          <p
            style="
              display: inline-block;
              text-indent: 0;
              margin-top: 0;
              line-height: 30px;
            "
          >
            <span class="label" style="line-height: 30px">简介:</span>
            著名中西医结合内科、心脑血管科专家，享受国务院政府特殊津贴。现任中国中医科学院首席研究员，中日友好医院全国中西医结合心血管病中心主任，中国中西医结合学会名誉会长，中华医学会常务理事及老年医学学会主任委员，中国老年学学会名誉会长，中国科学院学部主席团成员，中国科协荣誉委员，中央保健委员会专家小组副组长，育部中医内科学重点实验室学术委员会主任，世界中医药联合会高级专家顾问委员会副主席，国家中医药管理局专家咨询委员会委员等。第七、八、九届全国政协委员。被授予“全国中医药杰出贡献奖”。
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex-center py-4">
      <img :src="imgList[4]" alt="" />
      <div class="ml-4">
        <div class="label">晁恩祥</div>
        <div class="d-flex">
          <div class="flex-1">
            <span class="label">单位：</span><span>中日友好医院</span>
          </div>
          <div class="flex-1">
            <span class="label">职称：</span><span>主任医师</span>
          </div>
          <div class="flex-1">
            <span class="label">科室：</span><span>内科</span>
          </div>
        </div>
        <div>
          <span class="label">擅长：</span>
          <span
            >慢性咳嗽、慢性阻塞性肺疾病、哮喘、间质性肺疾病、过敏性疾病、支气管扩张、感染性疾病及感染性发
            热、肺癌(术后或放化疗后)、胃炎、反流性食管炎、其他疑难杂症。
          </span>
        </div>
        <div>
          <p
            style="
              display: inline-block;
              text-indent: 0;
              margin-top: 0;
              line-height: 30px;
            "
          >
            <span class="label" style="line-height: 30px">简介:</span>
            国医大师。主任医师、教授，中医内科首席专家。全国第三、四批老中医继承人工作指导教师，中央保健
            会诊专家，全国中医内科肺系学科带头人之一，中华中医药学会理事，内科分会副主任委员兼任秘书长，急症学
            会主任委员，内科肺系病专业学术主任委员，科学技术奖评审专家，中国医师学会理事世界中医药联合会呼吸病
            专业委员会会长等。被授予“全国中医药杰出贡献奖”称号。
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex-center py-4">
      <img :src="imgList[5]" alt="" />
      <div class="ml-4">
        <div class="label">李佃贵</div>
        <div class="d-flex">
          <div class="flex-1">
            <span class="label">单位：</span><span>河北省中医院</span>
          </div>
          <div class="flex-1">
            <span class="label">职称：</span
            ><span>教授、主任医师，博士生导师</span>
          </div>
          <div class="flex-1">
            <span class="label">科室：</span><span>脾胃病科</span>
          </div>
        </div>
        <div>
          <span class="label">擅长：</span>
          <span
            >多种疑难杂病，其中对慢性胃炎、胃癌前病变、溃疡性结肠炎的治疗有较深的造诣。
          </span>
        </div>
        <div>
          <p
            style="
              display: inline-block;
              text-indent: 0;
              margin-top: 0;
              line-height: 30px;
            "
          >
            <span class="label" style="line-height: 30px">简介:</span>
            国医大师，全国首届中医药教学名师。全国劳动模范，全国老中医药专家传承指导老师，首届河北省十二
            大名中医，国务院特殊津贴专家，省管优秀专家，省突贡专家，中华中医药学会李时珍研究分会名誉主委、脾胃
            病分会副主委，中国民族医药协会适宜技术分会会长，河北省中西医结合学会会长，河北胃肠病研究所所长等。
            被授予“全国中医药杰出贡献奖”称号。
          </p>
        </div>
      </div>
    </div>
    <div class="title">三、师承人条件</div>
    <p>
      师承人，即学习、效法和继承传承人卫生健康技术的专业人员。从事卫生健康事业，具有一定卫生健康专业知识和临床实践基础的人员，需满足
      下列条件，经过筛选，可以确定为全国卫生健康技术推广传承应用项目师承人：
    </p>
    <p>
      <strong>·</strong
      >从事卫生健康事业，具有一定卫生健康专业知识和临床实践基础的人员。
    </p>
    <p>
      <strong>·</strong
      >具有副主任医师及以上医药专业高级职称的医疗卫生工作者。或在行业中有特殊专长或贡献者，取得县级及以上卫生健康行政主管部门认可证
      书的民间中医（如：医术确有专长证书、师承证书、中医药适宜技术培训证书等）。
    </p>

    <div class="title">四、录取名额及报名流程</div>

    <p>师承人名额：40人/年</p>
    <p>报名流程如下图：</p>
    <div class="d-flex-center">
      <img :src="imgList[6]" alt="" />
    </div>
    <div class="title">五、传承及教学流程</div>
    <p>
      1、拜师申请。师承人员向励英教育中心提交相关材料，包括：报名信息表（含个人简历）、学历学位证书、医师资格证书、职称证书或
      相关技能证书等。<br />
      　　2、拜师审核。项目联合办公室组织专家组审核申请人员相关资质真实性、有效性。经研究评定审核通过后，学员取得师承人资格。<br />
      　　3、师徒匹配。依据申请人员提交的申请意向，经传承人同意后，进入拜师环节。发放拜师帖，签订师承关系合同书，建立师徒关系。
    </p>
    <div class="d-flex-column-center">
      <span class="label">拜师贴样例</span>
      <img :src="imgList[7]" alt="" />
    </div>
    <p>
      4、跟师带教。师承人员学习期间，通过会议、讲座、面授、随诊、远程指导等多种形式传授卫生健康技术，传承卫生健康技术及学术经验。
    </p>
    <div class="d-flex-column-center">
      <span class="label">学习课程计划表</span>
      <img :src="imgList[8]" alt="" />
    </div>
    <p>
      5、出师考核。师承人员学习期间，需完成项目规定的学习课程，并向传承人提交病案、学习笔记、读书临证心得、论文等材料，经传承人认可
      后，由传承人颁发
      “全国卫生健康技术推广传承应用项目证书”（师承帖或出师贴），经公证处公证，传承活动结束。
    </p>
    <div class="d-flex-column-center">
      <span class="label">师承贴样例</span>
      <img :src="imgList[9]" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import config from "@/config";

export default defineComponent({
  name: "Technology",
  setup() {
    // const STATIC_PATH = `${config.cdn}/profession/health/technology/`;
    const STATIC_PATH = `/images/profession/health/technology/`;

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
  .visiting-card {
    width: 742px;
    height: 330px;
    background-color: #ffcc00;
    border-radius: $br-base;
    color: #000;
    .wechat-qrcode {
      padding: 12px;
      border-radius: $br-base;
      background: white;
      margin-bottom: 16px;
    }
    .card-info {
      line-height: 48px;
      color: #000;
      margin-right: 60px;
      .info-title {
        color: #000;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .d-grid {
    display: grid;
    grid-template-columns: 537px 529px;
    grid-column-gap: 55px;
    p {
      padding: 0;
      padding-right: 0;
    }
  }
  p {
    text-indent: 2em;
    line-height: 48px;
    // padding-right: 20px;
  }
  .title {
    color: $fs-dark-color;
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
    // border-bottom: 1px solid #ddd;
  }
  .sub-title {
    // text-indent: 2em;
    color: $fs-dark-color;

    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
  }
  .label {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    line-height: 48px;
  }
  .pic-title {
    color: $fs-dark-color;
    line-height: 48px;
  }
  .bg-theme :deep(.content-title) {
    border-radius: 15px;
    background-color: $theme-color;
    color: white;
  }
}
.td {
  height: 40px !important;
}
.list {
  border-radius: $br-base;
  background: #f0f0f0;

  .list-item {
    display: grid;
    grid-template-columns: repeat(3, 340px);
    grid-template-rows: 72px;
    line-height: 72px;
    text-align: center;
    div:not(:last-child) {
      border-right: 1px solid #ccc;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
