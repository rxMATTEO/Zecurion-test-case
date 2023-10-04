<script setup>
import StatusSwitch from "@/components/StatusSwitch.vue";

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
  <tr class="list" v-for="item in tasks" :key="item.value">
    <td class="table-data">
      <input type="text" v-model="item.value" />
    </td>
    <td v-for="date in dates" :key="date.value" class="table-data">
      <StatusSwitch :statuses="statuses" />
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