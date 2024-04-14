<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-02-23 16:43:04
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-02-23 17:28:38
 * @FilePath: \website-edu\src\components\common\Title1.vue
 *
-->
<template>
  <div
    class="content-title-wrap flex flex-col items-center relative overflow-hidden"
  >
    <div class="content-title d-flex-center">
      <slot name="default"></slot>
    </div>
    <div class="bottom-block mt-6"></div>
  </div>
</template>

<style lang="scss" scoped>
.content-title {
  font-weight: bold;
  color: $fs-dark-color;
  margin: auto;
  font-size: 3rem;
}
.bottom-block {
  height: 4px;
  background: $theme-color;
  width: 4.5rem;
}
</style>
