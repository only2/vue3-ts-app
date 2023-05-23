<template>
  <div>
    <div>
      初始用户信息{{ userStore.name }} -- {{ userStore.money }} --
      {{ userStore.skill.join('-') }}
    </div>
    <div>
      从getter中获取的信息{{ userStore.doubleMoney }} --
      {{ userStore.doubleCountPlusOne }} -- {{ friendInfo.name }}
    </div>
    <div>
      <button @click="updateMoney">点击增加money</button>
    </div>
    <div>
      <button @click="updateUserInfo">点击修改个人信息</button>
    </div>
    <div>
      <button @click="addSkill">点击增加技能</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../store/user';
const userStore = useUserStore();
userStore.$onAction(
  ({
    name, // action 的名字
    store, // store 实例
    args, // 调用这个 action 的参数
    after, // 在这个 action 执行完毕之后，执行这个函数
    onError, // 在这个 action 抛出异常的时候，执行这个函数
  }) => {
    // 记录开始的时间变量
    const startTime = Date.now();
    // 这将在 `store` 上的操作执行之前触发
    console.log(`Start "${name}" with params [${args.join(', ')}].`);

    // 如果 action 成功并且完全运行后，after 将触发。
    // 它将等待任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`,
      );
    });
    // 如果 action 抛出或返回 Promise.reject ，onError 将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`,
      );
    });
  },
);
const updateMoney = () => {
  userStore.updateMoney();
};
const updateUserInfo = () => {
  userStore.$patch({
    money: userStore.money++,
    name: 'lizhixiang',
  });
};
const addSkill = () => {
  userStore.$patch((state) => {
    state.skill.push('vue');
  });
};
const friendInfo = userStore.getFriendByName('大鹏') || { name: '' };
userStore.getUserInfo();
userStore.$subscribe((mutation, state) => {
  console.log(mutation, state);
});
</script>

<style scoped></style>
