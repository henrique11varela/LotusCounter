<template>
  <div class="multi-select-button">
    <button
      v-for="option in props.options"
      :key="option.value"
      @click="select(option.value)"
      :class="{ selected: model == option.value }"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineModel, type DefineProps, type ModelRef } from 'vue'
type Prop = {
  options: {
    label: string
    value: number | string
  }[]
}
const props: DefineProps<Prop, never> = defineProps<Prop>()
let model: ModelRef<number | string | undefined, string> = defineModel<number | string, string>()

function select(opt: number | string) {
  model.value = opt
}
</script>

<style scoped>
.multi-select-button {
  border-radius: 0.5em;
  overflow: hidden;
  display: flex;
}

button {
  flex-grow: 1;
  border: none;
  background-color: var(--primary);
  color: var(--light);
  padding: 0.7em;
  font-weight: 700;
  font-size: 1.1em;
  font-weight: 700;
  font-size: 1.1em;
  text-align: center;
  text-decoration: none;
}

button:not(:first-child) {
    border-left: 1px solid var(--light);
}

.selected {
  background-color: var(--light);
  color: var(--primary);
}
</style>
