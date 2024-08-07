<template>
  <main>
    <router-link :to="{ name: 'about' }">
      <ButtonElement>About</ButtonElement>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import ButtonElement from '@/components/shared/ButtonElement.vue'
</script>
