<template>
  <div class="education-wrap pb-6">
    <BlockTitle>服务继续教育&成人教育</BlockTitle>
    <div class="education">
      <div class="cover">
        <img :src="`${tabset.cover}`" alt="" />
      </div>
      <div class="item-box">
        <div class="tabs">
          <div class="tab-header d-flex al-center">
            <div
              v-for="tab of tabs"
              :key="tab.title"
              class="tab mr-5"
              :class="{ active: tab.title === tabset.activeTab }"
              @click="switchTab(tab.title)"
            >
              {{ tab.title }}
            </div>
          </div>
          <template v-for="tab of tabs" :key="tab.title">
            <div v-if="tabset.activeTab === tab.title" class="content py-3">
              <div class="content-body">{{ tab.content }}</div>
              <div class="detail-btn" @click="handleClick(tab.path)">
                了解详情
              </div>
            </div>
          </template>
        </div>
      </div>
      <!-- <div class="item">
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/home/mid1.png"
          alt=""
        />
        <div class="title">继续教育</div>
        <div class="mask d-flex-center">
          <div
            class="mask-btn d-flex-center"
            @click="handleClick('/education/open-edu')"
          >
            了解详情 >>
          </div>
        </div>
      </div>
      <div class="item">
        <img
          src="https://pubcdn.aicloud-edu.com/pub/site/home/mid2.png"
          alt=""
        />
        <div class="title">成人教育</div>

        <div class="mask d-flex-center">
          <div
            class="mask-btn d-flex-center"
            @click="handleClick('/education/continuing-edu')"
          >
            了解详情 >>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from "@/config";

const { cdn } = config;
const router = useRouter();
const tabset = reactive({
  activeTab: "继续教育",
  cover: `${cdn}/home/mid1.png`,
});
const tabs = [
  {
    title: "继续教育",
    content:
      "励英教育中心与全国多地开放大学进行深入合作，在职业技能培训、社区教育、老年教育等多个领域进行研究探讨，充分发挥各自优势，构建终生教育体系。",
    path: "/education/open-edu",
    cover: `${cdn}/home/mid1.png`,
  },
  {
    title: "成人教育",
    content:
      "励英教育中心现与数十所重点大学建立合作关系，通过遍布全国的渠道支撑体系和强大的数字化平台技术，为社会在职人员提供高中起点专科、专科起点本科等5大类近百个专业的高校成人教育支持服务。",
    path: "/education/continuing-edu",
    cover: "/images/home/mid2.png",
  },
];

const switchTab = (tab: string) => {
  tabset.activeTab = tab;
  const index = tabs.findIndex((item) => item.title === tab);
  tabset.cover = tabs[index].cover;
};
const handleClick = (path: string) => {
  router.push({ path });
};
</script>

<style lang="scss" scoped>
.education-wrap {
  background: $grey-bg-color;
  .education {
    width: $content-width;
    margin: auto;
    display: grid;
    grid-template-columns: 578px 602px;
    grid-template-rows: 340px;
    font-size: 16px;
    .cover {
      overflow: hidden;
      img {
        max-width: 100%;
        width: 100%;
      }
    }

    .item-box {
      background: white;
      padding: 30px 64px;
      .tabs {
        .tab-header {
          border-bottom: 1px solid #e5e5e5;
          padding: 10px 0;
          color: #717173;
          cursor: pointer;
          .tab {
            position: relative;
            font-size: 24px;
            &:hover {
              color: #323941;
            }
            &.active {
              color: $theme-color;
              font-weight: bold;
              &::after {
                width: 100%;
                height: 3px;
                background: $theme-color;
                content: "";
                display: inline-block;
                position: absolute;
                left: 0;
                bottom: -11px;
              }
            }
          }
        }
        .content-body {
          line-height: 32px;

          color: #323941;
        }
        .detail-btn {
          width: 120px;
          height: 48px;
          text-align: center;
          line-height: 48px;
          color: white;
          background: linear-gradient(270deg, #ff7f32 0%, #c7000b 100%);
          box-shadow: 0px 4px 12px 0px rgba(199, 0, 11, 0.3);
          border-radius: 4px;
          transition: all 0.3s;
          cursor: pointer;
          margin-top: 40px;
          &:hover {
            background: linear-gradient(270deg, #c7000b 0%, #c7000b 100%);
            box-shadow: 0px 4px 12px 0px rgba(199, 0, 11, 0.3);
          }
        }
      }
    }
    .item {
      border-radius: $br-base;
      position: relative;
      &:hover {
        .mask {
          visibility: inherit;
        }
      }
      .title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 30px;
        font-weight: bold;
        -webkit-text-stroke: 2px #000000;
        text-stroke: 2px #000000;
      }
      .btn {
        position: absolute;
        right: 20px;
        bottom: 30px;
        color: white;
      }
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.4);
        visibility: hidden;
        border-radius: 10px;
        .mask-btn {
          position: absolute;
          right: 20px;
          bottom: 30px;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
