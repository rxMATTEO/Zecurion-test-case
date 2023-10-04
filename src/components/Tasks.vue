<script setup>
defineProps({
  tasks: Array,
  dates: Array,
  statuses: Array,
});
</script>

<template>
<div>
  <div class="tasks">
    <div class="header">
      <p>Задачи/даты</p>
    </div>
    <div class="list">
      <div v-for="item in tasks" :key="item">
        <input type="text" v-model="item.value" />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.tasks {
  border: var(--border);
  display: flex;
  flex-direction: column;
  .header {
    padding: 0 40px;
    color: var(--text-secondary);
    border-bottom: 2px solid lightgray;
  }
  .list {
    padding: 5px 40px;
  }
}
</style>