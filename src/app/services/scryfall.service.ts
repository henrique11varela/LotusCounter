import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

function cardParse(cardObject: any) {
  return new Card(cardObject.name, cardObject.image_uris.normal)
}

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor() { }

  async getCardById(id: string) {
    id = '56ebc372-aabd-4174-a943-c7bf59e5028d'
    const res = await fetch(`https://api.scryfall.com/cards/${id}`)
    const data = await res.json()
    return cardParse(data)
  }
}
