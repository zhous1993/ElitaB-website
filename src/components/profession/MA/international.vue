<template>
  <div>
    <div class="d-flex-center mb-4">
      <img :src="imgList[2]" alt="" />
    </div>
    <div class="d-flex-center mb-4">
      <img :src="imgList[3]" alt="" />
    </div>
    <div class="d-flex-center mb-4">
      <img :src="imgList[4]" alt="" />
    </div>
    <div class="d-flex-center mb-4">
      <img :src="imgList[5]" alt="" />
    </div>
    <div class="d-flex-center mb-4">
      <img :src="imgList[6]" alt="" />
    </div>
    <div class="d-flex-center mb-4">
      <img :src="imgList[7]" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import config from "@/config";

const STATIC_PATH = config.cdn +  "/profession/MA/International/";
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
];
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
    border-bottom: 1px solid #ddd;
  }
  .sub-title {
    text-indent: 2em;
    color: $fs-dark-color;

    font-size: 18px;
    font-weight: bold;
    line-height: 48px;
  }
}
</style>
