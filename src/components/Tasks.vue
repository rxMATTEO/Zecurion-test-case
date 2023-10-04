<script setup>
import StatusSwitch from '@/components/StatusSwitch.vue';

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
    <td v-for="date in dates" :key="date.value" class="table-data">
      <span>{{ date.value }}</span>
    </td>
  </tr>
  <tr class="list" v-for="task in tasks" :key="task.value">
    <td class="table-data">
      <input type="text" v-model="task.value" />
    </td>
    <td v-for="date in dates" :key="date.value" class="table-data">
      <StatusSwitch :date="date" :task="task" :statuses="statuses" />
    </td>
  </tr>
</table>
</template>

<style scoped>
table, tr, td {
  border: var(--border);
}
.tasks {
  .header {
    text-align: center;
    color: var(--text-secondary);
    border-bottom: 2px solid lightgray;
  }
  .list {
  }
  .table-data {
    padding: 5px 40px;
  }
}
</style>