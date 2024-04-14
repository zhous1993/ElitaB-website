<template>
  <div>
    <div class="list">
      <div
        v-for="(item, index) of list"
        :key="item.href"
        class="list-item"
        :class="{ pass: activeIndex > index, active: activeIndex == index }"
        @click="activeIndex = index"
      >
        <a :href="'#' + item.href" v-html="item.title"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const list = [
  { title: "项目描述", href: "desc" },
  { title: "面向高职学生", href: "hv" },
  { title: "面向高校学生", href: "hc" },
  { title: "面向企业员工", href: "company" },
  { title: "面向农民", href: "farmer" },
  { title: "面向社区居民", href: "community" },
  { title: "面向城市外来务工<br/>及转岗再就业入员", href: "re-employment" },
];
const activeIndex = ref(0);
</script>
<style lang="scss" scoped>
.list {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  .list-item {
    position: relative;
    padding: 20px;
    padding-left: 50px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 15px;
      height: 15px;
      border: 3px solid #ccc;
      border-radius: 50%;
      left: 0;
      top: 50%;
      background: #ccc;
      transform: translateY(-50%);
    }
    &.pass::before {
      background: white;
    }
    &.active::before {
      background: $theme-color;
      border-color: $theme-color;
    }
    &.active {
      a {
        border: 1px solid $theme-color;
        color: $theme-color;
        border-radius: $br-base;
        position: relative;
        &::before {
          content: "";
          background-size: 100% 100%;
          display: inline-block;
          width: 0px;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-right: 7px solid $theme-color;
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    &:not(:last-child)::after {
      content: "";
      display: block;
      position: absolute;
      width: 2px;
      left: 9px;
      top: 50%;
      transform: translateY(9px);
      height: calc(100% - 18px);
      background: #ccc;
    }
    &:last-child::after {
      content: "";
      display: block;
      position: absolute;
      width: 2px;
      left: 9px;
      top: 0;
      transform: translateY(9px);
      height: calc(50% - 18px);
      background: #ccc;
    }
    a {
      color: $fs-color;
      text-decoration: none;
      display: inline-block;
      width: 180px;
      min-height: 45px;
      line-height: 45px;
      text-align: center;
    }
  }
}
</style>
