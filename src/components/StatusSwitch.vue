<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  statuses: Array,
});

const isStatusesEmpty = computed(() => props.statuses.length === 0);
const isClicked = ref(false);
const emptyMessage = 'Список пуст';
</script>

<template>
  <div>
    <div v-if="isStatusesEmpty">
      {{ emptyMessage }}
    </div>
    <div v-else-if="!isClicked" @click="isClicked = true">
      +
    </div>
    <div v-else>
      <select>
        <option v-for="status in statuses" :key="status">
          {{ status.value }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>