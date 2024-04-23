import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { ScryfallService } from 'src/app/services/scryfall.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public card!: Card;

  constructor(private route: ActivatedRoute, private scryfallService: ScryfallService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      this.card = await this.scryfallService.getCardById(params['id'])
    })
  }
}
