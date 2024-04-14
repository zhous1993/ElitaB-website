<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-02-21 14:59:00
 * @LastEditors: 周松 zhous@ai-cloud.edu
 * @LastEditTime: 2024-04-12 16:35:45
 * @FilePath: \website-edu\src\components\home\project.vue
 *
-->
<template>
  <div class="wrapper">
    <img class="wrapper-bg" :src="cdn + '/home/project-bg.png'" alt="" />
    <div class="content">
      <div class="animate-animated animate-fade-in-up">
        <div class="title font-semibold text-56px">我们的业务</div>
        <div class="bottom-block mt-2"></div>
      </div>

      <div
        class="tab grid mt-9 animate-animated animate-fade-in-up"
        style="grid-template-columns: 30rem 55rem"
        ref="tabRef"
      >
        <div class="tab-header pt-4">
          <div
            v-for="(item, index) of productList"
            class="item"
            :class="{ active: currentSlide == index }"
          >
            <span
              @click="setCurrentSlide(index)"
              @mouseover="setCurrentSlide(index)"
            >
              {{ item.name }}
            </span>
          </div>
        </div>
        <div class="tab-content">
          <template v-for="item of productList" :key="item.id">
            <div
              v-if="item.id == currentSlide"
              class="relative flex items-end h-[30rem] w-[55rem] tab-item animate-animated animate-fade-in"
            >
              <img
                class="absolute left-0 top-0 w-full"
                :src="cdn + `/home/product-bg${item.id}.png`"
                alt=""
              />
              <div class="relative p-10 w-full">
                <div class="content-title">{{ item.name }}</div>
                <div class="content-desc font-pingfang-r mt-2 text-lg">
                  {{ item.desc }}
                </div>
                <div
                  class="button flex justify-center items-center mt-4"
                  v-if="item.link"
                  @click.stop="locationTo(item.link)"
                >
                  查看详情
                  <img
                    class="light-arrow-right ml-2 w-1rem"
                    :src="cdn + '/icon/home-icon/arrow-right.svg'"
                    alt=""
                  />
                  <img
                    :src="cdn + '/icon/home-icon/arrow-right-dark.svg'"
                    class="dark-arrow-right ml-2 w-1rem"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import config from "@/config";
import { locationTo } from "@/utils/func";
import useCarousel from "@/hooks/useCarousel";
const { cdn } = config;
const current = ref(0);
const tabRef = ref(null);
const productList = ref([
  {
    name: "联合培养项目",
    desc: "(专升本、专升硕)国际班—重点推荐外方院校",
    link: "/joint-training",
    id: 0,
  },
  {
    name: "中外合作办学项目",
    desc: "院校合作办学（3+0/1/2)—重点推荐外方院校",
    link: "/Sino-foreign",
    id: 1,
  },

  {
    name: "国际高中",
    desc: "国际高中—重点推荐外方院校",
    link: "/high-school",
    id: 2,
  },
  {
    name: "微留学",
    desc: "（高中生、大学生）寒暑期研学",
    link: "/Micro-study-abroad",
    id: 3,
  },
]);
const { currentSlide, setCurrentSlide } = useCarousel(3, tabRef, 2000);
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
    position: relative;
    margin-top: 13.56rem;
    .title {
      font-size: 3.5rem;
      color: #fff;
      font-family: PingFangSC-Semibold, PingFang SC;
      line-height: 5rem !important;
    }
    .bottom-block {
      height: 0.25rem;
      background: white;
      width: 4.5rem;
    }
    .tab {
      color: white;
      .tab-header {
        .item {
          font-size: 2.5rem;
          line-height: 2.8rem;
          font-weight: 600;
          margin-bottom: 5rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          color: #9db4ff;
          cursor: pointer;
          transition: font 0.5s;
          &.active {
            font-size: 2.5rem;
            border-left: 0.5rem solid #fff;
            padding-left: 1.5rem;
            color: white;
          }
          &:hover {
            color: white;
          }
        }
      }
      .tab-content {
        margin-top: -4rem;
        .tab-item {
          overflow: hidden;
          & > img {
            transition: all 0.5s;
          }
          &:hover {
            & > img {
              transform: scale(1.2);
            }
          }
        }
        .content-title {
          font-size: 2rem;
          font-weight: bold;
          line-height: 2.81rem;
        }
        .child-item {
          background-repeat: no-repeat;
          background-size: cover;
          padding: 1.8rem 2rem;
          position: relative;
          overflow: hidden;
          div {
            position: relative;
            z-index: 10;
          }
          .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            margin-left: -2rem;
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
          div:nth-child(2) {
            font-size: 1.88rem;
            font-weight: bold;
            line-height: 2rem;

            font-family: PingFangSC-Semibold, PingFang SC;
          }
          div:nth-child(3) {
            font-size: 1.13rem;
            line-height: 2rem;
          }
        }
      }
    }
    .button {
      width: 9rem;
      height: 3.5rem !important;
      border: 1px solid #fff;
      text-align: center;
      color: white;
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
  }
}
</style>
