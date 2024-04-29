import { Component } from '@angular/core';
import { ScryfallService } from 'src/app/services/scryfall.service';
import { Card } from "../../models/card.model";

interface CardSearch {
  name: string
}

@Component({
  selector: 'app-fetch-test',
  templateUrl: './fetch-test.component.html',
  styleUrls: ['./fetch-test.component.scss']
})
export class FetchTestComponent {

  public searchParams: CardSearch = {
    name: '',
  }

  public testOutput: any;

  constructor(private scryfallService: ScryfallService) { }

  async search(){
    const res = await fetch('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3')
    const json = await res.json()
    const arrayOfObj = json.data as []
    this.testOutput = arrayOfObj.map(item => new Card(item))
  }

}
