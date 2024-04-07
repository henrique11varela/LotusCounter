import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  public maxPlayerLife = 20;
  public numberOfPlayers: number = 0;
  public players: Player[] = [];

  constructor(private localstorageService: LocalstorageService) { 
    this.continueGame()
  }
  
  startGame() {
    this.players.length = 0 // clear player array
    for (let i = 0; i < this.numberOfPlayers; i++) { // populate player array
      this.players.push(new Player(this.maxPlayerLife))
    }
    this.localstorageService.setItem('players', JSON.stringify(this.players))
  }
  
  continueGame() {
    const tempPlayers: string = this.localstorageService.getItem('players') || ''
    if (tempPlayers.length) {
      /** reads local storage, parses to JSON and instantiates every obj as a Player */
      this.players = (JSON.parse(tempPlayers) as Player[]).map((item)=> {
        const p: Player = new Player(item.life)
        // p.life = item.life
        return p
      })
      this.numberOfPlayers = this.players.length
    }
  }
  
  saveGame() {
    this.localstorageService.setItem('players', JSON.stringify(this.players))
  }
}
