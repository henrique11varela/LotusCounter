import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { renderer } from "./three/renderer";

@Component({
  selector: 'app-three-test',
  templateUrl: './three-test.component.html',
  styleUrls: ['./three-test.component.scss']
})
export class ThreeTestComponent implements AfterViewInit {
  @ViewChild('three') canvas!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.canvas.nativeElement.appendChild(renderer.domElement)
  }
}
