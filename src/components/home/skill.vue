<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2022-08-23 14:06:59
 * @FilePath: \website-edu\src\components\home\skill.vue
 *
-->
<template>
  <div class="skill-wrap pb-6 fs-sm">
    <div class="skill">
      <img class="bg" :src="`${cdn}/home/bot3.png`" alt="" />

      <div class="desc">
        <div class="title">技能评测就业平台</div>
        <div class="content pt-2">
          JiuByte的使命是帮助卓越的企业和优秀的工程师找到彼此，打破传统求职方式，以技能论英雄；我们通过采用AI深度学习、多层次的算法方式来实现这一目标，以确保在“无偏见，无证书”的求职中，技能得到充分展示，实现就业更精准、更可靠且公平。
        </div>
        <div class="btn d-flex-center" @click="handleClick('/9byte')">
          了解详情
        </div>
      </div>
      <div>
        <img class="skill-logo" :src="`${cdn}/home/bot1.png`" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from "@/config";

const { cdn } = config;
const router = useRouter();
const handleClick = (route: string) => {
  router.push({ path: route });
};
</script>
<style lang="scss" scoped>
.skill-wrap {
  padding-top: 64px;
  position: relative;

  .skill {
    width: $content-width;
    margin: auto;
    display: grid;
    grid-template-columns: 580px 560px;
    grid-column-gap: 40px;
    .bg {
      position: absolute;
      transform: translate(-50%, -20%);
      width: 217px;
    }
    .desc {
      line-height: 32px;
      .title {
        font-size: 30px;
        font-weight: bold;
        color: $fs-dark-color;
      }
    }
    .btn {
      width: 120px;
      height: 48px;
      text-align: center;
      line-height: 48px;
      color: white;
      background: linear-gradient(270deg, #ff7f32 0%, #c7000b 100%);
      box-shadow: 0px 4px 12px 0px rgba(199, 0, 11, 0.3);
      border-radius: 4px;
      transition: all 0.3s;
      cursor: pointer;
      margin-top: 60px;
      &:hover {
        background: linear-gradient(270deg, #c7000b 0%, #c7000b 100%);
        box-shadow: 0px 4px 12px 0px rgba(199, 0, 11, 0.3);
      }
    }
  }
  .skill-logo {
    width: 578px;
  }
}
</style>
