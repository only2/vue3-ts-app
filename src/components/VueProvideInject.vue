<template>
  <div>
    <testChild></testChild>
  </div>
</template>

<script setup lang="ts">
import testChild from './testChild.vue';
import { provide, reactive, readonly } from 'vue';
interface UserInfo {
  name: string;
  age: number;
}
const userInfo: UserInfo = reactive({ name: 'lizhixiang', age: 28 });

const updateUserName = (newUserName: string) => {
  console.log(66666);
  userInfo.name = newUserName;
};
provide('userInfo', readonly(userInfo));
provide('updateUserName', updateUserName);
</script>

<style scoped></style>
