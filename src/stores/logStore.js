import {defineStore} from "pinia";

export const useLogStore = defineStore('logStore', {
  state: () => {
    return {
      logs: [],
    }
  },
  getters: {
  },
  actions: {
  }
});