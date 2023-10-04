<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  statuses: Array,
});

const isStatusesEmpty = computed(() => props.statuses.length === 0);
const isClicked = ref(false);
const emptyMessage = 'Список пуст';

function switchStatus() {
  isClicked.value = true;

}

const selectedStatus = ref(props.statuses[0].value);

watch(selectedStatus, () => {
  console.log(selectedStatus.value);
});
</script>

<template>
  <div>
    <div v-if="isStatusesEmpty">
      {{ emptyMessage }}
    </div>
    <div v-else-if="!isClicked" @click="switchStatus">
      +
    </div>
    <div v-else>
      <select v-model="selectedStatus">
        <option v-for="status in statuses" :key="status">
          {{ status.value }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>