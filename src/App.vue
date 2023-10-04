<script setup>
import CollectionInput from "@/components/CollectionInput.vue";
import {ref, watch} from "vue";

const tasks = ref([]);

watch(tasks.value, (oldValue, newValue) => {
  console.log(newValue);
});
</script>

<template>
  <div class="collections">
    <CollectionInput @update:value="(newValue) => tasks = newValue" :value="tasks" placeholder="Введите значение tasks" />
    <CollectionInput @update:value="(newValue) => tasks = newValue" :value="tasks" placeholder="Введите значение tasks" />
    <CollectionInput @update:value="(newValue) => tasks = newValue" :value="tasks" placeholder="Введите значение tasks" />
    <CollectionInput @update:value="(newValue) => tasks = newValue" :value="tasks" placeholder="Введите значение tasks" />
  </div>
</template>

<style scoped>
.collections {
  display: flex;
  gap: 100px;
}
</style>
