<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-11-21 14:16:05
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-11-22 09:41:37
 * @FilePath: \website-edu\src\components\career\ImageText.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="d-flex bg-[#F7F8F8]" :class="{ 'flex-row-reverse': reverse }">
    <div class="w-[40rem]">
      <img class="w-full h-full" :src="imgUrl" />
    </div>
    <div class="flex-1 py-10 pl-20">
      <div class="text-[#C3141F] font-semibold mb-7 text-2xl">{{ title }}</div>
      <ul>
        <li
          v-for="(item, index) of items"
          :key="index"
          class="text-lg text-[#333] font-pingfang-r list-item leading-8"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgUrl: string;
  title: string;
  items: string[];
  reverse: boolean;
}>();
</script>

<style lang="scss" scoped>
.list-item {
  list-style: disc;
  list-style-position: inside;
}
</style>
