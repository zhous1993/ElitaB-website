<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:10
 * @LastEditors: DESKTOP-16EDV1I\zs_lq zhous0310@gmail.com
 * @LastEditTime: 2024-04-14 18:28:28
 * @FilePath: \website-edu\src\views\home-page.vue
 *
-->
<template>
  <div>
    <AppHeader :index="current.activeIndex"></AppHeader>
    <div
      class="home-container"
      :class="{ light: current.activeIndex == 2 }"
      @mousewheel.stop="false"
    >
      <swiper
        :effect="'creative'"
        :creative-effect="{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: [0, '100%', 0],
          },
        }"
        :modules="modules"
        :direction="'vertical'"
        :mousewheel="{
          thresholdDelta: 3,
          releaseOnEdges: true,
          thresholdTime: 500,
          sensitivity: 0.5,
        }"
        class="swiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-slot="{ isActive }">
          <Banner v-show="isActive" />
        </swiper-slide>
        <!-- <swiper-slide v-slot="{ isActive }"
          ><OurStrength v-if="isActive"
        /></swiper-slide> -->
        <swiper-slide v-slot="{ isActive }">
          <Project v-show="isActive" />
        </swiper-slide>
        <swiper-slide v-slot="{ isActive }">
          <ContactUs v-if="isActive" />
        </swiper-slide>
      </swiper>
      <div class="right-side-nav flex flex-col justify-center items-end">
        <!-- <div class="link-name" :class="{ dark: current.activeIndex == 2 }">
          Aicloud-edu
        </div> -->
        <div class="item-list">
          <div
            v-for="(item, index) in itemList"
            :key="item"
            class="mb-6 flex flex-col items-end item cursor-pointer"
            :class="{
              active: index == current.activeIndex,
            }"
            @click="handleSlide(index)"
          >
            <span class="icon"></span>
            <!-- <span v-if="index == current.activeIndex" class="mt-2">{{
              item
            }}</span> -->
          </div>
        </div>
        <!-- <img
          :src="
            cdn +
            (current.activeIndex == 2
              ? '/icon/home-icon/ico-right-arrow-down-dark.svg'
              : '/icon/home-icon/ico-right-arrow-down.svg')
          "
          alt=""
          class="h-7.5rem"
        /> -->
      </div>
      <div class="left-side-nav">
        <div
          class="nav-item rounded-1/2 flex justify-center items-center transition-all duration-200"
          @click="handleNextOrPrev"
        >
          <img
            :src="cdn + '/icon/home-icon/left-arrow-down.svg'"
            alt=""
            class="transition-all duration-500"
            :class="{ 'transform rotate-180': current.activeIndex == 2 }"
          />
        </div>
        <!-- <div
          class="nav-item mt-6 rounded-1/2 flex justify-center items-center relative"
        >
          <img src="/icon/home-icon/left-wechat.svg" alt="" />
          <img
            class="qrcode absolute w-100px"
            :src="cdn + '/home/wechat-qrcode.png'"
            alt=""
          />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";
import { Mousewheel, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import ContactUs from "@/components/home/contact-us.vue";
import config from "@/config";
import AppHeader from "@/components/home/app-header.vue";

const { cdn } = config;
const itemList = ["首页", "我们的业务", "联系我们"];
const current = reactive<any>({
  mode: "dark",
  swiper: null,
  activeIndex: 0,
  freeMode: { enabled: false },
  mouseWheel: true,
});
const modules = [Mousewheel, EffectCreative];
const onSlideChange = (e: any) => {
  current.activeIndex = e.activeIndex;
  switch (current.activeIndex) {
    case 0:
    case 2:
      current.mode = "dark";
      break;
    case 1:
    case 3:
      current.mode = "light";
      break;
    default:
      current.mode = "dark";
      break;
  }
};
const onSwiper = (i: any) => {
  current.swiper = i;
};

const handleNextOrPrev = () => {
  if (current.activeIndex < 2) {
    current.swiper.slideNext();
  } else {
    current.swiper.slideTo(0);
  }
};
const handleSlide = (index: number) => {
  current.swiper.slideTo(index);
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
  .left-side-nav {
    position: absolute;
    left: 80px;
    bottom: 128px;
    z-index: 1;

    .nav-item {
      width: 4rem;
      height: 4rem;
      background: rgba(0, 0, 0, 1);
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
      &:nth-child(2) {
        background: rgba(51, 51, 51, 0.6);
        .qrcode {
          right: -7.5rem;
          opacity: 0;
          transition: all 1s;
          width: 6.25rem !important;
          max-width: none;
        }
        &:hover {
          background: rgba(51, 51, 51, 1);
          .qrcode {
            opacity: 1;
          }
        }
      }
    }
  }
  .right-side-nav {
    position: absolute;
    right: 5rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    text-align: right;
    height: 46rem;
    overflow: hidden;
    .link-name {
      width: 1.81rem;
      height: 7.56rem;
      font-size: 1.2rem;
      // font-family: PingFangSC-En, PingFang SC;
      font-weight: 100;
      color: white;
      line-height: 1.81rem;
      writing-mode: vertical-rl;
      white-space: nowrap;
      &.dark {
        color: rgba(72, 77, 84, 1);
      }
    }
    img {
      position: relative;
      z-index: 10;
    }
    .item-list {
      .item {
        &.active {
          color: white;
          .icon {
            background: white;
          }
        }
        &.dark {
          .icon {
            border-color: rgba(72, 77, 84, 1);
          }
          &.active {
            color: rgba(72, 77, 84, 1);
            .icon {
              background: rgba(72, 77, 84, 1);
            }
          }
        }
      }
    }
    .icon {
      display: block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid white;
    }
  }
  &.light {
    .left-side-nav {
      .nav-item {
        &:nth-child(2) {
          background: rgba(51, 51, 51, 0.6);
        }
      }
    }
  }
}
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
}

my-bullet {
  margin-bottom: 1.5rem;
}
</style>
