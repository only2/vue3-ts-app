<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import testChild from './testChild.vue';
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const inputRef = ref<HTMLInputElement | null>(null);
const child = ref(null);
const title = ref('123123123');
const changeTitle = () => {
  title.value = '456456';
};
watchEffect(() => {
  if (inputRef.value) {
    inputRef.value.focus();
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
});
onMounted(() => {
  // child.value 是 <Child /> 组件的实例
  console.log(child.value);
});
</script>

<template>
  <input ref="inputRef" />
  <testChild ref="child" :title="title" @change-title="changeTitle"></testChild>
</template>
