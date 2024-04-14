import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import NProgress from "nprogress";
import DefaultLayout from "@/layouts/default-layout.vue";
import homePageVue from "@/views/home-page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: homePageVue,
    meta: { title: "励英教育" },
  },
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "joint-training",
        meta: { title: "联合培养项目" },
        component: () => import("@/views/joint-training.vue"),
      },
      {
        path: "Sino-foreign",
        meta: { title: "中外合作办学项目" },
        component: () => import("@/views/sino-foreign.vue"),
      },
      {
        path: "high-school",
        meta: { title: "国际高中" },
        component: () => import("@/views/high-school.vue"),
      },
      {
        path: "Micro-study-abroad",
        meta: { title: "微留学" },
        component: () => import("@/views/micro-study-abroad.vue"),
      },

      {
        path: "support",
        name: "Support",
        meta: { title: "客户支持" },
        component: () => import("@/views/support-page.vue"),
      },
      {
        path: "about",
        name: "about",
        meta: {
          title: "关于我们",
        },
        component: () => import("@/views/aboutus-page.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "非常抱歉,页面走丢了",
    },
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)",
    meta: {},
    redirect: "/404",
  },
];

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */
router.beforeEach((to, from) => {
  console.log("全局路由前置守卫：to,from\n", to, from);
  // 设置页面标题
  document.title = (to.meta.title as string) ?? "励英教育";
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  console.log("全局路由后置守卫：to,from\n", to, from);
  NProgress.done();
});

export default router;
