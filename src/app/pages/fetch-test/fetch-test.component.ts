import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ScryfallService } from 'src/app/services/scryfall.service';
import { Card } from "../../models/card.model";

@Component({
  selector: 'app-fetch-test',
  templateUrl: './fetch-test.component.html',
  styleUrls: ['./fetch-test.component.scss']
})
export class FetchTestComponent implements OnInit {

  public card: Card | null = null;

  constructor(public firebaseService: FirebaseService, private scryfallService: ScryfallService) { }

  async getCardById(id: string){
    this.card = await this.scryfallService.getCardById(id)
    
    console.log(this.card);
  }

  ngOnInit(): void {
    this.getCardById('')
  }
}
