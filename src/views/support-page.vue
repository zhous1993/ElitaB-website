<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:10
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-12-05 15:10:51
 * @FilePath: \website-edu\src\views\aboutus-page.vue
 *
-->
<template>
  <div>
    <CommonBanner
      title="励英教育·客户支持"
      :img="imgList[0]"
      sub-title="提高在职业教育中进行构建和服务的速度"
      icon="''"
    >
    </CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />
    <div class="content relative">
      <div>
        <div class="grid grid-cols-3 gap-7 grid-rows-[21.88rem,21.88rem] mb-10">
          <div
            class="bg-[#F7F8F8] px-11 flex flex-col items-center"
            v-for="(item, index) in itemList"
            :key="item.title"
          >
            <img class="w-[5.63rem] mt-8" :src="imgList[index + 1]" alt="" />
            <div class="font-pingfang-b text-[#333] text-2xl my-7">
              {{ item.title }}
            </div>
            <div class="font-pingfang-r text-lg indent-lg">{{ item.desc }}</div>
          </div>
          <div
            class="bg-[#F7F8F8] px-11 flex flex-col items-center justify-center"
            :key="6"
          >
            <div class="text-[3rem] font-semibold">···</div>
          </div>
        </div>
      </div>
    </div>
    <ToTop class="pb-12" />
  </div>
</template>
<script setup lang="ts">
import config from "@/config";

const { cdn } = config;
const STATIC_PATH = `/images/support/`;
const imgList = [
  `${STATIC_PATH}banner.png`,
  `${STATIC_PATH}ico_01.png`,
  `${STATIC_PATH}ico_02.png`,
  `${STATIC_PATH}ico_03.png`,
  `${STATIC_PATH}ico_04.png`,
  `${STATIC_PATH}ico_05.png`,
  `${STATIC_PATH}ico_06.png`,
];
const itemList = [
  { title: "解决方案", desc: "按需定制个性化产品与解决方案，精准匹配。 " },
  {
    title: "专属服务",
    desc: "提供全天候、一站式、多通道的专属服务。",
  },
  {
    title: "信息安全",
    desc: "安全管理，机制与流程的合规性；可视化监控平台。",
  },
  {
    title: "管理咨询",
    desc: "按需定制个性化产品与解决方案，精准匹配资源与服务。",
  },
  {
    title: "连接伙伴",
    desc: "为院校、企业链接，形成伙伴。",
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
    position: relative;
  }

  p {
    text-indent: 2em;
    line-height: 48px;
  }
  .contact {
    background: rgba(247, 248, 248, 1);
    .title {
      font-size: 1.5rem;
      line-height: 3rem;
      font-family: PingFangSC-Semibold;
      color: #333;
      font-weight: bold;
    }
    div {
      font-size: 1.13rem;
      font-family: PingFangSC-Regular;
      color: #333;
      line-height: 3rem;
    }
  }
}
</style>
