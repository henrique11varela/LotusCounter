<template>
  <button v-if="!props.to">
    <slot></slot>
  </button>
  <RouterLink v-else :to="props.to" class="router-link">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import type { DefineProps } from 'vue'
import { RouterLink } from 'vue-router'
type Prop = {
  to?: {
    name: string
  }
}
const props: DefineProps<Prop, never> = defineProps<Prop>()
</script>

<style scoped>
button,
.router-link {
  border: none;
  background-color: var(--primary);
  color: var(--light);
  padding: 0.7em;
  border-radius: 0.5em;
  font-weight: 700;
  font-size: 1.1em;
  font-weight: 700;
  font-size: 1.1em;
  text-align: center;
  text-decoration: none;
}
</style>
