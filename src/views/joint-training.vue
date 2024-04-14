<template>
  <div>
    <CommonBanner
      title="联合培养项目"
      :sub-title="'(专升本、专升硕)国际班—重点推荐外方院校'"
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

const STATIC_PATH = `${config.cdn}/joint-training/`;
const { cdn } = config;
const imgList = [
  `${STATIC_PATH}banner.png`,
  `${STATIC_PATH}pic_01.png`,
  `${STATIC_PATH}pic_02.png`,
  `${STATIC_PATH}pic_03.png`,
  `${STATIC_PATH}pic_04.png`,
  `${STATIC_PATH}pic_05.png`,
  `${STATIC_PATH}pic_06.png`,
  `${STATIC_PATH}pic_07.png`,
  `${STATIC_PATH}pic_08.png`,
  `${STATIC_PATH}pic_09.png`,
  `${STATIC_PATH}pic_10.png`,
  `${STATIC_PATH}pic_11.png`,
  `${STATIC_PATH}pic_12.png`,

  `${STATIC_PATH}pic_13.png`,
];
const schoolList = [
  {
    id: "01",
    schoolName:
      "德国埃森经济管理应用技术大学 （FOM Hochschule für Oekonomie & Management）",
    highLight: "2021年排名世界第401-450位",
    content:
      "• FOM大学是一所受德国政府承认的非盈利性质的高等教育机构，于1991年在当地经济联合会的共同努力下成 立，目前在德国境内拥有29所分校。作为一所为在职人员打造的应用型高等学府，FOM大学视推动高校于企业之间的理论实践转化为己任，根据在职人员及职业培训人员的理论需求实行专业课程设置。<br/><br/>• FOM大学在加强同其他公立高校紧密联系的同时，大量建立同当地中型企业乃至跨国集团的合作伙伴关系，这一办学方针使FOM大学受到社会各界的高度认可。FOM大学目前拥有42000多名在读学生，是德国最大的私立高等教育机构。<br/><br/>• FOM大学隶属于BCW经济教育集团，该集团由非盈利性质的BCW教育基金会承办并在基金会创立者Klaus Dieter Braun先生的领导下运营。基金会成立目的在于推动学术研究及教育工作发展，特别是针对在职人员及职业培训人员的高等教育。基金会的非盈利性要求对其活动的公益性及资源配置中的非商业性做出明确规定并定期接受相关财政机构监督。",
  },
  {
    id: "02",
    schoolName: "美国湖滨大学（Lakeland University）",
    highLight:
      "2023年U.S.News最佳大学<br/>美国最佳商学院排名226<br/>美国中西部最佳大学排名144<br/>美国高等教育委员会（HLC）顶级学术单位（1级）",
    content:
      "• 学校位于风景秀丽的威斯康星州希博伊根市，紧邻密西根湖，拥有美丽的自然风景。成立于1862年，至今161年，历史悠久。<br/><br/>• 学校可授予学士学位和硕士学位。设有商学院，科学与技术学院，人文与艺术学院，研究生院，涵盖30余种学士和硕士学位课程。除传统课程外，还包括护士、旅游管理、学前教育、刑事司法、企业管理及教育硕士等。国际学生来自40多个国家，大学设有语言中心。",
  },
  {
    id: "03",
    schoolName: "美国加州大学河滨分校（University of California Riverside）",
    highLight: "2024年U.S. News美国大学综合排名中位列第76位",
    content:
      "• 加利福尼亚大学河滨分校是一所公立综合性研究型大学，1954年成立于加利福尼亚州里弗赛德市。是美国大学协会AAU成员，被誉为公立常春藤，环太平洋大学联盟和国际公立大学论坛成员。 是世界上最具影响力的公立大学系统之一，加州大学系统中十所学校之一，也是该系统中发展最快的一所大学。该校非常重视科研，拥有加州大学傲人的学术传统。。<br/>• 2014，2015，2016奥巴马政府提出美国官方大学评比系统，依新标准，美国《时代》杂志公布美国最新⼤学排名，加州⼤学河滨居于全大学首位。<br/>• 加州大学河滨分校2017年有在校生23278名，是加州大学10所分校中发展最快的，以其人性化和多元化著称。河滨分校设有81个本科专业，48个硕士学位项目以及42个博士学位。因其在服务、教学、科研方面取得的世界瞩目的成就，加州大学河滨分校的教学科研人员被著名的美国科学进步协会接纳为会员的数量曾多次名列第一。大学除了农科和植物科学处于全国领先地位之外，数学、统计学和计算机科学也位居前列。说到生物医学科学，更是全加州无出其右，新近设立的生物化学工程，学生一样趋之若鹜。<br/>• 学校拥有广达1200英亩的校地，被誉为加州大学系统中面积最大的校园之一，各项基础设施崭新且齐全。学校向学生提供众多服务，如：图书馆、游泳池、健身房、网球场、排球场、棒球场等。",
  },
  {
    id: "04",
    schoolName: "美国拉文大学（University of La Verne）",
    highLight: "2017年《U.S.News》美国最权威的大学综合排名为第152名",
    content:
      "• 拉文大学位于南加州洛杉矶都会区的拉文市，占地400亩，距离全美第二大城市-洛杉矶的市区仅56公里，只需1小时的车程就可以到达世界闻名的好莱坞、贝弗里山和美丽的亨廷顿海滩。<br/><br/>• 大学创立于1891年，属于美国国家级大学(类于中国211大学)。由艺术和科学学院、商学与管理学院、教育学院、法学院组成。在读学生近9000名，商学院有3500名学生，师生比1:13左右。共开设70多个本科学位，15个硕士学位和多个博士课程。<br/><br/>• 大学获得美国教育部和中国教育部的官方认可，在2017年《U.S.News》美国最权威的大学综合排名为第152名，在《福布斯周刊》美国大学排名位名列前10%。商学院，教育学院，法学院连续多年获得“全美最佳学院”排名，其中商学与管理学院，在2016年《U.S.News》的美国大学最佳商业与公共事务学院(研究生院)排名第138名，特别是工商管理硕士(MBA)专业在读人数，规模和质量连续多年位居南加州第4,全美前20名",
  },
  {
    id: "05",
    schoolName: "美国田纳西理工大学（Tennessee Technological University）",
    highLight:
      "2020年，全美综合排名第272，工程类排名170<br/>国家公立大学排名135，社会流动能力2020年排名第186",
    content:
      "• 美国田纳西理工大学(Tennessee Technological University,简称“TENNESSEE TECH”或“TTU”),成立于1915年，是一所被中国教育部承认的集教学与研究为一体的综合性美国公立大学。TTU坐落于田纳西州库克斯维尔市(Cookeville)风景秀丽的大学城内，比邻美国著名的乡村音乐之乡，距离田纳西州首府纳什维尔一小时车程；气候四季分明。<br/>• 田纳西理工大学以高质量的教育与研究，领先的创新创业教育、多领域的企业合作教育为特色，多年来被广大学生和家长认为是美国中南部最优秀的大学之一。<br/>• 学校设有农业与人类生态学学院、艺术与科学学院、商业学院、教育学院、工程学院、美术学院和护理9大学院，共200多个专业。其中农业工程、做生物、纳米电子技术、无线通信、计算机技术、环境科学以及工程、材料科学和工程等专业的教学科研都在全美名列前茅。学校灵活的录取方式深受世界各国学子青睐！",
  },
  {
    id: "06",
    schoolName:
      "阿联酋穆罕默德 ·本 ·扎耶德人工智能大学 （ Mohamed Bin Zayed University of Artificial Intelligence ）",
    highLight:
      "全球首所人工智能大学<br/>专注于人工智能，包括深度学习 、自然语言处理 、计算机视觉等领域",
    content:
      "• 阿联酋穆罕默德 ·本 · 扎耶德人工智能大学（ Mohamed BinZayed University of Artificial Intelligence ）是一所位于阿联酋的全球领先的 专注于人工智能研究和教育的研究型大学。该大学于2019年由阿联酋政府成立，致力于推动人工智能领域的创新和发展，并在全球范围内推动人工智能的不断进步。<br/>• 学术方向和研究重 点：<br/>- 该大学专注于人工智能领域的研究和教育，旨在培养未来的人工智能专家和领导者。<br/>- 研究领域涵盖了机器学习、深度学习、自然语言处理、计算机视觉、数据科学、以及人工智能在各个领域的应用等。<br/>• 产学研合作：<br/>- 与世界一流的高校、科研机构和工业合作伙伴建立紧密联系，推动学术研究成果的应用和转化。<br/>• 资源和设施：<br/>- 该大学具备先进的实验室、研究中心和学术资源，为学生和教职员工提供丰富的研究和学术环境。",
  },
  {
    id: "07",
    schoolName:
      "波兰华沙金融与管理大学 （ University of Economics and Human Sciences in Warsaw）",
    highLight:
      "根据2021年的《金融时报》（Financial Times）全球商学院排名，<br/>该校的主修MBA项目排名全球第81位 。",
    content:
      "• 波兰华沙金融与管理大学是波兰前5名之一的学校 ，学校校园位于华沙市中心 ，共有30多个学士和硕士学位课程 ，来自世界各地6500名学生 ，175000名毕业生（ 95%的毕业生在一个月内找到工作） 。<br/><br/>• 波兰华沙金融与管理大学校园是华沙最大和最现代化的教育建筑之一 。它提供了专为教育目的而设计的高质量学习空间 。现代化的教室 、演讲厅 、实验室和全尺寸的健身房 ，以及会议中心 、餐饮区和自行车停车场，旨在满足学生的需求。",
  },
  {
    id: "08",
    schoolName: "英国温切斯特大学（University of Winchester）",
    highLight:
      "Times英国大学综合排名2024年-85<br/>The Guardian 卫报英国大学综合排名2024年-109",
    content:
      "• 英国温切斯特大学(University of winchester)成立于 1840 年，坐落在历史悠久，风景秀丽的英格兰南部汉普郡温切斯特市，交通非常便利，乘火车到伦敦约 55 分钟，到希斯罗机场和盖特威克机场约1小时左右，离南安普顿 15 分钟火车车程，1 小时就能到达南部各个海滨城市。<br/>• 温切斯特大学是一所公立研究型大学，为不同种族、不同背景的学生提供了高质量的大学教育环境。全校有全日制学生 12000 名，有来自 80 个不同国家的1200 名国际学生，秉持小班教学理念。学校特别关注学生的学习和在校生活。有专门的团队帮助学生的学习与生活。温切斯特无论本科还是研究生都以小班教学闻名，能够保证良好的教学质量，为学生提供充分的支持和帮助。<br/>• 温切斯特在过去 5 年中，被连续评为英国最安全的城市、最佳居住城市和最安全的学习地点之一。这也是很多著名诗人和文人选择居住的地方，如英国著名小说家简.奥斯汀等。<br/>• 学校设有五个学院，包括了商业和数字技术学院、教育和艺术学院、健康和福利学院、人文和社会科学学院和法律、犯罪和司法学院，开设 80 多个专业，包括本科、硕士、博士。",
  },
  {
    id: "09",
    schoolName: "英国德蒙福特大学（De Montfort University）",
    highLight: "在2024年QS世界大学排名中位列第812名",
    content:
      "• 英国德蒙福特大学（De Montfort University, 简称 DMU)坐落于英格兰中心莱斯特，已有 153 年历史。学校设有四大学院，开设超过 500 门本科到博士的不同层次课程，拥有优质的师资及世界先进的教学科研设施，格外重视学生职场技能的培养。被评为全球最佳新兴类大学前 150 ，TEF 金奖且位列全英 No. 3，Times 排名全英 53 名；DMU 中国本科毕业生获得一等及二等一学位人数比例高达 84.8% 。<br/>• 课程广受认证，有超过170门行业内专业资质认证课程，时尚管理类专业全球第三，商学院学生满意度全英第四，计算机科学和信息调研能力在REF中位列全英第三，商学院荣获24重权威机构认证与认可，是全球最佳艺术设计学院之一，内衣与轮廓设计及鞋类设计全英第一，会计与金融专业 ACCA 9门免考，能源工程在新兴类大学中全球第二，计算机科学因引用实力评为全球第一，计算机科学、工程学，世界排名151-200名。<br/>• 学生就业潜质高，就业指导能力全英No.1。",
  },
  {
    id: "10",
    schoolName: "加拿大昆特兰理工大学（Kwantlen Polytechnic University）",
    highLight: "2022年QS排名289位",
    content:
      "• 由不列颠哥伦比亚省政府于1981年建立的昆特兰大学，即现在的昆特兰理工大学，在不列颠哥伦比亚省的大温哥华地区有五个校区。KPU提供学士学位、副学士学位、文凭、证书和引文等140多个专业。每年有近2万名学生在KPU位于萨里、里士满、兰利、克洛弗代尔和公民广场的校区学习课程。<br/><br/>• 昆特兰理工大学目前提供一系列证书，其中许多是完全独特的，以成功满足区域和全球就业市场不断变化的需求。学生有机会将证书和文凭证书连接到学士学位，为应用和技术课程的学术和专业提升创造了选择。",
  },
  {
    id: "11",
    schoolName: "澳洲环球商学院",
    highLight: "澳大利亚最大的MBA教育机构之一",
    content:
      "• 澳洲环球商学院（UBSS）是澳大利亚最大的MBA教育机构之一，获得了高等教育质量和标准局（TEQSA）的全面认证。它被认为是全澳认可且“中留服认证”的院校。环球商学院（UBSS）成⽴于1999年，是经澳⼤利亚⾼等教育质量与标准署 (TESQA) 认证的⾼级教育院校，⾪属GCA教育集团。UBSS下设⼤学本科及硕⼠研究⽣课程。在澳⼤利亚悉尼、墨尔本和阿德莱德均有分校。UBSS配备国际化⼀流的博⼠教学及学⽣服务团队，致⼒于为寻求建⽴或进⼀步提供其商业领导⼒的学⽣提<br/>供国际⽔平的教育。 20多年来，UBSS的⼴⼤优秀毕业⽣活跃于全球各⼤⼯商企业领域及政界。其经验丰富的国际教育背景、坚实的澳⼤利亚商业基础以及同仁和校友，为各界毕业⽣构建了⻓期友谊和业务联系的基础。",
  },
  {
    id: "12",
    schoolName: "法国巴黎学院集团（College De Paris）——供30学院60个校区选择",
    highLight: "",
    content:
      "• 2011年创立，旗下设有30个学院，法国设有60个校区、 40个国际合作伙伴。文凭获得国家认可，录入国家专业认证目录，被世界教育服务机构 (WES) 和中国 教育部留学服务中心 (CSCSE)等国际机构所认可。<br/>为合作者提供：<br/>• 全球认可的不同专业的文凭<br/>• 学术内容和模式<br/>• 享有一定的自主权<br/>• 支持性服务<br/>• 灵活的定价策略<br/>• 年度审核和改进反馈<br/>• 学习考察<br/>• 学生及教师的互访交流<br/>合作伙伴类型：<br/>• 双学位<br/>• 授权<br/>• 学位衔接课程（专升本/本升硕/硕升博）",
  },
  {
    id: "13",
    schoolName: "加拿大拉萨尔温哥华设计学院（ LaSalle College Vancouver）",
    highLight:
      "提供丰富的文化体验和创意产业，<br/>有利于那些寻求灵感和创意职业机会的学生",
    content:
      "• 自65年前在蒙特利尔成立第一所学院以来，拉萨尔教育开发了一种经过验证的，高效的，灵活的教育模式，旨在通过高质量的教学为学生的个人，专业和社会发展提供装备。<br/>• 拉萨尔教育是一个多元化的学习社区，由12所精选的高等教育机构组成，在五大洲设有23个校区，每年有2000名同事参与教育全球超过2万名学习者。<br/>• 加拿大 拉萨尔温哥华设计学院 有悠久的历史，建校于1979年，位于温哥华的东温。学校提供4个本科学士学位课程(游戏设计与编程，平面设计，室内设计),18个高等教育文凭课程(电影制作与后期特效，动画，3D建模，录音艺术等),以及若干证书课程。其中“游戏设计专业”从2010年开始被普林斯顿评论(Princeton Review)连续被评为北美前十的学校(加拿大第一)。本科和副学士课程的毕业生可以获得三年工签，可以申请加拿大移民。",
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
