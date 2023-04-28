<script setup lang="ts">
import { ref, reactive, shallowReactive, isReactive } from 'vue';
defineProps<{ msg: string }>();
// 深层响应式
const state = reactive({ count: 0 });
// 浅层响应式
const shallowState = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});
// 更改状态自身的属性是响应式的
shallowState.foo++;

// ...但下层嵌套对象不会被转为响应式
isReactive(shallowState.nested); // false

// 不是响应式的
shallowState.nested.bar++;
function increment() {
  state.count++;
}
// 响应式对象解构或者赋值给变量后 赋值或者解构的变量不具有响应式
let n = state.count;
n++;
// 单值响应式
const count = ref(0);
const objectRef = ref({ count: 0 });
// 这是响应式的替换
objectRef.value = { count: 1 };
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ objectRef.count }}</h1>
  <button @click="increment">{{ state.count }}</button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
