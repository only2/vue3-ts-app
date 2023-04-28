<template>
  <div :class="{ active: isActive, 'text-danger': hasError }"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isActive = ref(true);
const hasError = ref(false);
</script>

<style lang="scss" scoped></style>
