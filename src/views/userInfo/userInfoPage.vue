<template>
  <div>
    用户详情
    {{ route.params.id }}
  </div>
</template>

<script lang="ts">
import { watch, watchEffect } from 'vue';
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from 'vue-router';
export default {
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', to, from, next);
    next();
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    console.log('router', router);
    console.log('route', route.params);
    // 与 beforeRouteLeave 相同，无法访问 `this`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!',
      );
      // 取消导航并停留在同一页面上
      if (!answer) return false;
    });
    // 与 beforeRouteUpdate 相同，无法访问 `this`
    onBeforeRouteUpdate(async (to, from) => {
      //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
      if (to.params.id !== from.params.id) {
        console.log('路由参数改变了');
      }
    });
    watch(
      () => route.params.id,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
    );
    return {
      route,
    };
  },
};
</script>

<style scoped></style>
