<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:10
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-12-06 15:54:58
 * @FilePath: \website-edu\src\views\aboutus-page.vue
 *
-->
<template>
  <div>
    <CommonBanner
      title="关于我们"
      :img="imgList[0]"
      sub-title=""
      icon="/about/icon.png"
    >
    </CommonBanner>
    <img class="top-bg" :src="cdn + '/content-top-bg.png'" alt="" />
    <img class="footer-bg" :src="cdn + '/content-footer-bg.png'" alt="" />
    <div class="content">
      <div class="mb-24">
        <Title1 class="mb-10">中汇集团控股有限公司</Title1>
        <div class="text-center">
          <img class="w-full" :src="imgList[1]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="mb-10">企业介绍</Title1>
        <div class="text-center mb-20">
          <img class="w-full" :src="imgList[2]" alt="" />
        </div>
        <Title2 class="mb-5">产教融合战略</Title2>
        <div class="text-center">
          <img class="w-full" :src="imgList[3]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="mb-10">励英教育战略定位</Title1>
        <div class="text-center">
          <img class="w-full" :src="imgList[4]" alt="" />
        </div>
      </div>
      <div class="mb-24">
        <Title1 class="mb-10">拥有科技能力与资质</Title1>
        <div class="qualifications">
          <div>
            <img class="w-full" :src="imgList[6]" alt="" />
          </div>
          <div>
            <img class="w-full" :src="imgList[7]" alt="" />
          </div>
          <div>
            <img class="w-full" :src="imgList[8]" alt="" />
          </div>
          <div>
            <img class="w-full" :src="imgList[9]" alt="" />
          </div>
        </div>
        <div class="qualifications2">
          <div>
            <img class="w-full" :src="imgList[10]" alt="" />
          </div>
          <div>
            <img class="w-full" :src="imgList[11]" alt="" />
          </div>
          <div class="relative flex flex-col justify-between p-10">
            <img
              class="!absolute left-0 top-0 w-full h-full z-0"
              :src="imgList[12]"
              alt=""
            />
            <div class="relative text-xl font-semibold">高科技企业</div>
            <div class="relative text-xl font-semibold">两项专利（审批中）</div>
            <div class="relative text-xl font-semibold">
              在技术、安全、服务等方面导入国际标准和行业标准
            </div>
            <div class="relative text-xl font-semibold">
              保障体系规范健康发展
            </div>
          </div>
        </div>
      </div>
      <div>
        <Title1 class="mb-10">联系我们</Title1>
        <div class="contact flex">
          <img class="w-36.25rem" :src="imgList[5]" alt="" />
          <div class="flex-1 pl-16 pt-14">
            <div class="title">励英教育（深圳）有限责任公司</div>
            <div>
              地址：深圳市南山区香港中文大学深圳研究院李伟波楼308、309、814
            </div>
            <div>联系电话：400-180-9969</div>
            <div>邮箱：zhservice@aicloud-edu.com</div>
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
const STATIC_PATH = `${cdn}/about/`;
const imgList = [
  `${STATIC_PATH}banner.png`,
  `${STATIC_PATH}pic_about_01.png`,
  `${STATIC_PATH}pic_about_02.png`,
  `${STATIC_PATH}pic_about_03.png`,
  `${STATIC_PATH}pic_about_04.png`,
  `${STATIC_PATH}pic_about_05.png`,
  `${STATIC_PATH}pic_qualifications_1.png`,
  `${STATIC_PATH}pic_qualifications_2.png`,
  `${STATIC_PATH}pic_qualifications_3.png`,
  `${STATIC_PATH}pic_qualifications_4.png`,
  `${STATIC_PATH}pic_qualifications_5.png`,
  `${STATIC_PATH}pic_qualifications_6.png`,
  `${STATIC_PATH}pic_qualifications_7_bg.png`,
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
  .qualifications {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    grid-template-rows: 28.94rem;
    gap: 0.63rem;
    img {
      height: 100%;
    }
  }
  .qualifications2 {
    margin-top: 0.63rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 15.25rem;
    gap: 0.63rem;
    img {
      height: 100%;
    }
    color: white;
  }
}
</style>
