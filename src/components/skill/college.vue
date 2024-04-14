<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2022-08-09 11:06:11
 * @FilePath: \website-edu\src\components\skill\college.vue
 *
-->
<template>
  <div class="college-wrap pb-6">
    <SkillTitle>国内高校专业共建解决方案</SkillTitle>
    <div class="college">
      <div>
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/skill/bot.png"
          alt=""
        />
        <!-- <div>了解详情</div> -->
      </div>
      <div class="desc py-4">
        招生——共建数字化特色专业<br />
        JiuByte以知识图谱与技能图谱为依托，为学校提供丰富的IT行业底层知识信息全景图和学习资源库；随着B端企业的链接增加与岗位画像的丰富，为学校提供全套大数据咨询方案，包括诊断式的专业报告、就业趋势辅助意见等。<br />
        <br />
        就业——就业出口精准匹配，提升精准就业率<br />
        不同于传统产教融合模式中“订单班”这种针对特定企业少量学员的培养选拔模式，JiuByte借助大数据设定行业用人标准，并形成统一技能标准，与大量企业合作，解决批量学员的就业问题。
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
.college-wrap {
  background: $bg-color;
  .college {
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
