<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-02-28 15:46:26
 * @FilePath: \website-edu\src\components\about\company-cuture.vue
 *
-->
<template>
  <div class="company-wrap pb-6">
    <SkillTitle>企业文化</SkillTitle>
    <div class="company">
      <div class="item">
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/about/mid1.png"
          alt=""
        />
        <div class="desc p-4">
          <div class="title fs-lg">客户第一</div>
          <div class="mt-5">
            始终将客户的利益放在第一位；<br />
            花心思在客户身上，逢迎上级1小时，不如服务客户1分钟；<br />
            实现客户价值是我们的本分，超出客户期望是我们的追求。
          </div>
        </div>
      </div>
      <div class="item">
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/about/mid2.png"
          alt=""
        />
        <div class="desc p-4 pr-0">
          <div class="title fs-lg">奋斗者为本</div>
          <div class="mt-5">
            深入一线，脚踏实地。<br />
            No Excuse，不找任何理由交付结果。<br />
            One More Ounce，遇事多走一步，对自己要求狠一点。<br />
            不掩盖问题，越试图掩盖问题越暴漏自身的问题，用经历解决问题。
          </div>
        </div>
      </div>
      <div class="item">
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/about/mid3.png"
          alt=""
        />
        <div class="desc p-4">
          <div class="title fs-lg">团队合作</div>
          <div class="mt-5">
            尊重自己的工作伙伴，对彼此负责。<br />
            坦诚沟通，高效协作。<br />
            支持伙伴，理解与信任成就更好的彼此。
          </div>
        </div>
      </div>
      <div class="item">
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/about/mid4.png"
          alt=""
        />
        <div class="desc p-4">
          <div class="title fs-lg">知识更新</div>
          <div class="mt-5">
            加强研习，在工作中不断提升职业素养和专业技能；<br />
            在实践中收获，在错误中成长，坚持自我反思；<br />
            永远保持对“未知”的好奇和热爱，保持个性，终身学习。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.company-wrap {
  background: $bg-color;
  .company {
    width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 570px);
    grid-template-rows: repeat(2, 294px);
    grid-gap: 40px 40px;
    .item {
      overflow: hidden;
      border-radius: $br-base;
      position: relative;
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
