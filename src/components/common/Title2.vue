<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-02-23 16:43:04
 * @LastEditors: DESKTOP-16EDV1I\zs_lq zhous0310@gmail.com
 * @LastEditTime: 2024-04-14 19:08:03
 * @FilePath: \website-edu\src\components\common\Title2.vue
 *
-->
<template>
  <div class="content-title-wrap flex items-center">
    <div class="bottom-block mr-4"></div>
    <div class="content-title d-flex-center">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-title {
  font-weight: bold;
  color: $theme-color;
  font-family: PingFang SC;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
.bottom-block {
  background: $theme-color;
  width: 0.63rem;
  height: 1.25rem;
}
</style>
