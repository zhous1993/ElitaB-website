<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2022-08-09 11:06:27
 * @FilePath: \website-edu\src\components\skill\introduction.vue
 *
-->
<template>
  <div class="introduction-wrap pt-6 pb-6">
    <div class="introduction">
      <div>
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/skill/top.png"
          alt=""
        />
        <!-- <div>了解详情</div> -->
      </div>
      <div class="desc py-5">
        <div>
          　　伴随着数字经济的发展，职业教育学科培养呈现多元化趋势。IT工程
          师、数字营销师等已成为当前职业教育热门培养方向，其就业市场供不应
          求。面对企业数字化转型的用人需求和人才就业需求，如何对接供求两端，
          实现“精准就业”，这是人才培养计划中的关键一环。励英教育发
          挥自身“教育+科技”企业优势，成立JiuByte创新项目，通过采用AI深度
          学习和多层次的算法方式，实现人才技能精准评测。同时，建立企业岗位
          技能大数据模型，实现“以技能优先”的高效人岗匹配就业模式，以“科
          技创新”让就业更精准、更可靠且更公平。
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.introduction-wrap {
  background: $grey-bg-color;
  .introduction {
    width: $content-width;
    margin: auto;
    display: grid;
    grid-template-columns: 552px 582px;
    grid-template-rows: 446px;
    grid-column-gap: 40px;
    .desc {
      position: relative;
      color: #777;

      line-height: 48px;
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
}
</style>
