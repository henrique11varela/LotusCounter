<template>
  <main data-cy="track-life-page">
    <h1>Track Life</h1>
  </main>
</template>

<script setup lang="ts"></script>

<style>
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
