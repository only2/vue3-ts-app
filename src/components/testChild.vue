<script setup lang="ts">
import { reactive, ref, inject } from 'vue';
const props = defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  title: {
    type: String,
    required: false,
    default: '123123',
  },
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true,
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100,
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: 'hello' };
    },
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value);
    },
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function';
    },
  },
});
const userInfo = inject('userInfo');
const updateUserName = inject('updateUserName');
const emits = defineEmits({
  // 没有校验
  click: null,
  // 校验 changeTitle 事件
  changeTitle: (title) => {
    if (title) {
      console.log('title', title);
      return true;
    } else {
      console.warn('title is need!');
      return false;
    }
  },
});
const changeTitle = (title: string) => {
  emits('changeTitle', title);
};
const a = ref(2);
const b = ref(2);
const defaultSlotProps = reactive({
  title: '这是子组件中默认插槽提供的title',
  content: '这是子组件中默认插槽提供的Content',
});
const sum = () => {
  return a.value + b.value;
};
// 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  a,
  b,
  sum,
});
</script>
<template>
  <div @click="changeTitle('')">{{ props.title }}</div>
  <slot :title="defaultSlotProps.title" :content="defaultSlotProps.content"
    >这是子组件默认插槽里面的内容</slot
  >
  <slot
    name="header"
    :title="defaultSlotProps.title"
    :content="defaultSlotProps.content"
  ></slot>
  <slot name="content"></slot>
  <div>{{ userInfo.name }}</div>
  <div>{{ userInfo.age }}</div>
  <button @click="updateUserName('lizhixiang1')">点击更改provide数据</button>
</template>
