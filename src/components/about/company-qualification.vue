<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-02-28 15:45:33
 * @FilePath: \website-edu\src\components\about\company-qualification.vue
 *
-->
<template>
  <div class="company-wrap pb-6">
    <SkillTitle>公司资质</SkillTitle>
    <div class="company">
      <div v-for="i of 10" :key="i" class="item">
        <img :src="`${cdn}/about/bot${i}.jpg`" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from "@/config";

const { cdn } = config;
</script>

<style lang="scss" scoped>
.company-wrap {
  background: $grey-bg-color;
  .company {
    width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 228px);
    grid-gap: 10px;
    .item {
      overflow: hidden;
      border-radius: $br-base;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .desc {
        position: absolute;
        color: #777;
        left: 0;
        top: 0;
        color: white;
        line-height: 36px;
        .btn {
          position: absolute;
          right: 20px;
          bottom: 30px;
          color: $theme-color;
        }
      }
    }
  }
}
</style>
