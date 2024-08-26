<template>
  <div class="player">
    <p>{{ player.life }} - {{ player.poison }}</p>
    <button @click="lifePlus(player)">+</button>
    <button @click="lifeMinus(player)">-</button>
    <button @click="poisonPlus(player)">+</button>
    <button @click="poisonMinus(player)">-</button>
  </div>
</template>

<script setup lang="ts">
import { type DefineProps } from 'vue'
import { Player } from '../../assets/typing/Player'
import { usePlayersStore } from "../../stores/players";

type Prop = {
  player: Player
}
const props: DefineProps<Prop, never> = defineProps<Prop>()

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

<style scoped>
.player {
  border: 1px solid red;
}
</style>