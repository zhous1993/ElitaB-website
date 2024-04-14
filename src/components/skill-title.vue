<template>
  <div class="title-wrap py-5 d-flex-center">
    <div class="title mx-4">
      <slot name="default">企业介绍</slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.circle {
}
.title {
  font-size: 30px;
  font-weight: bold;
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    width: 117px;
    height: 6px;
    background: url("@/static/assets/images/tit-bg-bottom.png") no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    bottom: -7px;
    transform: translateX(-50%);
  }
}
</style>
