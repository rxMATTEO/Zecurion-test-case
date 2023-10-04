<script setup>
import {computed} from "vue";

const props = defineProps({
  statuses: Array,
});

const isStatusesEmpty = computed(() => props.statuses.length === 0);
const emptyMessage = 'Список пуст';
</script>

<template>
  <div>
    <div v-if="isStatusesEmpty">
      {{ emptyMessage }}
    </div>
    <div v-else>
      +
    </div>
  </div>
</template>

<style scoped>

</style>