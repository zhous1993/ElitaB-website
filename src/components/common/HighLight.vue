<template>
  <div class="p-5 bg-[#F7F8F8]">
    <div
      class="text-[#222] text-lg text-center leading-8 font-bold"
      :innerHTML="highLight || ''"
    ></div>
  </div>
</template>
<script lang="ts" setup>
const { highLight } = defineProps<{ highLight: string }>();
</script>
<style lang="scss" scoped></style>
