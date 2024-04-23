import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor() { }

  public async getCardById(id: string) {
    const res = await fetch(`https://api.scryfall.com/cards/${id}`)
    const data = await res.json()
    return new Card(data)
  }
}
