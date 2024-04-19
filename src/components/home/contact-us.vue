<!--
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2022-04-02 17:01:09
 * @LastEditors: 周松 zhous@ai-cloud.edu
 * @LastEditTime: 2024-04-19 16:17:33
 * @FilePath: \website-edu\src\components\home\contact-us.vue
 *
-->
<template>
  <div class="wrapper">
    <img class="wrapper-bg" :src="cdn + '/home/contact-bg.png'" alt="" />

    <div class="wrapper-container flex flex-col justify-center items-center">
      <div class="content flex flex-1 justify-between items-center">
        <div>
          <div class="animate-animated animate-fade-in-up">
            <div class="content-title text-56px">对我们的产品感兴趣？</div>
            <div class="bottom-block mt-2"></div>
          </div>

          <div class="desc mt-10 animate-animated animate-fade-in-up delay-500">
            可留下您的联系方式，<br />
            便于我们快速解决您的问题
          </div>
        </div>
        <div
          class="form p-8 pb-4 animate-animated animate-fade-in-up delay-1000 duration-500"
        >
          <ElForm ref="formRef" :size="'large'" :model="form" :rules="rules">
            <div class="grid grid-cols-2 gap-6">
              <ElFormItem prop="name">
                <ElInput v-model="form.name" placeholder="您的姓名" />
              </ElFormItem>
              <ElFormItem prop="phone">
                <ElInput v-model="form.phone" placeholder="您的电话" />
              </ElFormItem>
            </div>
            <ElFormItem prop="dept">
              <ElInput v-model="form.dept" placeholder="您的单位" />
            </ElFormItem>
            <div class="mt-6">
              <ElFormItem prop="comment">
                <ElInput
                  v-model="form.comment"
                  type="textarea"
                  placeholder="请简单描述您的需求"
                  style="height: 10rem"
                  class="textarea"
                />
              </ElFormItem>
            </div>

            <ElFormItem class="mt-8">
              <div
                class="submit-btn"
                :class="{
                  '!cursor-not-allowed': !canPost || form.isLoading,
                  'pointer-events-none': !canPost || form.isLoading,
                }"
                @click="handleSubmit"
              >
                {{ form.isLoading && canPost ? "正在提交..." : "提交" }}
              </div>
            </ElFormItem>
          </ElForm>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElMessage,
  FormInstance,
} from "element-plus";
import Footer from "@/layouts/components/app-footer.vue";
import config from "@/config";
import { submit } from "@/api";

const { cdn } = config;
const formRef = ref<FormInstance>();
const form = reactive({
  name: "",
  phone: "",
  dept: "",
  comment: "",
  isLoading: false,
});
const rules = {
  name: [{ required: true, message: "", trigger: "blur" }],
  phone: [{ required: true, message: "", trigger: "blur" }],
  dept: [{ required: true, message: "", trigger: "blur" }],
  comment: [{ required: true, message: "", trigger: "blur" }],
};

const canPost = computed(() => {
  return form.name && form.comment && form.dept && form.phone;
});
const handleSubmit = () => {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      const body = {
        userName: form.name,
        userPhone: form.phone,
        userUnit: form.dept,
        remark: form.comment,
        type: 1,
      };
      form.isLoading = true;
      submit(body).then((res) => {
        form.isLoading = false;
        if (res.data && res.data.code === 200) {
          ElMessage.success("提交成功");
          form.name = "";
          form.phone = "";
          form.comment = "";
          form.dept = "";
        }
      });
    }
  });
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: white;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url("https://pubcdn.aicloud-edu.com/pub/site/home/contact-bg.png")
    no-repeat;
  background-image: url("/images/home/contact-bg.png");
  background-size: cover;
  background-attachment: fixed;
  .wrapper-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    img {
      min-width: 100%;
      min-height: 100%;
    }
  }
  .wrapper-container {
    width: 100%;
    height: 100%;
    min-height: 60rem;
    top: 0;
  }
  .content {
    width: 90rem;
    transition: all 0.5s;
    &.position-fixed {
      position: fixed;
      top: 6rem;
    }
    .content-title {
      font-size: 3.5rem;
      font-weight: bold;

      font-family: PingFangSC-Semibold, PingFang SC;

      line-height: 5.63rem !important;
      color: white;
    }
    .bottom-block {
      height: 0.63rem;
      background: white;
      width: 11.25rem;
    }
    .slogan {
      width: 15.19rem;
      height: 3.06rem;
      margin-top: 4rem;
    }
    .desc {
      font-size: 1.88rem;

      font-family: PingFangSC-Regular, PingFang SC;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 400;

      line-height: 3rem;
      margin-top: 1rem;
    }
    .form {
      width: 30rem;
      background: #fff;
      .submit-btn {
        width: 100%;
        height: 3rem;
        font-size: 1.13rem;
        background: $theme-color;
        line-height: 3rem;
        text-align: center;
        color: white;
        cursor: pointer;
        &.\!cursor-not-allowed {
          cursor: not-allowed !important;
          opacity: 0.5;
        }
      }
    }
  }
  .textarea {
    .el-textarea__inner {
      height: 10rem;
      font-size: 1.13rem;
    }
  }
}
</style>
