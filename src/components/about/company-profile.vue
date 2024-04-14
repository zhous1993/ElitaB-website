<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-02-28 15:46:15
 * @FilePath: \website-edu\src\components\about\company-profile.vue
 *
-->
<template>
  <div class="company-wrap pb-6">
    <SkillTitle>公司介绍</SkillTitle>
    <div class="company">
      <div>
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/about/top.png"
          alt=""
        />
        <!-- <div>了解详情</div> -->
      </div>
      <div class="desc py-5">
        <div>
          　　中汇集团是粤港澳大湾区最大的商科高等教育集团，旗下拥有广州华商学院、广州华商职业学院、广东华商技工学校、澳洲国际商学院、澳大利亚中汇学院、新加坡中汇学院、华商外语实验学校、华商拓慧幼教集团等多所院校和教育机构，集团在校生约7.8万人。<br />
          　　励英教育中心依托人工智能、大数据、云计算等现代信息技术积累，基于“平台+生态”的战略，邀请行业内众多相关领域优秀人才打造职业培训和学历教育平台，以平台支撑职业能力提升工程和高等学历教育。坚持校企合作，优势互补，共同探索新时代职业教育、普通教育、继续教育职普融通的新路，立志成为助推职业教育高质量发展的科技领军企业。
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.company-wrap {
  background: $grey-bg-color;
  .company {
    width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 498px 598px;
    grid-template-rows: 498px;
    grid-column-gap: 40px;
    .desc {
      position: relative;
      color: #777;

      line-height: 48px;
      .btn {
        position: absolute;
        right: 20px;
        bottom: 30px;
        color: $theme-color;
      }
    }
  }
}
</style>
