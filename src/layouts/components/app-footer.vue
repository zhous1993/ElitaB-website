<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-16EDV1I\zs_lq zhous0310@gmail.com
 * @LastEditTime: 2024-04-14 18:44:16
 * @FilePath: \website-edu\src\layouts\components\app-footer.vue
 *
-->
<template>
  <div class="app-footer">
    <div class="footer-content">
      <div class="flex justify-between h-16.4rem pt-10">
        <div>
          <img class="w-[7.5rem]" :src="cdn + '/logo-white.png'" alt="" />
          <div class="flex items-start mt-8">
            <img
              class="mr-2 mt-1 w-1rem"
              :src="cdn + '/icon/home-icon/ico-location.png'"
              alt=""
            />
            <div class="leading-5">北京亦庄开发区国锐广场B座912</div>
          </div>
          <div class="flex items-start mt-4">
            <img
              class="mr-2 mt-1 w-1rem"
              :src="cdn + '/icon/home-icon/ico-phone.png'"
              alt=""
            />
            <div class="leading-6">孙老师 13911639807</div>
          </div>
          <div class="flex items-start mt-4">
            <img
              class="mr-2 mt-1 w-1rem"
              :src="cdn + '/icon/home-icon/ico-mail.png'"
              alt=""
            />
            <div class="leading-6">info@elitab.top</div>
          </div>
        </div>
        <div v-for="item in extraLinks" :key="item.title">
          <div class="text-white font-semibold text-xl mb-4">
            {{ item.title }}
          </div>
          <div v-for="child in item.children" :key="child.name" class="my-1">
            <a :href="child.link">
              {{ child.name }}
            </a>
          </div>
          <div
            v-if="item.title == '平台产品'"
            class="relative flex items-center hover:text-white mini-program link"
          >
            <!-- <img
                class="mr-2 light"
                :src="cdn + '/icon/home-icon/ico-miniprogram.svg'"
                alt=""
              />
              <img
                class="mr-2 dark"
                :src="cdn + '/icon/home-icon/ico-miniprogram-dark.svg'"
                alt=""
              /> -->
            <span style="line-height: 1.13rem"
              >中汇中职学业水平备考<br />微信小程序</span
            >
            <img
              class="absolute qrcode animate-animated animate-fade-in-up"
              :src="cdn + '/home/mini-program.png'"
              alt=""
            />
          </div>
        </div>
        <div>
          <div class="text-white font-semibold text-xl mb-4">关于我们</div>
          <div class="my-1 flex items-center hover:text-white link">
            <!-- <img
                class="mr-2 light"
                :src="cdn + '/icon/home-icon/ico-link.svg'"
                alt=""
              />
              <img
                class="mr-2 dark"
                :src="cdn + '/icon/home-icon/ico-link-dark.svg'"
                alt=""
              /> -->
            <span>
              <a href="/about"> 企业介绍 </a>
            </span>
          </div>
          <div class="my-1 flex items-center hover:text-white link">
            <!-- <img
                class="mr-2 light"
                :src="cdn + '/icon/home-icon/ico-link.svg'"
                alt=""
              />
              <img
                class="mr-2 dark"
                :src="cdn + '/icon/home-icon/ico-link-dark.svg'"
                alt=""
              /> -->
            <span>
              <a href="/about"> 联系我们 </a>
            </span>
          </div>

          <!-- <div
              class="relative flex items-center mt-4 hover:text-white mini-program link"
            >
              <img
                class="mr-2 light"
                :src="cdn + '/icon/home-icon/ico-miniprogram.svg'"
                alt=""
              />
              <img
                class="mr-2 dark"
                :src="cdn + '/icon/home-icon/ico-miniprogram-dark.svg'"
                alt=""
              />
              <span>中汇中职学业水平备考微信小程序</span>
              <img
                class="absolute qrcode animate-animated animate-fade-in-up"
                :src="cdn + '/home/mini-program.png'"
                alt=""
              />
            </div> -->
        </div>
      </div>
      <div class="copyright p-6 flex justify-center">
        <span>{{ copyright }}</span>
        <span class="px-2">
          <a href="https://beian.miit.gov.cn/" target="_blank">{{
            icp
          }}</a></span
        >
        <span class="px-2 flex items-center justify-center">
          <img src="/gw.png" alt="" />

          <a href="https://www.beian.gov.cn/" target="_blank">
            {{ ba }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from "@/config";
import { locationTo } from "@/utils/func";

const { cdn } = config;
const { copyright, icp, ba } = config;
const extraLinks = [
  {
    title: "主要业务",
    children: [
      { name: "联合培养项目", link: "/joint-training" },
      { name: "中外合作办学项目", link: "/Sino-foreign" },
      { name: "国际高中", link: "/high-school" },
      { name: "微留学", link: "/Micro-study-abroad" },
    ],
  },
];
const handleClick = (link: string) => {
  locationTo(link);
};
</script>

<style lang="scss" scoped>
.app-footer {
  height: 21.44rem;
  color: #999;
  width: 100%;
  background-image: url("https://pubcdn.aicloud-edu.com/pub/site/home/footer-bg.png");
  background-size: cover;
  font-size: 1rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  z-index: 9999;
  .footer-content {
    width: 90rem;
    margin: auto;
    .link {
      .dark {
        width: 0.89rem;
        display: inline-block;
      }
      .light {
        width: 0.89rem;
        display: none;
      }
      &:hover {
        .dark {
          display: none;
        }
        .light {
          display: inline-block;
        }
      }
    }
    .mini-program {
      .qrcode {
        display: none;
        top: -7.25rem;
        left: 50%;
        transform: translateX(-50%);
        width: 6.25rem;
      }
      &:hover {
        .qrcode {
          display: inline-block;
        }
      }
    }
    a {
      &:hover {
        color: white;
      }
    }
  }
  .extra-link {
    div:not(:last-child) {
      border-right: 1px solid #ddd;
    }
    div:hover {
      color: $theme-color;
    }
  }
  .copyright {
    color: #999;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    span {
      img {
        vertical-align: middle;
      }
      a {
        text-decoration: none;
        color: #999;
        vertical-align: middle;
        &:hover {
          color: white;
        }
      }
    }
  }
}
</style>
