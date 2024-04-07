import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private _location: Location) { }
  back() {
    this._location.back()
  }
}
