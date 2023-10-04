import { defineStore } from 'pinia';

export const useLogStore = defineStore('logStore', {
  state: () => {
    return {
      logs: [],
    };
  },
  getters: {
  },
  actions: {
    addLog(log) {
      this.logs.push(log);
    },
    removeLog(id){
      this.logs = this.logs.filter(item => item.id !== id);
    }
  }
});