<template>
  <div>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <span>firstName: {{ firstName }} -- lastName: {{ lastName }}</span>
    <span>fullName: {{ fullName }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
const author = reactive({
  name: 'John',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
  ],
});
const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});
fullName.value = 'li zhixiang';
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No';
});
</script>

<style lang="scss" scoped></style>
