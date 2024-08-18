import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { Player, type playerConfig } from "../assets/typing/Player";

const LOCALSTORAGE_KEY: string = 'players'

export const usePlayersStore = defineStore(LOCALSTORAGE_KEY, () => {
  const players: Ref<Player[]> = ref<Player[]>([new Player({ life: 20 }), new Player({ life: 20 })])

  function startGame(numPlayers: number, maxLife: number): void {
    players.value = []
    for (let i = 0; i < numPlayers; i++) {
      players.value.push(new Player({ life: maxLife }))
    }
    savePlayers()
  }

  function continueGame(): void {
    const local = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[{"life":20},{"life":20}]')
    players.value = local.map((obj: playerConfig) => new Player(obj))
    savePlayers()
  }
  
  function savePlayers(): void {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(players.value))
  }

  continueGame()
  return { players, startGame, continueGame, savePlayers }
})
