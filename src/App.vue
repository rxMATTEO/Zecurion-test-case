<script setup>
import CollectionInput from "@/components/CollectionInput.vue";
import Tasks from "@/components/Tasks.vue";
import {ref} from "vue";
import Logger from "@/components/Logger.vue";

const tasks = ref([]);
const dates = ref([]);
const statuses = ref([]);
</script>

<template>
  <div class="collections">
    <CollectionInput @update:value="(newValue) => tasks = newValue" :value="tasks" placeholder="Введите значение tasks" />
    <CollectionInput @update:value="(newValue) => dates = newValue" :value="dates" placeholder="Введите значение dates" />
    <CollectionInput @update:value="(newValue) => statuses = newValue" :value="statuses" placeholder="Введите значение statuses" />
    <Logger />
    <Tasks :tasks="tasks" :dates="dates" :statuses="statuses" />
  </div>
</template>

<style scoped>
.collections {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;
}
</style>
