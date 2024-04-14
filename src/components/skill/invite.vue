<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2022-08-09 11:06:36
 * @FilePath: \website-edu\src\components\skill\invite.vue
 *
-->
<template>
  <div class="invite-wrap pb-6">
    <SkillTitle>科技企业招聘解决方案</SkillTitle>
    <div class="invite">
      <div>
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/skill/mid2.png"
          alt=""
        />
        <!-- <div>了解详情</div> -->
      </div>
      <div class="desc py-4">
        科技企业在IT工程师的招聘中同时面临着“找不到”、“找不准”的两大用人困境。JiuByte通过建立IT工程师就业服务平台，成为IT工程师人才聚集地，解决企业“找不到”的困境；通过大数据模型为企业建立岗位技能数据模型，通过AI算法精确评测，精准匹配合适的候选人，解决企业“找不准”的困境。目前已有更多先进科技企业如IT互联网、金融科技、工业互联网等相关企业正使用JiuByte招聘平台甄选候选人。“让企业招聘决策更快捷，更准确，更智能”是我们的使命宣言。
      </div>
      <div class="d-flex-center">
        <div
          class="btn d-flex-center fs-sm pointer"
          @click="locationTo('http://www.jiubyte.com')"
        >
          点击查看
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { locationTo } from "@/utils/func";
</script>

<style lang="scss" scoped>
.invite-wrap {
  background: $grey-bg-color;
  .invite {
    width: $content-width;
    margin: auto;
    .desc {
      position: relative;
      color: #777;
      line-height: 48px;
      border-radius: $br-base;
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
      margin-top: 40px;
      &:hover {
        background: linear-gradient(270deg, #c7000b 0%, #c7000b 100%);
        box-shadow: 0px 4px 12px 0px rgba(199, 0, 11, 0.3);
      }
    }
  }
}
</style>
