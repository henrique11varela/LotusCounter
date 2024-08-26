<template>
  <main data-cy="menu-page">
    <div class="container">
      <ButtonElement :to="{ name: 'trackLifeMenu' }">Track Life</ButtonElement>
      <ButtonElement :to="{ name: 'about' }">About2</ButtonElement>
    </div>
  </main>
</template>

<script setup lang="ts">
import ButtonElement from '@/components/shared/ButtonElement.vue'
</script>

<style scoped>
main {
  min-height: 100dvh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.container > * {
  width: 100%;
}
</style>
