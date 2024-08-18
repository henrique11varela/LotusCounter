<template>
  <main data-cy="track-life-menu-page">
    <div class="container">
      <MultiSelectButtonElement :options="lifeOptions" v-model="lifeSelected"></MultiSelectButtonElement>
      <MultiSelectButtonElement :options="playersOptions" v-model="playersSelected"></MultiSelectButtonElement>
      <ButtonElement @click="startGame">Start</ButtonElement>
      <ButtonElement @click="continueGame">Continue</ButtonElement>
    </div>
  </main>
</template>

<script setup lang="ts">
import ButtonElement from '@/components/shared/ButtonElement.vue'
import MultiSelectButtonElement from '@/components/shared/MultiSelectButtonElement.vue'
import router from "../router";
import { usePlayersStore } from '../stores/players'
import { ref, type Ref } from 'vue'

const playersStore = usePlayersStore()

const lifeOptions = [
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '30', value: 30 },
  { label: '40', value: 40 }
]
const playersOptions = [
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 }
]
const lifeSelected: Ref = ref(20)
const playersSelected: Ref = ref(2)

async function startGame() {
  playersStore.startGame(playersSelected.value, lifeSelected.value)
  await router.push({ name: 'trackLife' })
}

async function continueGame() {
  playersStore.continueGame()
  await router.push({ name: 'trackLife' })
}

</script>

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

.container>* {
  width: 100%;
}
</style>
