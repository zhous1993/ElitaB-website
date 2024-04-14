<template>
  <div class="flex items-center justify-center">
    <div class="nav-btn flex justify-center items-center" @click="handleScroll">
      <img
        :src="cdn + '/icon/home-icon/ico-arrow-top.svg'"
        alt=""
        class="transition-all duration-500"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import config from "@/config";

const { cdn } = config;
const handleScroll = () => {
  window.scroll(0, 0);
};
</script>
<style lang="scss" scoped>
.nav-btn {
  width: 4.5rem;
  height: 4.5rem;
  background-color: $theme-color;
  border-radius: 50%;
  cursor: pointer;
  animation: scroll-icon 1.2s infinite alternate
    cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    background-color: $theme-color;
  }
}
@keyframes scroll-icon {
  0% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px);
  }
  100% {
    -webkit-transform: translateY(12px);
    transform: translateY(12px);
  }
}
</style>
