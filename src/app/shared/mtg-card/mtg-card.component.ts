import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-mtg-card',
  templateUrl: './mtg-card.component.html',
  styleUrls: ['./mtg-card.component.scss']
})
export class MtgCardComponent {
  @Input() public card!: Card;
}
