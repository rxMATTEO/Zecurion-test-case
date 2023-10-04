<script setup>
import CollectionInput from "@/components/CollectionInput.vue";
import {ref, watch} from "vue";

const tasks = ref([]);
const dates = ref([]);
const statuses = ref([]);

watch(tasks.value, (oldValue, newValue) => {
});
</script>

<template>
  <div class="collections">
    <CollectionInput @update:value="(newValue) => tasks = newValue" :value="tasks" placeholder="Введите значение tasks" />
    <CollectionInput @update:value="(newValue) => dates = newValue" :value="dates" placeholder="Введите значение dates" />
    <CollectionInput @update:value="(newValue) => statuses = newValue" :value="statuses" placeholder="Введите значение statuses" />
  </div>
</template>

<style scoped>
.collections {
  display: flex;
  gap: 20px;
}
</style>
