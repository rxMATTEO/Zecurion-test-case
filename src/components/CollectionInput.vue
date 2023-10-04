<script setup>
import {ref} from "vue";
import useId from "@/composables/useId";

defineProps({
  placeholder: String,
  value: Array,
});

defineEmits(['update:value']);
const inputValue = ref('');
</script>

<template>
<div class="collection">
  <form @submit.prevent="$emit('update:value', { value: inputValue, id: useId() })">
    <input type="text" :placeholder="placeholder" @input="inputValue = $event.target.value" />
    <button type="submit">Добавить</button>
  </form>

  <div class="item-list">
    <div v-for="item in value" :key="item" class="item">
      <span>{{ item.id }}</span>
      <span>{{ item.value }}</span>
      <span>X</span>
    </div>
  </div>
</div>
</template>

<style scoped>
.collection {
  border: 1px solid grey;
  padding: 10px 40px;
  .item {
    display: flex;
    gap: 5px;
    align-content: center;
    justify-content: center;
  }
}
</style>