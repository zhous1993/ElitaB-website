<template>
  <div
    class="header d-flex al-center jc-between px-20 transition transition-all"
    :class="{ 'bg-white': scrollTop > 0 }"
  >
    <div>
      <img
        v-if="scrollTop > 0"
        class="logo animate-animated animate-fade-in"
        :src="
          appStore.getScreenWidth >= 2560
            ? cdn + '/logo-red2x.png'
            : cdn + '/logo-red.png'
        "
        alt=""
      />
      <img
        v-else
        class="logo animate-animated animate-fade-in"
        :src="
          appStore.getScreenWidth >= 2560
            ? cdn + '/logo-white2x.png'
            : cdn + '/logo-white.png'
        "
        alt=""
      />
    </div>
    <div class="menus d-flex">
      <div
        v-for="menu of menus"
        :key="menu.link"
        class="menu text-center pointer text-lg mx-4"
        :class="{
          active: validateActive(menu.link),
          whiteActive: scrollTop == 0,
          'text-white': scrollTop == 0,
        }"
        @click="handleClick(menu)"
      >
        <span class="">{{ menu.title }}</span>
        <template v-if="menu.children">
          <div class="menu-child text-base">
            <div
              v-for="item in menu.children"
              :key="item.link"
              class="menu-child-item d-flex-center"
              @click.stop="handleClick(item)"
            >
              {{ item.title }}
            </div>
          </div>
        </template>
      </div>
      <TelNumber class="ml-4" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from "@/config";
import useAppStore from "@/store/modules/app";

const { cdn } = config;
const appStore = useAppStore();

withDefaults(defineProps<{ index?: number }>(), { index: 0 });
const top = computed(() => {
  return (appStore.getScreenWidth / 1920) * 640;
});
const route = useRoute();
const router = useRouter();
const { menus } = config;
const scrollTop = ref(0);
const validateActive = (path: string): boolean => {
  console.log(route.fullPath);
  return (
    route.fullPath.includes(path) ||
    (path === "/digital-edu/index" && route.fullPath.includes("/digital-edu"))
  );
};
const handleClick = (menu: {
  link: string;
  title: string;
  canClick?: boolean;
  children?: Array<{ link: string; title: string }>;
}): void => {
  if (menu.children && !menu.canClick) return;
  if (menu.link.includes("http")) {
    window.open(menu.link, "_blank");
    return;
  }
  router.push({ path: menu.link });
};
const handleScroll = () => {
  const top =
    window.pageYOffset ||
    document.documentElement.scrollTo ||
    document.body.scrollTop;
  scrollTop.value = (Number(top) || 0) as number;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 5.25rem;
  margin: auto;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  font-family: PingFangSC-Semibold;
  &.bg-white {
    box-shadow: 0px 3px 8px 0px rgba(51, 51, 51, 0.15);
  }
  .logo {
    width: 7rem;
  }
  .menus {
    .menu {
      height: 5.25rem;
      line-height: 5.25rem;
      position: relative;
      &.active {
        color: $theme-color;
        &.whiteActive {
          color: white !important;
          &::after {
            background: white;
          }
        }
        &::after {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          display: inline-block;
          width: 100%;
          height: 5px;
          content: "";
          background: $theme-color;
        }
      }
      &:hover {
        color: $theme-color;
        position: relative;
        z-index: 100;

        .menu-child {
          z-index: 1000;
          opacity: 1;
          display: block;
        }
      }
      .menu-child {
        background: white;
        color: #333;
        transition: all 0.2s;
        overflow: hidden;
        opacity: 0;
        z-index: -1;
        display: none;
        position: absolute;
        bottom: -1;
        left: 50%;
        margin-left: -6.25rem;
        box-shadow: 0px 3px 12px 0px rgba(51, 51, 51, 0.1);
        font-family: PingFangSC-Regular;
        .menu-child-item {
          height: 3.5rem;
          width: 12.5rem;
          &:hover {
            background: #eee;
            color: $theme-color;
          }
          &:not(:last-child) {
          }
        }
      }
    }
  }
}
.menu {
  &:not(.text-white) {
    color: #333;
  }
}
</style>
