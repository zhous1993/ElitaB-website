<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2022-08-09 11:06:20
 * @FilePath: \website-edu\src\components\skill\employment.vue
 *
-->
<template>
  <div class="employment-wrap pb-6">
    <SkillTitle>IT人才精准就业解决方案</SkillTitle>
    <div class="employment">
      <div>
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/skill/mid1.png"
          alt=""
        />
        <!-- <div>了解详情</div> -->
      </div>
      <div class="desc py-4">
        通过建立IT工程师各岗位技能知识图谱，组建具有超5000道经过行业专家认可试题的测试库，以AI算法自适应的出题方式，全面精准评测IT工程师技能水平，为其精准匹配定制化企业岗位，实现以“技能优先”的人岗匹配就业模式。
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
.employment-wrap {
  background: $bg-color;
  .employment {
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
