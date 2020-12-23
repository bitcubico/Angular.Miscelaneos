import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') colorResalto: string;

  constructor( private _elRef: ElementRef ) { console.log('Directiva de resalto') }

  @HostListener('mouseenter') mouseIn() {
    this.resaltar(this.colorResalto);
  }

  @HostListener('mouseleave') mouseOut() {
    this.resaltar(null);
  }

  private resaltar(color: string = 'yellow') {
    this._elRef.nativeElement.style.backgroundColor = color;
  }

}
