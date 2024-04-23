import { Component } from '@angular/core';

@Component({
  selector: 'c-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent {
public name: string = 'Henrique Varela';
public link: string = 'https://github.com/henrique11varela';
}
