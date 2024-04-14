<template>
  <div>
    <CommonBanner
      title="技能评测"
      :sub-title="'“以技能优先”的高效人岗匹配就业模式，<br/>以“科技创新”让就业更精准、更可靠且更公平'"
      :img="imgList[0]"
      :icon="'/product/jiubyte/icon.png'"
    ></CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />

    <div class="content relative">
      <div class="mb-24 flex">
        <p class="mr-6.31rem">
          伴随着数字经济的发展，职业教育学科培养呈现多元化趋势。IT工程师、数字营销师等已成为当前职业教育热门培养方向，其就业市场供不应求。面对企业数字化转型的用人需求和人才就业需求，如何对接供求两端，
          实现“精准就业”，这是人才培养计划中的关键一环。励英教育发
          挥自身“教育+科技”企业优势，成立JiuByte创新项目，通过采用AI深度学习和多层次的算法方式，实现人才技能精准评测。同时，建立企业岗位
          技能大数据模型，实现“以技能优先”的高效人岗匹配就业模式，以“科技创新”让就业更精准、更可靠且更公平。
        </p>
        <div class="text-center">
          <img class="w-40rem" :src="imgList[1]" alt="" />
        </div>
      </div>

      <div class="mb-24">
        <Title1 class="mb-11">IT人才精准就业解决方案</Title1>
        <div class="card">
          <img class="w-40rem" :src="imgList[2]" alt="" />
          <div class="card-content">
            <p>
              通过建立IT工程师各岗位技能知识图谱，组建具有超5000道经过行业专家认可试题的测试库，以AI算法自适应的出题方式，全面精准评测IT工程师技能水平，为其精准匹配定制化企业岗位，实现以“技能优先”的人岗匹配就业模式。
            </p>
            <div
              class="button flex justify-center items-center mt-10"
              @click.stop="locationTo('https://www.jiubyte.com/')"
            >
              查看详情
              <img
                class="light-arrow-right ml-2 w-1rem"
                :src="cdn + '/icon/home-icon/arrow-right.svg'"
                alt=""
              />
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="ml-2 dark-arrow-right"
              >
                <!-- Generator: Sketch 59 (86127) - https://sketch.com -->
                <title>按钮-查看详细</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="页面-2"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="画板"
                    transform="translate(-243.000000, -98.000000)"
                    fill-rule="nonzero"
                  >
                    <g
                      id="按钮-查看详细"
                      transform="translate(80.000000, 78.000000)"
                    >
                      <g
                        id="icon/更多备份"
                        transform="translate(171.000000, 28.000000) scale(-1, 1) translate(-171.000000, -28.000000) translate(163.000000, 20.000000)"
                      >
                        <rect
                          id="矩形"
                          fill="#000000"
                          opacity="0"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        ></rect>
                        <path
                          id="路径"
                          d="M10.4995028,14.2499933 C10.3075124,14.2499933 10.1154952,14.1769923 9.96900953,14.0305067 L4.46950678,8.53100389 C4.17650853,8.23851633 4.17650853,7.76349952 4.46950678,7.47050127 L9.96900955,1.97048784 C10.2620078,1.67748959 10.7365139,1.67748959 11.0295122,1.97048784 C11.3225104,2.26297541 11.3225104,2.73799222 11.0295122,3.03099047 L6.06050262,8.00048381 L11.0295122,12.9694933 C11.3225104,13.2624916 11.3225104,13.7369977 11.0295122,14.029996 C10.8835103,14.1769923 10.6914931,14.2499933 10.4995028,14.2499933 Z"
                          fill="#333"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="mb-11">科技企业招聘解决方案</Title1>
        <div class="card">
          <div class="card-content">
            <p>
              科技企业在IT工程师的招聘中同时面临着“找不到”、“找不准”的两大用人困境。JiuByte通过建立IT工程师就业服务平台，成为IT工程师人才聚集地，解决企业“找不到”的困境；通过大数据模型为企业建立岗位技能数据模型，通过AI算法精确评测，精准匹配合适的候选人，解决企业“找不准”的困境。目前已有更多先进科技企业如IT互联网、金融科技、工业互联网等相关企业正使用JiuByte招聘平台甄选候选人。“让企业招聘决策更快捷，更准确，更智能”是我们的使命宣言。
            </p>
            <div
              class="button flex justify-center items-center mt-10"
              @click.stop="locationTo('https://www.jiubyte.com/')"
            >
              查看详情
              <img
                class="light-arrow-right ml-2 w-1rem"
                :src="cdn + '/icon/home-icon/arrow-right.svg'"
                alt=""
              />
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="ml-2 dark-arrow-right"
              >
                <!-- Generator: Sketch 59 (86127) - https://sketch.com -->
                <title>按钮-查看详细</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="页面-2"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="画板"
                    transform="translate(-243.000000, -98.000000)"
                    fill-rule="nonzero"
                  >
                    <g
                      id="按钮-查看详细"
                      transform="translate(80.000000, 78.000000)"
                    >
                      <g
                        id="icon/更多备份"
                        transform="translate(171.000000, 28.000000) scale(-1, 1) translate(-171.000000, -28.000000) translate(163.000000, 20.000000)"
                      >
                        <rect
                          id="矩形"
                          fill="#000000"
                          opacity="0"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        ></rect>
                        <path
                          id="路径"
                          d="M10.4995028,14.2499933 C10.3075124,14.2499933 10.1154952,14.1769923 9.96900953,14.0305067 L4.46950678,8.53100389 C4.17650853,8.23851633 4.17650853,7.76349952 4.46950678,7.47050127 L9.96900955,1.97048784 C10.2620078,1.67748959 10.7365139,1.67748959 11.0295122,1.97048784 C11.3225104,2.26297541 11.3225104,2.73799222 11.0295122,3.03099047 L6.06050262,8.00048381 L11.0295122,12.9694933 C11.3225104,13.2624916 11.3225104,13.7369977 11.0295122,14.029996 C10.8835103,14.1769923 10.6914931,14.2499933 10.4995028,14.2499933 Z"
                          fill="#333"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <img class="w-40rem" :src="imgList[3]" alt="" />
        </div>
      </div>
      <div>
        <Title1 class="mb-11">国内高校专业共建解决方案</Title1>
        <div class="card">
          <img class="w-40rem" :src="imgList[4]" alt="" />

          <div class="card-content">
            <div class="font-pingfang-b">招生——共建数字化特色专业</div>
            <p style="text-indent: 0em" class="mb-10">
              JiuByte以知识图谱与技能图谱为依托，为学校提供丰富的IT行业底层知识信息全景图和学习资源库；随着B端企业的链接增加与岗位画像的丰富，为学校提供全套大数据咨询方案，包括诊断式的专业报告、就业趋势辅助意见等。
            </p>
            <div class="font-pingfang-b">
              就业——就业出口精准匹配，提升精准就业率
            </div>
            <p style="text-indent: 0em">
              不同于传统产教融合模式中“订单班”这种针对特定企业少量学员的培养选拔模式，JiuByte借助大数据设定行业用人标准，并形成统一技能标准，与大量企业合作，解决批量学员的就业问题。
            </p>
            <div
              class="button flex justify-center items-center mt-10"
              @click.stop="locationTo('https://www.jiubyte.com/')"
            >
              查看详情
              <img
                class="light-arrow-right ml-2 w-1rem"
                :src="cdn + '/icon/home-icon/arrow-right.svg'"
                alt=""
              />
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="ml-2 dark-arrow-right"
              >
                <!-- Generator: Sketch 59 (86127) - https://sketch.com -->
                <title>按钮-查看详细</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="页面-2"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="画板"
                    transform="translate(-243.000000, -98.000000)"
                    fill-rule="nonzero"
                  >
                    <g
                      id="按钮-查看详细"
                      transform="translate(80.000000, 78.000000)"
                    >
                      <g
                        id="icon/更多备份"
                        transform="translate(171.000000, 28.000000) scale(-1, 1) translate(-171.000000, -28.000000) translate(163.000000, 20.000000)"
                      >
                        <rect
                          id="矩形"
                          fill="#000000"
                          opacity="0"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        ></rect>
                        <path
                          id="路径"
                          d="M10.4995028,14.2499933 C10.3075124,14.2499933 10.1154952,14.1769923 9.96900953,14.0305067 L4.46950678,8.53100389 C4.17650853,8.23851633 4.17650853,7.76349952 4.46950678,7.47050127 L9.96900955,1.97048784 C10.2620078,1.67748959 10.7365139,1.67748959 11.0295122,1.97048784 C11.3225104,2.26297541 11.3225104,2.73799222 11.0295122,3.03099047 L6.06050262,8.00048381 L11.0295122,12.9694933 C11.3225104,13.2624916 11.3225104,13.7369977 11.0295122,14.029996 C10.8835103,14.1769923 10.6914931,14.2499933 10.4995028,14.2499933 Z"
                          fill="#333"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-12">
      <ToTop />
    </div>
    <Apply :type="5" />
  </div>
