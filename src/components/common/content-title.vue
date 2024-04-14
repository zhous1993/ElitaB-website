<template>
  <div class="content-title-wrap d-flex">
    <div class="content-title d-flex-center">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-title {
  background: #eee;
  border-radius: 5px;
  height: 52px;
  padding: 0 36px;
  font-weight: bold;
  color: $fs-dark-color;
  margin: auto;
}
</style>
