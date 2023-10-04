<script setup>
defineProps({
  tasks: Array,
  dates: Array,
  statuses: Array,
});
</script>

<template>
<table class="tasks" v-if="tasks.length">
  <tr>
    <td class="header">
      <span>Задачи/даты</span>
    </td>
  </tr>
  <tr class="list" v-for="item in tasks" :key="item">
    <td class="list-item">
      <input type="text" v-model="item.value" />
    </td>
  </tr>
</table>
</template>

<style scoped>
.tasks {
  border: var(--border);
  .header {
    text-align: center;
    color: var(--text-secondary);
    border-bottom: 2px solid lightgray;
  }
  .list {
    .list-item {
      padding: 5px 40px;
    }
  }
}
</style>