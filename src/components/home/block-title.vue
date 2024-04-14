<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2022-08-08 15:53:43
 * @FilePath: \website-edu\src\components\home\block-title.vue
 *
-->
<template>
  <div class="title-wrap py-4 d-flex-center">
    <div class="title mx-4">
      <slot name="default">服务现代职业教育体系</slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.circle {
}
.title {
  font-size: 30px;
  font-weight: bold;
  color: $fs-dark-color;
}
</style>
