<template>
  <div>
    <RouterView></RouterView>
    <ButtonElement :to="{ name: 'menu' }" class="menu-icon" data-cy="menu-button">
      <HamburgerIcon></HamburgerIcon>
    </ButtonElement>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ButtonElement from '@/components/shared/ButtonElement.vue'
import HamburgerIcon from '@/components/shared/icons/HamburgerIcon.vue'
</script>

<style scoped>
.menu-icon {
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 0.5em;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.menu-icon > * {
  height: 1em;
  width: 1em;
}
</style>
