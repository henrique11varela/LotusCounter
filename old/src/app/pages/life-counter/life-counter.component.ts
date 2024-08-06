import { Component } from '@angular/core';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-life-counter',
  templateUrl: './life-counter.component.html',
  styleUrls: ['./life-counter.component.scss']
})
export class LifeCounterComponent {
  public feedtape: string[][] = [
    ['90deg'],
    ['180deg', '0deg'],
    ['90deg', '-90deg', '0deg'],
    ['90deg', '-90deg', '90deg', '-90deg'],
    ['90deg', '-90deg', '90deg', '-90deg', '0deg'],
    ['90deg', '-90deg', '90deg', '-90deg', '90deg', '-90deg'],
  ]
  constructor(public playersService: PlayersService) { }
}
