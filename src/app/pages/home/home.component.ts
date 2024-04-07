import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public playerNumberOptions: number[] = [2, 3, 4, 5, 6];
  public playerMaxLifeOptions: number[] = [20, 25, 30, 40];

  constructor(private router: Router, public playersService: PlayersService){}

  startGame(){
    // this.playersService.numberOfPlayers = numberOfPlayers
    this.playersService.startGame()
    this.router.navigate(['/counter'])
  }
  
  continueGame(){
    this.playersService.continueGame()
    this.router.navigate(['/counter'])
  }
}
