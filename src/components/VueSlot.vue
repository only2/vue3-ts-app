<template>
  <div>
    <testChild>
      <template #default="{ title, content }">
        父组件传递的默认的内容{{ title }}{{ content }}
      </template>
      <template #header="headerProps">
        父组件传递给子组件头部插槽的内容 {{ headerProps.title }}
        {{ headerProps.content }}</template
      >
    </testChild>
  </div>
</template>

<script setup lang="ts">
import testChild from './testChild.vue';
</script>

<style scoped></style>
