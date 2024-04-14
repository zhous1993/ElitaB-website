<template>
  <div class="profession-wrap">
    <block-title></block-title>
    <section class="profession-content fs-sm">
      <div>
        <div class="mask" @click="handleClick('/profession/BVE')">
          <div class="desc p-3">
            <div class="title py-2">职业本科&产业学院</div>
            <div class="content">致力于成为职业本科综合服务提供商</div>
          </div>
          <div class="mask-btn d-flex al-center mt-4">
            <span>了解详情</span>
            <i class="icon ico-link-right ml-2 mb-1"></i>
          </div>
        </div>
        <img :src="`${cdn}/home/top1.png`" alt="" />
      </div>
      <div>
        <div class="mask" @click="handleClick('/profession/VE')">
          <div class="desc p-3">
            <div class="title py-2">职教高考</div>
            <div class="content">打造职教高考综合服务平台</div>
          </div>
          <div class="mask-btn d-flex al-center mt-4">
            <span>了解详情</span>
            <i class="icon ico-link-right ml-2 mb-1"></i>
          </div>
        </div>
        <img :src="`${cdn}/home/top2.png`" alt="" />
      </div>
      <div>
        <div class="mask">
          <div class="desc p-3">
            <div class="title py-2">统招专升本</div>
            <div class="content">提供线上线下一体化教育服务</div>
          </div>
          <!-- <div class="mask-btn d-flex al-center mt-4" @click="handleClick('/')">
            <span>了解详情</span>
            <i class="icon ico-link-right ml-2 mb-1"></i>
          </div> -->
        </div>
        <img :src="`${cdn}/home/top3.png`" alt="" />
      </div>

      <div>
        <div class="mask" @click="handleClick('/profession/DC')">
          <div class="desc p-3">
            <div class="tag">新职教课程</div>
            <div class="title py-2">数字人民币创新实验室</div>
            <div class="content">
              基于银行真实业务系统的“实训系统+课程+实践+服务”的综合解决方案
            </div>
          </div>
          <div class="mask-btn d-flex al-center mt-4">
            <span>了解详情</span>
            <i class="icon ico-link-right ml-2 mb-1"></i>
          </div>
        </div>
        <img :src="`${cdn}/home/top4.png`" alt="" />
      </div>
      <div>
        <div class="mask" @click="handleClick('/profession/IT')">
          <div class="desc p-3">
            <div class="tag">新职教课程</div>
            <div class="title py-2">IT互联网人才培训</div>
            <div class="content">
              助力IT中高端人才培养，推动IT类毕业生高质量就业
            </div>
          </div>
          <div class="mask-btn d-flex al-center mt-4">
            <span>了解详情</span>
            <i class="icon ico-link-right ml-2 mb-1"></i>
          </div>
        </div>
        <img :src="`${cdn}/home/top5.png`" alt="" />
      </div>
      <div>
        <div class="mask" @click="handleClick('/profession/health')">
          <div class="desc p-3">
            <div class="tag">新职教课程</div>
            <div class="title py-2">医疗康养人才培训</div>
            <div class="content">
              响应健康中国战略，培养社会需要的高素质医疗康养人才
            </div>
          </div>
          <div class="mask-btn d-flex al-center mt-4">
            <span>了解详情</span>
            <i class="icon ico-link-right ml-2 mb-1"></i>
          </div>
        </div>
        <img :src="`${cdn}/home/top6.png`" alt="" />
      </div>
      <div>
        <div class="mask" @click="handleClick('/profession/international-ma')">
          <div class="desc p-3">
            <div class="tag">新职教课程</div>
            <div class="title py-2">国际教育</div>
            <div class="content">
              为中外院校搭建合作交流平台，为求学者提供更多、更好的选择
            </div>
          </div>
          <div class="mask-btn d-flex al-center mt-4">
            <span>了解详情</span>
            <i class="icon ico-link-right ml-2 mb-1"></i>
          </div>
        </div>
        <img :src="`${cdn}/home/top7.png`" alt="" />
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import config from "@/config";

const { cdn } = config;
const STATIC_PATH = "https://pubcdn.aicloud-edu.com/pub/site/home/";
const imgList = [
  `${STATIC_PATH}top1.png`,
  `${STATIC_PATH}top2.png`,
  `${STATIC_PATH}top3.png`,
  `${STATIC_PATH}top4.png`,
  `${STATIC_PATH}top5.png`,
  `${STATIC_PATH}mid1.png`,
  `${STATIC_PATH}mid2.png`,
  `${STATIC_PATH}bot1.png`,
  `${STATIC_PATH}bot2.png`,
];
const router = useRouter();
const handleClick = (route: string) => {
  router.push({ path: route });
};
</script>
<style lang="scss" scoped>
.profession-wrap {
  .profession-content {
    width: $content-width;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 277px);
    grid-auto-rows: 200px 200px 344px;
    grid-gap: 24px 24px;

    & > div {
      background: #f8fafb;
      display: grid;
      position: relative;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        transition: all 0.5s;
      }
      &:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
      }
      &:nth-child(2) {
        grid-column-start: 3;
        grid-column-end: 5;
      }
      &:nth-child(3) {
        grid-column-start: 3;
        grid-column-end: 5;
      }
      .desc {
        position: absolute;
        bottom: 0px;
        transition: all 0.5s ease-in-out;
        .title {
          font-size: 24px;
          font-weight: bold;
          color: white;
        }
        .content {
          color: #e5e5e5;
          font-size: 16px;
          line-height: 30px;
        }
        .tag {
          color: white;
        }
      }
    }
    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 1;
      cursor: pointer;

      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      transition: all 1s ease-in-out;
      &:hover {
        background: linear-gradient(
          180deg,
          rgba(0, 13, 26, 0) 0%,
          #c7000b 100%
        );
        & + img {
          transform: scale(1.2);
        }
        .mask-btn {
          bottom: 32px;
        }
        .desc {
          bottom: 60px;
        }
      }
      .mask-btn {
        position: absolute;
        height: 28px;
        bottom: -28px;
        width: 180px;
        border-radius: 16px;
        color: white;
        cursor: pointer;
        padding-left: 16px;
        transition: all 0.5s ease-in-out;
        .ico-link-right {
          @include icon(7px, 14px, link-right);
        }
      }
    }
  }
}
</style>
