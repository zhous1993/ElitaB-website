<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-11-21 17:45:52
 * @FilePath: \website-edu\src\components\about\contact.vue
 *
-->
<template>
  <div class="company-wrap pb-6">
    <div class="company">
      <div>
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/about/map.png"
          alt=""
        />
        <!-- <div>了解详情</div> -->
      </div>
      <div class="desc p-4 py-5">
        励英教育(深圳)有限责任公司<br />
        地址：深圳市南山区香港中文大学深圳研究院李伟波楼308、309、814
        <br />
        联系电话： <br />
        邮箱：zhservice@aicloud-edu.com
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.company-wrap {
  background: $bg-color;
  .company {
    width: $content-width;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 23.75rem;
    img {
      width: 100%;
      height: 100%;
    }
    .desc {
      position: relative;
      color: #777;
      background: $grey-bg-color;
      line-height: 48px;
      border-radius: 0 $br-base $br-base 0;
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
