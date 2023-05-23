import { defineStore } from 'pinia';
const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'async-lizhixiang' });
    }, 2000);
  });
};
export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
      money: 100,
      skill: ['html', 'css', 'js'],
      friends: [
        {
          name: '大鹏',
          phone: 123,
        },
        {
          name: '老板',
          phone: 456,
        },
      ],
    };
  },
  getters: {
    doubleMoney: (state) => {
      return state.money * 2;
    },
    /**
     * 返回计数器值乘以二加一。
     *
     * @returns {number}
     */
    doubleCountPlusOne() {
      // 自动完成 ✨
      return +this.doubleMoney + 1;
    },
    getFriendByName: (state) => {
      return (name: string) => {
        return state.friends.find((friend) => friend.name === name);
      };
    },
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
    updateMoney() {
      this.money++;
    },
    getUserInfo() {
      getUserInfo()
        .then((userInfo: any) => {
          this.name = userInfo.name;
        })
        .catch((error) => {
          console.log();
        });
    },
  },
});