</template>
<script lang="ts" setup>
import config from "@/config";
import { locationTo } from "@/utils/func";

const STATIC_PATH = `${config.cdn}/product/jiubyte/`;
const { cdn } = config;
const imgList = [
  `${STATIC_PATH}banner.png`,
  `${STATIC_PATH}pic_01.png`,
  `${STATIC_PATH}pic_02.png`,
  `${STATIC_PATH}pic_03.png`,
  `${STATIC_PATH}pic_04.png`,
  `${STATIC_PATH}pic_05.png`,
  `${STATIC_PATH}digital.png`,
  `${STATIC_PATH}beauty.png`,
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
    max-width: none;
  }

  p {
    text-indent: 2em;
    line-height: 3rem;
  }
}
.card {
  width: 90rem;
  background: rgba(247, 248, 248, 1);
  display: flex;
  .card-content {
    padding: 2.5rem;
    line-height: 2.25rem;
    .font-pingfang-b {
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 2.25rem;
      color: #333333;
    }
  }
}
.button {
  width: 9rem;
  height: 3.5rem;

  border: 1px solid #333333;
  text-align: center;
  color: rgba(51, 51, 51, 1);
  cursor: pointer;
  font-size: 1rem;
  .dark-arrow-right {
    display: block;
  }
  .light-arrow-right {
    display: none;
  }
  &:hover {
    background: $theme-color;
    color: white;
    border-color: $theme-color;
    .dark-arrow-right {
      display: none;
    }
    .light-arrow-right {
      display: block;
    }
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
