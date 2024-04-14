<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-02-23 09:51:13
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-02-23 10:27:27
 * @FilePath: \website-edu\src\components\CountUp.vue
 *
-->
<template>
  <div :id="countUpId"></div>
</template>
<script setup lang="ts">
import { CountUp } from "countup.js";

const props = defineProps<{ target: number; delay?: number }>();
const countUpId = `countUp${Math.floor(Math.random() * 10000)}`;
const count = reactive<{ timer: any }>({ timer: null });
onMounted(() => {
  const countUp = new CountUp(countUpId, props.target || 0, {
    startVal: 0,
    duration: 3,
  });
  count.timer = setTimeout(() => {
    countUp.start();
  }, props.delay || 0);
});
onBeforeUnmount(() => {
  clearTimeout(count.timer);
});
</script>
<style lang="scss" scoped></style>
