<template>
  <main data-cy="track-life-page">
    <h1>Track Life</h1>
    <div v-for="(player, index) in playersStore.players" :key="index">
      <p>{{ player.life }} - {{ player.poison }}</p>
      <button @click="lifePlus(player)">+</button>
      <button @click="lifeMinus(player)">-</button>
      <button @click="poisonPlus(player)">+</button>
      <button @click="poisonMinus(player)">-</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Player } from "@/assets/typing/Player";
import { usePlayersStore } from "../stores/players";

const playersStore = usePlayersStore()

function lifePlus(player: Player) {
  player.lifePlus()
  playersStore.savePlayers()
}

function lifeMinus(player: Player) {
  player.lifeMinus()
  playersStore.savePlayers()
}

function poisonPlus(player: Player) {
  player.poisonPlus()
  playersStore.savePlayers()
}

function poisonMinus(player: Player) {
  player.poisonMinus()
  playersStore.savePlayers()
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
