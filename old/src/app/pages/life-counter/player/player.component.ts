import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() public id: number = -1;
  @Input() public player: Player = new Player();
  public bgcolor: string = 'black';
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.bgcolor = `rgb(${200 / (this.id * 2)},${200 / (this.id * 2)},${200 / (this.id * 2)})`
  }

  minusLife(){
    this.player.minusLife()
    this.playersService.saveGame()
  }

  plusLife(){
    this.player.plusLife()
    this.playersService.saveGame()
  }
}
