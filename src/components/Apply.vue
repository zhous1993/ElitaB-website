<template>
  <div>
    <div class="apply-btn cursor-pointer z-1000" @click="handleScroll">
      申请体验<img
        class="mt-2"
        :src="cdn + '/icon/home-icon/arrow-right.svg'"
        alt=""
      />
    </div>
    <div
      ref="scrollRef"
      class="apply-container"
      :style="{
        backgroundImage: `url('${cdn}/product/itembank/apply-bg.png')`,
      }"
    >
      <div class="apply-content h-full flex items-center justify-center">
        <div class="content flex justify-between">
          <div>
            <div
              class="content-title animate-animated animate-fade-in-up text-56px"
            >
              申请体验
            </div>
            <div class="bottom-block mt-2"></div>
            <div
              class="desc mt-10 animate-animated animate-fade-in-up delay-500"
            >
              可留下您的联系方式，便于我们快速解决您的问题。
              <br />
              为了帮助您更好地了解和使用励英教育的产品，<br />
              在您申请成功后，将由专属服务人员为您安排产品体验服务。
            </div>
          </div>
          <div
            class="form p-10 pb-4 animate-animated animate-fade-in-up delay-1000 duration-500"
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
              <div>
                <ElFormItem prop="comment">
                  <ElInput
                    v-model="form.comment"
                    type="textarea"
                    placeholder="请简单描述您的备注"
                    class="apply-textarea"
                  />
                </ElFormItem>
              </div>

              <ElFormItem>
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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElMessage,
  FormInstance,
} from "element-plus";
import config from "@/config";
import { submit } from "@/api";

const scrollRef = ref<HTMLElement>();
const props = defineProps<{ type: number }>();
const formRef = ref<FormInstance>();
const top = ref(0);
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
const handleScroll = () => {
  scrollRef.value?.scrollIntoView();
};
const canPost = computed(() => {
  return form.name && form.comment && form.dept && form.phone;
});
const { cdn } = config;
const handleSubmit = () => {
  formRef.value?.validate((isValid) => {
    if (isValid) {
      const body = {
        userName: form.name,
        userPhone: form.phone,
        userUnit: form.dept,
        remark: form.comment,
        type: props.type,
      };
      form.isLoading = true;
      submit(body).then((res) => {
        form.isLoading = false;
        if (res.data && res.data.code === 200) {
          ElMessage({
            message: "提交成功",
            type: "success",
            offset: 200,
          });
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
<style scoped lang="scss">
.apply-container {
  width: 100%;
  min-height: 29.38rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  .content {
    width: 90rem;
    margin-top: 2.5rem;
    .content-title {
      font-size: 4rem;
      font-weight: bold;

      font-family: PingFangSC-Semibold, PingFang SC;

      line-height: 5.63rem !important;
      color: white;
    }
    .bottom-block {
      height: 0.25rem;
      background: rgba(195, 20, 31, 1);
      width: 4.5rem;
    }
    .slogan {
      width: 15.19rem;
      height: 3.06rem;
      margin-top: 4rem;
    }
    .desc {
      font-size: 1.5rem;

      font-family: PingFangSC-Regular, PingFang SC;
      color: #fff;
      font-weight: 400;

      line-height: 2.5rem;
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
}
.apply-btn {
  background: $theme-color;
  color: white;
  width: 3.38rem;
  height: 8.75rem;
  border-radius: 1.69rem;
  font-size: 1.13rem;
  line-height: 1.5rem;
  writing-mode: vertical-rl;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30.19rem;
  right: 2.5rem;
  img {
    transform: rotate(90deg);
    transform-origin: 50% 50%;
  }
}
</style>
