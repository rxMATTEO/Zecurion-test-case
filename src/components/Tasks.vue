<script setup>
defineProps({
  tasks: Array,
  dates: Array,
  statuses: Array,
});
</script>

<template>
<table class="tasks">
  <tr>
    <td class="header">
      <p>Задачи/даты</p>
    </td>
  </tr>
  <tr class="list" v-for="item in tasks" :key="item">
    <td>
      <input type="text" v-model="item.value" />
    </td>
  </tr>
</table>
</template>

<style scoped>
.tasks {
  border: var(--border);
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