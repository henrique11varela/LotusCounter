import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { PlayersService } from '../services/players.service';

@Directive({
  selector: '[appInvertAspectRatio]'
})
export class InvertAspectRatioDirective implements AfterViewInit {

  @Input() public appInvertAspectRatio: string = '';

  constructor(private elementRef: ElementRef, private playersService: PlayersService) { }

  ngAfterViewInit(): void {
    if (this.checkInvert()) {
      if (this.playersService.numberOfPlayers == 3 || this.playersService.numberOfPlayers == 4) {
        this.elementRef.nativeElement.style.width = (window.innerHeight / 2) + 1 + 'px'
      }
      else if (this.playersService.numberOfPlayers == 5 || this.playersService.numberOfPlayers == 6) {
        this.elementRef.nativeElement.style.width = (window.innerHeight / 3) + 1 + 'px'
      }
      this.elementRef.nativeElement.style.height = (window.innerWidth / 2) + 1 + 'px'
      this.elementRef.nativeElement.style.left = (this.elementRef.nativeElement.offsetHeight - this.elementRef.nativeElement.offsetWidth) / 2 + 'px'
      this.elementRef.nativeElement.style.top = (this.elementRef.nativeElement.offsetWidth - this.elementRef.nativeElement.offsetHeight) / 2 + 'px'
    }
  }

  checkInvert() {
    return this.appInvertAspectRatio == '90deg' || this.appInvertAspectRatio == '-90deg'
  }
}