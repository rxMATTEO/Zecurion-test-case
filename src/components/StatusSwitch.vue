<script setup>
import { computed, ref } from 'vue';
import { useLogStore } from '@/stores/logStore';
import useId from '@/composables/useId';

const props = defineProps({
  statuses: Array,
  task: Object,
  date: Object,
});

const logStore = useLogStore();
const isStatusesEmpty = computed(() => props.statuses.length === 0);
const isClicked = ref(false);
const emptyMessage = 'Список пуст';

const status = ref(props.statuses[0]?.value);
const selectedStatus = computed({
  get: () => isStatusesEmpty.value ? null: props.statuses[0].value,
  set: (value) => {
    status.value = value;
    return value;
  }
});

function switchStatus() {
  isClicked.value = true;
  if(!status.value){
    status.value = props.statuses[0].value;
  }
  console.log(status.value);
  logStore.addLog({
    task: props.task,
    date: props.date,
    status: status,
    id: useId(),
  });
}
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