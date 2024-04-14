<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-02-21 14:59:00
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-03-06 10:57:35
 * @FilePath: \website-edu\src\components\home\our-strength.vue
 *
-->
<template>
  <div class="wrapper flex justify-center items-center">
    <img class="wrapper-bg" :src="cdn + '/home/our-strength.png'" alt="" />
    <div class="content">
      <div class="desc mt-8rem animate-animated animate-fade-in-up">
        <div class="title font-semibold text-56px">我们的实力</div>
        <div
          class="bottom-block mt-2 animate-animated animate-fade-in-up"
        ></div>
        <div
          class="detail my-8 text-lg animate-animated animate-fade-in-up animate-delay-500"
        >
          励英教育中心坚持校企合作，优势互补，依托大数据、人工智能、云计算等现代信息技术的积累与应用，构建产教融合新生态，探索新时代职业教育体系建设的新路，以信息技术和优质产业资源整合能力助推职业教育的高质量发展。
        </div>
        <div
          class="button flex items-center justify-center text-lg animate-animated animate-fade-in-up animate-delay-500"
          @click="locationTo('/about')"
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
      <div class="grid grid-cols-4 card relative gap-10 mt-8.13rem">
        <div
          class="card-item animate-animated animate-fade-in-up animate-delay-500"
        >
          <div class="flex items-end">
            <div class="num mr-2"><CountUp :target="20" :delay="1000" /></div>
            <div class="flex-1">
              <div class="flex justify-between items-end">
                <span class="plus">+</span>
                <img
                  class="w-2.98rem"
                  :src="cdn + '/icon/home-icon/experience.svg'"
                  alt=""
                />
              </div>
              <div class="text-2xl text-dark">年行业经验</div>
            </div>
          </div>
          <div class="card-desc mt-4 text-lg">
            创始团队深耕教育20余载，有深刻的行业理解、强大的行业资源和良好的行业口碑
          </div>
        </div>
        <div
          class="card-item animate-animated animate-fade-in-up animate-delay-500"
        >
          <div class="flex items-end">
            <div class="num mr-2">
              <CountUp :target="60" :delay="1000" />
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-end">
                <span class="plus">+</span>
                <img
                  class="w-2.98rem"
                  :src="cdn + '/icon/home-icon/product.svg'"
                  alt=""
                />
              </div>
              <div class="text-2xl text-dark">项产品</div>
            </div>
          </div>
          <div class="card-desc mt-4 text-lg">
            与60+家行业龙头骨干企业共建教育产品线6条，自主研发/整合教育数字化产品150+项
          </div>
        </div>
        <div
          class="card-item animate-animated animate-fade-in-up animate-delay-500"
        >
          <div class="flex items-end">
            <div class="num mr-2"><CountUp :target="100" :delay="1000" /></div>
            <div class="flex-1">
              <div class="flex justify-between items-end">
                <span class="plus">+</span>
                <img
                  class="w-2.98rem"
                  :src="cdn + '/icon/home-icon/college.svg'"
                  alt=""
                />
              </div>
              <div class="text-2xl text-dark">合作院校</div>
            </div>
          </div>
          <div class="card-desc mt-4 text-lg">
            合作国内高水平大学20+所，服务优质高职院校50+家
          </div>
        </div>
        <div
          class="card-item animate-animated animate-fade-in-up animate-delay-500"
        >
          <div class="flex items-end">
            <div class="num mr-2"><CountUp :target="20" :delay="1000" /></div>
            <div class="flex-1">
              <div class="flex justify-between items-end">
                <span class="plus">+</span>
                <img
                  class="w-2.98rem"
                  :src="cdn + '/icon/home-icon/services.svg'"
                  alt=""
                />
              </div>
              <div class="text-2xl text-dark">服务中心</div>
            </div>
          </div>
          <div class="card-desc mt-4 text-lg">
            全国20+省（市）设置服务中心，提供落地支持服务
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import config from "@/config";
import { locationTo } from "@/utils/func";

const { cdn } = config;
</script>
<style scoped lang="scss">
.wrapper {
  background: white;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .wrapper-bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
  }

  .content {
    width: 90rem;
    margin: auto;
    .desc {
      position: relative;
      .title {
        font-size: 3.5rem;
        color: #333;
        font-family: PingFangSC-Semibold, PingFang SC;
        line-height: 5.63rem !important;
      }
      .bottom-block {
        height: 0.25rem;
        background: rgba(195, 20, 31, 1);
        width: 4.5rem;
      }
      .detail {
        width: 36.06rem;
        line-height: 2rem;
        color: #333;
        font-family: PingFangSC-Regular, PingFang SC;
      }
      .button {
        width: 9rem;
        height: 3.5rem;
        border: 1px solid #333;
        color: #333;
        text-align: center;
        cursor: pointer;
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
    }
    .card {
      grid-template-rows: 15rem;
      .card-item {
        background: white;
        padding: 2rem;
        transition: all 0.5s;
        box-shadow: 0px 8px 56px 0px rgba(51, 51, 51, 0.32);

        .num {
          font-size: 3.5rem;
          line-height: 3.5rem;
          font-weight: 500;
          color: $theme-color;
          font-family: PingFangSC-En;
        }
        .plus {
          font-size: 2rem;
          color: $theme-color;
          // line-height: 32px;
        }
      }
    }
  }
}
</style>
