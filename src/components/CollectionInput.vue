<script setup>
import {ref} from "vue";
import useId from "@/composables/useId";

const props = defineProps({
  placeholder: String,
  value: Array,
});
const emit = defineEmits(['update:value']);
const inputValue = ref('');

function removeItem(id) {
 emit('update:value', props.value.filter(item => item.id !== id));
}

function pushItem(value) {
  props.value.push({ value: value, id: useId() });
  emit('update:value', props.value);
}
</script>

<template>
<div class="collection">
  <form @submit.prevent="pushItem(inputValue)">
    <input type="text" :placeholder="placeholder" @input="inputValue = $event.target.value" />
    <button type="submit">Добавить</button>
  </form>

  <div class="item-list">
    <div v-for="item in value" :key="item" class="item">
      <span>{{ item.id }}</span>
      <span>{{ item.value }}</span>
      <span @click="removeItem(item.id)">X</span>
    </div>
  </div>
</div>
</template>

<style scoped>
.collection {
  border: var(--border);
  padding: 10px 40px;
  .item {
    display: flex;
    gap: 5px;
    align-content: center;
    justify-content: center;
  }
}
</style>