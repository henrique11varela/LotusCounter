<template>
  <main data-cy="track-life-page" :class="`grid${playersStore.players.length}`">
    <div v-for="(player, index) in playersStore.players" :key="index" class="player" :id="`player${index + 1}`">
      <PlayerComponent :player="player"></PlayerComponent>
    </div>
  </main>
</template>

<script setup lang="ts">
import { usePlayersStore } from "../stores/players";
import PlayerComponent from "@/components/TrackLifeView/PlayerComponent.vue";

const playersStore = usePlayersStore()

</script>

<style scoped>
main {
  min-height: 100dvh;
  width: 100vw;
  display: grid;
}

#player1 {
  grid-area: player1;
}

#player2 {
  grid-area: player2;
}

#player3 {
  grid-area: player3;
}

#player4 {
  grid-area: player4;
}

#player5 {
  grid-area: player5;
}

#player6 {
  grid-area: player6;
}

.grid1 {
  grid-template-areas: "player1";
}

.grid2 {
  grid-template-areas: 
  "player1"
  "player2";
}

.grid3 {
  grid-template-areas: 
  "player1 player2"
  "player3 player3"
  ;
}

.grid4 {
  grid-template-areas: 
  "player1 player2"
  "player3 player4"
  ;
}

.grid5 {
  grid-template-areas:
  "player1 player2"
  "player3 player4"
  "player5 player5";
}

.grid6 {
  grid-template-areas: 
  "player1 player2"
  "player3 player4"
  "player5 player6";
}
</style>
