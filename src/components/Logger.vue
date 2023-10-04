<script setup>
import { useLogStore } from '@/stores/logStore';
import { storeToRefs } from 'pinia';

const loggerStore = useLogStore();
const { logs } = storeToRefs(loggerStore);
</script>

<template>
<div class="logger">
  <div v-for="log in logs" :key="log.id" class="log">
    <span>{{ log.id }}</span>
    <span>{{ log.date.value }}</span>
    <span>{{ log.task.value }}</span>
    <span>{{ log.status }}</span>
    <span @click="loggerStore.removeLog(log.id)" class="remove">X</span>
  </div>
</div>
</template>

<style scoped>
.logger {
  border: var(--border);
  width: 25%;
  .log {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
}
</style>